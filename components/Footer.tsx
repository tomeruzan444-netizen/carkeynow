import Link from 'next/link';
import { SITE, NAV_SERVICES, NAV_CITIES, NAV_BRANDS, FOOTER_LINKS } from '@/lib/siteData';

const FOOTER_BRANDS = [
  { label: 'שכפול מפתחות לבמו',    href: '/שכפול-מפתח-לרכב' },
  { label: 'שכפול מפתחות לסוזוקי', href: '/שכפול-מפתח-לסוזוקי' },
  { label: 'שכפול מפתחות ליונדאי', href: '/שכפול-מפתח-ליונדאי' },
  { label: 'שכפול מפתחות לפורד',   href: '/שכפול-מפתח-לפורד' },
  { label: 'שכפול מפתחות להונדה',  href: '/שכפול-מפתח-לרכב' },
  { label: 'שכפול מפתחות לסקודה',  href: '/שכפול-מפתח-לרכב' },
  { label: 'שכפול מפתחות לסובארו', href: '/שכפול-מפתח-לרכב' },
  { label: 'שכפול מפתחות לוולוו',  href: '/שכפול-מפתח-לרכב' },
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
              <li>
                <Link href="/לקוחות-ממליצים" className="hover:text-white transition">מפת האתר</Link>
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

      {/* Bottom bar */}
      <div style={{ background: '#0d1320' }} className="py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <span>{SITE.copyright} | כל הזכויות שמורות למפתח בקליק 2014 - 2026</span>
          <span className="flex gap-4">
            <span>משרדים: נחל איילון 20ב, צור יצחק</span>
            <a href={`tel:${SITE.phone}`} className="hover:text-white">טלפון: {SITE.phoneDisplay}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
