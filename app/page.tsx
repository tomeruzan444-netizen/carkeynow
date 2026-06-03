import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import ContactForm from '@/components/ContactForm';
import { SITE, NAV_SERVICES, NAV_CITIES, NAV_BRANDS } from '@/lib/siteData';

export const metadata: Metadata = {
  title: `${SITE.name} | ${SITE.tagline}`,
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
  { title: 'מנעולן רכב',        href: '/שחזור-מפתח-לרכב',   desc: 'שחזור ושכפול מפתחות לכל סוגי הרכבים',            img: '/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp' },
  { title: 'אבד מפתח לרכב',     href: '/אבד-מפתח-לרכב',     desc: 'פתרון מיידי ומקצועי לאובדן מפתח הרכב',           img: '/wp-images/מפתח-עכשיו.webp' },
  { title: 'התקנת קודנים לרכב', href: '/התקנת-קודן-לרכב',   desc: 'התקנה, תיקון וניתוק מערכות קודן לכל הרכבים',     img: '/wp-images/קודן-לרכב-תקול.webp' },
  { title: 'תיקון קודנים לרכב', href: '/תיקון-קודן-לרכב',   desc: 'אבחון ותיקון כל תקלות הקודן במהירות',            img: '/wp-images/קודן-לרכב-בלאי.webp' },
  { title: 'שחזור מפתחות',       href: '/שחזור-מפתח-לרכב',   desc: 'שחזור מפתח גם ללא מפתח מקורי, 24/7',             img: '/wp-images/שכפול-מפתח-לרכב-מאזדה-מפתח-עכשיו.webp' },
];

const STATS = [
  { value: '10+',   label: 'שנות ניסיון' },
  { value: '24/7',  label: 'זמינות מלאה' },
  { value: '100%',  label: 'אחריות בכתב' },
  { value: '20 דק׳', label: 'זמן הגעה ממוצע' },
];

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
                <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold px-7 py-3 rounded-md transition text-base">
                  וואטסאפ
                </a>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 mt-8 text-center">
                {STATS.map((s) => (
                  <div key={s.label} className="bg-white/10 rounded-lg py-2 px-1">
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
        <h2 className="section-title">השירותים שלנו</h2>
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
          <h2 className="section-title">למה לבחור במפתח עכשיו?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: 'הגעה מהירה',      body: 'ממוצע 20 דקות הגעה לכל הארץ, 24/7' },
              { title: 'ציוד ממוחשב',     body: 'מכונות מתקדמות לכל סוגי הרכבים והדגמים' },
              { title: 'מחירים שקופים',   body: 'מחירון ברור ומראש, ללא הפתעות' },
              { title: 'אחריות בכתב',     body: 'אחריות מלאה על כל עבודה ועל הציוד' },
            ].map((f) => (
              <div key={f.title} className="card p-5">
                <div className="w-2 h-6 rounded mb-3" style={{ background: 'var(--accent)' }} />
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
          <h2 className="section-title mb-0">אזורי שירות</h2>
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
            <h2 className="section-title mb-0">שכפול מפתח לפי דגם רכב</h2>
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
          <h2 className="text-2xl font-bold mb-2">צריכים מנעולן רכב?</h2>
          <p className="opacity-80 mb-6 text-sm">זמינות מלאה 24/7, הגעה מהירה, מחיר הוגן</p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-lg px-10 py-3">
            {SITE.phoneDisplay}
          </a>
        </div>
      </section>
    </div>
  );
}
