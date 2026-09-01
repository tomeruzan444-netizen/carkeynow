import { readFileSync, writeFileSync } from 'fs';

const raw = JSON.parse(readFileSync(new URL('./wp-pages-raw.json', import.meta.url), 'utf8'));

function decodeSlug(slug) {
  try { return decodeURIComponent(slug); } catch { return slug; }
}

// Load image mapping built by download-images.mjs
const imageMapPath = new URL('./wp-image-map.json', import.meta.url);
let imageMap = [];
try {
  imageMap = JSON.parse(readFileSync(imageMapPath, 'utf8'));
} catch { /* map not built yet – skip */ }

// Replace all absolute WordPress URLs with relative paths (links + images)
function makeLinksRelative(html) {
  let out = html
    .replace(/https?:\/\/carkeynow\.co\.il\//g, '/')
    .replace(/href="\/\//g, 'href="/')
    .replace(/—/g, '-')    // em-dash → hyphen
    .replace(/–/g, '-')    // en-dash → hyphen
    .replace(/&#8211;/g, '-')   // HTML en-dash → hyphen
    .replace(/&#8212;/g, '-');  // HTML em-dash → hyphen

  // Replace /wp-content/uploads/... image paths with /wp-images/...
  // Handle both decoded (Hebrew) and URL-encoded variants
  for (const item of imageMap) {
    const wpPath = item.originalUrl.replace('https://carkeynow.co.il', '');
    const encodedPath = wpPath.split('/').map(s => encodeURIComponent(s)).join('/');
    const encodedPathLower = wpPath.split('/').map(s => encodeURIComponent(s).toLowerCase()).join('/');

    out = out.replaceAll(item.originalUrl, item.localPath);
    out = out.replaceAll(wpPath, item.localPath);
    out = out.replaceAll(encodedPath, item.localPath);
    out = out.replaceAll(encodedPathLower, item.localPath);
  }

  // Catch any remaining /wp-content/uploads paths not in map — rewrite to same filename
  out = out.replace(/\/wp-content\/uploads\/\d{4}\/\d{2}\/([^"'\s>]+)/g, (match, file) => {
    const decoded = decodeURIComponent(file);
    return `/wp-images/${decoded}`;
  });

  return out;
}

function extractYoast(yoast) {
  if (!yoast) return { metaTitle: '', metaDesc: '', canonical: '' };
  return {
    metaTitle: yoast.title || '',
    metaDesc: yoast.description || '',
    canonical: yoast.canonical || '',
    ogTitle: yoast.og_title || '',
    ogDesc: yoast.og_description || '',
    ogImage: (yoast.og_image && yoast.og_image[0] && yoast.og_image[0].url) || '',
  };
}

// Auto-generate meta description from HTML content (strip tags, first 155 chars)
function autoMetaDesc(html) {
  const text = html
    .replace(/<[^>]+>/g, ' ')         // strip tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&#\d+;/g, '')
    .replace(/&[a-z]+;/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  if (text.length <= 155) return text;
  // Cut at word boundary
  const cut = text.substring(0, 152);
  return cut.substring(0, cut.lastIndexOf(' ')) + '...';
}

const pages = raw.map((p) => {
  const seo = extractYoast(p.yoast_head_json);
  return {
    id: p.id,
    slug: decodeSlug(p.slug),
    title: p.title?.rendered || '',
    content: makeLinksRelative(p.content?.rendered || ''),
    metaTitle: seo.metaTitle || p.title?.rendered || '',
    metaDesc: seo.metaDesc || autoMetaDesc(p.content?.rendered || ''),
    canonical: seo.canonical || `https://carkeynow.co.il/${decodeSlug(p.slug)}/`,
    ogTitle: seo.ogTitle || seo.metaTitle || p.title?.rendered || '',
    ogDesc: seo.ogDesc || seo.metaDesc || autoMetaDesc(p.content?.rendered || ''),
    ogImage: (() => {
      const orig = seo.ogImage || '';
      const found = imageMap.find(m => m.originalUrl === orig);
      return found ? found.localPath : orig;
    })(),
  };
});

const output = `// AUTO-GENERATED from WordPress REST API – do not edit manually
// Run: node lib/build-real-pages.mjs to regenerate

import { MANUAL_PAGES } from './manual-pages';

export interface WpPage {
  id: number;
  slug: string;
  title: string;
  content: string;
  metaTitle: string;
  metaDesc: string;
  canonical: string;
  ogTitle: string;
  ogDesc: string;
  ogImage: string;
}

const GENERATED_PAGES: WpPage[] = ${JSON.stringify(pages, null, 2)};

const MANUAL_SLUGS = new Set(MANUAL_PAGES.map((p) => p.slug));

// עמוד שקיים גם כאן וגם ב-manual-pages.ts מוגש מהגרסה הידנית.
// כך עריכות מקומיות שורדות רגנרציה מוורדפרס, ועדיין ניתנות לעריכה חוזרת.
export const WP_PAGES: WpPage[] = [
  ...GENERATED_PAGES.filter((p) => !MANUAL_SLUGS.has(p.slug)),
  ...MANUAL_PAGES,
];

export function getWpPageBySlug(slug: string): WpPage | undefined {
  return WP_PAGES.find((p) => p.slug === slug);
}
`;

writeFileSync(new URL('./wp-pages.ts', import.meta.url), output, 'utf8');
console.log(`✓ Generated wp-pages.ts with ${pages.length} pages`);
pages.forEach(p => console.log(`  • ${p.slug}`));
