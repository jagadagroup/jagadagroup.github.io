import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import ProductIdRedirect from '@/components/ProductIdRedirect';

// Static export can't 301. Client redirect maps legacy ?id= (still in GSC) and
// falls back to the first product slug. Canonical points at that slug so this
// index URL does not compete in search.
const defaultTarget = `/product/${getProductSlug(products[0].text)}/`;

export const metadata: Metadata = {
  title: 'Metal Powder Products — Jagada Industries',
  robots: 'noindex,follow',
  alternates: { canonical: defaultTarget, languages: { en: defaultTarget, 'x-default': defaultTarget } },
};

export default function ProductIndexPage() {
  return (
    <>
      <ProductIdRedirect />
      <p style={{ padding: '2rem', textAlign: 'center' }}>
        Redirecting to <Link href={defaultTarget}>our metal powder products</Link>&hellip;
      </p>
    </>
  );
}
