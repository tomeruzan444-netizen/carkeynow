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
  { criterion: 'זמן המתנה',      us: '20-60 דקות',   usColor: 'green',  alt: '3-7 ימים',      altColor: 'red'    },
  { criterion: 'הגעה לבית/עבודה', us: 'כן, תמיד',    usColor: 'green',  alt: 'לא',            altColor: 'red'    },
  { criterion: 'עלות מפתח שבב',  us: '₪400-₪700',   usColor: 'green',  alt: '₪800-₪2,000',   altColor: 'red'    },
  { criterion: 'עלות Smart Key',  us: '₪800-₪1,500', usColor: 'green',  alt: '₪1,500-₪3,000', altColor: 'red'    },
  { criterion: 'אחריות',         us: 'בכתב 30 יום',  usColor: 'green',  alt: 'אחריות יצרן',   altColor: 'blue'   },
  { criterion: 'זמינות',         us: '24/7',          usColor: 'green',  alt: 'שעות סוכנות',   altColor: 'orange' },
];

export const keyTypes: FeatCard[] = [
  { title: 'מפתח מכאני', desc: 'מפתח פיזי ללא אלקטרוניקה. הנפוץ ברכבים לפני 2000. חיתוך פשוט ומהיר תוך 10 דקות.' },
  { title: 'מפתח טרנספונדר', desc: 'שבב אלקטרוני מוטמע במפתח מתקשר עם האימוביליזר. רוב הרכבים מ-2000 ואילך.' },
  { title: 'מפתח הפוך (Flip)', desc: 'שילוב של מפתח פיזי ושלט בגוף אחד מתקפל. נפוץ בפולקסווגן, אאודי, סקודה ועוד.' },
  { title: 'Smart Key', desc: 'כניסה וגם הצתה ללא הכנסת מפתח. תקשורת Keyless Entry/Go. דורש ציוד קידוד מתקדם.' },
  { title: 'מפתח Proximity', desc: 'מפתח קרבה - הרכב מזהה אתכם כשמתקרבים. נפוץ בלקסוס, BMW, מרצדס חדשים.' },
  { title: 'מפתח אופנוע', desc: 'מפתחות לאופנועים - עם ובלי אימוביליזר. מטפלים בכל המותגים הנפוצים בישראל.' },
];

export const keyStats: Stat[] = [
  { value: '10+',   label: 'שנות ניסיון', sub: 'מאות לקוחות מרוצים' },
  { value: '24/7',  label: 'זמינות', sub: 'כולל שבתות וחגים' },
  { value: '20 דק׳', label: 'הגעה ממוצעת', sub: 'בערים הגדולות' },
  { value: '100%',  label: 'אחריות', sub: 'בכתב על כל עבודה' },
];

// ─── SWITCH REPAIR ────────────────────────────────────────────────────

export const switchProcess: Step[] = [
  { title: 'אבחון מקצועי', desc: 'חיבור מכשיר אבחון ממוחשב לרכב לזיהוי מקור הבעיה - האם הסוויץ, השבב או האימוביליזר.', duration: '10 דק׳' },
  { title: 'זיהוי סוג הסוויץ', desc: 'כל יצרן ודגם עובדים עם מנגנון שונה. מזהים את הגרסה המדויקת לפני שמתחילים.', duration: '5 דק׳' },
  { title: 'תיקון או החלפה', desc: 'תיקון - ניקוי, שמן מיוחד, החלפת קפיצים. החלפה - כשהנזק מוחלט. תמיד מנסים לתקן קודם.', duration: '30-90 דק׳' },
  { title: 'קידוד מחדש', desc: 'ברכבים עם אימוביליזר - מתכנתים את הסוויץ החדש למפתח הקיים. לא צריך מפתח חדש.', duration: '15 דק׳' },
  { title: 'בדיקה סופית', desc: 'מנסים הצתה 5 פעמים רצופות, בודקים שחרור עמוד הגה ומאשרים תקינות לפני עזיבה.', duration: '5 דק׳' },
];

export const switchSigns: FeatCard[] = [
  { title: 'קושי בהכנסת המפתח', desc: 'צריך לדחוף חזק, להרים את ההגה או לנסות כמה פעמים. זה הסימן הראשון.' },
  { title: 'ניסיונות הצתה חוזרים', desc: 'המפתח מסתובב אבל הרכב לא נדלק בפעם הראשונה. לפעמים דורש 3-4 ניסיונות.' },
  { title: 'מפתח לא משתחרר', desc: 'אחרי כיבוי - המפתח לא יוצא מהסוויץ. דורש לחיצות ומאמץ יתר.' },
  { title: 'עמוד ההגה נועל', desc: 'ההגה נועל ולא מאפשר הצתה. נפוץ כשמסיבים את ההגה בזמן כיבוי.' },
  { title: 'נורות לא נדלקות', desc: 'לוח המחוונים לא מדליק כשמסובבים המפתח לא. בעיה חשמלית בסוויץ.' },
  { title: 'רעש חריג', desc: 'קליק, חריקה או רעש לא רגיל מאזור עמוד ההגה בזמן פתיחת/נעילת המנעול.' },
];

