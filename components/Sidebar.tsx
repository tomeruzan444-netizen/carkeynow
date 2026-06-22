import Link from 'next/link';
import ContactForm from './ContactForm';

// ─── Types ──────────────────────────────────────────────────────────
interface NavItem { label: string; href: string }
interface Block { title: string; items: NavItem[] }

// ─── Data pools ─────────────────────────────────────────────────────

const CITIES_KEY: NavItem[] = [
  { label: 'שכפול מפתח בתל אביב',    href: '/שכפול-מפתח-לרכב-בתל-אביב' },
  { label: 'שכפול מפתח בחיפה',       href: '/שכפול-מפתח-לרכב-בחיפה' },
  { label: 'שכפול מפתח בירושלים',    href: '/שכפול-מפתח-לרכב-בירושלים' },
  { label: 'שכפול מפתח בבאר שבע',    href: '/שכפול-מפתח-לרכב-בבאר-שבע' },
  { label: 'שכפול מפתח ברחובות',     href: '/שכפול-מפתח-לרכב-ברחובות' },
  { label: 'שכפול מפתח בנתניה',      href: '/שכפול-מפתח-לרכב-בנתניה' },
  { label: 'שכפול מפתח ברמת גן',     href: '/שכפול-מפתח-לרכב-ברמת-גן' },
  { label: 'שכפול מפתח בהרצליה',     href: '/שכפול-מפתח-לרכב-בהרצליה' },
  { label: 'שכפול מפתח בהוד השרון',  href: '/שכפול-מפתח-לרכב-בהוד-השרון' },
  { label: 'שכפול מפתח במודיעין',    href: '/שכפול-מפתח-לרכב-במודיעין' },
  { label: 'שכפול מפתח בראשון לציון',href: '/שכפול-מפתח-לרכב-בראשון-לציון' },
  { label: 'שכפול מפתח בנס ציונה',   href: '/שכפול-מפתח-לרכב-בנס-ציונה' },
  { label: 'שכפול מפתח בגבעתיים',    href: '/שכפול-מפתח-לרכב-בגבעתיים' },
  { label: 'שכפול מפתח בחדרה',       href: '/שכפול-מפתח-לרכב-בחדרה' },
  { label: 'שכפול מפתח בבת ים',      href: '/שכפול-מפתח-לרכב-בבת-ים' },
  { label: 'שכפול מפתח באשקלון',     href: '/שכפול-מפתח-לרכב-באשקלון' },
  { label: 'שכפול מפתח באבן יהודה',  href: '/שכפול-מפתח-לרכב-באבן-יהודה' },
  { label: 'שכפול מפתח באור יהודה',  href: '/שכפול-מפתח-לרכב-באור-יהודה' },
];

const BRANDS: NavItem[] = [
  { label: 'שכפול מפתח לטויוטה',     href: '/שכפול-מפתח-לטויוטה' },
  { label: 'שכפול מפתח ליונדאי',     href: '/שכפול-מפתח-ליונדאי' },
  { label: 'שכפול מפתח למאזדה',      href: '/שכפול-מפתח-למאזדה' },
  { label: 'שכפול מפתח לניסאן',      href: '/שכפול-מפתח-לניסאן' },
  { label: 'שכפול מפתח לרנו',        href: '/שכפול-מפתח-לרנו' },
  { label: 'שכפול מפתח לשברולט',     href: '/שכפול-מפתח-לשברולט' },
  { label: 'שכפול מפתח לפורד',       href: '/שכפול-מפתח-לפורד' },
  { label: 'שכפול מפתח לפיגו',       href: '/שכפול-מפתח-לפיגו' },
  { label: 'שכפול מפתח לקיה',        href: '/שכפול-מפתח-לקיה' },
  { label: 'שכפול מפתח לסוזוקי',     href: '/שכפול-מפתח-לסוזוקי' },
  { label: 'שכפול מפתח למיצובישי',   href: '/שכפול-מפתח-למיצובישי' },
  { label: 'שכפול מפתח לסיטרואן',    href: '/שכפול-מפתח-לסיטרואן' },
  { label: 'שכפול מפתח לפיאט',       href: '/שכפול-מפתח-לפיאט' },
  { label: 'שכפול מפתח למרצדס',      href: '/שכפול-מפתח-למרצדס' },
  { label: "שכפול מפתח לגי'לי",      href: '/שכפול-מפתח-לגילי' },
  { label: 'שכפול מפתח לדייהטסו',    href: '/שכפול-מפתח-לדייהטסו' },
  { label: 'שכפול מפתח לאינפיניטי',  href: '/שכפול-מפתח-לאינפיניטי' },
  { label: 'שכפול מפתח לביואיק',     href: '/שכפול-מפתח-לביואיק' },
  { label: 'שכפול מפתח ל-BMW',       href: '/שכפול-מפתח-לבמוו' },
  { label: 'שכפול מפתח להונדה',      href: '/שכפול-מפתח-להונדה' },
  { label: 'שכפול מפתח לסקודה',      href: '/שכפול-מפתח-לסקודה' },
  { label: 'שכפול מפתח לסובארו',     href: '/שכפול-מפתח-לסובארו' },
  { label: 'שכפול מפתח לוולוו',      href: '/שכפול-מפתח-לוולוו' },
  { label: "שכפול מפתח לג'יפ",       href: '/שכפול-מפתח-לגיפ' },
  { label: "שכפול מפתח לדאצ'יה",     href: '/שכפול-מפתח-לדאציה' },
  { label: 'שכפול מפתח לסיאט',       href: '/שכפול-מפתח-לסיאט' },
];

