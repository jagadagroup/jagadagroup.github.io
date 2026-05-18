import { LocaleCatalog, createLocaleMetadata } from '@/components/LocaleLanding';
import Link from 'next/link';
import { products } from '@/data';

export const metadata = createLocaleMetadata('vi-VN', '/products/', 'Sản phẩm');

export default function ViProducts() {
  return (
    <>
      <LocaleCatalog locale="vi-VN" />
      <div>
        <div className="row no-gutters">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/vi-VN/product/${product.id}`}>
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