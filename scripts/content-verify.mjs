#!/usr/bin/env node
/**
 * אימות עמוד אחרי הבנייה, על ה-HTML שבאמת נוצר.
 *
 * השער בודק טיוטה, והקובץ הזה בודק תוצאה. ההפרדה חשובה: ב-2026-10-26
 * התברר שעמוד צרו קשר אינו מרנדר את התוכן שלו בכלל, ושום בדיקה על
 * המקור לא יכלה לגלות את זה.
 *
 * הרצה:  node scripts/content-verify.mjs <slug>
 */
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, process.env.NEXT_DIST_DIR === '.next-build' ? 'out' : 'out');

const slug = process.argv[2];
if (!slug) {
  console.error('שימוש: node scripts/content-verify.mjs <slug>');
  process.exit(2);
}

const page = resolve(OUT, slug, 'index.html');
const checks = [];
const ck = (name, ok, detail = '') => checks.push({ name, ok: !!ok, detail });

ck('העמוד נבנה', existsSync(page), slug);
if (!existsSync(page)) {
  console.log('העמוד לא נמצא ב-out. האם רצה בנייה?');
  process.exit(1);
}
const raw = readFileSync(page, 'utf8');

/* מסירים nav, aside, footer, header ו-script. ההפרדה המבנית הזאת היא מה
   שעבד ב-2026-10-22 אחרי ששתי גרסאות סטטיסטיות נכשלו. */
const body = ['nav', 'aside', 'footer', 'header', 'script', 'style'].reduce(
  (h, tag) => h.replace(new RegExp(`<${tag}\\b[\\s\\S]*?<\\/${tag}>`, 'g'), ' '), raw);
const text = body.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* 1. מה שהכי קל לפספס: שהתוכן בכלל מרונדר (מועמד 38) */
ck('גוף התוכן מרונדר', text.length > 500, `${text.split(' ').length} מילים`);
ck('אורך העמוד המרונדר', text.split(' ').length >= 700);

/* 2. כותרות */
const h1 = [...body.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)]
  .map((m) => m[1].replace(/<[^>]+>/g, '').trim());
ck('H1 יחיד', h1.length === 1, h1[0]?.slice(0, 60) || 'אין');
const heads = [...body.matchAll(/<(h2|h3)[^>]*>([\s\S]*?)<\/\1>/g)]
  .map((m) => m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim())
  .filter(Boolean);
const dup = [...new Set(heads.filter((h, i) => heads.indexOf(h) !== i))];
ck('אין כותרת כפולה בעמוד', !dup.length, dup.join(', ') || 'תקין');

/* 3. מטא וסכמה */
const title = raw.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '';
ck('title עד 70 תווים', title.length <= 70, `${title.length}`);
const desc = raw.match(/<meta name="description" content="([^"]*)"/)?.[1] || '';
ck('description עד 160 תווים', desc.length <= 160, `${desc.length}`);
ck('canonical מצביע על העמוד', raw.includes(`carkeynow.co.il/${slug}/`));
const questions = (raw.match(/"@type":"Question"/g) || []).length;
ck('מינימום 10 שאלות בסכמה', questions >= 10, `x${questions}`);
ck('סכמת FAQPage', raw.includes('"@type":"FAQPage"'));

/* 4. קישורים. עוגן עריכי הוא <a> בלי class: כל עוגן שרכיב מייצר נושא
   מחלקה, וזה מה שהבדיל בין 4 קישורים ל-25 ב-2026-10-25. */
const editorial = [...body.matchAll(/<a href="\/([^"#?]+?)\/?"\s*>/g)].map((m) => m[1]);
ck('3 עד 5 קישורים עריכיים', editorial.length >= 3 && editorial.length <= 5,
  `${editorial.length}: ${editorial.join(', ')}`);
ck('אין יעד עריכי כפול', editorial.length === new Set(editorial).size);
const REWRITE = new Set(['סוגי-מפתחות', 'שירותים', 'אזורי-שירות']);
const all = [...body.matchAll(/href="\/([^"#?]+?)\/?"/g)].map((m) => m[1]);
const broken = [...new Set(all)].filter((l) => !REWRITE.has(l)
  && !/^(_next|images|wp-images|wp-content)/.test(l)
  && !l.split('/').pop().includes('.')
  && !existsSync(resolve(OUT, l)));
ck('אין קישור שבור', !broken.length, broken.slice(0, 4).join(', ') || 'תקין');

/* 5. תמונות, סעיף 15 */
const imgs = [...body.matchAll(/<img[^>]*>/g)].map((m) => m[0])
  .filter((i) => !i.includes('aria-hidden="true"'));
const noAlt = imgs.filter((i) => i.includes('alt=""') || !i.includes('alt='));
ck('לכל תמונה נראית יש alt', !noAlt.length, `${imgs.length} נראות, ${noAlt.length} חסרים`);
const nonHe = imgs.filter((i) => !/alt="[^"]*[֐-׿]/.test(i));
ck('alt בעברית', !nonHe.length, `${nonHe.length} לא בעברית`);

/* 6. מה שאסור לדלוף לפלט */
ck('אין מקף ארוך', !text.includes('—'));
ck('אין markdown שדלף', !text.includes('**'));

/* 7. העמוד במפת האתר */
const sitemap = readFileSync(resolve(OUT, 'sitemap.xml'), 'utf8');
ck('העמוד ב-sitemap', sitemap.includes(slug),
  `${(sitemap.match(/<loc>/g) || []).length} כתובות`);

/* 8. העמוד נגיש מניווט כלשהו, כדי שלא ייוולד יתום */
const home = readFileSync(resolve(OUT, 'index.html'), 'utf8');
ck('מקושר מדף הבית', home.includes(`/${slug}`), 'ניווט או סיידבר');

const pages = readdirSync(OUT, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(resolve(OUT, d.name, 'index.html'))).length;
ck('מספר העמודים באתר', pages > 100, `${pages}`);

const failed = checks.filter((c) => !c.ok);
const pad = (s, n) => s + ' '.repeat(Math.max(0, n - [...s].length));
console.log('='.repeat(74));
for (const c of checks) console.log(`${c.ok ? '  ok  ' : ' נכשל '}  ${pad(c.name, 36)} ${c.detail}`);
console.log('='.repeat(74));
console.log(`${checks.length} בדיקות, ${failed.length} נכשלו`);
process.exit(failed.length ? 1 : 0);
