// שם העיר של עמוד "שכפול מפתח לרכב ב[עיר]", נגזר מהסלאג.
// משמש לסכמת Service ברמת העמוד: אזור השירות הוא העיר של אותו עמוד,
// בעוד שישות העסק עצמה מוגדרת פעם אחת ב-layout ומשרתת את כל הארץ.
// שתי ההצהרות נכונות בו זמנית, והעיר אינה סניף אלא אזור שירות.

export const CITY_PAGE_PREFIX = 'שכפול-מפתח-לרכב-ב';

/** שם העיר, או null לכל עמוד שאינו עמוד עיר בשירות הזה. */
export function cityFromSlug(slug: string): string | null {
  if (!slug.startsWith(CITY_PAGE_PREFIX)) return null;
  const name = slug.slice(CITY_PAGE_PREFIX.length).replace(/-/g, ' ').trim();
  return name || null;
}

/* נכשל בזמן בנייה אם שם העיר שבסלאג אינו מופיע בכותרת העמוד.
   זה בדיוק מה שהיה תופס מראש את התקלה שהתגלתה ב-2026-11-14:
   הסלאג היה "שכפול-מפתח-לרכב-באש-העין" בעוד הכותרת אמרה "בראש העין",
   והעמוד דורג במיקום 35 מפני שהוא מעולם לא הכיל את מילת המפתח שלו.
   עדיף להפיל בנייה מאשר לפרסם עמוד שמכוון לעיר שאינה כתובה בו. */
export function cityForPage(slug: string, title: string): string | null {
  const city = cityFromSlug(slug);
  if (!city) return null;
  if (!title.includes(city)) {
    throw new Error(
      `[cityService] שם העיר שבסלאג אינו מופיע בכותרת העמוד.\n` +
      `  slug:  ${slug}\n` +
      `  נגזר: "${city}"\n` +
      `  title: ${title}\n` +
      `  אחד מהשניים משובש. יש לתקן לפני בנייה.`,
    );
  }
  return city;
}
