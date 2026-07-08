import { getBrandModels } from '@/lib/brandModels';

/** סקשן "דגמים שאנחנו מטפלים בהם" - רשימת דגמים דו-לשונית (עברית + אנגלית) */
export function BrandModelsBlock({ slug }: { slug: string }) {
  const bm = getBrandModels(slug);
  if (!bm) return null;
  return (
    <div dir="rtl" className="card p-6 mt-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-1 h-7 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--primary)' }}>
          דגמי {bm.name} שאנחנו מטפלים בהם
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed">
        אנחנו משכפלים ומקדדים מפתחות לכל דגמי {bm.name} הנפוצים בישראל, בהם: {bm.models.join(', ')}.
        {' '}לכל דגם מערכת מפתח וקידוד ייחודית, ואנחנו מגיעים עם הציוד המתאים לכל אחד - מדגמים ותיקים ועד החדשים ביותר.
      </p>
    </div>
  );
}