const KODAN_SERVICES: NavItem[] = [
  { label: 'התקנת קודן לרכב',   href: '/התקנת-קודן-לרכב' },
  { label: 'תיקון קודן לרכב',   href: '/תיקון-קודן-לרכב' },
  { label: 'ניתוק קודן לרכב',   href: '/ניתוק-קודן-לרכב' },
  { label: 'קודן לרכב מצפצף',   href: '/קודן-לרכב-מצפצף-2' },
];

const KODAN_CITIES: NavItem[] = [
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
  { label: 'קודן לרכב במודיעין 2', href: '/קודן-לרכב-במודיעין-2' },
];

const LOCKOUT_CITIES: NavItem[] = [
  { label: 'פורץ רכבים בתל אביב',     href: '/פורץ-רכבים-בתל-אביב' },
  { label: 'פורץ רכבים בהרצליה',      href: '/פורץ-רכבים-בהרצליה' },
  { label: 'פורץ רכבים בראשון לציון', href: '/פורץ-רכבים-בראשון-לציון' },
  { label: 'פורץ רכבים ברחובות',      href: '/פורץ-רכבים-ברחובות' },
  { label: 'פורץ רכבים בבאר שבע',     href: '/פורץ-רכבים-בבאר-שבע' },
  { label: 'פורץ רכבים ברמת גן',      href: '/פורץ-רכבים-ברמת-גן' },
  { label: 'פורץ רכבים בנתניה',       href: '/פורץ-רכבים-בנתניה' },
  { label: 'פורץ רכבים בקריות',       href: '/פורץ-רכבים-בקריות' },
];

const SVITZ_RELATED: NavItem[] = [
  { label: 'תיקון סוויץ לרכב',   href: '/תיקון-סוויץ-לרכב' },
  { label: 'מפתח תקוע בסוויץ',   href: '/מפתח-תקוע-בסוויץ' },
  { label: 'שחזור מפתח לרכב',    href: '/שחזור-מפתח-לרכב' },
  { label: 'אבד מפתח לרכב',      href: '/אבד-מפתח-לרכב' },
  { label: 'שכפול מפתח לרכב',    href: '/שכפול-מפתח-לרכב' },
];

const SHELT_RELATED: NavItem[] = [
  { label: 'תיקון שלט לרכב',   href: '/תיקון-שלט-לרכב' },
  { label: 'שכפול שלט לרכב',   href: '/שכפול-שלט-לרכב' },
  { label: 'קידוד שלט לרכב',   href: '/קידוד-שלט-לרכב' },
  { label: 'התקנת קודן לרכב',  href: '/התקנת-קודן-לרכב' },
  { label: 'שכפול מפתח לרכב',  href: '/שכפול-מפתח-לרכב' },
];

const KEY_SERVICES: NavItem[] = [
  { label: 'שכפול מפתח לרכב',   href: '/שכפול-מפתח-לרכב' },
  { label: 'שחזור מפתח לרכב',   href: '/שחזור-מפתח-לרכב' },
  { label: 'אבד מפתח לרכב',     href: '/אבד-מפתח-לרכב' },
  { label: 'שכפול שלט לרכב',    href: '/שכפול-שלט-לרכב' },
  { label: 'תיקון שלט לרכב',    href: '/תיקון-שלט-לרכב' },
  { label: 'פורץ רכבים',        href: '/פורץ-רכבים' },
];

const MOTO_RELATED: NavItem[] = [
  { label: 'שחזור מפתח לאופנוע', href: '/שחזור-מפתח-לאופנוע' },
  { label: 'פריצת כיסא אופנוע',  href: '/פריצת-כיסא-אופנוע' },
  { label: 'שכפול מפתח לרכב',    href: '/שכפול-מפתח-לרכב' },
  { label: 'פורץ רכבים',         href: '/פורץ-רכבים' },
];

