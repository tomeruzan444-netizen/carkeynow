// Extract FAQ items from WordPress HTML content
export interface FaqItem { q: string; a: string }

export function extractFaq(html: string): FaqItem[] {
  // Look for h3/h4 elements that look like questions (contain ?)
  const faqItems: FaqItem[] = [];

  // Match <hN>question?</hN> followed by <p>answer</p>
  const pattern = /<h[34][^>]*>([^<]*\?[^<]*)<\/h[34]>\s*<p[^>]*>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = pattern.exec(html)) !== null) {
    const q = match[1].replace(/<[^>]+>/g, '').trim();
    const a = match[2].replace(/<[^>]+>/g, '').trim();
    if (q && a && q.length < 200 && a.length < 600) {
      faqItems.push({ q, a });
    }
  }

  return faqItems.slice(0, 8); // max 8 FAQ items
}
