// עיבוד כותרות H2 בתוכן: הוספת מזהי עוגן (id) לכל H2 ובניית רשימת ניווט.
// מרונדר בשרת כדי שהעוגנים והקישורים יופיעו ב-HTML הסטטי - תנאי לכך
// שגוגל יוכל להציג jump-to sitelinks בתוצאות החיפוש.

export interface TocItem {
  id: string;
  text: string;
}

export function processContentH2(
  html: string,
  startIdx = 0,
): { html: string; items: TocItem[]; nextIdx: number } {
  const items: TocItem[] = [];
  let i = startIdx;
  const out = html.replace(
    /<h2(\s[^>]*)?>([\s\S]*?)<\/h2>/g,
    (full: string, attrs: string, inner: string) => {
      const text = String(inner)
        .replace(/<[^>]+>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      if (!text) return full;
      const a = attrs || '';
      const existing = a.match(/\sid=["']([^"']+)["']/);
      if (existing) {
        items.push({ id: existing[1], text });
        return full;
      }
      const id = `sec-${i++}`;
      items.push({ id, text });
      return `<h2 id="${id}"${a}>${inner}</h2>`;
    },
  );
  return { html: out, items, nextIdx: i };
}
