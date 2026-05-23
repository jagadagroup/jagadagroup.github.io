import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Metal Powder Guides & Pyrotechnic Resources — Jagada Industries',
  description: 'Expert guides on Magnalium powder, Magnesium powder, metal powders for fireworks, pyrotechnic raw materials, and industrial applications from a leading manufacturer.',
};

const POSTS = [
  {
    slug: '/blog/why-indian-magnalium-powder-outperforms-chinese-alternatives',
    title: 'Why Indian Magnalium Powder Outperforms Chinese Alternatives',
    excerpt: 'Discover why Indian manufacturers excel in consistent quality and compliance for magnalium powder compared to Chinese alternatives.',
    date: 'May 2026',
    readTime: '11 min read',
    tags: ['Magnalium', 'Indian Manufacturer', 'Pyrotechnics'],
  },
  {
    slug: '/blog/grade-1-vs-grade-2-magnesium-powder',
    title: 'Grade 1 vs. Grade 2 Magnesium Powder: Which Grade Is Right for Your Application?',
    excerpt: 'Discover the differences between Grade 1 and Grade 2 magnesium powder — purity, cost, and performance for pyrotechnics, fireworks, and chemicals.',
    date: 'May 2026',
    readTime: '10 min read',
    tags: ['Magnesium', 'Grades', 'Pyrotechnics', 'Fireworks'],
  },
  {
    slug: '/blog/how-to-choose-mesh-size-magnalium-powder',
    title: 'How to Choose the Right Mesh Size for Magnalium Powder in Pyrotechnics',
    excerpt: 'Discover how mesh size affects fireworks performance. Expert advice on choosing the right magnalium powder for strobe effects, crackling stars, and more.',
    date: 'May 2026',
    readTime: '9 min read',
    tags: ['Magnalium', 'Fireworks', 'Mesh Size', 'Metal Powders'],
  },
  {
    slug: '/blog/magnalium-vs-magnesium-vs-aluminum',
    title: 'Magnalium vs Magnesium vs Aluminum Powder: Which Metal Fuel Should You Use?',
    excerpt: 'Compare Magnalium, Magnesium, and Aluminum powder for pyrotechnics. Learn the differences in brightness, burn rate, mesh size recommendations, and when to use each metal fuel.',
    date: 'May 2026',
    readTime: '7 min read',
    tags: ['Magnalium', 'Magnesium', 'Comparison', 'Fireworks', 'Guide'],
  },
];

export default function BlogIndex() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/blog.css" />
      <div className="blog-index-container">
        <h1 className="blog-index-title">Jagada Industries Blog</h1>
        <p className="blog-index-subtitle">
          Expert guides on metal powders, pyrotechnic raw materials, and industrial manufacturing.
          Written by the team at Jagada Industries — manufacturing since 1992.
        </p>

        {POSTS.map((post) => (
          <article key={post.slug} className="blog-card">
            <div className="blog-card-tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-tag">{tag}</span>
              ))}
            </div>
            <Link href={post.slug} className="blog-card-title">
              {post.title}
            </Link>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div className="blog-card-footer">
              <span className="blog-card-date">{post.date} &middot; {post.readTime}</span>
              <Link href={post.slug} className="blog-read-more">Read &rarr;</Link>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