const GENERAL_SERVICES: NavItem[] = [
  { label: 'שחזור מפתח לרכב',   href: '/שחזור-מפתח-לרכב' },
  { label: 'שכפול מפתח לרכב',   href: '/שכפול-מפתח-לרכב' },
  { label: 'תיקון סוויץ לרכב',  href: '/תיקון-סוויץ-לרכב' },
  { label: 'התקנת קודן לרכב',   href: '/התקנת-קודן-לרכב' },
  { label: 'פורץ רכבים',        href: '/פורץ-רכבים' },
  { label: 'אבד מפתח לרכב',     href: '/אבד-מפתח-לרכב' },
  { label: 'שכפול שלט לרכב',    href: '/שכפול-שלט-לרכב' },
  { label: 'תיקון שלט לרכב',    href: '/תיקון-שלט-לרכב' },
];

// ─── Sidebar logic ───────────────────────────────────────────────────

function getBlocks(slug: string): Block[] {
  // City key duplication (שכפול מפתח לרכב בעיר)
  if (slug.startsWith('שכפול-מפתח-לרכב-ב')) {
    return [
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.filter(c => c.href !== `/${slug}`) },
      { title: 'שכפול מפתח לפי דגם רכב', items: BRANDS.slice(0, 12) },
      { title: 'שירותים נוספים', items: KEY_SERVICES },
    ];
  }

  // Brand pages (שכפול מפתח לדגם)
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) {
    return [
      { title: 'שכפול מפתח לדגמים נוספים', items: BRANDS.filter(b => b.href !== `/${slug}`) },
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 10) },
      { title: 'שירותים קשורים', items: KEY_SERVICES },
    ];
  }

  // Switch-related
  if (slug === 'תיקון-סוויץ-לרכב' || slug === 'מפתח-תקוע-בסוויץ') {
    return [
      { title: 'שירותי סוויץ ומפתח', items: SVITZ_RELATED.filter(s => s.href !== `/${slug}`) },
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 8) },
      { title: 'שכפול מפתח לפי דגם', items: BRANDS.slice(0, 8) },
    ];
  }

  // Alarm installation
  if (slug === 'התקנת-קודן-לרכב') {
    return [
      { title: 'שירותי קודן לרכב', items: KODAN_SERVICES.filter(k => k.href !== `/${slug}`) },
      { title: 'קודן לרכב לפי עיר', items: KODAN_CITIES.slice(0, 10) },
      { title: 'שירותים נוספים', items: KEY_SERVICES.slice(0, 5) },
    ];
  }

  // Alarm disconnect / repair / whistling
  if (slug === 'ניתוק-קודן-לרכב' || slug === 'תיקון-קודן-לרכב' || slug === 'קודן-לרכב-מצפצף-2') {
    return [
      { title: 'שירותי קודן לרכב', items: KODAN_SERVICES.filter(k => k.href !== `/${slug}`) },
      { title: 'קודן לרכב לפי עיר', items: KODAN_CITIES },
      { title: 'שירותים קשורים', items: KEY_SERVICES.slice(0, 5) },
    ];
  }

  // Alarm city pages
  if (slug.startsWith('קודן-לרכב-ב')) {
    return [
      { title: 'שירותי קודן לרכב', items: KODAN_SERVICES },
      { title: 'קודן לפי ערים נוספות', items: KODAN_CITIES.filter(c => c.href !== `/${slug}`) },
      { title: 'שכפול מפתח בערים', items: CITIES_KEY.slice(0, 6) },
    ];
  }

  // Vehicle lockout main
  if (slug === 'פורץ-רכבים') {
    return [
      { title: 'פורץ רכבים לפי עיר', items: LOCKOUT_CITIES },
      { title: 'שירותים קשורים', items: [
        { label: 'אבד מפתח לרכב',    href: '/אבד-מפתח-לרכב' },
        { label: 'שחזור מפתח לרכב',  href: '/שחזור-מפתח-לרכב' },
        { label: 'שכפול מפתח לרכב',  href: '/שכפול-מפתח-לרכב' },
        { label: 'תיקון סוויץ לרכב', href: '/תיקון-סוויץ-לרכב' },
      ]},
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 8) },
    ];
  }

  // Vehicle lockout by city
  if (slug.startsWith('פורץ-רכבים-ב')) {
    return [
      { title: 'פורץ רכבים לפי ערים נוספות', items: LOCKOUT_CITIES.filter(c => c.href !== `/${slug}`) },
      { title: 'שירותים קשורים', items: [
        { label: 'אבד מפתח לרכב',    href: '/אבד-מפתח-לרכב' },
        { label: 'שחזור מפתח לרכב',  href: '/שחזור-מפתח-לרכב' },
        { label: 'שכפול מפתח לרכב',  href: '/שכפול-מפתח-לרכב' },
        { label: 'תיקון סוויץ לרכב', href: '/תיקון-סוויץ-לרכב' },
        { label: 'פורץ רכבים',       href: '/פורץ-רכבים' },
      ]},
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 6) },
    ];
  }

  // Remote / shelt
  if (['תיקון-שלט-לרכב','שכפול-שלט-לרכב','קידוד-שלט-לרכב'].includes(slug)) {
    return [
      { title: 'שירותי שלט לרכב', items: SHELT_RELATED.filter(s => s.href !== `/${slug}`) },
      { title: 'שכפול מפתח לפי דגם', items: BRANDS.slice(0, 10) },
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 8) },
    ];
  }

  // Motorcycle
  if (slug === 'שחזור-מפתח-לאופנוע' || slug === 'פריצת-כיסא-אופנוע') {
    return [
      { title: 'שירותי אופנוע', items: MOTO_RELATED.filter(m => m.href !== `/${slug}`) },
      { title: 'שירותים לרכב', items: KEY_SERVICES },
    ];
  }

  // Lost key / recovery
  if (slug === 'אבד-מפתח-לרכב' || slug === 'שחזור-מפתח-לרכב') {
    return [
      { title: 'שירותי מפתח קשורים', items: [
        { label: 'שכפול מפתח לרכב',  href: '/שכפול-מפתח-לרכב' },
        { label: 'פורץ רכבים',       href: '/פורץ-רכבים' },
        { label: 'תיקון סוויץ לרכב', href: '/תיקון-סוויץ-לרכב' },
        { label: 'שחזור מפתח לאופנוע', href: '/שחזור-מפתח-לאופנוע' },
      ].filter(s => s.href !== `/${slug}`)},
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 10) },
      { title: 'שכפול מפתח לפי דגם', items: BRANDS.slice(0, 10) },
    ];
  }

  // Main key duplication page
  if (slug === 'שכפול-מפתח-לרכב') {
    return [
      { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY },
      { title: 'שכפול מפתח לפי דגם רכב', items: BRANDS },
      { title: 'שירותים נוספים', items: KEY_SERVICES.filter(s => s.href !== `/${slug}`) },
    ];
  }

  // Static / general
  return [
    { title: 'השירותים שלנו', items: GENERAL_SERVICES },
    { title: 'שכפול מפתח לפי עיר', items: CITIES_KEY.slice(0, 8) },
    { title: 'שכפול מפתח לפי דגם', items: BRANDS.slice(0, 8) },
  ];
}

