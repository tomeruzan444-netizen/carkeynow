#!/usr/bin/env node
/**
 * מייצר אינדקס אחד של כל מה שהתבקש, מתוך קובצי היומן היומיים.
 *
 * הבעיה שהוא פותר: כל בקשה כבר מתועדת בסקשן 1 של worklog/YYYY-MM-DD.md,
 * אבל כדי לראות את התמונה המלאה צריך לפתוח 14 קבצים. בלי אינדקס אין דרך
 * לענות על "מה ביקשתי בחודש האחרון" ולא על "מה חוזר על עצמו".
 *
 * הקובץ מיוצר במלואו. לא לערוך אותו ידנית - לערוך את קובצי היומן ולהריץ שוב.
 *
 * הרצה:  node scripts/worklog-requests.mjs
 * פלט:   worklog/REQUESTS.md
 */
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LOGS = resolve(ROOT, 'worklog');
const OUT = resolve(LOGS, 'REQUESTS.md');

/* ── סיווג בקשה לפי הניסוח שלה ──────────────────────────────────────── */
const KINDS = [
  { kind: 'הנחיה קבועה', icon: '📌',
    re: /תמיד |בכל פעם ש|אני רוצה לתעד|חשוב שהם יישמרו|הכל צריך להיות מתועד|מעכשיו/ },
  { kind: 'עמוד חדש', icon: '📄',
    re: /תוסיף עמוד|תייצר עמוד|עמוד חדש|עמוד תוכן חדש/ },
  { kind: 'תיקון', icon: '🔧',
    re: /לא רואה|לא מופיע|תתקן|באג|לא עובד|תבטל|שבור/ },
  { kind: 'ניתוח', icon: '📊',
    re: /תנתח|אילו |רשימה של|תוציא|כמה |נתונים|סרצ קונסול|search console|תבדוק|תוודא/i },
  { kind: 'שיפור קיים', icon: '✨',
    re: /סליידר|תשפר|תוסיף (?!עמוד)|שיפור|תמונות|FAQ|מחירון|ביטויים|שלב|תעשה/ },
  { kind: 'שאלה', icon: '❓',
    re: /\?|האם |מה העמוד|איך אתה ממליץ|מה הסטטוס/ },
];

/* פעלים בציווי: מבדילים בין שאלה לבין בקשה שמנוסחת כשאלה */
const IMPERATIVE = /ת(וסיף|ייצר|נתח|שפר|תקן|בטל|עלה|וציא|בדוק|וודא|עשה|דחוף|משיך|שלח)/;

const classify = (text) => {
  /* סימן שאלה בלי פועל ציווי = שאלת מידע, גם אם יש בה "בכל פעם ש" */
  if (/\?\s*$/.test(text) && !IMPERATIVE.test(text)) {
    return { kind: 'שאלה', icon: '❓' };
  }
  return KINDS.find((k) => k.re.test(text)) ?? { kind: 'אחר', icon: '•' };
};

/* ── פירוק סקשן 1 לבקשות נפרדות ─────────────────────────────────────── */

/* שורות שרק מחברות בין בקשות ואינן בקשה בעצמן.
   בלי \b: הוא מבוסס על תווי ASCII ואינו עובד כמצופה מול עברית. */
const CONNECTOR =
  /^(ואחר כך|ולפני כן|ואחרי הניתוח|ואחרי|בבוקר|ובסוף היום|לפני כן|באותה שיחה|ובהמשך|ואז)/;

