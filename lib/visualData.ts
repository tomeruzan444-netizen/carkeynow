import type { Step, FeatCard, CompRow, Stat, TabItem, ToolCard } from '@/components/VisualBlocks';

export interface VisualSection {
  type: 'process' | 'features' | 'comparison' | 'stats' | 'tabs' | 'tools' | 'alert' | 'image';
  heading?: string;
  sub?: string;
  data: unknown;
}

// ─── KEY DUPLICATION (brand + city + main) ──────────────────────────

export const keyDupProcess: Step[] = [
  { title: 'זיהוי המפתח והרכב', desc: 'בודקים את מספר השלדה, דגם הרכב ושנת הייצור כדי לזהות את סוג המפתח הנדרש בדיוק.', duration: '5 דק׳' },
  { title: 'חיתוך הלהב', desc: 'מכונת חיתוך ממוחשבת חותכת את הלהב לפי קוד הרכב עם דיוק של מילימטר.', duration: '5-10 דק׳' },
  { title: 'קידוד השבב', desc: 'מחשב האימוביליזר של הרכב מקבל את קוד השבב החדש בתהליך קידוד ייחודי לדגם.', duration: '10-30 דק׳' },
  { title: 'קידוד השלט', desc: 'השלט מסונכרן עם מחשב הרכב ורולינג-קוד מוגדר למניעת שכפול לא מורשה.', duration: '5 דק׳' },
  { title: 'בדיקת תקינות מלאה', desc: 'בודקים הצתה, נעילה/פתיחה ופונקציות השלט לפניכם לפני שאנחנו עוזבים.', duration: '5 דק׳' },
];

export const keyDupComparison: CompRow[] = [
  { criterion: 'זמן המתנה',      us: '20–60 דקות',   usColor: 'green',  alt: '3–7 ימים',      altColor: 'red'    },
  { criterion: 'הגעה לבית/עבודה', us: 'כן, תמיד',    usColor: 'green',  alt: 'לא',            altColor: 'red'    },
  { criterion: 'עלות מפתח שבב',  us: '₪400–₪700',   usColor: 'green',  alt: '₪800–₪2,000',   altColor: 'red'    },
  { criterion: 'עלות Smart Key',  us: '₪800–₪1,500', usColor: 'green',  alt: '₪1,500–₪3,000', altColor: 'red'    },
  { criterion: 'אחריות',         us: 'בכתב 30 יום',  usColor: 'green',  alt: 'אחריות יצרן',   altColor: 'blue'   },
  { criterion: 'זמינות',         us: '24/7',          usColor: 'green',  alt: 'שעות סוכנות',   altColor: 'orange' },
];

export const keyTypes: FeatCard[] = [
  { title: 'מפתח מכאני', desc: 'מפתח פיזי ללא אלקטרוניקה. הנפוץ ברכבים לפני 2000. חיתוך פשוט ומהיר תוך 10 דקות.' },
  { title: 'מפתח טרנספונדר', desc: 'שבב אלקטרוני מוטמע במפתח מתקשר עם האימוביליזר. רוב הרכבים מ-2000 ואילך.' },
  { title: 'מפתח הפוך (Flip)', desc: 'שילוב של מפתח פיזי ושלט בגוף אחד מתקפל. נפוץ בפולקסווגן, אאודי, סקודה ועוד.' },
  { title: 'Smart Key', desc: 'כניסה וגם הצתה ללא הכנסת מפתח. תקשורת Keyless Entry/Go. דורש ציוד קידוד מתקדם.' },
  { title: 'מפתח Proximity', desc: 'מפתח קרבה — הרכב מזהה אתכם כשמתקרבים. נפוץ בלקסוס, BMW, מרצדס חדשים.' },
  { title: 'מפתח אופנוע', desc: 'מפתחות לאופנועים — עם ובלי אימוביליזר. מטפלים בכל המותגים הנפוצים בישראל.' },
];

export const keyStats: Stat[] = [
  { value: '10+',   label: 'שנות ניסיון', sub: 'מאות לקוחות מרוצים' },
  { value: '24/7',  label: 'זמינות', sub: 'כולל שבתות וחגים' },
  { value: '20 דק׳', label: 'הגעה ממוצעת', sub: 'בערים הגדולות' },
  { value: '100%',  label: 'אחריות', sub: 'בכתב על כל עבודה' },
];

// ─── SWITCH REPAIR ────────────────────────────────────────────────────

export const switchProcess: Step[] = [
  { title: 'אבחון מקצועי', desc: 'חיבור מכשיר אבחון ממוחשב לרכב לזיהוי מקור הבעיה — האם הסוויץ, השבב או האימוביליזר.', duration: '10 דק׳' },
  { title: 'זיהוי סוג הסוויץ', desc: 'כל יצרן ודגם עובדים עם מנגנון שונה. מזהים את הגרסה המדויקת לפני שמתחילים.', duration: '5 דק׳' },
  { title: 'תיקון או החלפה', desc: 'תיקון — ניקוי, שמן מיוחד, החלפת קפיצים. החלפה — כשהנזק מוחלט. תמיד מנסים לתקן קודם.', duration: '30–90 דק׳' },
  { title: 'קידוד מחדש', desc: 'ברכבים עם אימוביליזר — מתכנתים את הסוויץ החדש למפתח הקיים. לא צריך מפתח חדש.', duration: '15 דק׳' },
  { title: 'בדיקה סופית', desc: 'מנסים הצתה 5 פעמים רצופות, בודקים שחרור עמוד הגה ומאשרים תקינות לפני עזיבה.', duration: '5 דק׳' },
];

