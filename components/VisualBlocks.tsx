'use client';

import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────

export interface Step     { num?: number; title: string; desc: string; duration?: string }
export interface FeatCard { icon: string;  title: string; desc: string }
export interface CompRow  { criterion: string; us: string; usColor?: string; alt: string; altColor?: string }
export interface Stat     { value: string; label: string; sub?: string }
export interface TabItem  { label: string; content: string }
export interface ToolCard { name: string; dot: string; desc: string }

// ─── Process Steps ────────────────────────────────────────────────────

export function ProcessSteps({ heading, steps }: { heading: string; steps: Step[] }) {
  return (
    <div className="my-8" dir="rtl">
      <h2 className="section-title">{heading}</h2>
      <div className="space-y-3">
        {steps.map((step, i) => (
          <div key={i} className="card flex items-start gap-4 p-5">
            <div className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm"
              style={{ background: 'var(--primary)' }}>
              {step.num ?? i + 1}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                <h3 className="font-bold text-sm" style={{ color: 'var(--primary)' }}>{step.title}</h3>
                {step.duration && (
                  <span className="text-xs px-2 py-0.5 rounded-full shrink-0"
                    style={{ background: '#fef3e8', color: 'var(--accent)' }}>
                    {step.duration}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Feature Cards ────────────────────────────────────────────────────

export function FeatureCards({ heading, cards, cols = 3 }: { heading: string; cards: FeatCard[]; cols?: 2 | 3 }) {
  const grid = cols === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3';
  return (
    <div className="my-8" dir="rtl">
      <h2 className="section-title">{heading}</h2>
      <div className={`grid ${grid} gap-4`}>
        {cards.map((c, i) => (
          <div key={i} className="card p-5 flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ background: '#fef3e8' }}>
              {c.icon}
            </div>
            <div>
              <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--primary)' }}>{c.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Comparison Table ────────────────────────────────────────────────

export function ComparisonTable({ heading, colUs, colAlt, rows }: {
  heading: string; colUs: string; colAlt: string; rows: CompRow[]
}) {
  const colorMap: Record<string, string> = {
    green:  '#16a34a',
    red:    '#dc2626',
    orange: '#ea7826',
    blue:   '#2563eb',
    gray:   '#6b7280',
  };

  return (
    <div className="my-8 overflow-x-auto" dir="rtl">
      <h2 className="section-title">{heading}</h2>
      <table className="w-full text-sm rounded-xl overflow-hidden" style={{ boxShadow: '0 2px 12px rgba(30,74,114,.1)' }}>
        <thead>
          <tr>
            <th className="px-4 py-3 text-right font-semibold text-white" style={{ background: 'var(--primary)', width: '40%' }}>קריטריון</th>
            <th className="px-4 py-3 text-center font-bold text-white" style={{ background: 'var(--accent)', width: '30%' }}>{colUs}</th>
            <th className="px-4 py-3 text-center font-semibold" style={{ background: '#374151', color: '#d1d5db', width: '30%' }}>{colAlt}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#ffffff' : '#f9fafb' }}>
              <td className="px-4 py-3 font-medium text-gray-700">{row.criterion}</td>
              <td className="px-4 py-3 text-center font-bold"
                style={{ color: colorMap[row.usColor ?? 'green'] ?? colorMap.green }}>
                {row.us}
              </td>
              <td className="px-4 py-3 text-center font-medium"
                style={{ color: colorMap[row.altColor ?? 'gray'] ?? colorMap.gray }}>
                {row.alt}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Stats Banner ─────────────────────────────────────────────────────

export function StatsBanner({ stats }: { stats: Stat[] }) {
  return (
    <div className="my-8 rounded-xl p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
      style={{ background: 'var(--primary)' }} dir="rtl">
      {stats.map((s, i) => (
        <div key={i}>
          <div className="text-2xl sm:text-3xl font-extrabold mb-0.5" style={{ color: 'var(--accent)' }}>{s.value}</div>
          <div className="text-xs text-white font-semibold">{s.label}</div>
          {s.sub && <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.6)' }}>{s.sub}</div>}
        </div>
      ))}
    </div>
  );
}

// ─── Case Study Tabs ──────────────────────────────────────────────────

export function CaseStudyTabs({ heading, tabs }: { heading: string; tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  return (
    <div className="my-8 card overflow-hidden" dir="rtl">
      <div className="px-5 py-3 font-bold text-white text-base" style={{ background: 'var(--primary)' }}>
        {heading}
      </div>
      {/* Tab bar */}
      <div className="flex border-b" style={{ borderColor: 'var(--border)' }}>
        {tabs.map((tab, i) => (
          <button key={i} onClick={() => setActive(i)}
            className="flex-1 py-2.5 text-sm font-medium transition-colors"
            style={{
              color: active === i ? 'var(--accent)' : 'var(--muted)',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              background: active === i ? '#fffaf6' : 'white',
            }}>
            {tab.label}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="p-5 text-sm text-gray-600 leading-relaxed" style={{ background: '#fffaf6' }}>
        {tabs[active].content}
      </div>
    </div>
  );
}

// ─── Tool Grid (like agent tools grid) ───────────────────────────────

export function ToolGrid({ heading, sub, tools }: { heading: string; sub?: string; tools: ToolCard[] }) {
  return (
    <div className="my-8" dir="rtl">
      <h2 className="section-title">{heading}</h2>
      {sub && <p className="text-sm text-gray-500 mb-4">{sub}</p>}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {tools.map((t, i) => (
          <div key={i} className="card p-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: t.dot }} />
            <div>
              <div className="font-bold text-sm" style={{ color: 'var(--primary)' }}>{t.name}</div>
              <div className="text-xs text-gray-400 mt-0.5">{t.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Alert box ────────────────────────────────────────────────────────

export function AlertBox({ type, title, body }: { type: 'warning' | 'tip' | 'info'; title: string; body: string }) {
  const styles = {
    warning: { bg: '#fffbeb', border: '#f59e0b', icon: '⚠️' },
    tip:     { bg: '#f0fdf4', border: '#22c55e', icon: '💡' },
    info:    { bg: '#eff6ff', border: '#3b82f6', icon: 'ℹ️' },
  }[type];
  return (
    <div className="my-6 rounded-xl p-4 border-r-4 text-sm" dir="rtl"
      style={{ background: styles.bg, borderColor: styles.border }}>
      <div className="font-bold mb-1">{styles.icon} {title}</div>
      <div className="text-gray-600 leading-relaxed">{body}</div>
    </div>
  );
}
