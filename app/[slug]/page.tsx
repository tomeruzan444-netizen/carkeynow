import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { WP_PAGES, getWpPageBySlug } from '@/lib/wp-pages';
import ContactForm from '@/components/ContactForm';
import WpContent from '@/components/WpContent';
import FaqAccordion from '@/components/FaqAccordion';
import Sidebar, { detectGroup } from '@/components/Sidebar';
import BrandSlider from '@/components/BrandSlider';
import { getBrandLogo } from '@/lib/brandLogos';
import { AuthorByline, FounderCard } from '@/components/AuthorByline';
import { AUTHOR } from '@/lib/author';
import { CaseStudyBlock } from '@/components/CaseStudy';
import { BrandModelsBlock } from '@/components/BrandModels';
import { getBrandModels } from '@/lib/brandModels';
import { getCaseStudy } from '@/lib/caseStudies';
import { TableOfContents } from '@/components/TableOfContents';
import { processContentH2, type TocItem } from '@/lib/toc';
import { getTitleOverride } from '@/lib/titleOverrides';
import {
  ProcessSteps, FeatureCards, ComparisonTable, StatsBanner,
  CaseStudyTabs, ToolGrid,
} from '@/components/VisualBlocks';
import { getVisualSections } from '@/lib/visualData';
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
  const override = getTitleOverride(page.slug);
  // נורמליזציה: מסירים סיומת " | מפתח עכשיו" קיימת ומוסיפים אותה פעם אחת בלבד.
  // title.absolute עוקף את ה-template של ה-layout כדי למנוע כפילות סיומת.
  const baseTitle = (override || page.metaTitle || page.title)
    .replace(/\s*(?:\||-|עם)\s*מפתח עכשיו\s*$/, '');
  const fullTitle = `${baseTitle} | ${SITE.name}`;
  const desc = page.metaDesc;
  const ogImg = page.ogImage || '/og-carkeynow.jpg';

  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical },
    openGraph: {
      title: fullTitle,
      description: page.ogDesc || desc,
      url: canonical,
      siteName: SITE.name,
      locale: 'he_IL',
      type: 'website',
      images: [{ url: ogImg, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
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

// טקסט הכותרת (H2) של בלוק ויזואלי, לצורך טבלת התוכן. null = בלי כותרת H2.
function visualHeadingText(s: { type: string; heading?: string }): string | null {
  switch (s.type) {
    case 'process': return s.heading ?? 'תהליך העבודה שלנו';
    case 'tabs': return s.heading ?? 'מקרה שימוש';
    case 'features':
    case 'comparison':
    case 'tools': return s.heading || null;
    default: return null;
  }
}

export default async function SlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getWpPageBySlug(decodeURIComponent(slug));
  if (!page) notFound();

  const group = detectGroup(page.slug);
  // עמוד "צרו קשר" לא מציג accordion FAQ, ולכן גם לא פולט סכמת FAQPage
  // (מונע אי-התאמה בין ה-Schema לתוכן הנראה)
  const faqItems = page.slug === 'צרו-קשר' ? [] : getFaqsForSlug(page.slug);
  const visualSections = getVisualSections(page.slug);
  const displayTitle = page.title
    .replace(/\s*\|.*$/, '')
    .replace(/&#8211;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/&#8217;/g, "'");

  // לוגו היצרן - מוצג ממורכז בראש העמוד בעמודי "שכפול מפתח ל<יצרן>"
  const brand = getBrandLogo(page.slug);

  const isContactPage = page.slug === 'צרו-קשר';
  // העמוד הראשי "שכפול-מפתח-לרכב" - סליידר בראש העמוד (כפי שהיה)
  const isMainCarKeyPage = page.slug === 'שכפול-מפתח-לרכב';
  // עמודי הערים "שכפול-מפתח-לרכב-ב..." - סליידר משובץ מתחת לפסקת הפתיחה
  const isCityCarKeyPage = page.slug.startsWith('שכפול-מפתח-לרכב-');

  // מחבר/מומחה (E-E-A-T): בייליין בעמודי תוכן, כרטיס מייסד באודות
  const isAbout = page.slug === 'אודות';
  const isLegalPage = ['מדיניות-פרטיות', 'תנאי-שימוש', 'הצהרת-נגישות'].includes(page.slug);
  const showByline = !isContactPage && !isAbout && !isLegalPage;
  // ── טבלת תוכן: הוספת עוגנים ל-H2 ובניית רשימת ניווט (מרונדר בשרת ל-sitelinks) ──
  const isTocExcluded = ['אודות', 'צרו-קשר', 'מדיניות-פרטיות', 'הצהרת-נגישות'].includes(page.slug);
  const { html: articleHtml, items: contentToc, nextIdx } = processContentH2(page.content);

  const tocBrandModels = getBrandModels(page.slug);
  const tocCaseStudy = getCaseStudy(page.slug);
  let tocIdx = nextIdx;
  const extraToc: TocItem[] = [];
  const modelsSecId = tocBrandModels ? `sec-${tocIdx++}` : '';
  if (tocBrandModels) extraToc.push({ id: modelsSecId, text: `דגמי ${tocBrandModels.name} שאנחנו מטפלים בהם` });
  const caseSecId = tocCaseStudy ? `sec-${tocIdx++}` : '';
  if (tocCaseStudy) extraToc.push({ id: caseSecId, text: `סיפור מהשטח: ${tocCaseStudy.heading}` });
  const visualSecIds: string[] = visualSections.map((s) => {
    const h = visualHeadingText(s as { type: string; heading?: string });
    if (!h) return '';
    const id = `sec-${tocIdx++}`;
    extraToc.push({ id, text: h });
    return id;
  });
  const faqSecId = faqItems.length > 0 ? `sec-${tocIdx++}` : '';
  if (faqItems.length > 0) extraToc.push({ id: faqSecId, text: 'שאלות נפוצות' });

  const tocItems: TocItem[] = [...contentToc, ...extraToc];
  const showToc = !isTocExcluded && tocItems.length >= 3;

  // פיצול התוכן (אחרי עיבוד ה-H2) כדי לשבץ את הסליידר בעמודי ערים
  const splitIdx = isCityCarKeyPage ? articleHtml.indexOf('</p>') : -1;
  const hasSplit = splitIdx !== -1;
  const leadHtml = hasSplit ? articleHtml.slice(0, splitIdx + 4) : '';
  const restHtml = hasSplit ? articleHtml.slice(splitIdx + 4) : articleHtml;

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
        name: getTitleOverride(page.slug) || page.metaTitle || displayTitle,
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

      {/* Person schema - מומחה/מייסד (E-E-A-T) */}
      {(showByline || isAbout) && (
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          '@id': `${SITE.url}/#amir`,
          name: AUTHOR.name,
          jobTitle: AUTHOR.jobTitle,
          image: `${SITE.url}${AUTHOR.photo}`,
          worksFor: { '@id': `${SITE.url}/#organization` },
          ...(isAbout ? { description: `מייסד מפתח עכשיו, מנעולן רכב מנוסה עם ${AUTHOR.experience}.` } : {}),
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

          {/* לוגו היצרן - תג לבן עגול ממורכז, מעל הכותרת, גלוי מיד בטעינת העמוד */}
          {brand && (
            <div className="flex justify-center mb-3 sm:mb-4">
              <div
                className="bg-white rounded-full shadow-lg flex items-center justify-center ring-1 ring-black/5"
                style={{ width: 'clamp(120px, 30vw, 150px)', height: 'clamp(120px, 30vw, 150px)', padding: '2px' }}
              >
                <img
                  src={brand.logo}
                  alt={`לוגו ${brand.name} - שכפול מפתח לרכב ${brand.name}`}
                  width={100}
                  height={100}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          )}

          <h1
            className={`text-xl sm:text-2xl md:text-3xl font-bold leading-snug${brand ? ' text-center' : ''}`}
          >
            {displayTitle}
          </h1>
        </div>
      </div>

      {/* ── Brand slider - בראש העמוד הראשי בלבד ── */}
      {isMainCarKeyPage && <BrandSlider />}

      {/* ── Main layout ── */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-6 sm:py-8" dir="rtl">
        {isContactPage ? (
          /* Contact page: centered form */
          <div className="max-w-xl mx-auto">
            <ContactForm heading="צרו קשר - קבלו הצעת מחיר חינם" />
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
            <div id="page-article" className="min-w-0">
              {showToc && <TableOfContents items={tocItems} />}
              <div className="p-1 sm:card sm:p-6 md:p-8">
                {showByline && <AuthorByline />}
                {isCityCarKeyPage ? (
                  <>
                    {hasSplit && <WpContent html={leadHtml} />}
                    <BrandSlider inline />
                    <WpContent html={restHtml} />
                  </>
                ) : (
                  <WpContent html={articleHtml} />
                )}
                {isAbout && <FounderCard />}
              </div>

              {/* דגמים שאנחנו מטפלים בהם - רשימה דו-לשונית */}
              {modelsSecId
                ? <div id={modelsSecId}><BrandModelsBlock slug={page.slug} /></div>
                : <BrandModelsBlock slug={page.slug} />}

              {/* סיפור מהשטח - קייס-סטאדי ייחודי ליצרן */}
              {caseSecId
                ? <div id={caseSecId}><CaseStudyBlock slug={page.slug} /></div>
                : <CaseStudyBlock slug={page.slug} />}

              {/* Visual enhancement blocks */}
              {visualSections.map((section, i) => {
                let el: React.ReactNode = null;
                if (section.type === 'process') {
                  const d = section.data as Parameters<typeof ProcessSteps>[0]['steps'];
                  el = <ProcessSteps heading={section.heading ?? 'תהליך העבודה שלנו'} steps={d} />;
                } else if (section.type === 'features') {
                  const d = section.data as { cards: Parameters<typeof FeatureCards>[0]['cards']; cols?: 2 | 3 };
                  el = <FeatureCards heading={section.heading ?? ''} cards={d.cards} cols={d.cols} />;
                } else if (section.type === 'comparison') {
                  const d = section.data as { colUs: string; colAlt: string; rows: Parameters<typeof ComparisonTable>[0]['rows'] };
                  el = <ComparisonTable heading={section.heading ?? ''} colUs={d.colUs} colAlt={d.colAlt} rows={d.rows} />;
                } else if (section.type === 'stats') {
                  el = <StatsBanner stats={section.data as Parameters<typeof StatsBanner>[0]['stats']} />;
                } else if (section.type === 'tabs') {
                  el = <CaseStudyTabs heading={section.heading ?? 'מקרה שימוש'} tabs={section.data as Parameters<typeof CaseStudyTabs>[0]['tabs']} />;
                } else if (section.type === 'tools') {
                  el = <ToolGrid heading={section.heading ?? ''} sub={section.sub} tools={section.data as Parameters<typeof ToolGrid>[0]['tools']} />;
                } else if (section.type === 'image') {
                  const d = section.data as { src: string; alt: string; maxWidth?: number };
                  el = (
                    <div className="my-6 flex justify-center">
                      <img src={d.src} alt={d.alt}
                        style={{ maxWidth: d.maxWidth ?? 300, height: 'auto' }}
                        loading="lazy" />
                    </div>
                  );
                }
                if (!el) return null;
                return <div key={i} id={visualSecIds[i] || undefined}>{el}</div>;
              })}

              {faqItems.length > 0 && (
                <div id={faqSecId || undefined} className="mt-6">
                  <FaqAccordion items={faqItems} />
                </div>
              )}
            </div>

            {/* Sidebar - contextual per page */}
            <div>
              <Sidebar currentSlug={page.slug} />
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
          </div>
        </div>
      </div>
    </>
  );
}
