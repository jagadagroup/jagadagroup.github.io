import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';
import { magnalium as magnaliumProducts } from '@/data';

export const metadata = {
  title: 'Productos Magnalium — Jagada Industries',
  description: 'Polvos de Magnalium de primera calidad.',
  openGraph: { locale: 'es_ES' },
};

export default function EsMagnaliumPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.products.catalog}</h2>
          <h3>{t.products.tagline}</h3>
        </div>
      </div>
      <div>
        <div className="row no-gutters">
          {magnaliumProducts.map((product, index) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/es-ES/product/${index + 1}`}>
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