export const switchComparison: CompRow[] = [
  { criterion: 'תיקון בסיסי',           us: '₪400-₪700',   usColor: 'green',  alt: '₪600-₪1,200',  altColor: 'red'    },
  { criterion: 'החלפת סוויץ מלאה',      us: '₪800-₪1,500', usColor: 'green',  alt: '₪1,500-₪3,000', altColor: 'red'    },
  { criterion: 'הגעה לבית',             us: 'כן',           usColor: 'green',  alt: 'לא',            altColor: 'red'    },
  { criterion: 'זמן המתנה',             us: '1-2 שעות',     usColor: 'green',  alt: '3-7 ימי עסקים', altColor: 'red'    },
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
  { title: 'בחירת המערכת הנכונה', desc: 'לא כל קודן מתאים לכל רכב. בוחרים לפי גיל הרכב, חניה, ותקציב - ולא לפי הכי יקר.', duration: '5 דק׳' },
  { title: 'בדיקת חיווט הרכב', desc: 'כל דגם עובד עם פרוטוקול חיווט שונה. ממפים את נקודות החיבור המדויקות לפני שמתחילים.', duration: '10 דק׳' },
  { title: 'התקנה מדויקת', desc: 'מחברים ללא חיתוך חוטים - שימוש בתפסנים מקצועיים. הרכב חוזר לחיווטו המקורי בכל עת.', duration: '30-60 דק׳' },
  { title: 'קידוד ושלטים', desc: 'מתכנתים את השלטים, מגדירים קודי אבטחה ובודקים כל פונקציה.', duration: '15 דק׳' },
  { title: 'הדרכה ובדיקה', desc: 'מסבירים לכם איך לעבוד עם המערכת ובודקים את כל הפונקציות יחד.', duration: '10 דק׳' },
];

export const alarmStats: Stat[] = [
  { value: '8-15', label: 'שנות חיי קודן', sub: 'עם תחזוקה נכונה' },
  { value: '₪400', label: 'מחיר התקנה', sub: 'בסיסי כולל ציוד' },
  { value: '45 דק׳', label: 'זמן התקנה', sub: 'ממוצע לקודן רגיל' },
  { value: '0 נזק', label: 'לחיווט מקורי', sub: 'ללא חיתוך חוטים' },
];

export const alarmComparison: CompRow[] = [
  { criterion: 'הגעה לבית/עבודה',   us: 'כן, בשטח',       usColor: 'green', alt: 'רק במוסך',        altColor: 'red'    },
  { criterion: 'זמן טיפול',          us: '45-120 דקות',    usColor: 'green', alt: 'יום עד כמה ימים',  altColor: 'red'    },
  { criterion: 'התקנה ללא חיתוך חוטים', us: 'תמיד',        usColor: 'green', alt: 'לא מובטח',        altColor: 'orange' },
  { criterion: 'אבחון לפני החלפה',   us: 'תיקון אם אפשר',  usColor: 'green', alt: 'לרוב החלפה מלאה',  altColor: 'red'    },
  { criterion: 'זמינות',            us: '24/7',            usColor: 'green', alt: 'שעות מוסך',       altColor: 'orange' },
];

// ─── LOCKSMITH HUB · TEL AVIV ─────────────────────────────────────────

export const tlvFactors: FeatCard[] = [
  { title: 'חניון בלי קליטה', desc: 'הציוד שלנו עובד לא מקוון לגמרי, עם מסדי נתונים ואסימונים שנטענים מראש.' },
  { title: 'הכל על סוללות', desc: 'אין צורך בחשמל חיצוני או בכבל מאריך, גם בקומה מינוס שלוש.' },
  { title: 'זמן לפי תנועה', desc: 'אנחנו נוקבים בחלון זמן ריאלי ולא במספר יפה שאי אפשר לעמוד בו.' },
  { title: 'רחובות צרים', desc: 'בפלורנטין, נווה צדק ויפו אנחנו עובדים במרחק הליכה מהרכב.' },
  { title: 'רכבי חברה וליסינג', desc: 'נדרש אישור בכתב מהחברה. כדאי להסדיר מראש ולא בשתיים בלילה.' },
  { title: 'זמינות לילית', desc: 'בלילה העיר פנויה וזמן ההגעה יורד ל-15 עד 30 דקות.' },
];

export const tlvProcess: Step[] = [
  { title: 'שיחה ואבחון ראשוני', desc: 'סוג הרכב, התסמין המדויק, ואם מדובר בחניון גם מספר הקומה. כך אנחנו יוצאים עם הציוד הנכון.', duration: '3 דק׳' },
  { title: 'חלון זמן ריאלי', desc: 'אנחנו נוקבים בטווח לפי התנועה באותה שעה, ומעדכנים אם משהו משתנה בדרך.', duration: 'מיידי' },
  { title: 'אימות בעלות', desc: 'תעודת זהות ורישיון רכב. ברכב חברה או ליסינג גם אישור בכתב מהחברה.', duration: '5 דק׳' },
  { title: 'ביצוע בשטח', desc: 'פתיחה, שכפול, שחזור, סוויץ או שלט, הכל ליד הרכב ובלי גרירה לשום מקום.', duration: '10-120 דק׳' },
  { title: 'בדיקה לפני עזיבה', desc: 'בודקים פתיחה, נעילה והתנעה בפועל, ורק אז סוגרים את הקריאה.', duration: '5 דק׳' },
];

// ─── SWITCH · NETANYA (תיקון מול החלפה) ───────────────────────────────

export const switchRepairVsReplace: CompRow[] = [
  { criterion: 'מצב הגליל',        us: 'מסתובב, מרגיש מחוספס', usColor: 'green',  alt: 'נשבר או נסדק',      altColor: 'red'    },
  { criterion: 'עלות',             us: '400-700 ₪',            usColor: 'green',  alt: '800-1,500 ₪',       altColor: 'orange' },
  { criterion: 'זמן עבודה',        us: '30-60 דקות',           usColor: 'green',  alt: '60-120 דקות',       altColor: 'orange' },
  { criterion: 'קידוד אימובילייזר', us: 'לא נדרש',              usColor: 'green',  alt: 'נדרש, כלול במחיר',  altColor: 'blue'   },
  { criterion: 'המפתח הקיים',      us: 'ממשיך לעבוד',          usColor: 'green',  alt: 'מותאם לגליל החדש',  altColor: 'blue'   },
  { criterion: 'שכיחות אצלנו',     us: 'רוב המקרים',           usColor: 'green',  alt: 'מיעוט המקרים',      altColor: 'orange' },
];

