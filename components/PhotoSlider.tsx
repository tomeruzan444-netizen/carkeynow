'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import type { Gallery } from '@/lib/pageGallery';

/**
 * סליידר תמונות רספונסיבי לעמודי התוכן.
 *
 * - במובייל: החלקה באצבע (scroll-snap), תמונה אחת בכל פעם עם הצצה לבאה
 * - בדסקטופ: 2-3 תמונות בשורה + חיצי ניווט
 * - כשיש מעט תמונות מכפי שנכנסות למסך, המסילה לא נגללת והחיצים מוסתרים
 *
 * מספר העמודות נגזר ממספר התמונות בפועל כדי שלא יישאר חלל ריק בצד.
 */
export default function PhotoSlider({ gallery }: { gallery: Gallery }) {
  const { heading, sub, images } = gallery;
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);
  const [active, setActive] = useState(0);

  /* עמודות לפי מספר התמונות: אף פעם לא יותר עמודות מתמונות */
  const colsLg = Math.min(images.length, 3);
  const colsMd = Math.min(images.length, 2);
  const colsSm = images.length > 1 ? 1.15 : 1; // הצצה לתמונה הבאה רומזת שאפשר להחליק

  /* עדכון מצב החיצים והנקודות לפי מיקום הגלילה (תומך RTL) */
  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft); // מרחק מתחילת הרשימה, ללא תלות בכיוון
    setCanPrev(pos > 4);
    setCanNext(pos < max - 4);
    // מרחק בין שתי שקופיות = רוחב + מרווח, נמדד מהפריסה בפועל
    const a = el.children[0] as HTMLElement | undefined;
    const b = el.children[1] as HTMLElement | undefined;
    const step = a && b ? Math.abs(b.offsetLeft - a.offsetLeft) : a?.offsetWidth || 0;
    if (step > 0) setActive(Math.min(images.length - 1, Math.round(pos / step)));
  }, [images.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  /* גלילה של כ-85% מרוחב התצוגה. ב-RTL התקדמות = scrollLeft שלילי */
  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir === 'next' ? -step : step, behavior: 'smooth' });
  };

  /* קפיצה לתמונה מסוימת מלחיצה על נקודה.
     ב-RTL הגלילה מתחילה ב-0 ומתקדמת לערכים שליליים, ולכן ההיסט
     בין השקופית הראשונה ליעד הוא כבר ערך ה-scrollLeft הרצוי. */
  const goTo = (i: number) => {
    const el = trackRef.current;
    const first = el?.children[0] as HTMLElement | undefined;
    const slide = el?.children[i] as HTMLElement | undefined;
    if (!el || !first || !slide) return;
    el.scrollTo({ left: slide.offsetLeft - first.offsetLeft, behavior: 'smooth' });
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') { e.preventDefault(); scroll('next'); }
    if (e.key === 'ArrowRight') { e.preventDefault(); scroll('prev'); }
  };

  const scrollable = canPrev || canNext;

  return (
    <section
      dir="rtl"
      className="photo-slider my-7"
      aria-roledescription="carousel"
      aria-label={heading}
      style={{
        ['--pg-cols-sm' as string]: String(colsSm),
        ['--pg-cols-md' as string]: String(colsMd),
        ['--pg-cols-lg' as string]: String(colsLg),
      }}
    >
      <div className="mb-4">
        <h2 className="photo-slider-title">{heading}</h2>
        {sub && <p className="photo-slider-sub">{sub}</p>}
      </div>

      <div className="relative">
        {/* חץ אחורה (ימין ב-RTL) */}
        {scrollable && (
          <button
            type="button"
            aria-label="התמונה הקודמת"
            onClick={() => scroll('prev')}
            disabled={!canPrev}
            className="photo-arrow photo-arrow--prev"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        )}

        <div
          ref={trackRef}
          className="photo-track"
          tabIndex={0}
          role="group"
          aria-label="גלריית תמונות - אפשר להחליק לצדדים"
          onKeyDown={onKeyDown}
        >
          {images.map((img, i) => (
            <figure key={img.src + i} className="photo-slide">
              <div className="photo-frame">
                {/* רקע מטושטש מאותה תמונה - ממלא את המסגרת כשיחס הגובה-רוחב שונה */}
                <img src={img.src} alt="" aria-hidden="true" className="photo-blur" loading="lazy" />
                <img
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  decoding="async"
                  className="photo-img"
                />
              </div>
              <figcaption className="photo-caption">{img.caption}</figcaption>
            </figure>
          ))}
        </div>

        {/* חץ קדימה (שמאל ב-RTL) */}
        {scrollable && (
          <button
            type="button"
            aria-label="התמונה הבאה"
            onClick={() => scroll('next')}
            disabled={!canNext}
            className="photo-arrow photo-arrow--next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        )}
      </div>

      {/* נקודות ניווט - רק כשיש מה לגלול */}
      {scrollable && (
        <div className="photo-dots" role="tablist" aria-label="מעבר בין תמונות">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`תמונה ${i + 1} מתוך ${images.length}`}
              onClick={() => goTo(i)}
              className={`photo-dot${i === active ? ' is-active' : ''}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
