'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

interface Props {
  heading?: string;
  compact?: boolean;
}

export default function ContactForm({ heading = 'הזמן מנעולן רכב', compact = false }: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="card p-6 text-center" dir="rtl">
        <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
          style={{ background: '#e8f5e9' }}>
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="font-bold text-lg mb-1" style={{ color: 'var(--primary)' }}>תודה! קיבלנו את פרטיכם</p>
        <p className="text-sm text-gray-500 mb-4">נחזור אליכם בהקדם האפשרי</p>
        <a href={`tel:${SITE.phone}`} className="btn-primary text-sm">
          {SITE.phoneDisplay}
        </a>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden" dir="rtl">
      {/* Header */}
      <div className="px-5 py-3 flex items-center gap-2" style={{ background: 'var(--primary)' }}>
        <svg className="w-4 h-4 text-orange-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
        <span className="text-white font-bold text-sm">{heading}</span>
      </div>

      {!compact && (
        <div className="px-5 py-3 text-xs text-gray-500 border-b" style={{ borderColor: 'var(--border)' }}>
          שלחו את פרטי העבודה הדרושה לכם וקבלו הצעות מחיר במהירות.
        </div>
      )}

      <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-5 space-y-3">
        <div className="relative">
          <svg className="absolute top-2.5 right-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <input type="text" required placeholder="שם מלא..."
            className="w-full border rounded-md py-2 pr-9 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ borderColor: 'var(--border)' }} />
        </div>

        <div className="relative">
          <svg className="absolute top-2.5 right-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <input type="tel" required placeholder="טלפון נייד..."
            className="w-full border rounded-md py-2 pr-9 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ borderColor: 'var(--border)' }} />
        </div>

        <div className="relative">
          <svg className="absolute top-2.5 right-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <input type="text" placeholder="עיר..."
            className="w-full border rounded-md py-2 pr-9 pl-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            style={{ borderColor: 'var(--border)' }} />
        </div>

        {!compact && (
          <div className="relative">
            <svg className="absolute top-2.5 right-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            <select className="w-full border rounded-md py-2 pr-9 pl-3 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 appearance-none"
              style={{ borderColor: 'var(--border)' }}>
              <option value="">בחרו בשירות המבוקש</option>
              <option>שכפול מפתח לרכב</option>
              <option>שחזור מפתח לרכב</option>
              <option>תיקון סוויץ</option>
              <option>פתיחת רכב נעול</option>
              <option>התקנת קודן</option>
              <option>תיקון שלט</option>
              <option>אחר</option>
            </select>
          </div>
        )}

        <div className="flex items-start gap-2 text-xs text-gray-500">
          <input type="checkbox" required id="prv" className="mt-0.5 shrink-0" />
          <label htmlFor="prv">
            בשליחת הטופס הינכם מאשרים את{' '}
            <Link href="/תנאי-שימוש" className="underline">תנאי השימוש</Link>
            {' '}ואת{' '}
            <Link href="/מדיניות-פרטיות" className="underline">מדיניות הפרטיות</Link>
          </label>
        </div>

        <button type="submit" className="w-full py-2.5 rounded-md font-bold text-white text-sm transition"
          style={{ background: 'var(--accent)' }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--accent-dark)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent)')}>
          שליחה וקבלו הצעת מחיר
        </button>

        <p className="text-center text-xs text-gray-400">
          או התקשרו:{' '}
          <a href={`tel:${SITE.phone}`} className="font-bold" style={{ color: 'var(--primary)' }}>
            {SITE.phoneDisplay}
          </a>
        </p>
      </form>
    </div>
  );
}
