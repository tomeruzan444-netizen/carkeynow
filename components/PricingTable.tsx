import type { PricingRow } from '@/lib/pages';

export default function PricingTable({ rows, heading = 'מחירון שירות' }: { rows: PricingRow[]; heading?: string }) {
  return (
    <div className="overflow-x-auto" dir="rtl">
      <h2 className="text-xl font-bold text-gray-800 mb-4">{heading}</h2>
      <table className="w-full text-sm border-collapse rounded-lg overflow-hidden shadow">
        <thead>
          <tr className="bg-blue-700 text-white">
            <th className="px-4 py-3 text-right font-semibold">שירות</th>
            <th className="px-4 py-3 text-right font-semibold">מחיר</th>
            {rows.some((r) => r.duration) && (
              <th className="px-4 py-3 text-right font-semibold">משך זמן</th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-blue-50'}>
              <td className="px-4 py-3 text-gray-800">{row.service}</td>
              <td className="px-4 py-3 font-semibold text-blue-700">{row.price}</td>
              {rows.some((r) => r.duration) && (
                <td className="px-4 py-3 text-gray-500">{row.duration ?? '-'}</td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-400 mt-2">* כל המחירים אינם כוללים מע״מ (18%) ועשויים להשתנות לפי דגם הרכב ושנת ייצור.</p>
    </div>
  );
}