export const switchNetanyaProcess: Step[] = [
  { title: 'שאלה אחת בטלפון', desc: 'האם התקלה מופיעה רק בבוקר או לאורך כל היום. התשובה מנבאת די טוב אם מדובר בתיקון או בהחלפה.', duration: '2 דק׳' },
  { title: 'בדיקת מפתח מול סוויץ', desc: 'מנסים את המפתח השני ובודקים שחיקה בלהב. מפתח שחוק מחקה תקלת סוויץ ועולה הרבה פחות לתקן.', duration: '5 דק׳' },
  { title: 'אבחון הגליל', desc: 'בודקים אם הגליל מסתובב, אם קפיץ ההחזרה עובד ואם המגעים החשמליים יציבים תחת עומס.', duration: '10 דק׳' },
  { title: 'תיקון או החלפה', desc: 'מפרקים, מנקים ומשמנים בגרפיט ומחליפים רכיבים שחוקים. אם הגליל שבור, מתקינים חדש ומתאימים אותו למפתח שלכם.', duration: '30-120 דק׳' },
  { title: 'קידוד ובדיקה', desc: 'מקודדים מול האימובילייזר במידת הצורך, ומנסים חמש התנעות רצופות לפני שאנחנו עוזבים.', duration: '10-15 דק׳' },
];

// ─── ALARM · EVEN YEHUDA (מיקום התקנה וחדירת מים) ────────────────────

export const eyMountRules: FeatCard[] = [
  { title: 'יחידה גבוה, לא נמוך', desc: 'מקובעת גבוה מתחת ללוח המחוונים. אם ייכנסו מים, הם יגיעו לרצפה ולא אליה.' },
  { title: 'סירנה עם פתח כלפי מטה', desc: 'סירנה שפונה מעלה אוספת מים ועלים, והסליל בפנים מחליד תוך שנתיים.' },
  { title: 'הארקה עד מתכת חשופה', desc: 'מסה על בורג חלוד יוצרת תקלות אקראיות שנראות כמו מודול גוסס.' },
  { title: 'מחברים אטומים', desc: 'חיבור עטוף בסרט בידוד בתא מנוע לח מתחמצן בתוך שניים או שלושה חורפים.' },
  { title: 'ניקוז מגש המגבים', desc: 'עלים סותמים את הניקוז, המים עולים ומחפשים מוצא דרך דופן האש.' },
  { title: 'כיול לסביבה ירוקה', desc: 'חצר עם עצים דורשת כיול שלא מגיב לרוח, לכלב או לענף שנופל.' },
];

export const eyProcess: Step[] = [
  { title: 'איתור היחידה הקיימת', desc: 'מוצאים איפה הותקנה המערכת ובודקים אם היא נמצאת בנתיב של מים.', duration: '10 דק׳' },
  { title: 'בדיקת מקור רטיבות', desc: 'בודקים את פתחי הניקוז במגש המגבים ואת אטמי החדירה בדופן האש.', duration: '10-20 דק׳' },
  { title: 'בדיקת הארקה וחיבורים', desc: 'מודדים את נקודת המסה ומחפשים חיבורים עטופים בסרט שהתחמצנו.', duration: '10 דק׳' },
  { title: 'העתקה או התקנה', desc: 'מעבירים את היחידה למיקום מוגן, או מתקינים חדשה לפי ארבעת כללי המיקום.', duration: '40-90 דק׳' },
  { title: 'כיול ובדיקה', desc: 'מכיילים לסביבה של חצר עם עצים ובודקים דריכה, נטרול והתנעה לפניכם.', duration: '10-15 דק׳' },
];

// ─── ALARM · YEHUD (רכב שעומד ימים, זרם מנוחה) ───────────────────────

export const yehudDrainCards: FeatCard[] = [
  { title: 'קודן בסיסי', desc: 'מושך במנוחה כ-15 עד 25 מיליאמפר. זניח ליומיים, מורגש על פני שבוע.' },
  { title: 'קודן עם GPS', desc: 'מושך פי כמה. לרכב שעומד הרבה זו הבחירה שדורשת הכי הרבה תשומת לב.' },
  { title: 'סף 11.5 וולט', desc: 'מתחתיו יחידות נכנסות למצב אבטחה או מאבדות סנכרון מול השלט.' },
  { title: 'מצבר בן 4 שנים', desc: 'המשתנה הגדול במשוואה. מצבר חלש נכשל הרבה לפני מצבר חדש.' },
  { title: 'מצלמת דרך בשקע', desc: 'ממשיכה להקליט בחניה ולעיתים היא האשמה האמיתית ולא הקודן.' },
  { title: 'שומר מצבר', desc: 'מנתק צרכנים משניים בסף מוגדר ומשאיר מספיק אנרגיה להתנעה.' },
];

export const yehudProcess: Step[] = [
  { title: 'שאלה על דפוס השימוש', desc: 'כמה ימים הרכב עומד בין נסיעה לנסיעה. התשובה קובעת איזו מערכת בכלל מתאימה.', duration: '2 דק׳' },
  { title: 'מדידת זרם מנוחה', desc: 'מד זרם בטור להדק המצבר, ממתינים שהרכב ייכנס לתרדמה וקוראים את הערך בפועל.', duration: '15-30 דק׳' },
  { title: 'בדיקת מצבר', desc: 'מתח ומצב טעינה. אין טעם להתקין מערכת חדשה על מצבר שממילא בסוף חייו.', duration: '5 דק׳' },
  { title: 'התקנה וכיול לסביבה', desc: 'כיול שונה לחצר פרטית בנווה מונוסון ולחניה ציבורית ביהוד הוותיקה.', duration: '45-90 דק׳' },
  { title: 'מדידה חוזרת ובדיקה', desc: 'מודדים שוב אחרי ההתקנה ומוודאים שהמערכת נכנסת למצב שינה כמו שצריך.', duration: '10 דק׳' },
];

// ─── ALARM · BAT YAM (כיול לרחוב צפוף ולאתרי בנייה) ──────────────────

