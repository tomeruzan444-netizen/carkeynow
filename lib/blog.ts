/* ──────────────────────────────────────────────────────────────────────
   רישום הפוסטים של הבלוג.

   הבלוג אינו מסלול נפרד באפליקציה אלא עמודים רגילים ב-WP_PAGES: עמוד
   הרשימה הוא הסלאג `בלוג`, וכל פוסט הוא סלאג משלו. כך הם נבנים כתיקייה
   סטטית ככל עמוד אחר, נכנסים ל-sitemap אוטומטית, ואינם תלויים בכלל
   rewrite ב-.htaccess כמו שלושת העמודים הסטטיים בכתובת עברית.

   הקובץ הזה מחזיק רק את המטא-דאטה שהרשימה והכותרת צריכות. גוף הפוסט
   עצמו יושב ב-manual-pages.ts, כמו כל תוכן אחר באתר.
   ────────────────────────────────────────────────────────────────────── */

export interface BlogPost {
  slug: string;
  /** כותרת קצרה לכרטיס ברשימה, לא ה-H1 המלא */
  cardTitle: string;
  /** ISO. משמש ל-datePublished בסכמה ולתצוגה בעברית */
  date: string;
  /** תקציר לכרטיס, עד שתי שורות */
  excerpt: string;
  /** זמן קריאה משוער בדקות */
  readMinutes: number;
}

export const BLOG_SLUG = 'בלוג';

/** החדש ביותר ראשון. הסדר כאן הוא הסדר ברשימה. */
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'מפתח-שבור-בסוויץ-הצעת-מחיר-מנופחת',
    cardTitle: 'חסכנו ללקוח 3,000 שקל על מחשב רכב שלא היה צריך להחליף',
    date: '2026-10-26',
    excerpt:
      'מוסך מרכזי אמר שצריך להחליף סוויץ ומחשב רכב בגלל מפתח שנשבר. ' +
      'הגענו, שלפנו את הלהב השבור בלי לפרק כלום, והלקוח שילם פחות מעשירית.',
    readMinutes: 5,
  },
];

export const getBlogPost = (slug: string): BlogPost | undefined =>
  BLOG_POSTS.find((p) => p.slug === slug);

export const isBlogPost = (slug: string): boolean => BLOG_POSTS.some((p) => p.slug === slug);

const HE_MONTHS = [
  'בינואר', 'בפברואר', 'במרץ', 'באפריל', 'במאי', 'ביוני',
  'ביולי', 'באוגוסט', 'בספטמבר', 'באוקטובר', 'בנובמבר', 'בדצמבר',
];

/** 2026-10-26 ← "26 באוקטובר 2026" */
export function formatHebrewDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${HE_MONTHS[m - 1]} ${y}`;
}
