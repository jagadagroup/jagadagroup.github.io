import type { Metadata } from 'next';
import Link from 'next/link';
import { magnesium as magnesiumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Magnesium Powder for Fireworks — Grade 1 & 2, 99.8% Purity — Jagada Industries',
  description: 'Magnesium powder for fireworks and pyrotechnics — Grade 1 (99.8% purity, IS 2307), Grade 1 Coated, and Grade 2. Manufactured and exported by Jagada Industries since 1992.',
  alternates: { canonical: '/magnesium/', languages: { en: '/magnesium/', 'es-ES': '/es-ES/magnesium/', 'x-default': '/magnesium/' } },
};

export default function MagnesiumPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>PRODUCT CATALOG</h2>
          <h3>Where quality meets customer</h3>
        </div>
      </div>
      <div className="container-fluid py-4 px-3 px-md-5">
        <p className="mx-auto text-center" style={{ maxWidth: '48rem' }}>
          Magnesium powder is the brightest metal fuel used in fireworks and pyrotechnics — at
          roughly 3,100°C flame temperature, no other metal fuel used in fireworks matches its
          light output. Jagada Industries manufactures Grade 1 Magnesium powder (99.8% purity,
          IS 2307) for maximum brightness, Grade 1 Coated for humid or tropical export markets
          where uncoated magnesium degrades faster, and Grade 2 (90% Mg / 9.8% Al) for
          cost-sensitive applications. All three grades are produced at our ISO 9001:2008 &amp;
          ISO 14001 certified facility in Virudhunagar, Tamil Nadu, and exported worldwide since
          1992.
        </p>
      </div>
      <div>
        <div className="row no-gutters">
          {magnesiumProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}`}>
                <img className="w-100" src={getOptimizedImageUrl(product.url, 400)} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}