// ─── Sidebar block component ─────────────────────────────────────────

function SidebarBlock({ title, items, currentSlug }: { title: string; items: NavItem[]; currentSlug: string }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-4 py-2.5 text-white text-sm font-bold"
        style={{ background: 'var(--primary)' }}>
        {title}
      </div>
      <ul className="divide-y" style={{ borderColor: 'var(--border)' }}>
        {items.map((item) => {
          const isActive = item.href === `/${currentSlug}` || item.href === `/${currentSlug}/`;
          return (
            <li key={item.href}>
              <Link href={item.href}
                className={`sidebar-link flex items-center gap-1.5 ${isActive ? 'active font-semibold' : ''}`}>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: 'var(--accent)' }} />
                )}
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// ─── Phone CTA block ─────────────────────────────────────────────────

function PhoneCta() {
  return (
    <div className="card p-4 text-sm text-center" dir="rtl">
      <p className="font-bold mb-1" style={{ color: 'var(--primary)' }}>מנעולן רכב 24/7</p>
      <p className="text-gray-400 text-xs mb-3">הגעה תוך 20 דקות בממוצע</p>
      <a href="tel:033822752" className="block w-full py-2 rounded font-bold text-white text-sm"
        style={{ background: 'var(--accent)' }}>
        03-382-2752
      </a>
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────

export function detectGroup(slug: string): string {
  if (slug.startsWith('שכפול-מפתח-לרכב-ב')) return 'city-key';
  if (slug.startsWith('פורץ-רכבים-ב')) return 'city-lockout';
  if (slug.startsWith('קודן-לרכב-ב') || slug === 'קודן-לרכב-מצפצף-2') return 'city-alarm';
  if (slug.startsWith('שכפול-מפתח-ל') && !slug.startsWith('שכפול-מפתח-לרכב')) return 'brand';
  return 'service';
}

export default function Sidebar({ currentSlug }: { currentSlug: string; group?: string }) {
  const blocks = getBlocks(currentSlug);

  return (
    <aside className="space-y-4" dir="rtl">
      <ContactForm compact />
      <PhoneCta />
      {blocks.map((block) => (
        <SidebarBlock
          key={block.title}
          title={block.title}
          items={block.items}
          currentSlug={currentSlug}
        />
      ))}
    </aside>
  );
}
