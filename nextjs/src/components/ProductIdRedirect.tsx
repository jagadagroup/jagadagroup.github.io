'use client';

import { useEffect, useState } from 'react';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';

/** Map legacy ?id= URLs (still appearing in Search Console) to SEO slugs */
const ID_TO_SLUG: Record<string, string> = Object.fromEntries(
  products.map((p) => [String(p.id), getProductSlug(p.text)])
);

export default function ProductIdRedirect() {
  const [message, setMessage] = useState('Redirecting to product…');

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && !ID_TO_SLUG[id]) {
      setMessage('Unknown product id — taking you to the catalog…');
      window.location.replace('/products/');
      return;
    }
    const slug = (id && ID_TO_SLUG[id]) || getProductSlug(products[0].text);
    window.location.replace(`/product/${slug}/`);
  }, []);

  return (
    <div className="container" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
      <p>{message}</p>
      <p>
        <a href="/products/">Browse all products</a>
      </p>
    </div>
  );
}