export const batYamSensors: ToolCard[] = [
  { name: 'חיישן זעזועים', dot: '#3b82f6', desc: 'מזהה מכה. מצוין בחניון, רגיש מדי ליד אתר בנייה' },
  { name: 'חיישן הטיה', dot: '#22c55e', desc: 'מזהה הרמה על ג׳ק או גרירה. אדיש לרעידות קרקע' },
  { name: 'כיול דו-שלבי', dot: '#f59e0b', desc: 'התראה קלה בנפרד מהפעלה מלאה' },
  { name: 'חיישן נפח', dot: '#8b5cf6', desc: 'לתא הנוסעים, רלוונטי לרכב עם גג פתוח' },
  { name: 'סירנה עם גיבוי', dot: '#ef4444', desc: 'ממשיכה לפעול גם אם נותק המצבר' },
  { name: 'GPS לאיתור', dot: '#06b6d4', desc: 'לא מונע גניבה, מאפשר איתור אחריה' },
];

export const batYamProcess: Step[] = [
  { title: 'מיפוי סביבת החניה', desc: 'בודקים מה יש סביב הרכב: אתר בנייה פעיל, ציר תנועה, חניה מקבילה צפופה או חניון סגור.', duration: '5 דק׳' },
  { title: 'מדידת רעש הרקע', desc: 'מודדים איזו רעידה מגיעה לשלדה בפועל, כדי שהכיול ייקבע לפי מספרים ולא לפי ניחוש.', duration: '10 דק׳' },
  { title: 'מיקום החיישן', desc: 'מעבירים את החיישן לנקודה פחות מהודהדת בשלדה. לעיתים זה לבדו פותר את ההתראות לשווא.', duration: '10-20 דק׳' },
  { title: 'כיול דו-שלבי', desc: 'מפרידים בין סף התראה קלה לסף הפעלה מלאה, כדי לא לוותר על רגישות לאיום אמיתי.', duration: '15 דק׳' },
  { title: 'בדיקה בשטח', desc: 'מדמים מכה קלה, מכה אמיתית והרמה על ג׳ק, ומוודאים שכל אחת מקבלת את התגובה הנכונה.', duration: '10 דק׳' },
];

// ─── ALARM RESET (איפוס קודן) ─────────────────────────────────────────
// ייחודי לעמוד האיפוס: לא התקנה ולא תיקון, אלא החזרת מערכת קיימת לעצמה.

export const alarmResetProcess: Step[] = [
  { title: 'מדידת מתח לפני הכל', desc: 'מתחת ל-11.5 וולט סשן התכנות נקטע באמצע. מודדים קודם, ומחברים מייצב מתח כשצריך.', duration: '3 דק׳' },
  { title: 'זיהוי היחידה', desc: 'מאתרים את מודול המיגון עצמו ומזהים יצרן ודגם. ברכב יד שנייה עם מערכת לא מתועדת זה השלב הארוך ביותר.', duration: '5-20 דק׳' },
  { title: 'קריאת קוד התקלה', desc: 'קוראים את האירוע שנשמר בזיכרון היחידה - נפילת מתח, חיישן שהתריע או שלט מחוץ לסנכרון.', duration: '5 דק׳' },
  { title: 'שחרור ואיפוס', desc: 'משחררים את מצב האבטחה, מנקים את הזיכרון ומגדירים קוד גישה חדש שנשאר אצלכם.', duration: '10-25 דק׳' },
  { title: 'רישום שלטים ובדיקה', desc: 'רושמים מחדש רק את השלטים שבידיכם, ובודקים דריכה, נטרול והתנעה לפניכם לפני שאנחנו עוזבים.', duration: '10 דק׳' },
];

export const alarmResetSigns: FeatCard[] = [
  { title: 'לא מתניע אחרי החלפת מצבר', desc: 'היחידה פירשה את נפילת המתח כניסיון פריצה ונכנסה לנעילה. המערכת תקינה לגמרי.' },
  { title: 'השלט לא פותח, המפתח מניע', desc: 'מונה הקוד המתגלגל בשלט רץ קדימה בלי שהיחידה שמעה. סנכרון מחדש פותר.' },
  { title: 'סירנה שצווחת גם בלי מצבר', desc: 'לסירנה יש סוללת גיבוי פנימית. זו לא תקלה אלא בדיוק מה שהיא נועדה לעשות.' },
  { title: 'נורית מהבהבת ברצף חוזר', desc: 'רצף ההבהובים הוא קוד תקלה. ספירת ההבהובים בטלפון מקצרת לנו את האבחון.' },
  { title: 'הרכב עמד שבועות בחניון', desc: 'מתח שירד לאט והשלט שנלחץ מחוץ לטווח מוציאים את שני הצדדים מהסכמה.' },
  { title: 'אבד שלט וצריך לנטרל אותו', desc: 'שלט אבוד נשאר רשום בזיכרון ופותח את הרכב שנים. מחיקה ורישום מחדש מסיימים את זה.' },
];

export const alarmResetStats: Stat[] = [
  { value: '₪200', label: 'סנכרון שלט', sub: 'הטיפול הנפוץ ביותר' },
  { value: '15-60 דק׳', label: 'זמן טיפול', sub: 'לפי סוג המערכת' },
  { value: '11.5V', label: 'מתח מינימלי', sub: 'מתחתיו האיפוס נכשל' },
  { value: '0 החלפות', label: 'ברוב המקרים', sub: 'המערכת חוזרת לעצמה' },
];

// ─── LOCKOUT (PORETZ) ─────────────────────────────────────────────────

