import Link from 'next/link';
import { SITE } from '@/lib/siteData';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4" dir="rtl">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">הדף לא נמצא</h2>
      <p className="text-gray-500 mb-8">הדף שחיפשתם אינו קיים. נסו לחזור לדף הבית.</p>
      <div className="flex gap-4">
        <Link href="/" className="bg-blue-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-800 transition">
          דף הבית
        </Link>
        <a href={`tel:${SITE.phone}`} className="bg-gray-100 text-gray-800 px-6 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
          {SITE.phoneDisplay}
        </a>
      </div>
    </div>
  );
}
