import Link from 'next/link';
import { SITE, NAV_SERVICES, NAV_CITIES, NAV_BRANDS, FOOTER_LINKS } from '@/lib/siteData';

const FOOTER_BRANDS = [
  { label: 'שכפול מפתחות לבמו',    href: '/שכפול-מפתח-לבמוו' },
  { label: 'שכפול מפתחות לסוזוקי', href: '/שכפול-מפתח-לסוזוקי' },
  { label: 'שכפול מפתחות ליונדאי', href: '/שכפול-מפתח-ליונדאי' },
  { label: 'שכפול מפתחות לפורד',   href: '/שכפול-מפתח-לפורד' },
  { label: 'שכפול מפתחות להונדה',  href: '/שכפול-מפתח-להונדה' },
  { label: 'שכפול מפתחות לסקודה',  href: '/שכפול-מפתח-לסקודה' },
  { label: 'שכפול מפתחות לסובארו', href: '/שכפול-מפתח-לסובארו' },
  { label: 'שכפול מפתחות לוולוו',  href: '/שכפול-מפתח-לוולוו' },
  { label: 'שכפול מפתחות לאופל',   href: '/שכפול-מפתח-לאופל' },
  { label: 'שכפול מפתחות לשברולט', href: '/שכפול-מפתח-לשברולט' },
];

const FOOTER_AREAS = [
  { label: 'שכפול מפתחות לרכב בירושלים',  href: '/שכפול-מפתח-לרכב-בירושלים' },
  { label: 'שכפול מפתחות לרכב בחולון',    href: '/שכפול-מפתח-לרכב-בחולון' },
  { label: 'שכפול מפתחות לרכב במודיעין',  href: '/שכפול-מפתח-לרכב-במודיעין' },
  { label: 'שכפול מפתחות לרכב בחדרה',     href: '/שכפול-מפתח-לרכב-בחדרה' },
  { label: 'שכפול מפתחות לרכב בראשון לציון', href: '/שכפול-מפתח-לרכב-בראשון-לציון' },
  { label: 'שכפול מפתחות לרכב ברמת גן',   href: '/שכפול-מפתח-לרכב-ברמת-גן' },
];

export default function Footer() {
  return (
    <footer dir="rtl" style={{ background: '#111827' }} className="text-gray-400 text-sm">
      {/* Highlight band: emergency 24/7 + mobile lab */}
      <div style={{ background: '#0d1320', borderBottom: '1px solid #1f2937' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#e8751a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              <div>
                <div className="text-white font-bold">שירות חירום 24/7 - כולל לילות ושבתות</div>
                <div className="mt-0.5">אנחנו זמינים מסביב לשעון, גם בלילה, בשבתות ובחגים - מתי שאתם נתקעים, אנחנו יוצאים אליכם.</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#e8751a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
              <div>
                <div className="text-white font-bold">מעבדה ניידת עד לבית הלקוח</div>
                <div className="mt-0.5">אנחנו מגיעים עם מעבדה ניידת הכוללת את כל הציוד המקצועי - עד הבית, מקום העבודה או כל מקום שהרכב נמצא בו.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Column 1: ניווט באתר */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">ניווט באתר</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition">עמוד הבית</Link></li>
              {FOOTER_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: מפתחות לרכבים */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">מפתחות לרכבים</h4>
            <ul className="space-y-2">
              {FOOTER_BRANDS.map((b) => (
                <li key={b.href + b.label}>
                  <Link href={b.href} className="hover:text-white transition">{b.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: אזורים נפוצים */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">אזורים נפוצים</h4>
            <ul className="space-y-2">
              {FOOTER_AREAS.map((a) => (
                <li key={a.href}>
                  <Link href={a.href} className="hover:text-white transition">{a.label}</Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/אודות" className="hover:text-white transition">אודות</Link>
              </li>
              <li>
                <Link href="/צרו-קשר" className="hover:text-white transition">יצירת קשר</Link>
              </li>
              <li>
                <Link href="/תנאי-שימוש" className="hover:text-white transition">תנאי השימוש</Link>
              </li>
              <li>
                <Link href="/מדיניות-פרטיות" className="hover:text-white transition">מדיניות הפרטיות</Link>
              </li>
              <li>
                <Link href="/הצהרת-נגישות" className="hover:text-white transition">הצהרת נגישות</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: שירותים */}
          <div>
            <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">שירותים</h4>
            <ul className="space-y-2">
              {NAV_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="hover:text-white transition">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social / review links */}
      <div style={{ background: '#0d1320', borderTop: '1px solid #1f2937' }} className="py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/carkeynow"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition hover:opacity-90"
                style={{ background: '#1877F2', color: '#fff' }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                פייסבוק
              </a>

              {/* Easy.co.il */}
              <a
                href="https://easy.co.il/page/10161378"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition hover:opacity-90"
                style={{ background: '#ff6600', color: '#fff' }}
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                </svg>
                המלצות באיזי
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-gray-500 text-center sm:text-right">
              <div>{SITE.copyright}</div>
              <div className="mt-0.5 flex flex-wrap gap-3 justify-center sm:justify-end">
                <a href={`tel:${SITE.phone}`} className="hover:text-white">{SITE.phoneDisplay}</a>
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
