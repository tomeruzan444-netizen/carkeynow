#!/usr/bin/env node
/**
 * שער התוכן: כל הבדיקות שרצות על טיוטה לפני שכותבים משהו לריפו.
 *
 * עד היום הבדיקות האלה נכתבו מחדש בכל עמוד, בתיקייה זמנית שנמחקת. כל
 * בדיקה כאן נולדה מכישלון אמיתי שמתועד ב-worklog, והשורה בסוגריים בכל
 * הודעה היא המקור.
 *
 * הרצה:  node scripts/content-gate.mjs <draft.json>
 *
 * מבנה הטיוטה:
 * {
 *   "slug": "קודן-לרכב-בעיר",
 *   "title": "...", "metaTitle": "...", "metaDesc": "...",
 *   "content": "<p>...</p>",
 *   "faqs": [["שאלה", "תשובה"], ...],
 *   "caseStudy": { "heading": "...", "body": "..." },   // אופציונלי
 *   "vars": ["abcCards", "abcProcess", "faqAbc"]        // אופציונלי
 * }
 */
import { readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/* ל-JSON.parse אין מצב לא קפדני, ו-wp-pages.ts מכיל CR גולמי בתוך
   מחרוזות התוכן. מברחים תווי בקרה, אבל רק בתוך מחרוזות, אחרת שוברים
   את מבנה ה-JSON עצמו. */
function escapeControl(src) {
  let out = '';
  let inStr = false;
  let esc = false;
  for (const ch of src) {
    if (inStr && !esc && ch.charCodeAt(0) < 0x20) {
      out += '\\u' + ch.charCodeAt(0).toString(16).padStart(4, '0');
      continue;
    }
    if (esc) esc = false;
    else if (ch === '\\' && inStr) esc = true;
    else if (ch === '"') inStr = !inStr;
    out += ch;
  }
  return out;
}

/* ── טעינת כל עמודי האתר ────────────────────────────────────────────── */
function loadPages() {
  const pages = {};
  const gen = readFileSync(resolve(ROOT, 'lib/wp-pages.ts'), 'utf8');
  const marker = 'const GENERATED_PAGES: WpPage[] = ';
  const st = gen.indexOf(marker) + marker.length;
  const en = gen.indexOf('\n];', st);
  for (const p of JSON.parse(escapeControl(gen.slice(st, en + 2)))) pages[p.slug] = p;

  const man = readFileSync(resolve(ROOT, 'lib/manual-pages.ts'), 'utf8');
  const BT = String.fromCharCode(96);
  const re = /slug: '([^']+)',\s*\n\s*title:/g;
  let m;
  while ((m = re.exec(man))) {
    const ci = man.indexOf('content: ' + BT, m.index) + ('content: ' + BT).length;
    const ce = man.indexOf(BT + ',\n    metaTitle', ci);
    const block = man.slice(m.index, ce);
    const field = (name) => {
      const g = block.match(new RegExp(name + ": '([^']*)'"))
        || block.match(new RegExp(name + ': "([^"]*)"'));
      return g ? g[1] : '';
    };
    pages[m[1]] = {
      slug: m[1], content: man.slice(ci, ce),
      title: field('title'), metaTitle: field('metaTitle'), metaDesc: field('metaDesc'),
    };
  }
  return pages;
}

const plain = (html) => html
  .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/g, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();

const headings = (html) => [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)]
  .map((m) => m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());

/* 3-word shingles, כפי שנמדד מאז 2026-09-28 */
function shingles(text) {
  const w = text.split(' ');
  const s = new Set();
  for (let i = 0; i + 2 < w.length; i++) s.add(w.slice(i, i + 3).join(' '));
  return s;
}

function jaccard(a, b) {
  let inter = 0;
  for (const x of a) if (b.has(x)) inter++;
  return inter / (a.size + b.size - inter || 1);
}

/* מחיר הוא התא האחרון בשורה. התא השני הוא עמודת משך העבודה בעמודים
   החדשים, וקריאה ממנו דיווחה "מפתח מכני 15-25 שקל" (2026-10-25). */
