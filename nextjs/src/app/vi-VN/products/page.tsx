import { LocaleCatalog, createLocaleMetadata } from '@/components/LocaleLanding';
import Link from 'next/link';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';

export const metadata = createLocaleMetadata('vi-VN', '/products/', 'Sản phẩm');

export default function ViProducts() {
  return (
    <>
      <LocaleCatalog locale="vi-VN" />
      <div className="d-flex justify-content-center gap-3 flex-wrap py-3">
        <Link href="/vi-VN/magnalium/" className="btn btn-outline-primary">Bột Magnalium</Link>
        <Link href="/vi-VN/magnesium/" className="btn btn-outline-primary">Bột Magiê</Link>
      </div>
      <div>
        <div className="row no-gutters">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              {/* No vi-VN product detail route exists — link to the real English spec page
                  rather than a dead /vi-VN/product/{id} URL. */}
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}/`}>
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