import type { Metadata } from 'next';
import Link from 'next/link';
import { magnesium as magnesiumProducts } from '@/data';

export const metadata: Metadata = {
  title: 'Magnesium Products — Jagada Industries',
  description: 'High-purity Magnesium powders in various grades for fireworks, industrial, and pyrotechnic applications.',
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
          {magnesiumProducts.map((product, index) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product?id=${index + 1}`}>
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