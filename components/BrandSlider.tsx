'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Brand {
  name: string;
  logo: string;
  href: string;
}

/* כל יצרנית עם הלוגו והעמוד הייעודי שלה */
const BRANDS: Brand[] = [
  { name: 'פורד',     logo: '/wp-images/לוגו-פורד.webp',     href: '/שכפול-מפתח-לפורד' },
  { name: 'טויוטה',   logo: '/wp-images/לוגו-טויוטה.webp',   href: '/שכפול-מפתח-לטויוטה' },
  { name: 'יונדאי',   logo: '/wp-images/לוגו-יונדאי.webp',   href: '/שכפול-מפתח-ליונדאי' },
  { name: 'מאזדה',    logo: '/wp-images/לוגו-מאזדה.webp',    href: '/שכפול-מפתח-למאזדה' },
  { name: 'מיצובישי', logo: '/wp-images/לוגו-מיצובישי.webp', href: '/שכפול-מפתח-למיצובישי' },
  { name: 'ניסאן',    logo: '/wp-images/לוגו-ניסאן.webp',    href: '/שכפול-מפתח-לניסאן' },
  { name: 'קיה',      logo: '/wp-images/לוגו-קיה.webp',      href: '/שכפול-מפתח-לקיה' },
  { name: 'רנו',      logo: '/wp-images/לוגו-רנו.webp',      href: '/שכפול-מפתח-לרנו' },
  { name: 'שברולט',   logo: '/wp-images/לוגו-שברולט.webp',   href: '/שכפול-מפתח-לשברולט' },
  { name: 'אופל',     logo: '/wp-images/לוגו-אופל.webp',     href: '/שכפול-מפתח-לאופל' },
  { name: 'סוזוקי',   logo: '/wp-images/לוגו-סוזוקי.webp',   href: '/שכפול-מפתח-לסוזוקי' },
  { name: 'סיטרואן',  logo: '/wp-images/לוגו-סיטרואן.webp',  href: '/שכפול-מפתח-לסיטרואן' },
  { name: "פיג'ו",    logo: '/wp-images/לוגו-פיגו.webp',     href: '/שכפול-מפתח-לפיגו' },
  { name: 'גילי',     logo: '/wp-images/לוגו-גילי.webp',     href: '/שכפול-מפתח-לגילי' },
  { name: "דודג'",    logo: '/wp-images/לוגו-דודג.webp',     href: '/שכפול-מפתח-לדודג' },
  { name: 'דייהטסו',  logo: '/wp-images/לוגו-דייהטסו.webp',  href: '/שכפול-מפתח-לדייהטסו' },
  { name: 'קאדילק',   logo: '/wp-images/לוגו-קאדילק.webp',   href: '/שכפול-מפתח-לקאדילק' },
];

export default function BrandSlider({ inline = false }: { inline?: boolean }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  /* עדכון מצב החיצים לפי מיקום הגלילה (תומך RTL) */
  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft); // מרחק מתחילת הרשימה, ללא תלות בכיוון
    setCanPrev(pos > 4);
    setCanNext(pos < max - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows]);

  /* גלילה של כ-80% מרוחב התצוגה. ב-RTL התקדמות = scrollLeft שלילי */
  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.8);
    el.scrollBy({ left: dir === 'next' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section
      dir="rtl"
      className={
        inline
          ? 'brand-slider--inline py-4'
          : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12'
      }
    >
      {/* כותרת */}
      <div className={`text-center ${inline ? 'mb-5' : 'mb-7 md:mb-9'}`}>
        <h2
          className={`font-extrabold ${inline ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}
          style={{ color: 'var(--primary)' }}
        >
          שכפול מפתח לפי <span style={{ color: 'var(--accent)' }}>יצרנית הרכב</span>
        </h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 max-w-2xl mx-auto">
          בחרו את יצרנית הרכב שלכם וקבלו את כל המידע על שכפול מפתח, קידוד שלט ומחירים מעודכנים
        </p>
      </div>

      <div className="relative">
        {/* חץ אחורה (ימין ב-RTL) */}
        <button
          type="button"
          aria-label="היצרניות הקודמות"
          onClick={() => scroll('prev')}
          disabled={!canPrev}
          className="brand-arrow brand-arrow--prev"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        {/* מסילת הלוגואים */}
        <div ref={trackRef} className="brand-slider-track flex gap-3 sm:gap-4 overflow-x-auto py-2 px-1">
          {BRANDS.map((b) => (
            <Link
              key={b.href}
              href={b.href}
              className="brand-card group card flex flex-col items-center text-center p-4 sm:p-5 hover:shadow-xl"
              aria-label={`שכפול מפתח ${b.name}`}
            >
              {/* לוגו */}
              <div className="h-16 sm:h-20 w-full flex items-center justify-center">
                <img
                  src={b.logo}
                  alt={`לוגו ${b.name} - שכפול מפתח לרכב ${b.name}`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  style={{ filter: 'drop-shadow(0 1px 2px rgba(0,0,0,.06))' }}
                />
              </div>

              {/* טקסט */}
              <div className="mt-3 sm:mt-4 leading-tight">
                <span className="block text-xs text-gray-400 font-medium">שכפול מפתח</span>
                <span
                  className="block text-base sm:text-lg font-bold mt-0.5 transition-colors group-hover:text-orange-500"
                  style={{ color: 'var(--primary)' }}
                >
                  {b.name}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* חץ קדימה (שמאל ב-RTL) */}
        <button
          type="button"
          aria-label="היצרניות הבאות"
          onClick={() => scroll('next')}
          disabled={!canNext}
          className="brand-arrow brand-arrow--next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
}
