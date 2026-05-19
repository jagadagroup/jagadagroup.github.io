import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog — Metal Powder Guides & Pyrotechnic Resources — Jagada Industries',
  description: 'Expert guides on Magnalium powder, Magnesium powder, metal powders for fireworks, pyrotechnic raw materials, and industrial applications from a leading manufacturer.',
};

const POSTS = [
  {
    slug: '/blog/magnalium-vs-magnesium-vs-aluminum',
    title: 'Magnalium vs Magnesium vs Aluminum Powder: Which Metal Fuel Should You Use?',
    excerpt: 'Compare Magnalium, Magnesium, and Aluminum powder for pyrotechnics. Learn the differences in brightness, burn rate, mesh size recommendations, and when to use each metal fuel.',
    date: 'May 2026',
    tags: ['Magnalium', 'Magnesium', 'Comparison', 'Fireworks', 'Guide'],
  },
];

export default function BlogIndex() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/aboutUs.css" />
      <div className="container py-4" style={{ maxWidth: '800px' }}>
        <h1 className="h3 mb-4">Jagada Industries Blog</h1>
        <p className="text-muted mb-4">
          Expert guides on metal powders, pyrotechnic raw materials, and industrial manufacturing. Written by the team at Jagada Industries — manufacturing since 1992.
        </p>

        <div className="row">
          {POSTS.map((post) => (
            <div key={post.slug} className="col-12 mb-4">
              <div className="p-3 border rounded">
                <div className="d-flex flex-wrap gap-1 mb-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="badge badge-secondary mr-1">{tag}</span>
                  ))}
                </div>
                <h2 className="h5 mb-2">
                  <Link href={post.slug} className="text-dark text-decoration-none">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-muted small mb-2">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">{post.date}</small>
                  <Link href={post.slug} className="btn btn-outline-primary btn-sm">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}