export const lockoutTabs: TabItem[] = [
  { label: 'רקע', content: 'פתיחת רכב נעול היא אחד המצבים הנפוצים שאנחנו נקראים אליהם. בין אם שכחתם את המפתח בפנים, המפתח נשבר בגוש, או ילד נלכד בתוך הרכב - יש לנו פתרון מהיר לכל מקרה. אנחנו מגיעים עם ציוד מקצועי שפותח כל רכב ללא נזק.' },
  { label: 'אתגר', content: 'כל רכב הוא עולם בפני עצמו. רכב ישן עם מנעול מכאני פשוט לפתיחה. רכב מודרני עם נועלים חשמליים ואבטחה מתקדמת - דורש ידע וציוד שונה לחלוטין. הניסיון שלנו עם מגוון דגמים מאפשר לנו לזהות מהר את הגישה הנכונה.' },
  { label: 'פתרון', content: 'אנחנו משתמשים בשלושה כלים עיקריים: כלי לחץ אוויר ליצירת פתח מינימלי, מוטות מקצועיים לשחרור הנועל, ומכשירי קידוד לרכבים חכמים. כל הפעולות מבוצעות ללא שריטות, ללא שבירה, ועם מינימום זמן פתיחה.' },
  { label: 'תוצאות', content: 'ממוצע פתיחה של 8-15 דקות מרגע ההגעה. ב-99% מהמקרים - ללא שום נזק לרכב. הלקוח ממשיך בדרכו תוך פחות מחצי שעה מרגע הפנייה.' },
];

export const lockoutEquipment: FeatCard[] = [
  { title: 'כלי לחץ אוויר', desc: 'יוצר פתח של מילימטרים בין הדלת והמסגרת - מאפשר הכנסת מוט ללא שריטה.' },
  { title: 'מוטות מקצועיים', desc: 'סדרה של מוטות בצורות שונות לשחרור נועלים ולחצנים פנימיים מכל זווית.' },
  { title: 'מכשיר קידוד OBD', desc: 'לרכבים חכמים עם Keyless - שחרור הנועל דרך מחשב הרכב ישירות.' },
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
  { title: 'בדיקת הרצפטור ברכב', desc: 'אם השלט תקין - בודקים את מערכת הקבלה ברכב. לפעמים הבעיה שם ולא בשלט.', duration: '10 דק׳' },
  { title: 'תיקון או שלט חלופי', desc: 'תיקון מגעים/גומי פנימי אם אפשרי, או סיפוק שלט חלופי תואם לדגם.', duration: '15-30 דק׳' },
  { title: 'קידוד לרכב', desc: 'השלט החדש מקודד למחשב הרכב ביחד עם כל השלטים הקיימים - לא מוחקים שלטים ישנים.', duration: '15 דק׳' },
  { title: 'בדיקת כל הפונקציות', desc: 'נעילה, פתיחה, פתיחת תא מטען, חירום - הכל נבדק לפניכם לפני הסיום.', duration: '5 דק׳' },
];

export const remoteFeatures: FeatCard[] = [
  { title: 'Rolling Code', desc: 'כל לחיצה שולחת קוד שונה. אי אפשר ללכוד ולשכפל - אבטחה אמיתית.' },
  { title: 'טווח 30 מטר', desc: 'שלט איכותי עובד עד 30 מטר. אם הטווח קצר יותר - סימן שיש בעיה טכנית.' },
  { title: 'חיסכון בסוללה', desc: 'שלט תקין אמור להחזיק 1-2 שנים. שלט שמרוקן סוללות מהר - יש בו תקלה.' },
  { title: 'תואם לכל הדגמים', desc: 'יש לנו שלטים חלופיים ומקוריים לכל הדגמים הנמכרים בישראל.' },
];

// ─── LOST KEY / RECOVERY ─────────────────────────────────────────────

export const lostKeyTabs: TabItem[] = [
  { label: 'רקע', content: 'אובדן מפתח לרכב קורה לאלפי אנשים בישראל מדי יום. זה יכול לקרות בכל מקום ובכל שעה - בחניון, בקניון, בחוף הים. אנחנו מקבלים עשרות קריאות כאלה מדי שבוע.' },
  { label: 'אתגר', content: 'מפתח אבוד הוא לא רק פתיחת הרכב - זה ייצור מפתח חדש לגמרי, קידוד שבב חדש, ולעיתים נטרול המפתח האבוד כדי שאף אחד לא יוכל להשתמש בו. כל זה דורש ציוד מקצועי ספציפי לדגם.' },
  { label: 'פתרון', content: 'מגיעים עם מחשב אבחון ייעודי שמחלץ את קוד המפתח ישירות ממחשב הרכב - ללא צורך במפתח מקורי. חותכים מפתח חדש, מתכנתים שבב ושלט, ואם רוצים - מנטרלים את המפתח האבוד.' },
  { label: 'תוצאות', content: 'תוך 45-90 דקות (תלוי בדגם הרכב) - יש מפתח חדש עובד לחלוטין. הלקוח יכול לנסוע הביתה. אנחנו גם ממליצים תמיד לעשות מפתח כפילאה מיד אחרי כדי לחסוך בעתיד.' },
];

export const lostKeyComparison: CompRow[] = [
  { criterion: 'זמן המתנה',       us: '45-90 דקות',   usColor: 'green',  alt: '3-7 ימים',       altColor: 'red'    },
  { criterion: 'הגעה לבית',       us: 'כן, בכל מקום', usColor: 'green',  alt: 'צריך לגרור',      altColor: 'red'    },
  { criterion: 'מחיר מפתח שבב',   us: '₪500-₪900',   usColor: 'green',  alt: '₪1,000-₪2,000', altColor: 'red'    },
  { criterion: 'ניטרול מפתח ישן', us: 'כן, אפשרי',    usColor: 'green',  alt: 'כן, בתשלום נפרד', altColor: 'orange' },
  { criterion: 'זמינות',          us: '24/7',          usColor: 'green',  alt: 'שעות עבודה',      altColor: 'orange' },
];

// ─── MOTORCYCLE ───────────────────────────────────────────────────────

