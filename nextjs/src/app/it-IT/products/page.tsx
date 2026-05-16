import { LocaleCatalog, createLocaleMetadata } from '@/components/LocaleLanding';
import Link from 'next/link';
import { products } from '@/data';

export const metadata = createLocaleMetadata('it-IT', '/products/', 'Prodotti');

export default function ItProducts() {
  return (
    <>
      <LocaleCatalog locale="it-IT" />
      <div>
        <div className="row no-gutters">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/it-IT/product/${product.id}`}>
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