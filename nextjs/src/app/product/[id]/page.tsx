import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data';
import { ProductJsonLd, BreadcrumbJsonLd } from '@/components/JsonLd';

export async function generateStaticParams() {
  return products.map((product) => ({ id: String(product.id) }));
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
    return <div className="container py-5 text-center"><h1>Product not found</h1><Link href="/products">Back to products</Link></div>;
  }

  return (
    <>
      <ProductJsonLd product={product} />
      <BreadcrumbJsonLd items={[
        { name: 'Home', url: '/' },
        { name: 'Products', url: '/products' },
        { name: product.text, url: `/product/${product.id}` },
      ]} />
      <link rel="stylesheet" type="text/css" href="/stylesheets/product.css" />

      <Link id="tech-back" className="d-flex justify-content-center align-items-center" href="/products">
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