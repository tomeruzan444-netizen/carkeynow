import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'שכפול מפתח לרכב לפי דגם - כל סוגי המפתחות | מפתח עכשיו',
  description: 'שכפול מפתח לכל דגמי הרכב: טויוטה, יונדאי, מאזדה, ניסאן, שברולט, פורד ועוד. ציוד מתקדם, הגעה עד אליכם, מחירים שקופים.',
  alternates: { canonical: 'https://carkeynow.co.il/%D7%A1%D7%95%D7%92%D7%99-%D7%9E%D7%A4%D7%AA%D7%97%D7%95%D7%AA/' },
};

const BRANDS = [
  { label: 'שכפול מפתח לטויוטה',    href: '/שכפול-מפתח-לטויוטה',    models: 'קורולה, יאריס, RAV4, קאמרי, פריוס' },
  { label: 'שכפול מפתח ליונדאי',    href: '/שכפול-מפתח-ליונדאי',    models: 'i10, i20, i30, טוסון, סנטה פה' },
  { label: 'שכפול מפתח למאזדה',     href: '/שכפול-מפתח-למאזדה',     models: 'מאזדה 2, 3, 6, CX-5, MX-5' },
  { label: 'שכפול מפתח לניסאן',     href: '/שכפול-מפתח-לניסאן',     models: 'מיקרה, ג׳וק, קשקשאי, X-Trail' },
  { label: 'שכפול מפתח לרנו',       href: '/שכפול-מפתח-לרנו',       models: 'קליאו, מגאן, קפטור, קדג׳ר' },
  { label: 'שכפול מפתח לשברולט',    href: '/שכפול-מפתח-לשברולט',    models: 'קפטיבה, קרוז, ספארק, טראקס' },
  { label: 'שכפול מפתח לפורד',      href: '/שכפול-מפתח-לפורד',      models: 'פיאסטה, פוקוס, קוגה, מונדיאו' },
  { label: 'שכפול מפתח לפיגו',      href: '/שכפול-מפתח-לפיגו',      models: '208, 308, 3008, 5008, 106' },
  { label: 'שכפול מפתח לקיה',       href: '/שכפול-מפתח-לקיה',       models: 'פיקנטו, ריו, ספורטז׳, סורנטו' },
  { label: 'שכפול מפתח לסוזוקי',    href: '/שכפול-מפתח-לסוזוקי',    models: 'סוויפט, ויטרה, SX4, ג׳ימני' },
  { label: 'שכפול מפתח למיצובישי',  href: '/שכפול-מפתח-למיצובישי',  models: 'קולט, לנסר, אאוטלנדר, ASX' },
  { label: 'שכפול מפתח לסיטרואן',   href: '/שכפול-מפתח-לסיטרואן',   models: 'C3, C4, C5, C4 Cactus, Berlingo' },
  { label: 'שכפול מפתח לפיאט',      href: '/שכפול-מפתח-לפיאט',      models: 'פונטו, 500, טיפו, דובלו' },
  { label: 'שכפול מפתח למרצדס',     href: '/שכפול-מפתח-למרצדס',     models: 'A Class, C Class, E Class, GLC' },
  { label: 'שכפול מפתח למיני קופר', href: '/שכפול-מפתח-למיני-קופר', models: 'Mini One, Cooper, Clubman, Countryman' },
  { label: 'שכפול מפתח לקאדילק',    href: '/שכפול-מפתח-לקאדילק',    models: 'CTS, ATS, SRX, Escalade' },
  { label: 'שכפול מפתח לדייהטסו',   href: '/שכפול-מפתח-לדייהטסו',   models: 'קואה, סיריון, יריס' },
  { label: 'שכפול מפתח לאינפיניטי', href: '/שכפול-מפתח-לאינפיניטי', models: 'Q30, Q50, QX30, QX50, QX60' },
  { label: 'שכפול מפתח לפולקסווגן', href: '/שכפול-מפתח-לפולקסווגן', models: 'Golf, Passat, Tiguan, Polo, T-Roc' },
  { label: 'שכפול מפתח לאאודי',     href: '/שכפול-מפתח-לאאודי',     models: 'A3, A4, A6, Q5, Q7' },
  { label: 'שכפול מפתח ל-BMW',      href: '/שכפול-מפתח-לבמוו',      models: 'סדרה 1, 3, 5, X3, X5' },
  { label: 'שכפול מפתח להונדה',     href: '/שכפול-מפתח-להונדה',     models: "ציוויק, ג'אז, CR-V, HR-V" },
  { label: 'שכפול מפתח לסקודה',     href: '/שכפול-מפתח-לסקודה',     models: 'אוקטביה, פאביה, קודיאק, קאמיק' },
  { label: 'שכפול מפתח לסובארו',    href: '/שכפול-מפתח-לסובארו',    models: 'אאוטבק, פורסטר, XV, לגאסי' },
  { label: 'שכפול מפתח לוולוו',     href: '/שכפול-מפתח-לוולוו',     models: 'XC40, XC60, XC90, V40, S60' },
  { label: "שכפול מפתח לגי'לי",     href: '/שכפול-מפתח-לגילי',      models: 'אמגרנד, אטלס, CX-70' },
  { label: 'שכפול מפתח לביואיק',    href: '/שכפול-מפתח-לביואיק',    models: 'ואראנו, אנקלאב, LaCrosse' },
  { label: "שכפול מפתח לדודג'",     href: '/שכפול-מפתח-לדודג',      models: "ראם, צ'לנג'ר, צ'ארג'ר" },
  { label: "שכפול מפתח לצ'רי",      href: '/שכפול-מפתח-לצרי',       models: 'אריזו, טיגו, א5' },
  { label: 'שכפול מפתח לאופל',      href: '/שכפול-מפתח-לאופל',      models: 'קורסה, אסטרה, זאפירה, מוקה' },
  { label: "שכפול מפתח לג'יפ",      href: '/שכפול-מפתח-לגיפ',       models: "רנגלר, גרנד צ'ירוקי, קומפאס, רנגייד" },
  { label: "שכפול מפתח לדאצ'יה",    href: '/שכפול-מפתח-לדאציה',     models: 'דאסטר, סנדרו, לוגאן, ספרינג' },
  { label: 'שכפול מפתח לסיאט',      href: '/שכפול-מפתח-לסיאט',      models: 'איביזה, לאון, אטקה, ארונה, קופרה' },
];

