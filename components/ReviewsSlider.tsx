'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

interface Review {
  name: string;
  text: string;
}

const REVIEWS: Review[] = [
  { name: 'יובל כהן', text: `איבדתי את המפתח בקניון ביום שישי, בדיוק כשכולם ממהרים הביתה. הייתי בטוח שהלך לי כל הסופ"ש. התקשרתי למפתח עכשיו, דורון חזר אליי תוך כמה דקות והגיע יחסית מהר. הוא שיחזר לי מפתח במקום, הסביר מה הוא עושה תוך כדי ולא הרגשתי שמנסים "לנפח" את הסיפור. הכל עבד בסוף כמו שצריך. באמת אחלה שירות.` },
  { name: 'מאיה לוי', text: `כבר כמעט השלמתי עם זה שאצטרך לגרור את הרכב למוסך. דיברתי עם כמה בעלי מקצוע לפני, וכל אחד זרק מחיר אחר וסיפור אחר. במפתח עכשיו קודם שאלו כמה שאלות, הבינו מה הבעיה ורק אז נתנו הצעת מחיר. בסוף בכלל לא היה צריך להחליף את כל מה שחשבו. שמחה שהגעתי אליהם.` },
  { name: 'אלון פרץ', text: `המפתח של היונדאי התחיל לעשות קטעים, פעם עובד ופעם לא. דורון בדק אותו כמה דקות ואמר שהבעיה בכלל לא במה שחשבתי. תיקן במקום, בדק כמה פעמים שהכל עובד ורק אז נסע. אהבתי בעיקר את זה שלא ניסה למכור לי משהו שלא הייתי צריך.` },
  { name: 'שני אברהם', text: `לאבד את המפתח היחיד לרכב זה אחד הדברים הכי מבאסים שקרו לי. הייתי בטוחה שזה הולך לקחת ימים. בפועל, באותו יום כבר היה לי מפתח חדש. כל ההתנהלות הייתה רגועה, בלי לחץ ובלי הבטחות מוגזמות. פשוט עשו את העבודה.` },
  { name: 'רועי חדד', text: `כבר חודש הייתי צריך לשחק עם המפתח כל פעם כדי שהרכב יניע. בסוף נשבר לי והתקשרתי למפתח עכשיו. דורון הסתכל על הסוויץ', אמר מה לדעתו הבעיה ותיקן אותה במקום. מאז כבר כמה שבועות שהכל עובד חלק.` },
  { name: 'נופר בן דוד', text: `לא היה לי זמן להסתובב בין חנויות בגלל העבודה, אז קבענו שיגיעו אליי. דורון הגיע בזמן, שכפל את המפתח ליד הרכב והראה לי שהכל עובד לפני שהוא הלך. חסך לי לא מעט כאב ראש.` },
  { name: 'עידו שרון', text: `אני בדרך כלל בודק ביקורות לפני שאני מזמין בעל מקצוע, והפעם הן באמת היו מוצדקות. הכל היה פשוט - ענו מהר, הגיעו בזמן, עשו את העבודה וזהו. בלי סיפורים ובלי למרוח זמן.` },
  { name: 'גלית מזרחי', text: `איבדתי את המפתח של האופנוע והייתי בטוחה שזה יהיה סיפור מסובך. בפועל זה היה הרבה יותר פשוט ממה שחשבתי. קבעו איתי, הגיעו, שיחזרו את המפתח והאופנוע הניע בלי בעיות. תודה רבה.` },
  { name: 'ברק רוזן', text: `המפתח פשוט הפסיק להגיב כשסיימתי פגישה. לא ידעתי אם הבעיה במפתח או ברכב. דורון הגיע, בדק כמה דברים ותוך זמן קצר כבר סידר את זה. הכי אהבתי שהוא הסביר מה הייתה התקלה ולא רק תיקן והלך.` },
  { name: 'ליאור ביטון', text: `יש בעלי מקצוע שאתה מסיים לעבוד איתם ונשאר עם סימני שאלה. פה היה בדיוק הפוך. הכל היה ברור מההתחלה - מה עושים, כמה זה עולה וכמה זמן זה ייקח. מבחינתי זה לא פחות חשוב מהעבודה עצמה.` },
  { name: 'שקד אמסלם', text: `מהשיחה הראשונה קיבלתי תחושה טובה. לא ניסו להלחיץ אותי ולא אמרו ישר "צריך להחליף הכל". בדקו קודם את הרכב, הסבירו מה באמת צריך לעשות ובזה זה נגמר. שירות הוגן וזה נדיר היום.` },
  { name: 'אופיר אוחנה', text: `יש לי רכב שלא כל אחד יודע לשכפל לו מפתח. כבר שמעתי יותר מפעם אחת "אנחנו לא מתעסקים עם הדגם הזה". דורון דווקא אמר שיבדוק, הגיע עם הציוד המתאים ותוך פחות משעה יצאתי עם מפתח חדש שעובד מצוין.` },
  { name: 'קרן ישראלי', text: `האמת שנכנסתי ללחץ כשהבנתי שאין לי בכלל מפתח ספייר. במפתח עכשיו הרגיעו אותי כבר בטלפון, קבעו איתי מהר ובסוף הכל הסתדר הרבה יותר מהר ממה שחשבתי. ממליצה.` },
  { name: 'תומר גבאי', text: `אני כמעט אף פעם לא משאיר ביקורות, אבל במקרה הזה באמת מגיע. דורון היה סבלני, לא מיהר, בדק כמה פעמים שהמפתח עובד גם בפתיחה וגם בהתנעה. שירות טוב ופשוט בן אדם נחמד.` },
  { name: 'מורן דיין', text: `הקודן ברכב התחיל לעשות בעיות והייתי בטוחה שזה הולך לעלות לי המון כסף. בסוף התברר שהפתרון היה הרבה יותר פשוט. אהבתי את הכנות ואת זה שלא ניסו להגדיל את התיקון סתם.` },
  { name: 'אלי סוויסה', text: `מצאתי את מפתח עכשיו במקרה דרך גוגל. בדרך כלל אני קצת סקפטי לגבי בעלי מקצוע מהאינטרנט, אבל הפעם באמת יצא טוב. הגיעו בזמן, עשו עבודה מסודרת והמחיר היה בדיוק כמו שסוכם בטלפון.` },
  { name: 'ספיר מלול', text: `רציתי רק לשכפל מפתח נוסף כדי שלא אתקע בעתיד. כל התהליך לקח פחות זמן ממה שחשבתי. דורון אפילו נתן לי כמה טיפים איך לשמור על המפתח כדי שלא ייהרס. שירות קטן אבל מאוד נחמד.` },
  { name: 'איילת ברק', text: `מה שהיה לי חשוב זה שמישהו יגיע מהר ולא אתחיל לרדוף אחרי בעלי מקצוע. דורון הגיע בזמן, עבד בשקט, בלי לחץ, ובסוף בדק איתי שהכל עובד לפני שנסע. בדיוק השירות שקיוויתי לקבל.` },
  { name: 'מתן אשכנזי', text: `התקשרתי בערב די מאוחר, לא באמת חשבתי שמישהו יענה. לשמחתי חזרו אליי מהר וקבענו. כבר באותו ערב סידרו לי את המפתח וחסכו לי יום שלם בלי רכב. שירות מצוין.` },
  { name: 'הדס בן עמי', text: `בסוף, מה שאני הכי זוכרת מכל הסיפור זה היחס. לא הרגשתי שמדברים אליי כמו עוד לקוחה בדרך. דורון היה סבלני, הסביר כל דבר, ענה גם על שאלות שלא ממש היו קשורות לתיקון עצמו. כשהכל נגמר הרגשתי שקיבלתי בדיוק את מה שהבטיחו לי, בלי הפתעות ובלי שטיקים.` },
];

