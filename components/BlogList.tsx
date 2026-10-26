import Link from 'next/link';
import { BLOG_POSTS, BLOG_SLUG, formatHebrewDate, type BlogPost } from '@/lib/blog';

/* רשימת הפוסטים, מוצגת בתחתית עמוד הבלוג. */
export function BlogList() {
  return (
    <div className="mt-8" dir="rtl">
      <h2 className="text-xl font-bold mb-4" style={{ color: 'var(--primary)' }}>
        כל הפוסטים
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="card p-5 flex flex-col">
            <time dateTime={post.date} className="text-xs text-gray-500">
              {formatHebrewDate(post.date)} · {post.readMinutes} דקות קריאה
            </time>
            <h3 className="font-bold text-lg mt-1 mb-2 leading-snug">
              <Link href={`/${post.slug}`} className="hover:underline"
                style={{ color: 'var(--primary)' }}>
                {post.cardTitle}
              </Link>
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed flex-1">{post.excerpt}</p>
            <Link href={`/${post.slug}`}
              className="mt-3 text-sm font-bold self-start"
              style={{ color: 'var(--accent)' }}>
              לקריאת הפוסט
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}

/* שורת המטא בראש פוסט: תאריך, זמן קריאה וחזרה לרשימה. */
export function BlogPostMeta({ post }: { post: BlogPost }) {
  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm mb-4 pb-4"
      style={{ borderBottom: '1px solid var(--border)' }} dir="rtl">
      <Link href={`/${BLOG_SLUG}`} className="font-bold" style={{ color: 'var(--accent)' }}>
        הבלוג
      </Link>
      <span className="text-gray-300">|</span>
      <time dateTime={post.date} className="text-gray-500">{formatHebrewDate(post.date)}</time>
      <span className="text-gray-300">|</span>
      <span className="text-gray-500">{post.readMinutes} דקות קריאה</span>
    </div>
  );
}