export const switchSigns: FeatCard[] = [
  { title: 'קושי בהכנסת המפתח', desc: 'צריך לדחוף חזק, להרים את ההגה או לנסות כמה פעמים. זה הסימן הראשון.' },
  { title: 'ניסיונות הצתה חוזרים', desc: 'המפתח מסתובב אבל הרכב לא נדלק בפעם הראשונה. לפעמים דורש 3–4 ניסיונות.' },
  { title: 'מפתח לא משתחרר', desc: 'אחרי כיבוי — המפתח לא יוצא מהסוויץ. דורש לחיצות ומאמץ יתר.' },
  { title: 'עמוד ההגה נועל', desc: 'ההגה נועל ולא מאפשר הצתה. נפוץ כשמסיבים את ההגה בזמן כיבוי.' },
  { title: 'נורות לא נדלקות', desc: 'לוח המחוונים לא מדליק כשמסובבים המפתח לא. בעיה חשמלית בסוויץ.' },
  { title: 'רעש חריג', desc: 'קליק, חריקה או רעש לא רגיל מאזור עמוד ההגה בזמן פתיחת/נעילת המנעול.' },
];

export const switchComparison: CompRow[] = [
  { criterion: 'תיקון בסיסי',           us: '₪400–₪700',   usColor: 'green',  alt: '₪600–₪1,200',  altColor: 'red'    },
  { criterion: 'החלפת סוויץ מלאה',      us: '₪800–₪1,500', usColor: 'green',  alt: '₪1,500–₪3,000', altColor: 'red'    },
  { criterion: 'הגעה לבית',             us: 'כן',           usColor: 'green',  alt: 'לא',            altColor: 'red'    },
  { criterion: 'זמן המתנה',             us: '1–2 שעות',     usColor: 'green',  alt: '3–7 ימי עסקים', altColor: 'red'    },
  { criterion: 'אחריות',                us: '6 חודשים',     usColor: 'green',  alt: 'אחריות יצרן',   altColor: 'blue'   },
];

// ─── ALARM (KODAN) ────────────────────────────────────────────────────

export const alarmTypes: ToolCard[] = [
  { name: 'קודן בסיסי', dot: '#3b82f6', desc: 'חיישן + סירנה, הגנה בסיסית' },
  { name: 'קודן עם GPS', dot: '#22c55e', desc: 'מעקב מיקום בזמן אמת' },
  { name: 'קודן קוברה', dot: '#f59e0b', desc: 'מערכת מתקדמת + חיישנים נוספים' },
  { name: 'אימוביליזר', dot: '#8b5cf6', desc: 'מובנה ברכב, מונע הנעה' },
  { name: 'קודן ניטרול', dot: '#ef4444', desc: 'מנתק מנוע מרחוק' },
  { name: 'Keyless Entry', dot: '#06b6d4', desc: 'כניסה חכמה ללא מפתח' },
];

export const alarmProcess: Step[] = [
  { title: 'בחירת המערכת הנכונה', desc: 'לא כל קודן מתאים לכל רכב. בוחרים לפי גיל הרכב, חניה, ותקציב — ולא לפי הכי יקר.', duration: '5 דק׳' },
  { title: 'בדיקת חיווט הרכב', desc: 'כל דגם עובד עם פרוטוקול חיווט שונה. ממפים את נקודות החיבור המדויקות לפני שמתחילים.', duration: '10 דק׳' },
  { title: 'התקנה מדויקת', desc: 'מחברים ללא חיתוך חוטים — שימוש בתפסנים מקצועיים. הרכב חוזר לחיווטו המקורי בכל עת.', duration: '30–60 דק׳' },
  { title: 'קידוד ושלטים', desc: 'מתכנתים את השלטים, מגדירים קודי אבטחה ובודקים כל פונקציה.', duration: '15 דק׳' },
  { title: 'הדרכה ובדיקה', desc: 'מסבירים לכם איך לעבוד עם המערכת ובודקים את כל הפונקציות יחד.', duration: '10 דק׳' },
];

export const alarmStats: Stat[] = [
  { value: '8–15', label: 'שנות חיי קודן', sub: 'עם תחזוקה נכונה' },
  { value: '₪400', label: 'מחיר התקנה', sub: 'בסיסי כולל ציוד' },
  { value: '45 דק׳', label: 'זמן התקנה', sub: 'ממוצע לקודן רגיל' },
  { value: '0 נזק', label: 'לחיווט מקורי', sub: 'ללא חיתוך חוטים' },
];

// ─── LOCKOUT (PORETZ) ─────────────────────────────────────────────────

