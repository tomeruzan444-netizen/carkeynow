import Link from 'next/link';
import { CITY_NEIGHBORS, cityFromSlug, citySlug } from '@/lib/cityRegions';

/* בלוק קישורים לעמודי שכפול מפתח בערים השכנות, בתוך גוף העמוד.
   section ולא nav, כדי שהקישורים יישארו חלק מהתוכן. לקישורים יש class,
   ולכן content-verify לא סופר אותם כקישורים עריכיים. */
export default function NearbyCities({ slug, id }: { slug: string; id?: string }) {
  const city = cityFromSlug(slug);
  if (!city) return null;
  const neighbors = CITY_NEIGHBORS[city];
  return (
    <section id={id} className="nearby-cities card p-5 mt-6" aria-labelledby="nearby-cities-title">
      <h2 id="nearby-cities-title" className="text-lg font-bold mb-1" style={{ color: 'var(--primary)' }}>
        שכפול מפתח בערים הסמוכות ל{city}
      </h2>
      <p className="text-sm text-gray-600 mb-3">
        אנחנו מגיעים גם לערים שליד {city}, ולכל אחת מהן יש עמוד משלה:
      </p>
      <ul className="nearby-cities-list">
        {neighbors.map((n) => (
          <li key={n}>
            <Link href={`/${citySlug(n)}`} className="nearby-cities-link">
              שכפול מפתח לרכב ב{n}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