const KEY_TYPES = [
  {
    title: 'מפתח מכאני',
    desc: 'מפתח פיזי ללא אלקטרוניקה. הנפוץ ברכבים לפני 2000. חיתוך פשוט תוך 10 דקות.',
    price: '₪150–₪250',
    time: '10–15 דק׳',
  },
  {
    title: 'מפתח טרנספונדר',
    desc: 'שבב אלקטרוני במפתח שמתקשר עם האימוביליזר. רוב הרכבים מ-2000 ואילך.',
    price: '₪400–₪700',
    time: '20–35 דק׳',
  },
  {
    title: 'מפתח הפוך (Flip Key)',
    desc: 'מפתח ושלט בגוף אחד מתקפל. נפוץ בפולקסווגן, אאודי, סקודה, פיאט.',
    price: '₪450–₪800',
    time: '25–40 דק׳',
  },
  {
    title: 'Smart Key / Keyless',
    desc: 'כניסה והצתה ללא הכנסת מפתח. תקשורת Keyless Entry/Go. דורש ציוד קידוד מתקדם.',
    price: '₪800–₪1,500',
    time: '40–60 דק׳',
  },
  {
    title: 'מפתח Proximity',
    desc: 'הרכב מזהה אתכם בקרבה. נפוץ בלקסוס, BMW, מרצדס, יונדאי חדשים.',
    price: '₪900–₪1,800',
    time: '45–60 דק׳',
  },
];

export default function KeyTypesPage() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <div style={{ background: 'var(--primary)' }} className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs mb-2 opacity-70">
            <Link href="/" className="hover:opacity-100">דף הבית</Link>
            <span className="mx-1">/</span>
            <span>שכפול מפתח לפי דגם רכב</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">כל הדגמים לכל הרכבים</h1>
          <p className="text-sm opacity-80">ציוד ממוחשב מתקדם לכל סוגי המפתחות. הגעה עד אליכם 24/7.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">

        {/* Key types overview */}
        <section>
          <h2 className="section-title">סוגי מפתחות שאנחנו משכפלים</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {KEY_TYPES.map((t) => (
              <div key={t.title} className="card p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-5 rounded shrink-0" style={{ background: 'var(--accent)' }} />
                  <h3 className="font-bold text-sm" style={{ color: 'var(--primary)' }}>{t.title}</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-3">{t.desc}</p>
                <div className="flex gap-3 text-xs">
                  <span className="font-bold" style={{ color: 'var(--accent)' }}>{t.price}</span>
                  <span className="text-gray-400">|</span>
                  <span className="text-gray-500">{t.time}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Brands grid */}
        <section>
          <h2 className="section-title">שכפול מפתח לפי יצרן רכב</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {BRANDS.map((b) => (
              <Link key={b.href} href={b.href}
                className="card p-4 hover:shadow-md transition group flex flex-col gap-1">
                <span className="font-bold text-sm group-hover:text-orange-500 transition"
                  style={{ color: 'var(--primary)' }}>{b.label}</span>
                <span className="text-xs text-gray-400">{b.models}</span>
              </Link>
            ))}
          </div>
        </section>

      </div>

      {/* CTA */}
      <div style={{ background: 'var(--primary)' }} className="text-white py-8 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-bold text-lg mb-4">לא מצאתם את הדגם שלכם? התקשרו</p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8">{SITE.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