export const motoFeatures: FeatCard[] = [
  { title: 'כל מותגי האופנועים', desc: 'הונדה, יאמהה, קוואסאקי, סוזוקי, BMW, פיאג׳ו, KTM - כולם.' },
  { title: 'מפתח מכאני + אימוביליזר', desc: 'מפתחות פשוטים עד מפתחות חכמים עם שבב - טיפול בכולם.' },
  { title: 'פריצת כיסא', desc: 'פותחים את תא האחסון ללא נזק לפלסטיק או לצבע.' },
  { title: 'הגעה לשטח', desc: 'מגיעים אליכם בכל מקום - חניה, דרך, אזור תעשייה.' },
];

// ─── CITY KEY PAGES ───────────────────────────────────────────────────

export const cityKeyProcess: Step[] = [
  { title: 'פנייה ותיאור המקרה', desc: 'מספרים לנו טלפונית מה הרכב, איפה נמצאים ומה הבעיה. שולחים מנעולן בהתאם.', duration: '2 דק׳' },
  { title: 'הגעה עם ציוד מלא', desc: 'המנעולן מגיע לנקודת המיקום שלכם - בית, עבודה, חניון, דרך - עם כל הציוד.', duration: '20-40 דק׳' },
  { title: 'אבחון והכנה', desc: 'מזהים את סוג המפתח, מכינים את הלהב וציוד הקידוד המתאים לדגם הספציפי.', duration: '5 דק׳' },
  { title: 'עבודה בשטח', desc: 'חיתוך וקידוד המפתח ישירות ליד הרכב שלכם, ללא צורך בגרירה לשום מקום.', duration: '15-50 דק׳' },
  { title: 'בדיקה ומסירה', desc: 'הלקוח בודק את המפתח לפני שהמנעולן עוזב. חשבונית ניתנת מיד.', duration: '5 דק׳' },
];

// ─── IMAGE DATA ─────────────────────────────────────────────────────
export interface ImageData { src: string; alt: string; maxWidth?: number }

// ─── DISPATCHER ──────────────────────────────────────────────────────

