import { LocaleCatalog, createLocaleMetadata } from '@/components/LocaleLanding';
import Link from 'next/link';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';

export const metadata = createLocaleMetadata('fr-FR', '/products/', 'Produits');

export default function FrProducts() {
  return (
    <>
      <LocaleCatalog locale="fr-FR" />
      <div>
        <div className="row no-gutters">
          {products.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              {/* No fr-FR product detail route exists — link to the real English spec page
                  rather than a dead /fr-FR/product/{id} URL. */}
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