function tablePrices(html) {
  const out = {};
  for (const row of html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)) {
    const cells = [...row[1].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/g)]
      .map((c) => c[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
    if (cells.length < 2) continue;
    const name = cells[0];
    if (!name || /\d[\d,]*\s*-\s*\d/.test(name)) continue;
    for (let i = cells.length - 1; i >= 1; i--) {
      const p = cells[i].match(/(\d[\d,]*)\s*-\s*(\d[\d,]*)\s*(?:&#8362;|₪)/);
      if (p) { out[name] = `${p[1]}-${p[2]}`; break; }
    }
  }
  return out;
}

/* ── הרצה ───────────────────────────────────────────────────────────── */
const draftPath = process.argv[2];
if (!draftPath) {
  console.error('שימוש: node scripts/content-gate.mjs <draft.json>');
  process.exit(2);
}
const d = JSON.parse(readFileSync(draftPath, 'utf8'));
const PAGES = loadPages();
const checks = [];
const ck = (name, ok, detail = '') => checks.push({ name, ok: !!ok, detail });
/* אזהרה מדווחת ואינה חוסמת. משמשת למקום שבו הממצא אמיתי אבל ההכרעה
   עליו פתוחה ברמת האתר, כמו שתי משפחות התמחור בממצא 32. */
const warn = (name, ok, detail = '') => checks.push({ name, ok: !!ok, detail, soft: true });

const content = d.content || '';
const text = plain(content);
const words = text.split(' ').filter(Boolean).length;
const paras = [...content.matchAll(/<p>([\s\S]*?)<\/p>/g)].map((m) => m[1]);
const firstP = paras[0] || '';
const kw = (d.metaTitle || d.title || '').split(/\s[-|]\s/)[0].trim();

/* 1. שלושת המינימומים, CONTENT_GUIDE סעיף 18 */
ck('מינימום 700 מילים', words >= 700, `${words}`);
ck('מילת המפתח מינימום 5 פעמים', text.split(kw).length - 1 >= 5,
  `"${kw}" x${text.split(kw).length - 1}`);
ck('מילת המפתח בפסקה הראשונה', firstP.includes(kw));
ck('מינימום 10 שאלות ותשובות', (d.faqs || []).length >= 10, `${(d.faqs || []).length}`);

/* 2. כללי כתיבה */
ck('אין מקף ארוך או בינוני', !/[\u2013\u2014]/.test(content));
ck('אין תחביר markdown שדלף', !/\*\*[^*]+\*\*/.test(content));
ck('אין backtick או תבנית', !content.includes('`') && !content.includes('${'));
const sing = content.match(/(?<![א-ת])(אני |ראיתי|עבדתי|הגעתי|גיליתי)/g);
ck('גוף ראשון רבים בלבד', !sing, sing ? [...new Set(sing)].join(', ') : 'תקין');
ck('אין מספר טלפון בגוף התוכן', !/0\d{1,2}-?\d{7}|tel:/.test(content));
ck('אין קישור בפסקה הראשונה', !firstP.includes('<a '));

/* 3. קישורים, סעיף 14 */
const links = [...content.matchAll(/href="\/([^"#?]+?)\/?"/g)].map((m) => m[1]);
ck('3 עד 5 קישורים פנימיים', links.length >= 3 && links.length <= 5,
  `${links.length}: ${links.join(', ')}`);
ck('אין יעד כפול', links.length === new Set(links).size);
const missing = links.filter((l) => !PAGES[l]);
ck('כל היעדים קיימים', !missing.length, missing.join(', ') || 'הכול קיים');
const family = d.slug.replace(/-ב[^-]+$/, '');
const city2city = links.filter((l) => l !== d.slug && l.startsWith(family + '-ב'));
ck('אין קישור בין עיר לעיר באותו שירות', !city2city.length,
  city2city.join(', ') || 'אין');
const anchors = [...content.matchAll(/<a [^>]*>([\s\S]*?)<\/a>/g)]
  .map((m) => m[1].replace(/<[^>]+>/g, '').trim());
const generic = anchors.filter((a) => ['לחצו כאן', 'כאן', 'קראו עוד', 'למידע נוסף'].includes(a));
ck('אין אנקור גנרי', !generic.length, generic.join(', ') || 'תקין');

/* 4. כותרות */
const h2 = headings(content);
ck('5 עד 8 כותרות H2', h2.length >= 5 && h2.length <= 8, `${h2.length}`);
ck('אין כותרת כפולה בתוך העמוד', h2.length === new Set(h2).size);
const siteH2 = new Map();
for (const [slug, p] of Object.entries(PAGES)) {
  for (const h of headings(p.content || '')) if (!siteH2.has(h)) siteH2.set(h, slug);
}
const clash = h2.filter((h) => siteH2.has(h));
ck('אין H2 שכבר קיים באתר', !clash.length,
  clash.map((h) => `${h} = ${siteH2.get(h)}`).join('; ') || 'כולן חדשות');
const city = (d.slug.match(/-ב(.+)$/) || [, ''])[1].replace(/-/g, ' ');
const BANNED = ['מה מייחד את השירות שלנו', `שכונות ${city} שאנחנו מגיעים אליהן`,
  'שאלות נפוצות', 'סיפור מהשטח', 'לאן אנחנו מגיעים', 'סוגי מפתחות שאנחנו משכפלים',
  'למה לבחור במפתח עכשיו', 'צרו קשר עכשיו', 'תהליך העבודה שלנו'];
const banned = h2.filter((h) => BANNED.some((b) => b && h.includes(b)));
ck('אין כותרת מהרשימה התבניתית, סעיף 17', !banned.length, banned.join(', ') || 'תקין');
ck('אחרי כל H2 יש פסקה',
  (content.match(/<\/h2>\s*<p>/g) || []).length === h2.length);

/* 5. שאלות ותשובות */
const faqs = d.faqs || [];
const short = faqs.filter(([, a]) => a.split(' ').length < 25);
ck('לכל תשובה 25+ מילים', !short.length, `${short.length} קצרות`);
const qs = faqs.map(([q]) => q).join(' ');
ck('יש שאלת מחיר ושאלת זמן', /כמה עולה|מחיר/.test(qs) && /כמה זמן|זמן הגעה/.test(qs));
const faqSrc = readFileSync(resolve(ROOT, 'lib/faqData.ts'), 'utf8');
const existing = new Set([...faqSrc.matchAll(/q:\s*(["'])([\s\S]*?)\1/g)]
  .map((m) => m[2].replace(/\s+/g, ' ').trim()));
const dupQ = faqs.map(([q]) => q).filter((q) => existing.has(q));
ck('אין שאלה שקיימת מילה במילה', !dupQ.length, dupQ.slice(0, 2).join(' | ') || 'כולן חדשות');

/* 6. מחירים: עקביות מול כל האתר (מועמד 31, תפס ב-2026-10-25) */
ck('מחירים בשקלים', (content.match(/&#8362;|₪/g) || []).length >= 3);
const siteByName = new Map();
for (const p of Object.values(PAGES)) {
  for (const [name, range] of Object.entries(tablePrices(p.content || ''))) {
    if (!siteByName.has(name)) siteByName.set(name, new Map());
    const c = siteByName.get(name);
    c.set(range, (c.get(range) || 0) + 1);
  }
}
const mine = tablePrices(content);
const priceIssues = [];
for (const [name, range] of Object.entries(mine)) {
  const c = siteByName.get(name);
  if (!c) continue;
  const dominant = [...c.entries()].sort((a, b) => b[1] - a[1])[0];
  if (dominant && dominant[0] !== range) {
    priceIssues.push(`${name}: ${range} מול ${dominant[0]} ב-${dominant[1]} עמודים`);
  }
}
warn('עקביות מחירים מול האתר', !priceIssues.length,
  priceIssues.join('; ') || 'כל שורה תואמת או חדשה');

/* 7. ייחודיות */
const mineSh = shingles(text);
let worst = [0, ''];
for (const [slug, p] of Object.entries(PAGES)) {
  const j = jaccard(mineSh, shingles(plain(p.content || '')));
  if (j > worst[0]) worst = [j, slug];
}
ck('תבניתיות מתחת ל-0.10', worst[0] < 0.10, `מקסימום ${worst[0].toFixed(3)} מול ${worst[1]}`);

/* 8. הסיפור, אם יש */
if (d.caseStudy) {
  const b = d.caseStudy.body || '';
  ck('סיפור 120+ מילים', b.split(' ').length >= 120, `${b.split(' ').length}`);
  ck('בסיפור: רכב, שנה, מקום, מחיר, דקות',
    [/[A-Za-zא-ת]{3,}/, /20\d\d/, /ב[א-ת]{3,}/, /\d+ שקל/, /\d+ דקות/]
      .every((re) => re.test(b)));
}

/* 9. התנגשויות לפני כתיבה (מועמד 26: tפס km, ph, gt) */
ck('הסלאג עדיין לא קיים', !PAGES[d.slug], d.slug);
if (d.id) {
  const man = readFileSync(resolve(ROOT, 'lib/manual-pages.ts'), 'utf8');
  ck('ה-id פנוי', !man.includes(`id: ${d.id},`), `${d.id}`);
}
if (d.vars?.length) {
  const vis = readFileSync(resolve(ROOT, 'lib/visualData.ts'), 'utf8');
  const taken = d.vars.filter((v) => new RegExp(`\\b${v}\\b`).test(vis + faqSrc));
  ck('שמות המשתנים פנויים', !taken.length, taken.join(', ') || d.vars.join(', '));
}

/* 10. meta */
ck('metaTitle עד 70 תווים', (d.metaTitle || '').length <= 70, `${(d.metaTitle || '').length}`);
ck('metaDesc עד 160 תווים', (d.metaDesc || '').length <= 160, `${(d.metaDesc || '').length}`);

/* ── פלט ────────────────────────────────────────────────────────────── */
const failed = checks.filter((c) => !c.ok && !c.soft);
const warned = checks.filter((c) => !c.ok && c.soft);
const pad = (s, n) => s + ' '.repeat(Math.max(0, n - [...s].length));
console.log('='.repeat(78));
for (const c of checks) {
  const mark = c.ok ? '  ok  ' : (c.soft ? ' אזהרה' : ' נכשל ');
  console.log(`${mark}  ${pad(c.name, 40)} ${c.detail}`);
}
console.log('='.repeat(78));
console.log(`${checks.length} בדיקות, ${failed.length} נכשלו, ${warned.length} אזהרות`);
process.exit(failed.length ? 1 : 0);
