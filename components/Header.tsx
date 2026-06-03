'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { SITE, NAV_SERVICES, NAV_CITIES, NAV_BRANDS } from '@/lib/siteData';

type DropKey = 'services' | 'cities' | 'brands' | null;

// Main nav items — each has a dropdown
const NAV_CONFIG = [
  { key: 'services' as DropKey, label: 'שירותים',     items: NAV_SERVICES },
  { key: 'cities'   as DropKey, label: 'אזורים',      items: NAV_CITIES   },
  { key: 'brands'   as DropKey, label: 'סוגי מפתחות', items: NAV_BRANDS   },
];

// Quick links — direct pages only, no blog
const QUICK_LINKS = [
  { label: 'ראשי',                 href: '/' },
  { label: 'פורץ רכבים',           href: '/פורץ-רכבים' },
  { label: 'התקנת קודנים לרכב',    href: '/התקנת-קודן-לרכב' },
  { label: 'שכפול מפתחות לאופנוע', href: '/שחזור-מפתח-לאופנוע' },
];

export default function Header() {
  const [open, setOpen] = useState<DropKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpen(null);
    }
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const close = () => setOpen(null);

  return (
    <header dir="rtl" className="sticky top-0 z-50 shadow-md">
      {/* ── Top bar ── */}
      <div style={{ background: 'var(--primary)' }} className="text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center shrink-0" onClick={close}>
            <Image
              src="/logo.svg"
              alt={SITE.name}
              width={180}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs opacity-60">שירות בכל הארץ</span>
            <a href={`tel:${SITE.phone}`} style={{ background: 'var(--accent)' }}
              className="font-bold px-4 py-1.5 rounded text-sm hover:opacity-90 transition whitespace-nowrap">
              {SITE.phoneDisplay}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-3 py-1.5 rounded text-sm transition whitespace-nowrap">
              וואטסאפ
            </a>
          </div>

          {/* Mobile */}
          <div className="flex sm:hidden items-center gap-2">
            <a href={`tel:${SITE.phone}`} style={{ background: 'var(--accent)' }}
              className="font-bold px-3 py-1.5 rounded text-sm whitespace-nowrap">
              {SITE.phoneDisplay}
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 w-9 h-9 flex items-center justify-center rounded transition-colors hover:bg-white/10"
              aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                /* X icon */
                <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Burger icon */
                <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ── Trust signals strip ── */}
      <div className="hidden sm:flex items-center justify-center gap-6 py-1.5 text-xs font-medium"
        style={{ background: '#f0f4f9', color: 'var(--primary)', borderBottom: '1px solid var(--border)' }}>
        <span className="flex items-center gap-1.5">
          <span className="text-yellow-500 text-sm">★★★★★</span>
          <span className="font-bold">4.7</span>
          <span className="opacity-60">| 418 דירוגים</span>
        </span>
        <span className="w-px h-3 bg-gray-300" />
        <span>זמינות <strong>24/7</strong> כולל שבתות</span>
        <span className="w-px h-3 bg-gray-300" />
        <span>הגעה תוך <strong>20 דקות</strong></span>
        <span className="w-px h-3 bg-gray-300" />
        <span>מעודכן לחודש יוני <strong>2026</strong></span>
      </div>

      {/* ── Nav bar ── */}
      <nav ref={navRef} className="hidden sm:block bg-gray-900 text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-10">
          {/* Quick direct links */}
          {QUICK_LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}
              className="px-3 h-full flex items-center text-xs font-medium hover:bg-white/10 transition whitespace-nowrap">
              {l.label}
            </Link>
          ))}

          <div className="w-px h-5 bg-white/20 mx-1" />

          {/* Dropdown items */}
          {NAV_CONFIG.map(({ key, label, items }) => (
            <div key={key} className="relative h-full">
              <button
                onClick={() => setOpen(open === key ? null : key)}
                className={`px-3 h-full flex items-center gap-1.5 text-xs font-semibold whitespace-nowrap transition
                  ${open === key ? 'bg-white/15 text-orange-400' : 'hover:bg-white/10'}`}
              >
                {label}
                <svg className={`w-3 h-3 opacity-70 transition-transform ${open === key ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {open === key && (
                <div className="absolute top-full right-0 bg-white text-gray-800 shadow-2xl rounded-b-lg border border-gray-100 z-50 min-w-[240px]">
                  {/* See all link */}
                  {key === 'cities' && (
                    <Link href="/service-areas" onClick={close}
                      className="flex items-center justify-between px-4 py-2.5 font-bold text-sm border-b"
                      style={{ color: 'var(--primary)', borderColor: 'var(--border)' }}>
                      כל אזורי השירות
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  )}
                  {key === 'brands' && (
                    <Link href="/שכפול-מפתח-לרכב" onClick={close}
                      className="flex items-center justify-between px-4 py-2.5 font-bold text-sm border-b"
                      style={{ color: 'var(--primary)', borderColor: 'var(--border)' }}>
                      כל סוגי המפתחות
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  )}
                  {key === 'services' && (
                    <Link href="/שחזור-מפתח-לרכב" onClick={close}
                      className="flex items-center justify-between px-4 py-2.5 font-bold text-sm border-b"
                      style={{ color: 'var(--primary)', borderColor: 'var(--border)' }}>
                      כל השירותים
                      <svg className="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </Link>
                  )}
                  <ul className="py-1 max-h-72 overflow-y-auto">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={close} className="sidebar-link">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}

          <div className="flex-1" />
          <Link href="/אודות" onClick={close}
            className="px-3 h-full flex items-center text-xs hover:bg-white/10 transition">
            אודות
          </Link>
          <Link href="/צרו-קשר" onClick={close}
            className="px-3 h-full flex items-center text-xs font-semibold hover:bg-white/10 transition"
            style={{ color: 'var(--accent)' }}>
            צרו קשר
          </Link>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="sm:hidden bg-gray-900 text-white max-h-[78vh] overflow-y-auto">
          <div className="p-4 space-y-2">
            {/* Quick links */}
            <div className="grid grid-cols-2 gap-1 pb-2 border-b border-white/10">
              {QUICK_LINKS.map((l) => (
                <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                  className="text-xs py-2 px-3 rounded bg-white/5 hover:bg-white/15 transition">
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Expandable sections */}
            {NAV_CONFIG.map(({ key, label, items }) => (
              <div key={key}>
                <button
                  onClick={() => setMobileSection(mobileSection === key ? null : key)}
                  className="w-full text-right flex justify-between items-center py-2.5 px-3 rounded bg-white/10 font-semibold text-sm">
                  {label}
                  <svg className={`w-4 h-4 opacity-60 transition-transform ${mobileSection === key ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileSection === key && (
                  <ul className="mt-1 pr-2 max-h-52 overflow-y-auto space-y-0.5">
                    {items.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={() => setMobileOpen(false)}
                          className="block text-xs py-1.5 px-3 rounded hover:bg-white/10 transition">
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            <div className="flex gap-2 pt-2 border-t border-white/10">
              <a href={`tel:${SITE.phone}`} style={{ background: 'var(--accent)' }}
                className="flex-1 text-center py-2.5 rounded font-bold text-sm">
                {SITE.phoneDisplay}
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}`}
                className="flex-1 bg-green-500 text-center py-2.5 rounded font-bold text-sm">
                וואטסאפ
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
