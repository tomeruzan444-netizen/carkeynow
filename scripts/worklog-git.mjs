#!/usr/bin/env node
/**
 * מייצר את הארכיון של יומן העבודה מתוך היסטוריית git.
 *
 * הארכיון הוא שחזור: הוא יודע מה השתנה ומתי, אבל לא מה בדיוק התבקש
 * ואילו בדיקות הורצו. הימים שמתועדים ידנית ב-worklog/YYYY-MM-DD.md
 * הם המקור המלא, והארכיון משלים את מה שקדם להם.
 *
 * הרצה:  node scripts/worklog-git.mjs
 * פלט:   worklog/archive/git-history.md
 */
import { execFileSync } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'worklog/archive/git-history.md');
const SEP = '';

/* core.quotepath=false - אחרת git עוטף נתיבים בעברית במרכאות ובאוקטלים
   והזיהוי של תיקיית הקובץ נשבר */
const git = (...args) =>
  execFileSync('git', ['-c', 'core.quotepath=false', ...args],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 });

/* commit אחד לשורה: תאריך, שעה, hash, כותרת, ואחריו רשימת הקבצים */
const raw = git(
  'log', '--reverse', '--date=format:%Y-%m-%d' + SEP + '%H:%M',
  `--format=@@@%ad${SEP}%h${SEP}%s`, '--name-only',
);

const commits = [];
for (const block of raw.split('@@@').slice(1)) {
  const [head, ...rest] = block.split('\n');
  const [date, time, hash, subject] = head.split(SEP);
  const files = rest.map((f) => f.trim()).filter(Boolean);
  commits.push({ date, time, hash, subject, files });
}

/* קיבוץ לפי יום */
const byDay = new Map();
for (const c of commits) {
  if (!byDay.has(c.date)) byDay.set(c.date, []);
  byDay.get(c.date).push(c);
}

/* אילו אזורים בקוד נגע כל יום - עוזר לזהות דפוסים חוזרים */
const areaOf = (f) => {
  if (f.startsWith('lib/manual-pages') || f.startsWith('lib/wp-pages')) return 'תוכן עמודים';
  if (f.startsWith('lib/faqData')) return 'שאלות ותשובות';
  if (f.startsWith('lib/visualData')) return 'בלוקים ויזואליים';
  if (f.startsWith('lib/siteData') || f.startsWith('components/Sidebar')) return 'ניווט וקישורים';
  if (f.startsWith('public/wp-images/')) return 'תמונות';
  if (f.startsWith('components/')) return 'רכיבים';
  if (f.startsWith('app/')) return 'תבנית ועיצוב';
  if (f.startsWith('.github/')) return 'דיפלוי';
  if (f.startsWith('scripts/') || f.endsWith('.mjs')) return 'סקריפטים';
  if (f.endsWith('.md')) return 'תיעוד';
  if (f.startsWith('worklog/')) return 'יומן עבודה';
  return 'תשתית';
};

const L = [];
L.push('# ארכיון יומן עבודה - שחזור מהיסטוריית git');
L.push('');
L.push('> נוצר אוטומטית על ידי `scripts/worklog-git.mjs`. **אין לערוך ידנית.**');
L.push('>');
L.push('> זהו שחזור בדיעבד: הוא מדויק לגבי *מה* השתנה ו*מתי*, אבל לא שומר');
L.push('> מה בדיוק התבקש ואילו בדיקות הורצו - המידע הזה לא נשמר בזמן אמת.');
L.push('> ליומנים המלאים ראו `worklog/YYYY-MM-DD.md`.');
L.push('');
L.push(`טווח: ${commits[0].date} עד ${commits[commits.length - 1].date} | `
  + `${commits.length} קומיטים ב-${byDay.size} ימי עבודה`);
L.push('');

/* טבלת פעילות חודשית */
const byMonth = new Map();
for (const [date, cs] of byDay) {
  const m = date.slice(0, 7);
  const cur = byMonth.get(m) || { days: 0, commits: 0 };
  byMonth.set(m, { days: cur.days + 1, commits: cur.commits + cs.length });
}
L.push('## סיכום חודשי');
L.push('');
L.push('| חודש | ימי עבודה | קומיטים |');
L.push('|---|---|---|');
for (const [m, v] of [...byMonth].sort()) L.push(`| ${m} | ${v.days} | ${v.commits} |`);
L.push('');

L.push('## פירוט לפי יום');
L.push('');
for (const [date, cs] of [...byDay].sort().reverse()) {
  const areas = [...new Set(cs.flatMap((c) => c.files.map(areaOf)))].sort();
  const files = new Set(cs.flatMap((c) => c.files));
  L.push(`### ${date}`);
  L.push('');
  L.push(`${cs.length} קומיטים | ${files.size} קבצים | ${areas.join(', ') || 'ללא שינוי קבצים'}`);
  L.push('');
  for (const c of cs) {
    L.push(`- \`${c.hash}\` ${c.time} - ${c.subject} *(${c.files.length} קבצים)*`);
  }
  L.push('');
}

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, L.join('\n'), 'utf8');
console.log(`worklog/archive/git-history.md — ${commits.length} commits, ${byDay.size} days`);