function splitRequests(section) {
  const out = [];
  let buf = [];
  let inQuote = false;

  let sawMark = false;

  const flush = () => {
    const t = buf.join(' ').replace(/\s+/g, ' ').trim();
    if (t.length > 12) out.push({ text: t, quoted: sawMark });
    buf = [];
    sawMark = false;
  };

  for (const line of section.split('\n')) {
    const l = line.trim();
    const quote = /^>/.test(l);
    if (quote || /\*\*/.test(l) || /["“”]/.test(l)) sawMark = true;

    /* שורה ריקה סוגרת בקשה. מעבר בין ציטוט לטקסט חופשי גם. */
    if (l === '') { flush(); inQuote = false; continue; }
    if (buf.length && quote !== inQuote) flush();
    /* פתיח ממוספר מתחיל בקשה חדשה */
    if (/^\d+\.\s/.test(l) && buf.length) flush();

    inQuote = quote;
    buf.push(l.replace(/^[>\-*]\s?/, '').replace(/^\d+\.\s*/, ''));
  }
  flush();

  /* שורת חיבור קצרה אינה בקשה. בקשה אמיתית ארוכה או שאינה נפתחת במחבר.
     שורה קצרה שנגמרת בנקודתיים היא תמיד מחבר בפורמט הזה. */
  const kept = out.filter(({ text: t }) => {
    const c = t.replace(/\*/g, '').trim();
    if (c.length < 60 && (CONNECTOR.test(c) || /[:：]$/.test(c))) return false;
    return true;
  });

  /* רק דברי המשתמש הם בקשה. בקובצי היומן הם מסומנים כציטוט, כמודגש או
     במרכאות. שורה בלי אף סימון כזה היא פרשנות שנכתבה סביבה, לא בקשה. */
  const marked = kept.filter((r) => r.quoted);
  if (marked.length) return marked.map((r) => r.text);

  /* נפילה לאחור: יום שבו הבקשה נכתבה כפרוזה בלי ציטוט בכלל. אז אין מה
     להפריד מפרשנות, וכל הסקשן הוא הבקשה. קורה ב-2026-09-06. */
  return kept.length ? [kept.map((r) => r.text).join(' ')] : [];
}

const strip = (s) => s.replace(/\*\*/g, '').replace(/^["“]|["”]$/g, '').trim();

/* ── קריאת כל קובצי היומן ───────────────────────────────────────────── */
const files = readdirSync(LOGS)
  .filter((f) => /^\d{4}-\d{2}-\d{2}\.md$/.test(f))
  .sort();

const days = files.map((file) => {
  const src = readFileSync(resolve(LOGS, file), 'utf8');
  const date = file.replace('.md', '');

  const head = src.split(/\n---/)[0];
  const summary = head.split('\n').slice(1)
    .filter((l) => l.trim() && !/^קומיט/.test(l.trim()))
    .join(' ').replace(/\s+/g, ' ').trim();

  const commits = [...src.matchAll(/`([0-9a-f]{7,40})`/g)].map((m) => m[1]);
  const uniqCommits = [...new Set(commits)];

  const sec1 = src.match(/##\s*1\.\s*מה ביקשת([\s\S]*?)(?=\n---|\n##\s*2\.)/);
  const requests = sec1 ? splitRequests(sec1[1]).map(strip) : [];

  const live = [...src.matchAll(/(https:\/\/carkeynow\.co\.il\/[^\s)]+)/g)].map((m) => m[1]);
  const pending = (src.match(/\*\*ממתין להחלטה שלך:\*\*([\s\S]*?)(?=\n\n|\n\*\*)/) || [])[1];
  const closed = (src.match(/\*\*נסגר היום:\*\*([\s\S]*?)(?=\n\n|\n\*\*)/) || [])[1];

  return {
    date, file, summary, requests,
    commits: uniqCommits,
    live: [...new Set(live)],
    pending: pending ? pending.replace(/\s+/g, ' ').trim() : '',
    closed: closed ? closed.replace(/\s+/g, ' ').trim() : '',
  };
});

/* ── ספירות ─────────────────────────────────────────────────────────── */
const all = days.flatMap((d) => d.requests.map((r) => ({ ...classify(r), text: r, date: d.date })));
const byKind = new Map();
for (const r of all) byKind.set(r.kind, (byKind.get(r.kind) ?? 0) + 1);
const standing = all.filter((r) => r.kind === 'הנחיה קבועה');

/* ── בנייה ──────────────────────────────────────────────────────────── */
const L = [];
const w = (s = '') => L.push(s);
const trunc = (s, n) => (s.length > n ? s.slice(0, n - 1) + '…' : s);

w('# אינדקס הבקשות');
w();
w('**קובץ מיוצר. לא לערוך ידנית.** הוא נבנה מסקשן 1 של כל קובצי');
w('`worklog/YYYY-MM-DD.md`, ולכן המקור לתיקון הוא קובץ היומן ולא הקובץ הזה.');
w();
w('רענון: `node scripts/worklog-requests.mjs`');
w();
w(`עודכן: ${new Date().toISOString().slice(0, 10)} · ${days.length} ימי עבודה · ${all.length} בקשות`);
w();
w('---');
w();

w('## הנחיות קבועות');
w();
if (standing.length === 0) {
  w('_לא זוהו הנחיות קבועות._');
} else {
  w('אלה בקשות שאינן משימה חד-פעמית אלא כלל שחל מכאן והלאה. **הן החלק החשוב');
  w('ביותר בקובץ הזה**, כי בקשה חד-פעמית שלא בוצעה מורגשת מיד, והנחיה קבועה');
  w('שנשכחת לא מורגשת בכלל.');
  w();
  for (const s of standing) {
    w(`- **${s.date}** · ${trunc(s.text, 300)}`);
  }
  w();
  w('**מגבלה שחשוב להכיר:** הרשימה הזאת נגזרת מקובצי היומן בלבד. הנחיה');
  w('שהפכה לכלל כתוב עברה ל-[`CONTENT_GUIDE.md`](../CONTENT_GUIDE.md) ואינה');
  w('מופיעה כאן, למשל הדרישה ל-10 שאלות ותשובות בכל עמוד או כללי הגיוון');
  w('המבני של עמודי הקודן בסעיף 17. **מדריך התוכן הוא המקור המחייב לכללים,');
  w('והקובץ הזה הוא מקור לתיעוד מה נאמר ומתי.**');
}
w();
w('---');
w();

w('## לפי סוג');
w();
w('| סוג | כמה | מה זה אומר |');
w('|---|---|---|');
const MEANING = {
  'עמוד חדש': 'הזרם המרכזי. כל אחד עובר אותו תהליך, ולכן הוא המועמד הראשון לאוטומציה',
  'ניתוח': 'דוחות ובדיקות. חוזר על עצמו בכל פעם שמגיע דוח חדש מ-Search Console',
  'הנחיה קבועה': 'כלל שחל מכאן והלאה, לא משימה',
  'תיקון': 'באג או ליקוי שדווח',
  'שיפור קיים': 'הוספה או שיפור על עמוד או מערכת שכבר קיימים',
  'שאלה': 'שאלת מידע שלא דרשה שינוי באתר',
  'אחר': 'לא סווג. אם המספר כאן גדל, הסיווג בסקריפט צריך עדכון',
};
for (const [kind, n] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) {
  const icon = KINDS.find((k) => k.kind === kind)?.icon ?? '•';
  w(`| ${icon} ${kind} | ${n} | ${MEANING[kind] ?? ''} |`);
}
w();
w('---');
w();

w('## כל הבקשות, לפי תאריך');
w();
for (const d of days) {
  w(`### ${d.date} · [יומן מלא](${d.file})`);
  w();
  if (d.summary) w(`${trunc(d.summary, 400)}`);
  w();
  for (const r of d.requests) {
    const c = classify(r);
    w(`- ${c.icon} **${c.kind}** · ${trunc(r, 400)}`);
  }
  if (d.requests.length === 0) w('- _סקשן 1 לא נמצא בקובץ_');
  w();
  const meta = [];
  if (d.commits.length) meta.push(`קומיטים: ${d.commits.map((c) => `\`${c}\``).join(', ')}`);
  if (d.live.length) meta.push(`קישורים: ${d.live.join(' · ')}`);
  if (meta.length) w(meta.join(' · '));
  if (d.closed) w(`**נסגר:** ${trunc(d.closed, 250)}`);
  if (d.pending) w(`**ממתין להחלטה:** ${trunc(d.pending, 250)}`);
  w();
}

w('---');
w();
w('## מה שעדיין ממתין להחלטה שלך');
w();
const pend = days.filter((d) => d.pending);
if (pend.length === 0) {
  w('_אין._');
} else {
  for (const d of pend) w(`- **${d.date}** · ${trunc(d.pending, 300)}`);
  w();
  w('הרשימה הזאת נגזרת מקובצי היומן. הפירוט המלא של כל ממצא פתוח');
  w('נמצא ב-[OPEN.md](OPEN.md), והמועמדים לאוטומציה ב-[AUTOMATION.md](AUTOMATION.md).');
}
w();

writeFileSync(OUT, L.join('\n'), 'utf8');
console.log(`worklog/REQUESTS.md נכתב: ${days.length} ימים, ${all.length} בקשות, ${standing.length} הנחיות קבועות`);
for (const [k, n] of [...byKind.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`   ${String(n).padStart(3)}  ${k}`);
}