function FiveStars({ size = 15 }: { size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 1.5 }} aria-label="דירוג 5 מתוך 5 כוכבים" role="img">
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 20 20" fill="#f5a927" aria-hidden="true">
          <path d="M10 1.6l2.47 5.01 5.53.8-4 3.9.94 5.5L10 14.2l-4.94 2.6.94-5.5-4-3.9 5.53-.8z" />
        </svg>
      ))}
    </div>
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
    <section dir="rtl" style={{ background: '#0d1320', borderBottom: '1px solid #1f2937' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        {/* כותרת + כוכבים */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-white font-extrabold text-2xl md:text-3xl">חלק מהממליצים עלינו</h2>
          <div className="flex justify-center mt-3">
            <FiveStars size={20} />
          </div>
        </div>

        <div className="relative">
          {/* חץ אחורה (ימין ב-RTL) */}
          <button
            type="button"
            aria-label="ביקורות קודמות"
            onClick={() => scroll('prev')}
            disabled={!canPrev}
            className="brand-arrow brand-arrow--prev"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          {/* מסילת הביקורות */}
          <div ref={trackRef} className="brand-slider-track flex gap-4 overflow-x-auto py-2 px-1">
            {REVIEWS.map((r, i) => (
              <article key={i} className="review-card">
                <FiveStars />
                <p className="review-card-text">{r.text}</p>
                <div className="review-card-author">
                  <span className="review-card-avatar" aria-hidden="true">{r.name.charAt(0)}</span>
                  <span>
                    <span className="review-card-name">{r.name}</span>
                    <span className="review-card-role">לקוח/ה מרוצה</span>
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* חץ קדימה (שמאל ב-RTL) */}
          <button
            type="button"
            aria-label="ביקורות נוספות"
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
      </div>
    </section>
  );
}
