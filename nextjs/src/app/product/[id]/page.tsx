import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === Number(id));
  if (!product) return { title: 'Product — Jagada Industries' };
  return {
    title: `${product.text} — Jagada Industries`,
    description: product.desc || `Technical specifications for ${product.text}`,
    openGraph: {
      title: `${product.text} — Jagada Industries`,
      description: product.desc || `Technical specifications for ${product.text}`,
      images: [product.url],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = Number(id);
  const product = products.find((p) => p.id === productId);

  if (!product || productId < 1 || productId > products.length) {
    return (
      <div className="container py-5 text-center">
        <h1 className="text-2xl">Product not found</h1>
        <Link href="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.text, url: `/product/${product.id}` },
        ]}
      />

      <Link
        href="/products"
        id="tech-back"
        className="fixed top-16 left-4 z-30 bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
      >
        <i className="fa fa-arrow-left text-xl" />
      </Link>

      <section className="product-holder">
        <div
          className="parallelogram w-full h-96 bg-cover bg-center"
          style={{ backgroundImage: `url(${product.url})` }}
        />
      </section>

      <section id="tech-data" className="row w-full py-4 px-2">
        {product.data.map((datum, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-around p-3 mx-3 border rounded-lg bg-white shadow-sm">
              <div
                className="tech-logo d-flex justify-content-center align-items-center rounded-full w-12 h-12 text-white text-xl"
                style={{ background: datum.color }}
              >
                <i className={`fa fa-${datum.class}`} />
              </div>
              <div className="tech-datum d-flex flex-column ml-3">
                <span className="tech-value d-flex justify-content-start text-xl font-bold">
                  <span>{datum.value}</span>
                  <span className="ml-1 text-sm text-gray-500">{datum.unit}</span>
                </span>
                <span className="tech-head text-xs text-gray-500 uppercase">{datum.head}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}