export const lockoutTabs: TabItem[] = [
  { label: 'רקע', content: 'פתיחת רכב נעול היא אחד המצבים הנפוצים שאנחנו נקראים אליהם. בין אם שכחתם את המפתח בפנים, המפתח נשבר בגוש, או ילד נלכד בתוך הרכב — יש לנו פתרון מהיר לכל מקרה. אנחנו מגיעים עם ציוד מקצועי שפותח כל רכב ללא נזק.' },
  { label: 'אתגר', content: 'כל רכב הוא עולם בפני עצמו. רכב ישן עם מנעול מכאני פשוט לפתיחה. רכב מודרני עם נועלים חשמליים ואבטחה מתקדמת — דורש ידע וציוד שונה לחלוטין. הניסיון שלנו עם מגוון דגמים מאפשר לנו לזהות מהר את הגישה הנכונה.' },
  { label: 'פתרון', content: 'אנחנו משתמשים בשלושה כלים עיקריים: כלי לחץ אוויר ליצירת פתח מינימלי, מוטות מקצועיים לשחרור הנועל, ומכשירי קידוד לרכבים חכמים. כל הפעולות מבוצעות ללא שריטות, ללא שבירה, ועם מינימום זמן פתיחה.' },
  { label: 'תוצאות', content: 'ממוצע פתיחה של 8–15 דקות מרגע ההגעה. ב-99% מהמקרים — ללא שום נזק לרכב. הלקוח ממשיך בדרכו תוך פחות מחצי שעה מרגע הפנייה.' },
];

export const lockoutEquipment: FeatCard[] = [
  { title: 'כלי לחץ אוויר', desc: 'יוצר פתח של מילימטרים בין הדלת והמסגרת — מאפשר הכנסת מוט ללא שריטה.' },
  { title: 'מוטות מקצועיים', desc: 'סדרה של מוטות בצורות שונות לשחרור נועלים ולחצנים פנימיים מכל זווית.' },
  { title: 'מכשיר קידוד OBD', desc: 'לרכבים חכמים עם Keyless — שחרור הנועל דרך מחשב הרכב ישירות.' },
  { title: 'ציוד הגנה', desc: 'פדים גומי ובד מגן למניעת שריטות על הרכב בזמן הפתיחה.' },
];

export const lockoutStats: Stat[] = [
  { value: '99%', label: 'ללא נזק לרכב', sub: 'פתיחה מקצועית בלבד' },
  { value: '8 דק׳', label: 'זמן פתיחה ממוצע', sub: 'מרגע ההגעה' },
  { value: '24/7', label: 'זמינות', sub: 'כולל שבתות' },
  { value: '₪250', label: 'מחיר מתחיל', sub: 'רכב פרטי רגיל' },
];

// ─── REMOTE / SHELT ───────────────────────────────────────────────────

export const remoteProcess: Step[] = [
  { title: 'אבחון תקלת השלט', desc: 'בודקים סוללה, אנטנה פנימית ומגעים. 60% מהמקרים נפתרים בהחלפת סוללה בלבד.', duration: '5 דק׳' },
  { title: 'בדיקת הרצפטור ברכב', desc: 'אם השלט תקין — בודקים את מערכת הקבלה ברכב. לפעמים הבעיה שם ולא בשלט.', duration: '10 דק׳' },
  { title: 'תיקון או שלט חלופי', desc: 'תיקון מגעים/גומי פנימי אם אפשרי, או סיפוק שלט חלופי תואם לדגם.', duration: '15–30 דק׳' },
  { title: 'קידוד לרכב', desc: 'השלט החדש מקודד למחשב הרכב ביחד עם כל השלטים הקיימים — לא מוחקים שלטים ישנים.', duration: '15 דק׳' },
  { title: 'בדיקת כל הפונקציות', desc: 'נעילה, פתיחה, פתיחת תא מטען, חירום — הכל נבדק לפניכם לפני הסיום.', duration: '5 דק׳' },
];

export const remoteFeatures: FeatCard[] = [
  { title: 'Rolling Code', desc: 'כל לחיצה שולחת קוד שונה. אי אפשר ללכוד ולשכפל — אבטחה אמיתית.' },
  { title: 'טווח 30 מטר', desc: 'שלט איכותי עובד עד 30 מטר. אם הטווח קצר יותר — סימן שיש בעיה טכנית.' },
  { title: 'חיסכון בסוללה', desc: 'שלט תקין אמור להחזיק 1–2 שנים. שלט שמרוקן סוללות מהר — יש בו תקלה.' },
  { title: 'תואם לכל הדגמים', desc: 'יש לנו שלטים חלופיים ומקוריים לכל הדגמים הנמכרים בישראל.' },
];

// ─── LOST KEY / RECOVERY ─────────────────────────────────────────────

export const lostKeyTabs: TabItem[] = [
  { label: 'רקע', content: 'אובדן מפתח לרכב קורה לאלפי אנשים בישראל מדי יום. זה יכול לקרות בכל מקום ובכל שעה — בחניון, בקניון, בחוף הים. אנחנו מקבלים עשרות קריאות כאלה מדי שבוע.' },
  { label: 'אתגר', content: 'מפתח אבוד הוא לא רק פתיחת הרכב — זה ייצור מפתח חדש לגמרי, קידוד שבב חדש, ולעיתים נטרול המפתח האבוד כדי שאף אחד לא יוכל להשתמש בו. כל זה דורש ציוד מקצועי ספציפי לדגם.' },
  { label: 'פתרון', content: 'מגיעים עם מחשב אבחון ייעודי שמחלץ את קוד המפתח ישירות ממחשב הרכב — ללא צורך במפתח מקורי. חותכים מפתח חדש, מתכנתים שבב ושלט, ואם רוצים — מנטרלים את המפתח האבוד.' },
  { label: 'תוצאות', content: 'תוך 45–90 דקות (תלוי בדגם הרכב) — יש מפתח חדש עובד לחלוטין. הלקוח יכול לנסוע הביתה. אנחנו גם ממליצים תמיד לעשות מפתח כפילאה מיד אחרי כדי לחסוך בעתיד.' },
];

