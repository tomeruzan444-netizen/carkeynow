import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { SITE, NAV_SERVICES, NAV_CITIES, NAV_BRANDS } from '@/lib/siteData';

export const metadata: Metadata = {
  title: { absolute: 'מפתח עכשיו - מנעולן רכב 24/7 | שכפול מפתחות, שחזור ופריצת רכב בכל הארץ' },
  description: 'מנעולן רכב מקצועי בפריסה ארצית. שכפול מפתחות, שחזור מפתח לרכב, תיקון סוויץ, פורץ רכבים ועוד. זמינות 24/7.',
  alternates: { canonical: `${SITE.url}/` },
};

const HERO_SERVICES = [
  { label: 'שכפול מפתחות לאופנוע', href: '/שחזור-מפתח-לאופנוע' },
  { label: 'סוגי מפתחות',          href: '/סוגי-מפתחות' },
  { label: 'התקנת קודנים לרכב',    href: '/התקנת-קודן-לרכב' },
  { label: 'אזורים',               href: '/אזורי-שירות' },
  { label: 'פורץ רכבים',           href: '/פורץ-רכבים' },
  { label: 'אבד מפתח לרכב',        href: '/אבד-מפתח-לרכב' },
];

const SERVICES_GRID = [
  { title: 'פורץ רכבים',        href: '/פורץ-רכבים',        desc: 'פתיחת רכב נעול ללא נזק, הגעה תוך 20 דקות',       img: '/wp-images/שכפול-מפתח-לרכב-מפתח-עכשיו.webp' },
  { title: 'שחזור מפתח לרכב',   href: '/שחזור-מפתח-לרכב',   desc: 'שחזור ושכפול מפתחות לכל סוגי הרכבים',            img: '/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp' },
  { title: 'אבד מפתח לרכב',     href: '/אבד-מפתח-לרכב',     desc: 'פתרון מיידי ומקצועי לאובדן מפתח הרכב',           img: '/wp-images/מפתח-עכשיו.webp' },
  { title: 'התקנת קודנים לרכב', href: '/התקנת-קודן-לרכב',   desc: 'התקנה, תיקון וניתוק מערכות קודן לכל הרכבים',     img: '/wp-images/קודן-לרכב-תקול.webp' },
  { title: 'תיקון קודנים לרכב', href: '/תיקון-קודן-לרכב',   desc: 'אבחון ותיקון כל תקלות הקודן במהירות',            img: '/wp-images/קודן-לרכב-בלאי.webp' },
  { title: 'שחזור מפתחות',       href: '/שחזור-מפתח-לרכב',   desc: 'שחזור מפתח גם ללא מפתח מקורי, 24/7',             img: '/wp-images/שכפול-מפתח-לרכב-מאזדה-מפתח-עכשיו.webp' },
];

const STATS = [
  { value: '10+',   label: 'שנות ניסיון',     icon: 'award'  as IconName },
  { value: '24/7',  label: 'זמינות מלאה',     icon: 'clock'  as IconName },
  { value: '100%',  label: 'אחריות בכתב',     icon: 'shield' as IconName },
  { value: '20 דק׳', label: 'זמן הגעה ממוצע', icon: 'truck'  as IconName },
];

type IconName =
  | 'award' | 'clock' | 'shield' | 'truck' | 'wrench'
  | 'check' | 'pin' | 'car' | 'bolt' | 'chip' | 'tag' | 'phone' | 'key';

