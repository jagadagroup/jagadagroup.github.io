import type { Metadata } from 'next';
import Link from 'next/link';
import { magnalium as magnaliumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Magnalium Powder — Al-Mg Alloy 18 to 325 Mesh for Pyrotechnics — Jagada Industries',
  description: 'Premium Magnalium (Aluminium-Magnesium alloy) powder in 18, 40, 80, 100, 150, 200, 325 mesh. Made from virgin metals. Manufacturer & exporter since 1992. Find exact uses for fountains, bursts, strobe compositions — made from virgin ISO-certified alloys.',
  // Only en + es-ES exist for this page — no pt-PT/fr-FR/vi-VN translation, unlike the getAlternates() default set.
  alternates: { canonical: '/magnalium/', languages: { en: '/magnalium/', 'es-ES': '/es-ES/magnalium/', 'x-default': '/magnalium/' } },
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
      <div className="container-fluid py-4 px-3 px-md-5">
        <p className="mx-auto text-center" style={{ maxWidth: '48rem' }}>
          Magnalium powder is a 50% Aluminium / 50% Magnesium alloy — made from virgin (not
          recycled) metals, melted and atomized together rather than blended as separate powders.
          Jagada Industries has manufactured Magnalium powder since 1992 at our ISO 9001:2008
          &amp; ISO 14001 certified facility in Virudhunagar, Tamil Nadu, with metal composition
          verified by OES (Optical Emission Spectroscopy) on every batch. We supply Magnalium
          powder in 7 mesh sizes — 18, 40, 80, 100, 150, 200, and 325 mesh — for fountains,
          crackling stars, flash powder, and strobe compositions in pyrotechnics and fireworks
          manufacturing.
        </p>
      </div>
      <div>
        <div className="row no-gutters">
          {magnaliumProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}`}>
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