export const lostKeyComparison: CompRow[] = [
  { criterion: 'זמן המתנה',       us: '45–90 דקות',   usColor: 'green',  alt: '3–7 ימים',       altColor: 'red'    },
  { criterion: 'הגעה לבית',       us: 'כן, בכל מקום', usColor: 'green',  alt: 'צריך לגרור',      altColor: 'red'    },
  { criterion: 'מחיר מפתח שבב',   us: '₪500–₪900',   usColor: 'green',  alt: '₪1,000–₪2,000', altColor: 'red'    },
  { criterion: 'ניטרול מפתח ישן', us: 'כן, אפשרי',    usColor: 'green',  alt: 'כן, בתשלום נפרד', altColor: 'orange' },
  { criterion: 'זמינות',          us: '24/7',          usColor: 'green',  alt: 'שעות עבודה',      altColor: 'orange' },
];

// ─── MOTORCYCLE ───────────────────────────────────────────────────────

export const motoFeatures: FeatCard[] = [
  { title: 'כל מותגי האופנועים', desc: 'הונדה, יאמהה, קוואסאקי, סוזוקי, BMW, פיאג׳ו, KTM — כולם.' },
  { title: 'מפתח מכאני + אימוביליזר', desc: 'מפתחות פשוטים עד מפתחות חכמים עם שבב — טיפול בכולם.' },
  { title: 'פריצת כיסא', desc: 'פותחים את תא האחסון ללא נזק לפלסטיק או לצבע.' },
  { title: 'הגעה לשטח', desc: 'מגיעים אליכם בכל מקום — חניה, דרך, אזור תעשייה.' },
];

// ─── CITY KEY PAGES ───────────────────────────────────────────────────

export const cityKeyProcess: Step[] = [
  { title: 'פנייה ותיאור המקרה', desc: 'מספרים לנו טלפונית מה הרכב, איפה נמצאים ומה הבעיה. שולחים טכנאי בהתאם.', duration: '2 דק׳' },
  { title: 'הגעה עם ציוד מלא', desc: 'הטכנאי מגיע לנקודת המיקום שלכם — בית, עבודה, חניון, דרך — עם כל הציוד.', duration: '20–40 דק׳' },
  { title: 'אבחון והכנה', desc: 'מזהים את סוג המפתח, מכינים את הלהב וציוד הקידוד המתאים לדגם הספציפי.', duration: '5 דק׳' },
  { title: 'עבודה בשטח', desc: 'חיתוך וקידוד המפתח ישירות ליד הרכב שלכם, ללא צורך בגרירה לשום מקום.', duration: '15–50 דק׳' },
  { title: 'בדיקה ומסירה', desc: 'הלקוח בודק את המפתח לפני שהטכנאי עוזב. חשבונית ניתנת מיד.', duration: '5 דק׳' },
];

// ─── IMAGE DATA ─────────────────────────────────────────────────────
export interface ImageData { src: string; alt: string; maxWidth?: number }

// ─── DISPATCHER ──────────────────────────────────────────────────────

