'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

/* ביקורות אמיתיות מפרופיל העסק בגוגל, מועתקות מילה במילה (כולל כתיב
   ופיסוק של הכותבים). אין לערוך את הטקסט ואין להוסיף ביקורת שלא
   הופיעה בפרופיל. החודש מחושב מהתאריך היחסי שגוגל הציג ב-27.11.2026.
   בכוונה אין סכמת Review: גוגל אינו מציג כוכבים לביקורות שעסק מפרסם
   על עצמו באתר שלו. */

export const GOOGLE_PROFILE_URL = 'https://www.google.com/maps?cid=8913413791239670434';

interface Review {
  name: string;
  meta: string;
  date: string;
  text: string;
  color: string;
  tag?: string;
}

const REVIEWS: Review[] = [
  { name: 'רון הרמות', meta: 'מדריך מקומי · 9 ביקורות', date: 'נובמבר 2026', color: '#ef6c00',
    text: 'חייב לכתוב המלצה חמה על מנעולן רכב מפתח עכשיו שהגיעו תוך דקות לבצע שחזור מפתח לרכב שלי ונתנו שירות מכל הלב והנשמה במחיר מדהים ממש תודה ממליץ למי שצריך מנעולן סמכותי ובעל ניסיון במחיר טוב' },
  { name: 'SHiputzman', meta: 'ביקורת אחת', date: 'נובמבר 2026', color: '#6d4c41',
    text: 'ממליץ בחום על מפתח עכשיו שירות זול ומקצועי' },
  { name: 'MASTER EDITOR', meta: '5 ביקורות', date: 'נובמבר 2026', color: '#00796b',
    text: 'דורון מצוות מפתח עכשיו הגיע תוך 20 דקות ושחזר לי מפתח בבית במקצועיות אני מאוד מרוצה מהשירות תודה!' },
  { name: 'Yatir Management', meta: '3 ביקורות', date: 'נובמבר 2026', color: '#7e57c2',
    text: 'שירות מומלץ מאוד, שכפלו לי מפתח במקום, בבאר שבע - אדיבות ומקצועיות, שירות מצויין בכללי' },
  { name: 'Shlomi Evgi', meta: '8 ביקורות', date: 'נובמבר 2026', color: '#2e7d32', tag: 'מחיר מעולה · 400-500 ₪',
    text: 'דורון מצוות מפתח עכשיו ענה לי לטלפון תחילה והגיע תוך 20 דקות לשחזר לי מפתח מ 0 כשלא היו בכלל מפתחות לרכב שלי, ללא ספק שירות מקצועי ואדיב ממליץ בחום למי שמחפש בעל מקצוע מקצועי מאוד במחיר מעולה' },
  { name: 'Moshe Yohananov', meta: '4 ביקורות', date: 'נובמבר 2026', color: '#5d4037',
    text: 'מומלץ ביותר, שירות אמין ומקצועי עד בית הלקוח ומנעולן רכב שלגמרי אפשר לסמוך עליו בעבודה הזאת אין כמוכם!' },
  { name: 'Tomer U', meta: 'ביקורת אחת', date: 'נובמבר 2026', color: '#0097a7',
    text: 'דורון ענה לנו מיד ועזר לנו דרך הטלפון לנתק את הקודן לרכב ובסוף אפילו לא לקח תשלום! אין על החברה האלה ממליץ בחום ובאהבה' },
  { name: 'Meitar Mayo', meta: '7 ביקורות', date: 'אוקטובר 2026', color: '#f4511e',
    text: 'ממליצה מאוד! מנעולן רכב שהגיע תוך 20 דקות לשחזר מפתח ליונדאי שלי, אין כמו מפתח עכשיו' },
  { name: 'Alon Tsoran', meta: 'מדריך מקומי · 32 ביקורות', date: 'אוקטובר 2026', color: '#455a64',
    text: '' },
];

function Stars({ size = 15 }: { size?: number }) {
  return (
    <span className="gr-stars" aria-label="5 מתוך 5 כוכבים" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#fbbc04" aria-hidden="true">
          <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleG({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

function ReviewCard({ r }: { r: Review }) {
  const [open, setOpen] = useState(false);
  const [long, setLong] = useState(false);
  const textRef = useRef<HTMLParagraphElement>(null);

  /* "להמשך קריאה" מופיע רק כשהטקסט באמת נחתך ברוחב הנוכחי */
  useEffect(() => {
    const el = textRef.current;
    if (!el || open) return;
    const check = () => setLong(el.scrollHeight > el.clientHeight + 2);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [open]);
  return (
    <article className="gr-card">
      <header className="gr-card-head">
        <span className="gr-avatar" style={{ background: r.color }} aria-hidden="true">
          {r.name.charAt(0).toUpperCase()}
        </span>
        <span className="gr-who">
          <span className="gr-name" dir="auto">{r.name}</span>
          <span className="gr-meta">{r.meta}</span>
        </span>
        <span className="gr-g"><GoogleG size={18} /></span>
      </header>

      <div className="gr-rating">
        <Stars />
        <span className="gr-date">{r.date}</span>
      </div>

      {r.tag && <span className="gr-tag">{r.tag}</span>}

      {r.text ? (
        <>
          <p ref={textRef} className={`gr-text${open ? '' : ' gr-text--clamp'}`}>{r.text}</p>
          {(long || open) && (
            <button type="button" className="gr-more" aria-expanded={open} onClick={() => setOpen(!open)}>
              {open ? 'הצגה מקוצרת' : 'להמשך קריאה'}
            </button>
          )}
        </>
      ) : (
        <p className="gr-text gr-text--empty">דירוג 5 כוכבים, בלי טקסט.</p>
      )}
    </article>
  );
}

export default function ReviewsSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateArrows = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const pos = Math.abs(el.scrollLeft); // מרחק מתחילת הרשימה, ללא תלות בכיוון RTL
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

  /* גלילה של כ-85% מרוחב התצוגה. ב-RTL התקדמות = scrollLeft שלילי */
  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    const step = Math.round(el.clientWidth * 0.85);
    el.scrollBy({ left: dir === 'next' ? -step : step, behavior: 'smooth' });
  };

  return (
    <section dir="rtl" aria-labelledby="gr-title" style={{ background: '#0d1320', borderBottom: '1px solid #1f2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="gr-top">
          <div className="gr-badge">
            <GoogleG size={30} />
            <div>
              <h2 id="gr-title" className="gr-title">מה לקוחות כתבו עלינו בגוגל</h2>
              <div className="gr-sub">
                <Stars size={17} />
                <span>ביקורות מפרופיל העסק בגוגל</span>
              </div>
            </div>
          </div>
          <a href={GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="gr-cta">
            לכל הביקורות בגוגל
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 6l-6 6 6 6" /></svg>
          </a>
        </div>

        <div className="relative">
          <button type="button" aria-label="ביקורות קודמות" onClick={() => scroll('prev')}
            disabled={!canPrev} className="brand-arrow brand-arrow--prev gr-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div ref={trackRef} className="brand-slider-track gr-track flex gap-4 overflow-x-auto py-2">
            {REVIEWS.map((r) => <ReviewCard key={r.name} r={r} />)}
          </div>

          <button type="button" aria-label="ביקורות נוספות" onClick={() => scroll('next')}
            disabled={!canNext} className="brand-arrow brand-arrow--next gr-arrow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
