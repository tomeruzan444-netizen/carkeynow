import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { WP_PAGES, getWpPageBySlug } from '@/lib/wp-pages';
import ContactForm from '@/components/ContactForm';
import WpContent from '@/components/WpContent';
import FaqAccordion from '@/components/FaqAccordion';
import Sidebar, { detectGroup } from '@/components/Sidebar';
import { SITE } from '@/lib/siteData';
import { getFaqsForSlug } from '@/lib/faqData';

export function generateStaticParams() {
  return WP_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getWpPageBySlug(decodeURIComponent(slug));
  if (!page) return { title: 'דף לא נמצא' };

  const canonical = page.canonical || `${SITE.url}/${page.slug}/`;
  const title = page.metaTitle || page.title;
  const desc = page.metaDesc;
  const ogImg = page.ogImage || '/wp-images/שכפול-מפתחות-לרכב-מפתח-עכשיו.webp';

  return {
    title,
    description: desc,
    alternates: { canonical },
    openGraph: {
      title: page.ogTitle || title,
      description: page.ogDesc || desc,
      url: canonical,
      siteName: SITE.name,
      locale: 'he_IL',
      type: 'website',
      images: [{ url: ogImg, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [ogImg],
    },
    robots: { index: true, follow: true },
  };
}

function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getWpPageBySlug(decodeURIComponent(slug));
  if (!page) notFound();

  const group = detectGroup(page.slug);
  const faqItems = getFaqsForSlug(page.slug);
  const displayTitle = page.title
    .replace(/\s*\|.*$/, '')
    .replace(/&#8211;/g, '–')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'");

  const isContactPage = page.slug === 'צרו-קשר';

  return (
    <>
      {/* BreadcrumbList */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'דף הבית', item: SITE.url },
          { '@type': 'ListItem', position: 2, name: displayTitle, item: `${SITE.url}/${page.slug}/` },
        ],
      }} />

      {/* WebPage */}
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${SITE.url}/${page.slug}/`,
        name: page.metaTitle || displayTitle,
        description: page.metaDesc,
        url: `${SITE.url}/${page.slug}/`,
        isPartOf: { '@id': `${SITE.url}/#website` },
        inLanguage: 'he',
      }} />

      {/* FAQPage schema */}
      {faqItems.length > 0 && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        }} />
      )}

      {/* ── Page hero ── */}
      <div style={{ background: 'var(--primary)' }} className="text-white" dir="rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <nav className="text-xs mb-2 opacity-70 flex items-center gap-1">
            <Link href="/" className="hover:opacity-100">דף הבית</Link>
            <span>/</span>
            <span className="opacity-100">{displayTitle}</span>
          </nav>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
            {displayTitle}
          </h1>
        </div>
      </div>

      {/* ── Main layout ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" dir="rtl">
        {isContactPage ? (
          /* Contact page: centered form */
          <div className="max-w-xl mx-auto">
            <ContactForm heading="צרו קשר – קבלו הצעת מחיר חינם" />
            <div className="card mt-6 p-6 text-center">
              <p className="text-gray-600 mb-2">או התקשרו עכשיו</p>
              <a href={`tel:${SITE.phone}`} className="text-2xl font-bold"
                style={{ color: 'var(--accent)' }}>{SITE.phoneDisplay}</a>
              <p className="text-sm text-gray-400 mt-1">זמינות 24/7 כולל שבתות וחגים</p>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
            {/* Content */}
            <div className="min-w-0">
              <div className="card p-6 md:p-8">
                <WpContent html={page.content} />
              </div>
              {faqItems.length > 0 && (
                <div className="mt-6">
                  <FaqAccordion items={faqItems} />
                </div>
              )}
            </div>

            {/* Sidebar — scrolls with page */}
            <div>
              <Sidebar group={group} currentSlug={page.slug} />
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom CTA strip ── */}
      <div style={{ background: 'var(--primary)' }} className="text-white py-8 text-center" dir="rtl">
        <div className="max-w-xl mx-auto px-4">
          <p className="font-bold text-lg mb-4">צריכים עזרה? אנחנו כאן 24/7</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={`tel:${SITE.phone}`} className="btn-primary text-base px-8">
              {SITE.phoneDisplay}
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-2.5 rounded-md transition text-base">
              וואטסאפ
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
