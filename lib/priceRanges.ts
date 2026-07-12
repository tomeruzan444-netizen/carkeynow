// טווחי מחיר לתצוגת "מד מחיר" (gauge) בעמודי יצרן.
// low/high = קצוות הטווח, avg = ממוצע, label = שם היצרן לכותרת, note = מועד עדכון.
// כרגע פיילוט על הונדה בלבד; יורחב לכל העמודים לאחר אישור.

export interface PriceRange {
  low: number;
  avg: number;
  high: number;
  label: string;
  note: string;
}

export const PRICE_RANGES: Record<string, PriceRange> = {
  'שכפול-מפתח-להונדה': { low: 150, avg: 225, high: 300, label: 'להונדה', note: 'יולי 2026' },
};

export function getPriceRange(slug: string): PriceRange | undefined {
  return PRICE_RANGES[slug];
}
