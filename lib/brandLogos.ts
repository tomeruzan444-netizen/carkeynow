// מיפוי עמוד "שכפול מפתח ל<יצרן>" אל הלוגו של אותו יצרן.
// כולל רק יצרנים שקיים עבורם קובץ לוגו ב-public/wp-images.
// הוספת יצרן חדש: להוריד לוגו, להעביר דרך process_logos.py (רקע שקוף),
// לשמור כ-/wp-images/לוגו-<יצרן>.webp ולהוסיף שורה כאן.

export interface BrandLogo {
  /** שם היצרן בעברית, לטקסט alt */
  name: string;
  /** נתיב הלוגו תחת public */
  logo: string;
}

export const BRAND_LOGOS: Record<string, BrandLogo> = {
  'שכפול-מפתח-לפורד':     { name: 'פורד',     logo: '/wp-images/לוגו-פורד.webp' },
  'שכפול-מפתח-לטויוטה':   { name: 'טויוטה',   logo: '/wp-images/לוגו-טויוטה.webp' },
  'שכפול-מפתח-ליונדאי':   { name: 'יונדאי',   logo: '/wp-images/לוגו-יונדאי.webp' },
  'שכפול-מפתח-למאזדה':    { name: 'מאזדה',    logo: '/wp-images/לוגו-מאזדה.webp' },
  'שכפול-מפתח-למיצובישי': { name: 'מיצובישי', logo: '/wp-images/לוגו-מיצובישי.webp' },
  'שכפול-מפתח-לניסאן':    { name: 'ניסאן',    logo: '/wp-images/לוגו-ניסאן.webp' },
  'שכפול-מפתח-לקיה':      { name: 'קיה',      logo: '/wp-images/לוגו-קיה.webp' },
  'שכפול-מפתח-לרנו':      { name: 'רנו',      logo: '/wp-images/לוגו-רנו.webp' },
  'שכפול-מפתח-לשברולט':   { name: 'שברולט',   logo: '/wp-images/לוגו-שברולט.webp' },
  'שכפול-מפתח-לאופל':     { name: 'אופל',     logo: '/wp-images/לוגו-אופל.webp' },
  'שכפול-מפתח-לגילי':     { name: 'גילי',     logo: '/wp-images/לוגו-גילי.webp' },
  'שכפול-מפתח-לדודג':     { name: "דודג'",    logo: '/wp-images/לוגו-דודג.webp' },
  'שכפול-מפתח-לדייהטסו':  { name: 'דייהטסו',  logo: '/wp-images/לוגו-דייהטסו.webp' },
  'שכפול-מפתח-לסוזוקי':   { name: 'סוזוקי',   logo: '/wp-images/לוגו-סוזוקי.webp' },
  'שכפול-מפתח-לסיטרואן':  { name: 'סיטרואן',  logo: '/wp-images/לוגו-סיטרואן.webp' },
  'שכפול-מפתח-לפיגו':     { name: "פיג'ו",    logo: '/wp-images/לוגו-פיגו.webp' },
  'שכפול-מפתח-לקאדילק':   { name: 'קאדילק',   logo: '/wp-images/לוגו-קאדילק.webp' },
  'שכפול-מפתח-להונדה':    { name: 'הונדה',    logo: '/wp-images/לוגו-הונדה.webp' },
  'שכפול-מפתח-לגיפ':      { name: "ג'יפ",     logo: '/wp-images/לוגו-גיפ.webp' },
  'שכפול-מפתח-לדאציה':    { name: "דאצ'יה",   logo: '/wp-images/לוגו-דאציה.webp' },
  'שכפול-מפתח-לסיאט':     { name: 'סיאט',     logo: '/wp-images/לוגו-סיאט.webp' },
};

/** מחזיר את הלוגו של עמוד יצרן לפי ה-slug, או undefined אם אין. */
export function getBrandLogo(slug: string): BrandLogo | undefined {
  return BRAND_LOGOS[slug];
}