export function getVisualSections(slug: string): VisualSection[] {
  // City key duplication
  if (slug.startsWith('שכפול-מפתח-לרכב-ב')) {
    return [
      { type: 'stats',   data: keyStats },
      { type: 'process', heading: 'התהליך שלנו — מרגע הפנייה ועד מפתח בידיים', data: cityKeyProcess },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות רשמית', rows: keyDupComparison } },
    ];
  }

  // Suzuki — with product image
  if (slug === 'שכפול-מפתח-לסוזוקי') {
    return [
      { type: 'image', data: { src: '/wp-images/שכפול-שלט-חכם-לרכב-סוזוקי.webp', alt: 'שלט חכם לרכב סוזוקי', maxWidth: 300 } as ImageData },
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח סוזוקי', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול סוכנות סוזוקי', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Mazda — with product image
  if (slug === 'שכפול-מפתח-למאזדה') {
    return [
      { type: 'image', data: { src: '/wp-images/שכפול-שלט-חכם-מאזדה.webp', alt: 'שלט חכם מאזדה', maxWidth: 300 } as ImageData },
      { type: 'process', heading: 'תהליך שכפול מפתח מאזדה', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול סוכנות מאזדה', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Brand pages (generic)
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח — 5 שלבים', data: keyDupProcess },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Main key duplication — with general key image
  if (slug === 'שכפול-מפתח-לרכב') {
    return [
      { type: 'stats',    data: keyStats },
      { type: 'image', data: { src: '/wp-images/שכפול-מפתח-לרכב-חדש.webp', alt: 'שכפול מפתח לרכב', maxWidth: 300 } as ImageData },
      { type: 'features', heading: 'כל סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'process',  heading: 'תהליך שכפול מפתח בשטח', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Switch
  if (slug === 'תיקון-סוויץ-לרכב' || slug === 'מפתח-תקוע-בסוויץ') {
    return [
      { type: 'features',  heading: '6 סימנים שהסוויץ מתחיל להתקלקל', data: { cards: switchSigns, cols: 3 } },
      { type: 'process',   heading: 'תהליך תיקון הסוויץ שלנו', data: switchProcess },
      { type: 'comparison', heading: 'אנחנו מול סוכנות רשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: switchComparison } },
    ];
  }

  // Alarm install
  if (slug === 'התקנת-קודן-לרכב') {
    return [
      { type: 'tools',   heading: 'סוגי מערכות שאנחנו מתקינים', sub: 'בוחרים יחד את הפתרון המתאים לרכב ולצורך', data: alarmTypes  as unknown },
      { type: 'process', heading: 'תהליך ההתקנה — 5 שלבים', data: alarmProcess },
      { type: 'stats',   data: alarmStats },
    ];
  }

  // Alarm disconnect/repair
  if (['ניתוק-קודן-לרכב','תיקון-קודן-לרכב','קודן-לרכב-מצפצף-2'].includes(slug)) {
    return [
      { type: 'tools',   heading: 'סוגי מערכות שאנחנו מטפלים בהן', data: alarmTypes as unknown },
      { type: 'process', heading: 'תהליך הטיפול בקודן', data: alarmProcess },
      { type: 'stats',   data: alarmStats },
    ];
  }

  // Alarm city pages
  if (slug.startsWith('קודן-לרכב-ב')) {
    return [
      { type: 'tools',   heading: 'שירותי קודן שאנחנו מציעים', data: alarmTypes as unknown },
      { type: 'process', heading: 'תהליך ההתקנה', data: alarmProcess },
      { type: 'stats',   data: alarmStats },
    ];
  }

  // Lockout main
  if (slug === 'פורץ-רכבים') {
    return [
      { type: 'tabs',     heading: 'מקרה שימוש: ננעלתם מחוץ לרכב בלילה', data: lockoutTabs },
      { type: 'features', heading: 'הציוד שאנחנו מגיעים עם', data: { cards: lockoutEquipment, cols: 2 } },
      { type: 'stats',    data: lockoutStats },
    ];
  }

  // Lockout by city
  if (slug.startsWith('פורץ-רכבים-ב')) {
    return [
      { type: 'stats',    data: lockoutStats },
      { type: 'features', heading: 'הציוד שאנחנו מגיעים עם', data: { cards: lockoutEquipment, cols: 2 } },
      { type: 'tabs',     heading: 'מקרה שימוש אמיתי', data: lockoutTabs },
    ];
  }

  // Remote/shelt — with flip key image
  if (['תיקון-שלט-לרכב','שכפול-שלט-לרכב','קידוד-שלט-לרכב'].includes(slug)) {
    return [
      { type: 'image', data: { src: '/wp-images/שכפול-מפתח-קפיץ.webp', alt: 'מפתח קפיץ לרכב', maxWidth: 280 } as ImageData },
      { type: 'process',  heading: 'תהליך תיקון/שכפול השלט', data: remoteProcess },
      { type: 'features', heading: 'מה שחשוב לדעת על השלט לרכב', data: { cards: remoteFeatures, cols: 2 } },
    ];
  }

  // Lost key / recovery
  if (slug === 'אבד-מפתח-לרכב' || slug === 'שחזור-מפתח-לרכב') {
    return [
      { type: 'tabs',       heading: 'מקרה שימוש: מה קורה כשמפתח אובד', data: lostKeyTabs },
      { type: 'comparison', heading: 'אנחנו מול האפשרויות האחרות', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות/מוסך', rows: lostKeyComparison } },
      { type: 'stats',      data: keyStats },
    ];
  }

  // Motorcycle
  if (slug === 'שחזור-מפתח-לאופנוע' || slug === 'פריצת-כיסא-אופנוע') {
    return [
      { type: 'features', heading: 'שירותי אופנוע שאנחנו מציעים', data: { cards: motoFeatures, cols: 2 } },
      { type: 'process',  heading: 'תהליך שחזור מפתח לאופנוע', data: keyDupProcess.slice(0, 4) },
    ];
  }

  // BMW
  if (slug === 'שכפול-מפתח-לבמוו') {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח BMW', data: [
        { title: 'זיהוי מערכת הצתה', desc: 'BMW משתמשת ב-EWS, CAS, FEM או BDC, תלוי בשנת הרכב. אנחנו מזהים את הדור הספציפי לפני שמתחילים.' as string, duration: '5 דק׳' },
        { title: 'חיבור מחשב ייעודי ל-BMW', desc: 'עם תוכנת קידוד שמכירה את כל דורות BMW, אנחנו קוראים את קוד המפתח ישירות ממחשב הרכב.' as string, duration: '10 דק׳' },
        { title: 'חיתוך הלהב', desc: 'חיתוך ממוחשב לפי הקוד הייחודי של הרכב, עם דיוק שמונע החלקה בסוויץ.' as string, duration: '5 דק׳' },
        { title: 'קידוד לאימוביליזר BMW', desc: 'קידוד השבב החדש למחשב הרכב לפי פרוטוקול BMW, כולל סנכרון ה-ISN הייחודי לכל BMW.' as string, duration: '20-40 דק׳' },
        { title: 'בדיקה מלאה', desc: 'בדיקת הצתה, נעילה, פתיחה ופונקציות נוחות לפניכם, לפני עזיבת המקום.' as string, duration: '5 דק׳' },
      ] as Step[] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות BMW', data: {
        colUs: 'מפתח עכשיו', colAlt: 'סוכנות BMW',
        rows: [
          { criterion: 'זמן המתנה',          us: '20-75 דקות',    usColor: 'green', alt: '5-10 ימי עסקים', altColor: 'red' },
          { criterion: 'הגעה לבית',           us: 'כן, תמיד',     usColor: 'green', alt: 'לא',             altColor: 'red' },
          { criterion: 'מחיר Smart Key',      us: '1,000-1,700 ₪', usColor: 'green', alt: '1,800-4,000 ₪',  altColor: 'red' },
          { criterion: 'Display Key',          us: '1,500-2,500 ₪', usColor: 'green', alt: '2,500-5,000 ₪',  altColor: 'red' },
          { criterion: 'זמינות',              us: '24/7',          usColor: 'green', alt: 'שעות סוכנות',     altColor: 'orange' },
          { criterion: 'אחריות',              us: 'בכתב 30 יום',  usColor: 'green', alt: 'אחריות יצרן',     altColor: 'blue' },
        ] as CompRow[]
      } },
      { type: 'features', heading: 'סוגי מפתחות BMW שאנחנו מטפלים בהם', data: { cols: 3 as 3, cards: [
        { title: 'EWS - דגמי 90s', desc: 'מערכת אימוביליזר ראשונה של BMW. נמצאת ב-E36, E46, E39 ישנים. אנחנו מכירים אותה לעומק.' },
        { title: 'CAS - דגמי E-Series', desc: 'Car Access System, ב-E60, E90, E87, X3. שכפול דורש קריאת ISN ממחשב הרכב.' },
        { title: 'FEM/BDC - F-Series', desc: 'Front Electronic Module, ב-F10, F30, F20, F15. מורכב יותר, אנחנו מכסים את כולם.' },
        { title: 'CAS4+ - F ו-G Series', desc: 'הצפנה מורכבת, BMW Comfort Access. דורש ציוד מתקדם שיש ברשותנו.' },
        { title: 'Display Key', desc: 'המפתח עם המסך. G30, G20, G01. שכפול מורכב אבל אפשרי, מחיר בהתאם.' },
        { title: 'BMW Digital Key', desc: 'כניסה דרך סמארטפון. לא ניתן לשכפל, אבל אנחנו מייצרים מפתח פיזי גיבוי.' },
      ] as FeatCard[] } },
    ];
  }

  // Honda
  if (slug === 'שכפול-מפתח-להונדה') {
    return [
      { type: 'features', heading: 'מה שחשוב לדעת על מפתחות הונדה', data: { cols: 2 as 2, cards: [
        { title: 'הונדה ו-G-Switch', desc: 'דגמי הונדה ישנים משתמשים ב-G-Switch, מנגנון ייחודי שמעט מנעולנים מכירים. אנחנו כן.' },
        { title: 'HONDAcode', desc: 'הקוד הייחודי שהונדה שמרה לעצמה שנים. כיום יש לנו גישה מלאה לכל דגמי הונדה הנפוצים בישראל.' },
        { title: 'אחידות בין דגמים', desc: 'Jazz, Civic, HR-V ו-CR-V חולקים לעיתים פלטפורמת מפתח דומה, מה שמקל על האבחון.' },
        { title: 'שלט נפרד לעומת מובנה', desc: 'הונדות ישנות עם שלט נפרד, חדשות עם שלט מובנה במפתח הפוך או Smart Key. לכל אחד יש פרוטוקול שונה.' },
      ] as FeatCard[] } },
      { type: 'process', heading: 'תהליך שכפול מפתח הונדה', data: [
        { title: 'זיהוי שנה ומערכת', desc: 'הונדה שינתה מערכות מפתח כמה פעמים. אנחנו מזהים לפי שנה ודגם מה נדרש בדיוק.' as string, duration: '5 דק׳' },
        { title: 'אבחון הונדה Code', desc: 'עם תוכנת HONDAcode, אנחנו שולפים את קוד האימוביליזר ישירות מהרכב, ללא מפתח מקורי.' as string, duration: '10-15 דק׳' },
        { title: 'חיתוך הלהב', desc: 'לפי ה-key code הייחודי של הרכב שלכם, עם מכונת חיתוך ממוחשבת.' as string, duration: '5-10 דק׳' },
        { title: 'קידוד ואימות', desc: 'קידוד השבב לאימוביליזר, בדיקת הצתה ובדיקת שלט, עד שהכל עובד לפניכם.' as string, duration: '15-25 דק׳' },
      ] as Step[] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות הונדה', data: {
        colUs: 'מפתח עכשיו', colAlt: 'סוכנות הונדה',
        rows: [
          { criterion: 'זמן המתנה',        us: '20-65 דקות',   usColor: 'green', alt: '3-7 ימים',      altColor: 'red' },
          { criterion: 'מחיר Civic Smart', us: '900-1,400 ₪',  usColor: 'green', alt: '1,500-2,500 ₪', altColor: 'red' },
          { criterion: 'Civic ישן עם שבב', us: '400-650 ₪',    usColor: 'green', alt: '700-1,200 ₪',   altColor: 'red' },
          { criterion: 'הגעה לבית',        us: 'כן',           usColor: 'green', alt: 'לא',             altColor: 'red' },
          { criterion: 'זמינות',           us: '24/7',         usColor: 'green', alt: 'שעות עסקים',     altColor: 'orange' },
        ] as CompRow[]
      } },
    ];
  }

  // Skoda
  if (slug === 'שכפול-מפתח-לסקודה') {
    return [
      { type: 'stats', data: [
        { value: '400-1,600', label: 'מחיר שכפול', sub: 'שקל לפי הדגם' },
        { value: 'VAG', label: 'קבוצת יצרן', sub: 'VW, Audi, Seat, Skoda' },
        { value: '30-70', label: 'דק׳ שכפול', sub: 'בשטח, ללא גרירה' },
        { value: '100%', label: 'אחריות', sub: 'בכתב, 30 יום' },
      ] as Stat[] },
      { type: 'process', heading: 'שכפול מפתח סקודה - תהליך VAG', data: [
        { title: 'זיהוי דור ה-Immo', desc: 'סקודה עברה ממערכת Immo2 ב-99 דרך Immo3, ועד ל-MED9 בדגמים חדשים. זיהוי מדויק קריטי.' as string, duration: '5 דק׳' },
        { title: 'קריאת PIN ממחשב', desc: 'עם תוכנת VAG שמכסה את כל משפחת פולקסווגן, אנחנו שולפים את ה-PIN הייחודי לרכב.' as string, duration: '10-15 דק׳' },
        { title: 'חיתוך מדויק', desc: 'הלהב של מפתח VAG (HU66, HU162) נחתך לפי הקוד, עם הבדל של 0.1 מ"מ שיכול לעשות הבדל.' as string, duration: '5 דק׳' },
        { title: 'קידוד Immobilizer', desc: 'הקידוד לאימוביליזר ה-VAG נעשה עם תוכנת VCDS וציוד ייעודי, שונה מכל יצרן אחר.' as string, duration: '15-30 דק׳' },
        { title: 'בדיקה ואישור', desc: 'בדיקת הצתה עם המפתח החדש לפניכם, כולל בדיקת שלט ו-keyless אם רלוונטי.' as string, duration: '5 דק׳' },
      ] as Step[] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות סקודה', data: {
        colUs: 'מפתח עכשיו', colAlt: 'סוכנות סקודה',
        rows: [
          { criterion: 'מחיר Octavia Flip Key', us: '500-750 ₪',    usColor: 'green', alt: '900-1,500 ₪',  altColor: 'red' },
          { criterion: 'Smart Key Kodiaq',      us: '800-1,300 ₪',  usColor: 'green', alt: '1,500-2,500 ₪', altColor: 'red' },
          { criterion: 'זמן המתנה',             us: '30-70 דקות',   usColor: 'green', alt: '3-7 ימים',      altColor: 'red' },
          { criterion: 'הגעה לבית',             us: 'כן',           usColor: 'green', alt: 'לא',             altColor: 'red' },
          { criterion: 'זמינות',                us: '24/7',         usColor: 'green', alt: 'שעות עסקים',     altColor: 'orange' },
        ] as CompRow[]
      } },
    ];
  }

  // Subaru
  if (slug === 'שכפול-מפתח-לסובארו') {
    return [
      { type: 'features', heading: 'מה מייחד את מפתחות סובארו', data: { cols: 2 as 2, cards: [
        { title: 'פרוטוקול קידוד ייחודי', desc: 'סובארו פיתחה פרוטוקול קידוד שאינו זהה ליפנים אחרים. אנחנו עובדים עם תוכנת Subaru ייעודית שמכסה את כל הדגמים.' },
        { title: 'שלט נפרד בסובארו ישנות', desc: 'Forester וOutback ישנים עם שלט נפרד שמצריך קידוד עצמאי. אנחנו מכירים את הפרוטוקולים של כל שנת ייצור.' },
        { title: 'Smart Key בדגמים מ-2014', desc: 'מ-2014, Forester וOutback עברו ל-Smart Key. תהליך הקידוד מורכב יותר אבל אנחנו מבצעים אותו בשטח.' },
        { title: 'Subaru EyeSight ומפתחות', desc: 'דגמים עם EyeSight דורשים לפעמים כיול נוסף אחרי שינוי מפתח. אנחנו מודעים לזה ומתחשבים בכך.' },
      ] as FeatCard[] } },
      { type: 'process', heading: 'שכפול מפתח סובארו אצלנו', data: [
        { title: 'זיהוי מודל ושנה', desc: 'Forester 2010 שונה מ-Forester 2018. אנחנו מזהים מה נדרש לפני שמגיעים, ומגיעים עם הציוד הנכון.' as string, duration: '5 דק׳' },
        { title: 'קריאת קוד Subaru', desc: 'עם תוכנת Subaru SSM4 שמחוברת לרכב, אנחנו קוראים את קוד השבב ואת ה-IMMO של הרכב.' as string, duration: '10-15 דק׳' },
        { title: 'חיתוך ייחודי לסובארו', desc: 'מפתחות סובארו עם להב DAT17, שנחתך לפי קוד הרכב עם מכונה ממוחשבת.' as string, duration: '5 דק׳' },
        { title: 'קידוד ובדיקה', desc: 'קידוד לאימוביליזר, בדיקת הצתה, ואם רלוונטי, בדיקת Keyless Entry מלאה.' as string, duration: '20-35 דק׳' },
      ] as Step[] },
      { type: 'stats', data: [
        { value: '400-1,400', label: 'מחיר שכפול', sub: 'שקל לפי דגם ושנה' },
        { value: 'Forester', label: 'הנפוץ ביותר', sub: 'שאנחנו מטפלים בו' },
        { value: '30-65', label: 'דקות לשכפול', sub: 'בשטח, עד דלת הבית' },
        { value: '24/7', label: 'זמינות', sub: 'גם בשטחים מרוחקים' },
      ] as Stat[] },
    ];
  }

  // Volvo
  if (slug === 'שכפול-מפתח-לוולוו') {
    return [
      { type: 'tabs', heading: 'מקרה שימוש: Volvo XC90 עם שלוש מפתחות שנפלו למים', data: [
        { label: 'רקע', content: 'קיבלנו פנייה מבעל Volvo XC90 משנת 2004. שלושת המפתחות נפלו לבריכה ולא עבדו. הסוכנות ציינה המתנה של שלושה שבועות ומחיר גבוה.' },
        { label: 'אתגר', content: 'ה-XC90 הישן משתמש במערכת IMMO של וולוו שנחשבת ייחודית. לא כל מנעולן מחזיק ציוד שמכסה דגמים ישנים של וולוו, בטח לא XC90 מ-2004.' },
        { label: 'פתרון', content: 'הגענו עם ציוד שמכסה גם דגמי וולוו ישנים. ב-45 דקות קראנו את קוד ה-IMMO, חתכנו שני מפתחות חדשים וקידדנו אותם. שני מפתחות עובדים, הרכב יצא מהחנייה.' },
        { label: 'תוצאות', content: 'הלקוח שילם פחות ממחצית מהמחיר שצוטט בסוכנות, קיבל שני מפתחות ולא אחד, והכל נגמר תוך שעה מהפנייה.' },
      ] as TabItem[] },
      { type: 'features', heading: 'מערכות מפתח של וולוו שאנחנו מכירים', data: { cols: 3 as 3, cards: [
        { title: 'IMMO וולוו ישנות', desc: 'XC90 ישן, V70, S60 ישן משתמשים ב-Volvo IMMO ייחודי. אנחנו שומרים ציוד שמכסה גם דגמים ישנים.' },
        { title: 'Smart Key V40-V90', desc: 'דגמים מ-2012 ואילך עם Smart Key. קידוד ב-VIDA הרשמי, אנחנו מבצעים זאת בשטח.' },
        { title: 'PEPS - XC40, C40', desc: 'Passive Entry Passive Start, דגמים חדשים. כניסה ללא לחיצה. מורכב יותר, אבל אנחנו מכסים.' },
        { title: 'ה-Keyless של וולוו', desc: 'וולוו פיתחה Keyless system ייחודית עם מעגל הצפנה שמתחדש. אנחנו עובדים עם הפרוטוקולים הנכונים.' },
        { title: 'Volvo On Call', desc: 'המערכת הדיגיטלית. לא ניתן לשכפל, אבל אנחנו מייצרים מפתח פיזי גיבוי מאובטח.' },
        { title: 'שלט נפרד ישן', desc: 'S40, V50 עם שלט נפרד ישן. קידוד פשוט יחסית, זמן קצר, מחיר נמוך.' },
      ] as FeatCard[] } },
      { type: 'comparison', heading: 'אנחנו מול סוכנות וולוו', data: {
        colUs: 'מפתח עכשיו', colAlt: 'סוכנות וולוו',
        rows: [
          { criterion: 'מחיר Smart Key XC60', us: '1,000-1,600 ₪',  usColor: 'green', alt: '1,800-3,500 ₪', altColor: 'red' },
          { criterion: 'PEPS XC40',           us: '1,200-2,000 ₪',  usColor: 'green', alt: '2,500-5,000 ₪', altColor: 'red' },
          { criterion: 'XC90 ישן',            us: '600-900 ₪',      usColor: 'green', alt: 'המתנה שבועות',  altColor: 'red' },
          { criterion: 'הגעה לבית',           us: 'כן, לכל מקום',  usColor: 'green', alt: 'לא',             altColor: 'red' },
          { criterion: 'זמינות',              us: '24/7',           usColor: 'green', alt: 'שעות עסקים',     altColor: 'orange' },
        ] as CompRow[]
      } },
    ];
  }

  return [];
}
