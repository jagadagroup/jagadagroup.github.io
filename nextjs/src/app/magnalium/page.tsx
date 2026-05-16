import type { Metadata } from 'next';
import Link from 'next/link';
import { magnalium as magnaliumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';

export const metadata: Metadata = {
  title: 'Magnalium Products — Jagada Industries',
  description: 'Premium Magnalium powders in various mesh sizes for fireworks, pyrotechnics, and industrial applications.',
};

export default function MagnaliumPage() {
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
          {magnaliumProducts.map((product) => (
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