export function getVisualSections(slug: string): VisualSection[] {
  // City key duplication
  if (slug.startsWith('שכפול-מפתח-לרכב-ב')) {
    return [
      { type: 'stats',   data: keyStats },
      { type: 'process', heading: 'התהליך שלנו - מרגע הפנייה ועד מפתח בידיים', data: cityKeyProcess },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות רשמית', rows: keyDupComparison } },
    ];
  }

  // Suzuki - with product image
  if (slug === 'שכפול-מפתח-לסוזוקי') {
    return [
      { type: 'image', data: { src: '/wp-images/שכפול-שלט-חכם-לרכב-סוזוקי.webp', alt: 'שלט חכם לרכב סוזוקי', maxWidth: 300 } as ImageData },
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח סוזוקי', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול סוכנות סוזוקי', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Mazda - with product image
  if (slug === 'שכפול-מפתח-למאזדה') {
    return [
      { type: 'image', data: { src: '/wp-images/שכפול-שלט-חכם-מאזדה.webp', alt: 'שלט חכם מאזדה', maxWidth: 300 } as ImageData },
      { type: 'process', heading: 'תהליך שכפול מפתח מאזדה', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול סוכנות מאזדה', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Jeep - Stellantis/Chrysler systems
  if (slug === 'שכפול-מפתח-לגיפ') {
    return [
      { type: 'process', heading: "איך אנחנו משכפלים מפתח לג'יפ", data: [
        { title: 'זיהוי מערכת ההגנה', desc: "מזהים אם הרכב עובד עם SKIM הישנה או מודול RFHub, ובודקים אם קיים Security Gateway בדגמי 2018 ואילך." as string, duration: '5 דק׳' },
        { title: 'עקיפת Security Gateway', desc: 'בדגמים חדשים מחברים כבל ייעודי לנקודת ה-Star Connector מאחורי לוח המכשירים כדי לעקוף את חסימת ה-OBD.' as string, duration: '10 דק׳' },
        { title: 'חיתוך הלהב', desc: 'חיתוך ממוחשב לפי קוד הרכב, כך שהמפתח נכנס חלק לסוויץ או לחריץ ה-FOBIK.' as string, duration: '5 דק׳' },
        { title: 'קידוד המפתח', desc: 'שליפת קוד ה-PIN וקידוד מפתח FOBIK או Proximity מול מחשב הרכב.' as string, duration: '15-30 דק׳' },
        { title: 'בדיקת תקינות', desc: 'בודקים כניסה, הצתה, נעילה ופונקציות השלט לפניכם לפני שאנחנו עוזבים.' as string, duration: '5 דק׳' },
      ] },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: "אנחנו מול סוכנות ג'יפ", data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Dacia - Renault systems
  if (slug === 'שכפול-מפתח-לדאציה') {
    return [
      { type: 'process', heading: "איך אנחנו משכפלים מפתח לדאצ'יה", data: [
        { title: 'זיהוי סוג המפתח', desc: 'מזהים אם מדובר במפתח שבב, מפתח קפיץ או כרטיס Keyless, לפי הדגם ושנת הייצור.' as string, duration: '5 דק׳' },
        { title: 'קריאת קוד האימוביליזר', desc: 'קוראים את הקוד הייחודי ממחשב הרכב דרך ה-OBD, באותו ציוד שמשרת את מערכות רנו.' as string, duration: '10 דק׳' },
        { title: 'חיתוך הלהב', desc: 'חיתוך לפי קוד המנעול המקורי, כך שהמפתח החדש חד ומדויק אפילו יותר מהשחוק.' as string, duration: '5 דק׳' },
        { title: 'קידוד וסנכרון', desc: 'מקודדים את השבב ומסנכרנים את השלט עם רולינג-קוד, ובכרטיס Keyless גם את אנטנות הזיהוי.' as string, duration: '10-20 דק׳' },
        { title: 'בדיקת תקינות', desc: 'בודקים הצתה, נעילה ופתיחה מרחוק לפניכם לפני סיום.' as string, duration: '5 דק׳' },
      ] },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: "אנחנו מול סוכנות דאצ'יה", data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Seat - VAG/MQB systems
  if (slug === 'שכפול-מפתח-לסיאט') {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח לסיאט', data: [
        { title: 'זיהוי דור האימוביליזר', desc: 'מזהים אם הרכב על Immo4, Immo5 או פלטפורמת MQB עם Component Protection.' as string, duration: '5 דק׳' },
        { title: 'קריאת CS ו-PIN', desc: 'בדגמי MQB קוראים נתונים ממספר מודולים (BCM, מחשב מנוע) ומחשבים את קוד הקידוד.' as string, duration: '10-15 דק׳' },
        { title: 'חיתוך הלהב', desc: 'חיתוך ממוחשב לפי קוד הרכב, עם דיוק שמונע החלקה בסוויץ.' as string, duration: '5 דק׳' },
        { title: 'קידוד בציוד VAG', desc: 'רושמים מפתח קפיץ או Smart Key מול מחשב הרכב בתוכנת VAG מעודכנת.' as string, duration: '15-30 דק׳' },
        { title: 'בדיקת תקינות', desc: 'בודקים כניסה ללא מפתח, הצתה בכפתור ונעילה אוטומטית לפניכם.' as string, duration: '5 דק׳' },
      ] },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: 'אנחנו מול סוכנות סיאט', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Hyundai (ייחודי - לא גנרי)
  if (slug === 'שכפול-מפתח-ליונדאי') {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח ליונדאי', data: [
        { title: 'זיהוי דגם ומערכת', desc: 'יונדאי שינתה מערכות מפתח לאורך השנים, מ-Transponder ועד Smart Key. אנחנו מזהים לפי דגם ושנה מה בדיוק נדרש.', duration: '5 דק׳' },
        { title: 'שליפת קוד מהאימובילייזר', desc: 'יונדאי וקיה חולקות פלטפורמת אבטחה. אנחנו קוראים את קוד ה-PIN ישירות ממחשב הרכב, גם ללא מפתח מקורי.', duration: '10-15 דק׳' },
        { title: 'חיתוך וקידוד', desc: 'חיתוך הלהב לפי קוד הרכב וקידוד השבב או ה-Smart Key למערכת, כולל סנכרון עם המפתחות הקיימים.', duration: '15-25 דק׳' },
        { title: 'בדיקת תקינות', desc: 'בדיקת הצתה, נעילה, פתיחה ו-Keyless אם רלוונטי, עד שהכל עובד לפניכם.', duration: '5 דק׳' },
      ] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות יונדאי', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Toyota (ייחודי - לא גנרי)
  if (slug === 'שכפול-מפתח-לטויוטה') {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח לטויוטה', data: [
        { title: 'זיהוי דור המפתח', desc: 'טויוטה עברה ממפתח עם שבב ועד Smart Key עם Push Start. אנחנו מזהים לפי דגם ושנה את הפרוטוקול המדויק.', duration: '5 דק׳' },
        { title: 'קריאת נתונים מהרכב', desc: 'עם ציוד ייעודי לטויוטה אנחנו שולפים את נתוני האימובילייזר, כולל בדגמים ההייברידיים כמו פריוס וקורולה הייבריד.', duration: '10-15 דק׳' },
        { title: 'חיתוך וקידוד Smart Key', desc: 'חיתוך הלהב וקידוד המפתח החכם למערכת, בלי למחוק את המפתחות הקיימים.', duration: '20-30 דק׳' },
        { title: 'בדיקת Push Start', desc: 'בדיקת התנעה ללא מפתח, נעילה, פתיחה ותא מטען, עד לתקינות מלאה.', duration: '5 דק׳' },
      ] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות טויוטה', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Kia (ייחודי - לא גנרי)
  if (slug === 'שכפול-מפתח-לקיה') {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח לקיה', data: [
        { title: 'זיהוי דגם ומערכת', desc: 'מהדגמים הקטנים ועד רכבי השטח - כל דגם קיה עם מערכת מפתח שונה. אנחנו מזהים בדיוק מה נדרש לפני שמתחילים.', duration: '5 דק׳' },
        { title: 'שליפת PIN מהמערכת', desc: 'קיה חולקת פלטפורמת אבטחה עם יונדאי. אנחנו קוראים את קוד ה-PIN ממחשב הרכב, גם כשאין מפתח מקורי.', duration: '10-15 דק׳' },
        { title: 'חיתוך וקידוד', desc: 'חיתוך הלהב וקידוד ה-Smart Key או השבב למערכת האימובילייזר, כולל סנכרון עם מפתחות קיימים.', duration: '15-25 דק׳' },
        { title: 'בדיקת תקינות מלאה', desc: 'בדיקת הצתה, נעילה, פתיחה ו-Keyless עד שהכל עובד לפניכם.', duration: '5 דק׳' },
      ] },
      { type: 'comparison', heading: 'אנחנו מול סוכנות קיה', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Brand pages (generic)
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) {
    return [
      { type: 'process', heading: 'איך אנחנו משכפלים מפתח - 5 שלבים', data: keyDupProcess },
      { type: 'features', heading: 'סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Main key duplication - with general key image
  if (slug === 'שכפול-מפתח-לרכב') {
    return [
      { type: 'stats',    data: keyStats },
      { type: 'image', data: { src: '/wp-images/שכפול-מפתח-לרכב-חדש.webp', alt: 'שכפול מפתח לרכב', maxWidth: 300 } as ImageData },
      { type: 'features', heading: 'כל סוגי המפתחות שאנחנו משכפלים', data: { cards: keyTypes, cols: 3 } },
      { type: 'process',  heading: 'תהליך שכפול מפתח בשטח', data: keyDupProcess },
      { type: 'comparison', heading: 'אנחנו מול הסוכנות הרשמית', data: { colUs: 'מפתח עכשיו', colAlt: 'סוכנות', rows: keyDupComparison } },
    ];
  }

  // Locksmith hub - Tel Aviv
  if (slug === 'מנעולן-רכב-בתל-אביב') {
    return [
      { type: 'features', heading: 'שישה דברים ששונים בתל אביב', sub: 'ולמה הם משנים את מי שכדאי להזמין', data: { cards: tlvFactors, cols: 3 as 3 } },
      { type: 'process',  heading: 'מרגע השיחה ועד שהרכב פתוח', data: tlvProcess },
      { type: 'stats',    data: keyStats },
    ];
  }

  // Switch - Netanya (בלוקים ייחודיים סביב ההכרעה תיקון מול החלפה)
  if (slug === 'סוויץ-לרכב-בנתניה') {
    return [
      { type: 'comparison', heading: 'תיקון סוויץ מול החלפת סוויץ', sub: 'ההכרעה נקבעת אחרי אבחון, לא לפניו', data: { colUs: 'תיקון', colAlt: 'החלפה', rows: switchRepairVsReplace } },
      { type: 'process',    heading: 'איך נראית קריאת סוויץ בנתניה', data: switchNetanyaProcess },
      { type: 'stats',      data: keyStats },
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

  // Alarm reset (איפוס קודן) - בלוקים ייחודיים, לא משותפים עם התקנה/תיקון
  if (slug === 'איפוס-קודן-לרכב') {
    return [
      { type: 'features', heading: 'סימנים שמצביעים על קודן שצריך איפוס', sub: 'שישה מצבים שאנחנו רואים כמעט מדי שבוע', data: { cards: alarmResetSigns, cols: 3 as 3 } },
      { type: 'process',  heading: 'תהליך האיפוס בשטח - 5 שלבים', data: alarmResetProcess },
      { type: 'stats',    data: alarmResetStats },
    ];
  }

  // Alarm install
  if (slug === 'התקנת-קודן-לרכב') {
    return [
      { type: 'tools',   heading: 'סוגי מערכות שאנחנו מתקינים', sub: 'בוחרים יחד את הפתרון המתאים לרכב ולצורך', data: alarmTypes  as unknown },
      { type: 'process', heading: 'תהליך ההתקנה - 5 שלבים', data: alarmProcess },
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

  // Alarm - specific city pages (visuals משלימים את השלד הייחודי של כל עמוד, לא תבנית אחידה)
  if (slug === 'קודן-לרכב-בהרצליה') {
    return [
      { type: 'process', heading: 'תהליך התקנת הקודן שלנו', data: alarmProcess },
      { type: 'stats',   data: alarmStats },
    ];
  }
  if (slug === 'קודן-לרכב-בראשון-לציון') {
    return [
      { type: 'process',    heading: 'מרגע הפנייה ועד קודן מותקן', data: alarmProcess },
      { type: 'comparison', heading: 'קודן אצלנו מול מוסך או סוכנות', data: { colUs: 'מפתח עכשיו', colAlt: 'מוסך / סוכנות', rows: alarmComparison } },
    ];
  }
  if (slug === 'קודן-לרכב-באבן-יהודה') {
    return [
      { type: 'features', heading: 'ארבעת כללי המיקום שאנחנו עובדים לפיהם', sub: 'ומה שקורה כשמתעלמים מהם', data: { cards: eyMountRules, cols: 3 as 3 } },
      { type: 'process',  heading: 'איך נראית קריאה באבן יהודה', data: eyProcess },
      { type: 'stats',    data: alarmStats },
    ];
  }
  if (slug === 'קודן-לרכב-ביהוד') {
    return [
      { type: 'features', heading: 'מה מרוקן מצבר של רכב שעומד', sub: 'ולמה הקודן הוא רק החוליה האחרונה בשרשרת', data: { cards: yehudDrainCards, cols: 3 as 3 } },
      { type: 'process',  heading: 'איך נראית התקנה ביהוד', data: yehudProcess },
      { type: 'stats',    data: alarmStats },
    ];
  }
  if (slug === 'קודן-לרכב-בבת-ים') {
    return [
      { type: 'tools',   heading: 'החיישנים שאנחנו עובדים איתם ומה כל אחד תופס', data: batYamSensors as unknown },
      { type: 'process', heading: 'איך נראה ביקור כיול בבת ים', data: batYamProcess },
      { type: 'stats',   data: alarmStats },
    ];
  }
  if (slug === 'קודן-לרכב-בנתניה') {
    return [
      { type: 'tools', heading: 'סוגי מערכות הקודן שאנחנו מתקינים', data: alarmTypes as unknown },
      { type: 'stats', data: alarmStats },
    ];
  }

  // Alarm - other city pages: בחירת פריסה דטרמיניסטית לפי ה-slug כדי שלא כל העמודים זהים
  if (slug.startsWith('קודן-לרכב-ב')) {
    let h = 0;
    for (let i = 0; i < slug.length; i++) h = (h + slug.charCodeAt(i)) % 3;
    if (h === 1) {
      return [
        { type: 'process',    heading: 'מרגע הפנייה ועד קודן מותקן', data: alarmProcess },
        { type: 'comparison', heading: 'קודן אצלנו מול מוסך או סוכנות', data: { colUs: 'מפתח עכשיו', colAlt: 'מוסך / סוכנות', rows: alarmComparison } },
        { type: 'stats',      data: alarmStats },
      ];
    }
    if (h === 2) {
      return [
        { type: 'tools',      heading: 'רמות המיגון שאנחנו מציעים', data: alarmTypes as unknown },
        { type: 'comparison', heading: 'למה לבחור בנו על פני מוסך', data: { colUs: 'מפתח עכשיו', colAlt: 'מוסך / סוכנות', rows: alarmComparison } },
      ];
    }
    return [
      { type: 'tools',   heading: 'סוגי מערכות הקודן שאנחנו מתקינים', data: alarmTypes as unknown },
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

  // Remote/shelt - with flip key image
  if (['תיקון-שלט-לרכב','שכפול-שלט-לרכב','קידוד-שלט-לרכב','שלט-לרכב-לא-עובד'].includes(slug)) {
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
