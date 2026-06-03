import type { Step, FeatCard, CompRow, Stat, TabItem, ToolCard } from '@/components/VisualBlocks';

export interface VisualSection {
  type: 'process' | 'features' | 'comparison' | 'stats' | 'tabs' | 'tools' | 'alert';
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

  // Brand pages
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח — 5 שלבים', data: keyDupProcess },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Main key duplication
  if (slug === 'שכפול-מפתח-לרכב') {
    return [
      { type: 'stats',    data: keyStats },
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

  // Remote/shelt
  if (['תיקון-שלט-לרכב','שכפול-שלט-לרכב','קידוד-שלט-לרכב'].includes(slug)) {
    return [
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

  return [];
}
