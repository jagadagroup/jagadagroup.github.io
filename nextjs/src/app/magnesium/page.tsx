import type { Metadata } from 'next';
import Link from 'next/link';
import { magnesium as magnesiumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';

export const metadata: Metadata = {
  title: 'Magnesium Powder Manufacturer & Exporter India — Grade 1 & 2 — Jagada Industries',
  description: 'High-purity Magnesium powder (99.8% IS 2307) in Grade 1, Grade 1 Coated, and Grade 2. Exported worldwide for fireworks and industrial applications.',
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
      <div>
        <div className="row no-gutters">
          {magnesiumProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}`}>
                <img className="w-100" src={product.url} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}