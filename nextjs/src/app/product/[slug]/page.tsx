import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { products } from '@/data';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';
import { getProductSlug } from '@/lib/slugs';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: getProductSlug(product.text),
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => getProductSlug(p.text) === slug);
  if (!product) return { title: 'Metal Powder — Jagada Industries' };
  return {
    title: `${product.text} — Jagada Industries`,
    description: product.desc || `${product.text} — Aluminium-Magnesium alloy for pyrotechnics and fireworks. Manufacturer & exporter from India.`,
    openGraph: {
      title: `${product.text} — Jagada Industries`,
      description: product.desc || `${product.text} — Aluminium-Magnesium alloy for pyrotechnics and fireworks. Manufacturer & exporter from India.`,
      images: [product.url],
    },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((p) => getProductSlug(p.text) === slug);

  if (!product) notFound();

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: product.text, url: `/product/${slug}` },
        ]}
      />

      <Link
        href="/products"
        id="tech-back"
        className="d-flex justify-content-center align-items-center"
      >
        <i className="fa fa-arrow-left"></i>
      </Link>

      <section className="product-holder">
        <div className="parallelogram" style={{ backgroundImage: `url(${product.url})` }}></div>
      </section>

      <section id="tech-data" className="row w-100 active">
        {product.data.map((datum, idx) => (
          <div key={idx} className="col-lg-3 col-md-6 col-12 mb-3">
            <div className="d-flex align-items-center justify-content-around p-3 mx-3">
              <div className="tech-logo d-flex justify-content-center align-items-center" style={{ background: datum.color }}>
                <i className={`fa fa-${datum.class}`}></i>
              </div>
              <div className="tech-datum d-flex flex-column">
                <span className="tech-value d-flex justify-content-start">
                  <span>{datum.value}</span>
                  <span className="mr-1">{datum.unit}</span>
                </span>
                <span className="tech-head">{datum.head}</span>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}