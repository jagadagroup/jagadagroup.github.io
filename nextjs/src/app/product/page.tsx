import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';

// Static export (GitHub Pages) can't issue a real HTTP 301, so this page
// pairs a 0-second meta-refresh with noindex + a canonical pointing at the
// destination — the standard redirect pattern for static hosting.
const target = `/product/${getProductSlug(products[0].text)}/`;

export const metadata: Metadata = {
  title: 'Metal Powder Products — Jagada Industries',
  robots: 'noindex,follow',
  alternates: { canonical: target, languages: { en: target, 'x-default': target } },
};

export default function ProductIndexPage() {
  return (
    <>
      {/* Static export can't send a real HTTP redirect, so this is the fallback for
          crawlers/no-JS clients; React 19 hoists <meta> rendered here into <head>. */}
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p style={{ padding: '2rem', textAlign: 'center' }}>
        Redirecting to <Link href={target}>our metal powder products</Link>&hellip;
      </p>
    </>
  );
}
