import { getCaseStudy } from '@/lib/caseStudies';

/** בלוק "סיפור מהשטח" - קייס-סטאדי ייחודי לעמוד יצרן (E-E-A-T / Experience) */
export function CaseStudyBlock({ slug }: { slug: string }) {
  const cs = getCaseStudy(slug);
  if (!cs) return null;
  return (
    <div dir="rtl" className="card p-6 mt-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-7 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--primary)' }}>
          סיפור מהשטח: {cs.heading}
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{cs.body}</p>
    </div>
  );
}
