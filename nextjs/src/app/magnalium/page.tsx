import type { Metadata } from 'next';
import Link from 'next/link';
import { magnalium as magnaliumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';
import { MagnaliumApplicationTiles } from '@/components/ApplicationTiles';

export const metadata: Metadata = {
  title: 'Magnalium Powder Manufacturer India — 18–325 Mesh Al-Mg Alloy | Jagada',
  description:
    'Buy Magnalium powder (50/50 Al-Mg) from India — 18 to 325 mesh for fireworks flash, fountains & strobes. Virgin metals, OES-verified. Manufacturer since 1992.',
  alternates: {
    canonical: '/magnalium/',
    languages: {
      en: '/magnalium/',
      'es-ES': '/es-ES/magnalium/',
      'vi-VN': '/vi-VN/magnalium/',
      'x-default': '/magnalium/',
    },
  },
  openGraph: {
    title: 'Magnalium Powder — Virgin Al-Mg Alloy for Fireworks & Pyrotechnics',
    description:
      '7 mesh sizes, OES batch verification, ISO-certified mill in Virudhunagar. Request a quote from Jagada Industries.',
  },
};

export default function MagnaliumPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Magnalium Powder Manufacturer
          </h1>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 500 }}>
            Al 50% / Mg 50% · 18–325 Mesh · Virgin Metals
          </h2>
          <h3>Where quality meets customer</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '1.5rem 1rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Magnalium powder is a 50% Aluminium / 50% Magnesium alloy — made from virgin (not recycled)
          metals, melted and atomized together rather than blended as separate powders. Jagada Industries
          has manufactured Magnalium since 1992 at our ISO 9001:2008 &amp; ISO 14001 facility in
          Virudhunagar, Tamil Nadu, with composition verified by Optical Emission Spectroscopy on every
          batch.
        </p>
        <p>
          We supply seven mesh sizes — 18, 40, 80, 100, 150, 200, and 325 — for fountains, crackling
          stars, flash powder, and strobe compositions. Start with{' '}
          <Link href="/magnalium-for-fireworks/">Magnalium for fireworks</Link>, compare fuels in{' '}
          <Link href="/blog/magnalium-vs-magnesium-vs-aluminum/">Magnalium vs Magnesium vs Aluminum</Link>,
          or pick mesh with our{' '}
          <Link href="/blog/how-to-choose-mesh-size-magnalium-powder/">mesh size guide</Link>.
        </p>
      </div>
      <div>
        <div className="row no-gutters">
          {magnaliumProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home"
            >
              <Link
                className="parallel-base d-flex flex-column"
                href={`/product/${getProductSlug(product.text)}/`}
              >
                <img className="w-100" src={getOptimizedImageUrl(product.url, 400)} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/contact-us/"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: '#1a3c6b',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Request a Quote
          </Link>
          <a
            href="https://wa.me/919443144719?text=Hi%20Jagada%20Industries%20—%20I%20need%20a%20quote%20for%20Magnalium%20powder"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: '#25D366',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            WhatsApp Enquire
          </a>
        </div>
      </div>
      <MagnaliumApplicationTiles />
    </>
  );
}
