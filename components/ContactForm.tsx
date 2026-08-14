'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SITE } from '@/lib/siteData';

interface Props {
  heading?: string;
  compact?: boolean;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm({ heading = 'הזמן מנעולן רכב', compact = false }: Props) {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', city: '', message: '' });

  function set(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('loading');
    setError('');

    try {
      const body = new FormData();
      Object.entries(form).forEach(([k, v]) => body.append(k, v));

      const res = await fetch('/form-handler.php', { method: 'POST', body });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setError(data.error || 'שגיאה בשליחה - נסו שוב או התקשרו ישירות.');
        setStatus('error');
      }
    } catch {
      setError('שגיאת רשת - בדקו חיבור אינטרנט ונסו שוב.');
      setStatus('error');
    }
  }

  // Success state
  if (status === 'success') {
    return (
      <div className="card overflow-hidden" dir="rtl">
        <div className="px-5 py-3 text-white text-sm font-bold" style={{ background: 'var(--primary)' }}>
          {heading}
        </div>
        <div className="p-8 text-center">
          <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center"
            style={{ background: '#f0fdf4' }}>
            <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--primary)' }}>הפנייה התקבלה!</h3>
          <p className="text-sm text-gray-500 mb-5">נחזור אליכם בהקדם האפשרי</p>
          <a href={`tel:${SITE.phone}`} className="btn-primary text-sm px-6">
            {SITE.phoneDisplay}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="card overflow-hidden" dir="rtl">
      {/* Header */}
      <div className="px-5 py-3 flex items-center gap-2 text-white" style={{ background: 'var(--primary)' }}>
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
        </svg>
        <span className="font-bold text-sm">{heading}</span>
      </div>

      {!compact && (
        <div className="px-5 pt-4 pb-0 text-xs text-gray-500 leading-relaxed">
          שלחו את הפרטים ומנעולן יחזור אליכם תוך דקות
        </div>
      )}

      <form onSubmit={handleSubmit} className="p-5 space-y-3">

        {/* Name + Phone row */}
        <div className={compact ? 'space-y-3' : 'grid grid-cols-2 gap-3'}>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">שם מלא *</label>
            <input
              type="text" required value={form.name}
              onChange={e => set('name', e.target.value)}
              placeholder="ישראל ישראלי"
              className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
              style={{ borderColor: 'var(--border)' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-1">טלפון נייד *</label>
            <input
              type="tel" required value={form.phone}
              onChange={e => set('phone', e.target.value)}
              placeholder="050-0000000"
              className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
              style={{ borderColor: 'var(--border)' }}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border)'}
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">עיר / אזור</label>
          <input
            type="text" value={form.city}
            onChange={e => set('city', e.target.value)}
            placeholder="תל אביב, חיפה, ירושלים..."
            className="w-full border rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 transition"
            style={{ borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        {/* How can we help - free text */}
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">איך אפשר לעזור?</label>
          <textarea
            value={form.message}
            onChange={e => set('message', e.target.value)}
            rows={compact ? 2 : 3}
            placeholder="ספרו לנו במילים שלכם - סוג הרכב, מה קרה ואיפה אתם"
            className="w-full border rounded-lg px-3 py-2.5 text-sm leading-relaxed resize-y focus:outline-none focus:ring-2 transition"
            style={{ borderColor: 'var(--border)' }}
            onFocus={e => e.target.style.borderColor = 'var(--accent)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
        </div>

        {/* Privacy */}
        <div className="flex items-start gap-2 pt-1">
          <input type="checkbox" required id={`prv-${compact}`} className="mt-0.5 shrink-0 accent-orange-500" />
          <label htmlFor={`prv-${compact}`} className="text-xs text-gray-400 leading-relaxed">
            אני מאשר/ת את{' '}
            <Link href="/תנאי-שימוש" className="underline hover:text-gray-600">תנאי השימוש</Link>
            {' '}ואת{' '}
            <Link href="/מדיניות-פרטיות" className="underline hover:text-gray-600">מדיניות הפרטיות</Link>
          </label>
        </div>

        {/* Error message */}
        {status === 'error' && (
          <div className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-3 rounded-lg font-bold text-white text-sm transition-all"
          style={{
            background: status === 'loading' ? '#c96010' : 'var(--accent)',
            opacity: status === 'loading' ? 0.8 : 1,
          }}
        >
          {status === 'loading' ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              שולח...
            </span>
          ) : 'שליחה וקבלת הצעת מחיר'}
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
