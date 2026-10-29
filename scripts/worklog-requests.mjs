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
  { kind: 'ניקוי', icon: '🧹',
    re: /תמחק|למחוק|תסיר|להסיר|תנקה|לנקות/ },
  { kind: 'תוכן חיצוני', icon: '📣',
    re: /מיי ביזנס|my business|גוגל ביזנס|פוסט .*(גוגל|פייסבוק|אינסטגרם)|מודעה/i },
  { kind: 'הטמעה', icon: '🧩',
    re: /תטמיע|להטמיע|iframe|להוסיף מפה|תוסיף מפה|widget/i },
  { kind: 'ניתוח', icon: '📊',
    re: /תנתח|תסרוק|אילו |רשימה של|תוציא|כמה |נתונים|סרצ קונסול|search console|תבדוק|תוודא/i },
  { kind: 'שיפור קיים', icon: '✨',
    re: /סליידר|תשפר|תוסיף (?!עמוד)|שיפור|תמונות|FAQ|מחירון|ביטויים|שלב|תעשה/ },
  /* בקשת הכרעה בין אפשרויות. נוספה ב-2026-10-29 אחרי ש'אחר' עלה ל-5,
     וזה הסימן שהקובץ עצמו מגדיר לקטגוריה חסרה. */
  { kind: 'המלצה', icon: '💡',
    re: /(מה|במה) (אתה )?(ממליץ|מציע)|לא הבנתי|מה עדיף|מה כדאי לעשות/ },
  { kind: 'שאלה', icon: '❓',
    re: /\?|האם |מה העמוד|איך אתה ממליץ|מה הסטטוס/ },
];

/* פעלים בציווי: מבדילים בין שאלה לבין בקשה שמנוסחת כשאלה */
const IMPERATIVE = /ת(וסיף|ייצר|נתח|שפר|תקן|בטל|עלה|וציא|בדוק|וודא|עשה|דחוף|משיך|שלח|מחק|סיר|נקה|סרוק|טמיע)/;

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

  /* יום אחד יכול לכלול יותר משיחה אחת, וכל אחת פותחת ב-H1 משלה. בלי
     הפיצול הזה סקשן 1 השני נבלע, וזה קרה ב-2026-10-22. */
  const sessions = src.split(/\n(?=#\s+\d{4}-\d{2}-\d{2})/).filter((x) => x.trim());

  const summaries = [];
  const requests = [];
  let pending = '';
  let closed = '';

  for (const sec of sessions) {
    const head = sec.split(/\n---/)[0];
    const sum = head.split('\n').slice(1)
      .filter((l) => l.trim() && !/^קומיט/.test(l.trim()))
      .join(' ').replace(/\s+/g, ' ').trim();
    if (sum) summaries.push(sum);

    const s1 = sec.match(/##\s*1\.\s*מה ביקשת([\s\S]*?)(?=\n---|\n##\s*2\.)/);
    if (s1) requests.push(...splitRequests(s1[1]).map(strip));

    /* הניסוח אינו זהה בכל יום, למשל "ממתין להחלטה שלך, ובראש
       הרשימה:", ולכן הביטוי הקבוע בלבד מחוייב. */
    /* הפירוט יכול להופיע כפסקה או כרשימה ממוספרת אחרי שורה ריקה, ולכן
       עוצרים על שורה ריקה שאחריה טקסט שאינו פריט רשימה. */
    const p = (sec.match(
      /\*\*ממתין להחלטה שלך[^*]*:\*\*([\s\S]*?)(?=\n\n(?!\s*(?:\d+\.|[-*]\s))|\n\*\*המצב הפתוח)/,
    ) || [])[1];
    const c = (sec.match(/\*\*נסגר היום:\*\*([\s\S]*?)(?=\n\n|\n\*\*)/) || [])[1];
    if (p) pending = p.replace(/\s+/g, ' ').trim();
    if (c) closed = c.replace(/\s+/g, ' ').trim();
  }

  const commits = [...new Set([...src.matchAll(/`([0-9a-f]{7,40})`/g)].map((m) => m[1]))];
  const live = [...new Set(
    [...src.matchAll(/(https:\/\/carkeynow\.co\.il\/[^\s)]+)/g)].map((m) => m[1]),
  )];

  return {
    date, file, requests, commits, live, pending, closed,
    summary: summaries.join(' '),
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
  'ניקוי': 'מחיקה או הסרה של תוכן, נכס או עמוד שאינו צריך להיות באתר',
  'תוכן חיצוני': 'תוכן שנכתב לערוץ אחר ולא לאתר. הכללים שלו ב-GMB_GUIDE.md',
  'הטמעה': 'שילוב רכיב של צד שלישי בעמוד קיים',
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
