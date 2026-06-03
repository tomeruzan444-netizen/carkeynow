import type { MetadataRoute } from 'next';
import { WP_PAGES } from '@/lib/wp-pages';
import { SITE } from '@/lib/siteData';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const home: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`,               lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${SITE.url}/service-areas/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const dynamic: MetadataRoute.Sitemap = WP_PAGES.map((page) => ({
    url: page.canonical || `${SITE.url}/${page.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    // Higher priority for main service pages, lower for city/brand variants
    priority: page.slug.includes('-ב') || page.slug.includes('ל') && page.slug.startsWith('שכפול-מפתח-ל') ? 0.7 : 0.8,
  }));

  return [...home, ...dynamic];
}
