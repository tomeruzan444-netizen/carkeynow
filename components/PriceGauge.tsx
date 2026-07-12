import { getPriceRange } from '@/lib/priceRanges';

const fmt = (n: number) => n.toLocaleString('en-US');

/** מד מחיר קליל (SVG inline, ללא JS) - טווח מחירים וממוצע לשכפול מפתח */
export function PriceGauge({ slug }: { slug: string }) {
  const pr = getPriceRange(slug);
  if (!pr) return null;
  const { low, avg, high, label, note } = pr;

  const f = high > low ? Math.max(0, Math.min(1, (avg - low) / (high - low))) : 0.5;
  const cx = 160, cy = 148, r = 118;
  const theta = Math.PI * (1 - f);
  const mx = cx + r * Math.cos(theta);
  const my = cy - r * Math.sin(theta);
  const bg = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`;
  const fill = `M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${mx.toFixed(1)} ${my.toFixed(1)}`;
  const labelX = Math.max(48, Math.min(272, mx));

  return (
    <div dir="rtl" className="card p-5 sm:p-6 mt-6">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-1 h-7 rounded-full shrink-0" style={{ background: 'var(--accent)' }} />
        <h2 className="text-lg sm:text-xl font-bold" style={{ color: 'var(--primary)' }}>
          מחיר ממוצע לשכפול מפתח {label}
        </h2>
      </div>

      <div className="mx-auto" style={{ maxWidth: 340 }}>
        <svg viewBox="0 0 320 162" width="100%" role="img"
          aria-label={`טווח מחיר משוער ${fmt(low)} עד ${fmt(high)} שקל, ממוצע ${fmt(avg)} שקל`}>
          <defs>
            <linearGradient id="pgGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#f2a55c" />
              <stop offset="1" stopColor="#e8751a" />
            </linearGradient>
          </defs>
          <path d={bg} fill="none" stroke="#e9edf2" strokeWidth="13" strokeLinecap="round" />
          <path d={fill} fill="none" stroke="url(#pgGrad)" strokeWidth="13" strokeLinecap="round" />
          <circle cx={mx.toFixed(1)} cy={my.toFixed(1)} r="8" fill="#ffffff" stroke="#e8751a" strokeWidth="4" />
          <text x={labelX.toFixed(1)} y={(my - 16).toFixed(1)} textAnchor="middle"
            fontSize="27" fontWeight="800" fill="#1e4a72">{fmt(avg)} ₪</text>
        </svg>
      </div>

      <div className="flex justify-between text-center -mt-1 px-1">
        <div>
          <div className="text-xs text-gray-400">טווח גבוה</div>
          <div className="font-bold text-sm sm:text-base" style={{ color: 'var(--primary)' }}>{fmt(high)} ₪</div>
        </div>
        <div>
          <div className="text-xs text-gray-400">טווח נמוך</div>
          <div className="font-bold text-sm sm:text-base" style={{ color: 'var(--primary)' }}>{fmt(low)} ₪</div>
        </div>
      </div>

      <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-1.5 text-xs text-gray-500">
        <span aria-hidden="true" style={{ color: '#22c55e', fontWeight: 700 }}>✓</span>
        המחיר המשוער נבדק לאחרונה ב{note}
      </div>
    </div>
  );
}
