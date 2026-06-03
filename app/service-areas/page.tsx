import type { Metadata } from 'next';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export const metadata: Metadata = {
  title: 'אזורי שירות - מנעולן רכב בכל הארץ | מפתח עכשיו',
  description: 'שירותי מנעולן רכב בכל רחבי הארץ. שכפול מפתח, פורץ רכבים, קודן לרכב - בתל אביב, חיפה, ירושלים, באר שבע ועוד.',
  alternates: { canonical: 'https://carkeynow.co.il/%D7%90%D7%96%D7%95%D7%A8%D7%99-%D7%A9%D7%99%D7%A8%D7%95%D7%AA/' },
};

const KEY_CITIES = [
  { label: 'שכפול מפתח לרכב בבאר שבע',      href: '/שכפול-מפתח-לרכב-בבאר-שבע' },
  { label: 'שכפול מפתח לרכב בהוד השרון',    href: '/שכפול-מפתח-לרכב-בהוד-השרון' },
  { label: 'שכפול מפתח לרכב בחיפה',         href: '/שכפול-מפתח-לרכב-בחיפה' },
  { label: 'שכפול מפתח לרכב בירושלים',      href: '/שכפול-מפתח-לרכב-בירושלים' },
  { label: 'שכפול מפתח לרכב במודיעין',      href: '/שכפול-מפתח-לרכב-במודיעין' },
  { label: 'שכפול מפתח לרכב בנתניה',        href: '/שכפול-מפתח-לרכב-בנתניה' },
  { label: 'שכפול מפתח לרכב בראש העין',     href: '/שכפול-מפתח-לרכב-באש-העין' },
  { label: 'שכפול מפתח לרכב בנס ציונה',     href: '/שכפול-מפתח-לרכב-בנס-ציונה' },
  { label: 'שכפול מפתח לרכב ברמת גן',       href: '/שכפול-מפתח-לרכב-ברמת-גן' },
  { label: 'שכפול מפתח לרכב ברחובות',       href: '/שכפול-מפתח-לרכב-ברחובות' },
  { label: 'שכפול מפתח לרכב בתל אביב',      href: '/שכפול-מפתח-לרכב-בתל-אביב' },
  { label: 'שכפול מפתח לרכב בהרצליה',       href: '/שכפול-מפתח-לרכב-בהרצליה' },
  { label: 'שכפול מפתח לרכב בגבעתיים',      href: '/שכפול-מפתח-לרכב-בגבעתיים' },
  { label: 'שכפול מפתח לרכב בחדרה',         href: '/שכפול-מפתח-לרכב-בחדרה' },
  { label: 'שכפול מפתח לרכב בבת ים',        href: '/שכפול-מפתח-לרכב-בבת-ים' },
  { label: 'שכפול מפתח לרכב בראשון לציון',  href: '/שכפול-מפתח-לרכב-בראשון-לציון' },
  { label: 'שכפול מפתח לרכב בבאר יעקב',     href: '/שכפול-מפתח-לרכב-בבאר-יעקב' },
  { label: 'שכפול מפתח לרכב בעננה',         href: '/שכפול-מפתח-לרכב-בעננה' },
  { label: 'שכפול מפתח לרכב בחולון',        href: '/שכפול-מפתח-לרכב-בחולון' },
  { label: 'שכפול מפתח לרכב בלוד',          href: '/שכפול-מפתח-לרכב-בלוד' },
  { label: 'שכפול מפתח לרכב באשקלון',       href: '/שכפול-מפתח-לרכב-באשקלון' },
];

const LOCKOUT_CITIES = [
  { label: 'פורץ רכבים בתל אביב',     href: '/פורץ-רכבים-בתל-אביב' },
  { label: 'פורץ רכבים בהרצליה',      href: '/פורץ-רכבים-בהרצליה' },
  { label: 'פורץ רכבים בראשון לציון', href: '/פורץ-רכבים-בראשון-לציון' },
  { label: 'פורץ רכבים ברחובות',      href: '/פורץ-רכבים-ברחובות' },
  { label: 'פורץ רכבים בבאר שבע',     href: '/פורץ-רכבים-בבאר-שבע' },
  { label: 'פורץ רכבים ברמת גן',      href: '/פורץ-רכבים-ברמת-גן' },
  { label: 'פורץ רכבים בנתניה',       href: '/פורץ-רכבים-בנתניה' },
  { label: 'פורץ רכבים בקריות',       href: '/פורץ-רכבים-בקריות' },
];

const ALARM_CITIES = [
  { label: 'קודן לרכב בתל אביב',   href: '/קודן-לרכב-בתל-אביב' },
  { label: 'קודן לרכב בחיפה',      href: '/קודן-לרכב-בחיפה' },
  { label: 'קודן לרכב בירושלים',   href: '/קודן-לרכב-בירושלים' },
  { label: 'קודן לרכב בבאר שבע',   href: '/קודן-לרכב-בבאר-שבע' },
  { label: 'קודן לרכב ברמת גן',    href: '/קודן-לרכב-ברמת-גן' },
  { label: 'קודן לרכב במודיעין',   href: '/קודן-לרכב-במודיעין' },
  { label: 'קודן לרכב בפתח תקווה', href: '/קודן-לרכב-בפתח-תקווה' },
  { label: 'קודן לרכב בכפר סבא',   href: '/קודן-לרכב-בכפר-סבא' },
  { label: 'קודן לרכב ברעננה',     href: '/קודן-לרכב-ברעננה' },
  { label: 'קודן לרכב בחדרה',      href: '/קודן-לרכב-בחדרה' },
  { label: 'קודן לרכב בגבעתיים',   href: '/קודן-לרכב-בגבעתיים' },
  { label: 'קודן לרכב בבאר יעקב',  href: '/קודן-לרכב-בבאר-יעקב' },
];

function CityGrid({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-5 py-3 font-bold text-white text-sm" style={{ background: 'var(--primary)' }}>
        {title}
      </div>
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-1">
        {items.map((item) => (
          <Link key={item.href} href={item.href}
            className="px-3 py-2 rounded text-sm transition hover:bg-orange-50"
            style={{ color: 'var(--primary)' }}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function AreasPage() {
  return (
    <div dir="rtl">
      <div style={{ background: 'var(--primary)' }} className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs mb-2 opacity-70">
            <Link href="/" className="hover:opacity-100">דף הבית</Link>
            <span className="mx-1">/</span>
            <span>אזורי שירות</span>
          </nav>
          <h1 className="text-2xl md:text-3xl font-bold">אזורי שירות - מנעולן רכב בכל הארץ</h1>
          <p className="text-sm opacity-80 mt-2">
            אנחנו מגיעים לכל מקום בארץ - שכפול מפתחות, פורץ רכבים, קודן ועוד
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <CityGrid title="שכפול מפתח לרכב לפי עיר" items={KEY_CITIES} />
        <CityGrid title="פורץ רכבים לפי עיר" items={LOCKOUT_CITIES} />
        <CityGrid title="קודן לרכב לפי עיר" items={ALARM_CITIES} />
      </div>

      <div style={{ background: 'var(--primary)' }} className="text-white py-8 text-center">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-bold text-lg mb-4">לא מצאתם את העיר שלכם? התקשרו</p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8">{SITE.phoneDisplay}</a>
        </div>
      </div>
    </div>
  );
}