function Icon({ name, className, style }: { name: IconName; className?: string; style?: React.CSSProperties }) {
  const base = {
    className,
    style,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };
  switch (name) {
    case 'award':
      return (<svg {...base}><circle cx="12" cy="9" r="5" /><path d="M8.5 13L7 22l5-3 5 3-1.5-9" /></svg>);
    case 'clock':
      return (<svg {...base}><circle cx="12" cy="12" r="9" /><path d="M12 7.5v5l3.5 2" /></svg>);
    case 'shield':
      return (<svg {...base}><path d="M12 3l7 3v5c0 4.5-3 7.4-7 9-4-1.6-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></svg>);
    case 'truck':
      return (<svg {...base}><path d="M3 7h11v9H3z" /><path d="M14 10h3.5L21 13v3h-7" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /></svg>);
    case 'wrench':
      return (<svg {...base}><path d="M15.5 6.5a4 4 0 0 1-5.4 5.4L4 18l2 2 6.1-6.1a4 4 0 0 1 5.4-5.4l-2.4 2.4-2-2 2.4-2.4z" /></svg>);
    case 'check':
      return (<svg {...base}><circle cx="12" cy="12" r="9" /><path d="M8.5 12.5l2.5 2.5 4.5-5" /></svg>);
    case 'pin':
      return (<svg {...base}><path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></svg>);
    case 'car':
      return (<svg {...base}><path d="M5 13l1.6-4.6A2 2 0 0 1 8.5 7h7a2 2 0 0 1 1.9 1.4L19 13" /><path d="M4 13h16v4H4z" /><circle cx="7.5" cy="17.5" r="1.4" /><circle cx="16.5" cy="17.5" r="1.4" /></svg>);
    case 'bolt':
      return (<svg {...base}><path d="M13 2L4 14h6l-1 8 9-12h-6z" /></svg>);
    case 'chip':
      return (<svg {...base}><rect x="6" y="6" width="12" height="12" rx="2" /><rect x="9.5" y="9.5" width="5" height="5" rx="1" /><path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2" /></svg>);
    case 'tag':
      return (<svg {...base}><path d="M20 12l-8 8-8-8V4h8z" /><circle cx="8" cy="8" r="1.3" /></svg>);
    case 'phone':
      return (<svg {...base}><path d="M4 4h3.5l1.8 4.5-2.3 1.7a12 12 0 0 0 5.8 5.8l1.7-2.3L19 17.5V21a1 1 0 0 1-1 1A17 17 0 0 1 3 5a1 1 0 0 1 1-1z" /></svg>);
    case 'key':
      return (<svg {...base}><circle cx="8" cy="8" r="4" /><path d="M10.8 10.8L20 20M17 17l2-2M14.5 14.5l2-2" /></svg>);
  }
}

export default function HomePage() {
  return (
    <div dir="rtl">
      {/* ── Hero ── */}
      <section style={{ background: 'var(--primary)' }} className="relative overflow-hidden">
        {/* Background image with proper overlay */}
        <Image
          src="/wp-images/רקע-מפתח-עכשיו.webp"
          alt=""
          fill
          className="object-cover object-center"
          style={{ opacity: 0.18, mixBlendMode: 'luminosity' }}
          priority
        />
        {/* Gradient overlay for readability */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(30,74,114,0.92) 50%, rgba(30,74,114,0.75) 100%)' }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Hero text */}
            <div className="text-white">
              <div className="flex flex-wrap gap-2 mb-4">
                {HERO_SERVICES.map((s) => (
                  <Link key={s.href} href={s.href}
                    className="text-xs px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition">
                    {s.label}
                  </Link>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-3">
                מפתח עכשיו - מנעולן רכב בפריסה ארצית
              </h1>
              <p className="text-lg md:text-xl font-semibold opacity-90 mb-6">
                השאירו פרטים ומיד חוזרים!
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${SITE.phone}`}
                  style={{ background: 'var(--accent)' }}
                  className="btn-primary text-base px-7 py-3">
                  {SITE.phoneDisplay}
                </a>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mt-8 text-center">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-lg py-2.5 px-1">
                    <Icon name={s.icon} className="w-5 h-5 mx-auto mb-1" style={{ color: 'var(--accent)' }} />
                    <div className="text-xl font-extrabold" style={{ color: 'var(--accent)' }}>{s.value}</div>
                    <div className="text-xs opacity-75">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <ContactForm heading="הזמן מנעולן רכב" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="section-title flex items-center gap-2">
          <Icon name="wrench" className="w-6 h-6 shrink-0" style={{ color: 'var(--accent)' }} />
          השירותים שלנו
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES_GRID.map((s) => (
            <Link key={s.href + s.title} href={s.href}
              className="card overflow-hidden group flex flex-col hover:shadow-xl transition-shadow">
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-gray-100">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark gradient at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-16"
                  style={{ background: 'linear-gradient(transparent, rgba(30,74,114,0.7))' }} />
              </div>
              {/* Text */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-base mb-1.5 group-hover:text-orange-500 transition"
                  style={{ color: 'var(--primary)' }}>
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-snug flex-1">{s.desc}</p>
                <span className="mt-3 text-xs font-semibold inline-flex items-center gap-1"
                  style={{ color: 'var(--accent)' }}>
                  לפרטים נוספים
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Why us ── */}
      <section style={{ background: '#eef4fb' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title flex items-center gap-2">
            <Icon name="check" className="w-6 h-6 shrink-0" style={{ color: 'var(--accent)' }} />
            למה לבחור במפתח עכשיו?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {([
              { title: 'הגעה מהירה',      body: 'ממוצע 20 דקות הגעה לכל הארץ, 24/7',       icon: 'bolt'   as IconName },
              { title: 'ציוד ממוחשב',     body: 'מכונות מתקדמות לכל סוגי הרכבים והדגמים', icon: 'chip'   as IconName },
              { title: 'מחירים שקופים',   body: 'מחירון ברור ומראש, ללא הפתעות',          icon: 'tag'    as IconName },
              { title: 'אחריות בכתב',     body: 'אחריות מלאה על כל עבודה ועל הציוד',       icon: 'shield' as IconName },
            ]).map((f) => (
              <div key={f.title} className="card p-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: '#fff5eb' }}>
                  <Icon name={f.icon} className="w-6 h-6" style={{ color: 'var(--accent)' }} />
                </div>
                <h3 className="font-bold mb-1" style={{ color: 'var(--primary)' }}>{f.title}</h3>
                <p className="text-sm text-gray-500">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cities ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-4">
          <h2 className="section-title mb-0 flex items-center gap-2">
            <Icon name="pin" className="w-6 h-6 shrink-0" style={{ color: 'var(--accent)' }} />
            אזורי שירות
          </h2>
          <Link href="/אזורי-שירות" className="text-sm font-semibold hover:underline"
            style={{ color: 'var(--accent)' }}>
            כל האזורים
          </Link>
        </div>
        <div className="flex flex-wrap gap-2">
          {NAV_CITIES.map((c) => (
            <Link key={c.href} href={c.href} className="pill-primary">
              {c.label}
            </Link>
          ))}
        </div>
      </section>

      {/* ── Brands ── */}
      <section style={{ background: '#f0f4f9' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title mb-0 flex items-center gap-2">
              <Icon name="car" className="w-6 h-6 shrink-0" style={{ color: 'var(--accent)' }} />
              שכפול מפתח לפי דגם רכב
            </h2>
            <Link href="/סוגי-מפתחות" className="text-sm font-semibold hover:underline"
              style={{ color: 'var(--accent)' }}>
              כל הדגמים
            </Link>
          </div>
          <div className="flex flex-wrap gap-2">
            {NAV_BRANDS.map((b) => (
              <Link key={b.href} href={b.href} className="pill-brand">
                {b.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section style={{ background: 'var(--primary)' }} className="py-10 text-center text-white">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
            <Icon name="key" className="w-6 h-6 shrink-0" style={{ color: 'var(--accent)' }} />
            צריכים מנעולן רכב?
          </h2>
          <p className="opacity-80 mb-6 text-sm">זמינות מלאה 24/7, הגעה מהירה, מחיר הוגן</p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-lg px-10 py-3 inline-flex items-center gap-2">
            <Icon name="phone" className="w-5 h-5 shrink-0" />
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
