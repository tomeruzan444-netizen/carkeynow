import { AUTHOR } from '@/lib/author';

/** בייליין מחבר קצר בראש עמוד תוכן - חיזוק E-E-A-T */
export function AuthorByline() {
  return (
    <div dir="rtl" className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
      <img
        src={AUTHOR.photo}
        alt={`${AUTHOR.name} - ${AUTHOR.jobTitle}`}
        width={40}
        height={40}
        loading="lazy"
        className="w-10 h-10 rounded-full object-cover shrink-0 ring-1 ring-black/5"
      />
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
      <div className="flex items-center gap-4 mb-4">
        <img
          src={AUTHOR.photo}
          alt={`${AUTHOR.name} - מייסד מפתח עכשיו, ${AUTHOR.jobTitle}`}
          width={72}
          height={72}
          loading="lazy"
          className="w-18 h-18 rounded-full object-cover shrink-0 ring-2 ring-black/5"
          style={{ width: 72, height: 72 }}
        />
        <div>
          <h2 className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
            מי עומד מאחורי מפתח עכשיו
          </h2>
          <p className="text-sm text-gray-500 mt-0.5">{AUTHOR.name} · {AUTHOR.jobTitle}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed mb-3">
        מפתח עכשיו נוסדה על ידי <strong>{AUTHOR.name}</strong>, מנעולן רכב מנוסה עם {AUTHOR.experience}
        {' '}בתחום שכפול, שחזור וקידוד מפתחות לרכב. {AUTHOR.name} הקים את מפתח עכשיו מתוך התמחות צרה וברורה -
        מנעולנות רכב בלבד - ומתוך אמונה שאפשר לתת שירות מהיר, מקצועי ושקוף ישירות בשטח, בלי לגרור את
        הרכב לסוכנות ובלי להמתין ימים.
      </p>
      <p className="text-gray-700 leading-relaxed">
        היום {AUTHOR.name} מוביל את צוות מנעולני הרכב המנוסים של מפתח עכשיו, ויחד אנחנו מטפלים בכל סוגי המפתחות -
        ממפתחות מכניים ישנים ועד מערכות Smart Key וקידוד רב-מודולרי ברכבים החדשים - ומגיעים לכל מקום בארץ,
        24 שעות ביממה, כולל שבתות וחגים.
      </p>
    </div>
  );
}
