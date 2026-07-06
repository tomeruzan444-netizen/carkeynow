import { AUTHOR } from '@/lib/author';

/** בייליין מחבר קצר בראש עמוד תוכן - חיזוק E-E-A-T */
export function AuthorByline() {
  return (
    <div dir="rtl" className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold shrink-0"
        style={{ background: 'var(--primary)' }}
        aria-hidden="true"
      >
        {AUTHOR.name.charAt(0)}
      </div>
      <div className="text-sm leading-tight">
        <span className="block text-gray-500">נכתב ונבדק על ידי</span>
        <span className="block font-bold" style={{ color: 'var(--primary)' }}>
          {AUTHOR.name} · {AUTHOR.jobTitle}
        </span>
      </div>
    </div>
  );
}

/** כרטיס מייסד לעמוד "אודות" */
export function FounderCard() {
  return (
    <div dir="rtl" className="card p-6 mt-6">
      <h2 className="text-xl font-bold mb-3" style={{ color: 'var(--primary)' }}>
        מי עומד מאחורי מפתח עכשיו
      </h2>
      <p className="text-gray-700 leading-relaxed mb-3">
        מפתח עכשיו נוסדה על ידי <strong>{AUTHOR.name}</strong>, מנעולן רכב מנוסה עם {AUTHOR.experience}
        {' '}בתחום שכפול, שחזור וקידוד מפתחות לרכב. {AUTHOR.name} הקים את מפתח עכשיו מתוך התמחות צרה וברורה -
        מנעולנות רכב בלבד - ומתוך אמונה שאפשר לתת שירות מהיר, מקצועי ושקוף ישירות בשטח, בלי לגרור את
        הרכב לסוכנות ובלי להמתין ימים.
      </p>
      <p className="text-gray-700 leading-relaxed">
        הניסיון הרב של {AUTHOR.name} מאפשר לנו לטפל בכל סוגי המפתחות - ממפתחות מכניים ישנים ועד מערכות Smart Key
        וקידוד רב-מודולרי ברכבים החדשים - ולהגיע לכל מקום בארץ, 24 שעות ביממה, כולל שבתות וחגים.
      </p>
    </div>
  );
}
