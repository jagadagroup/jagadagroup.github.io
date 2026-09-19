import type { Metadata } from 'next';
import Link from 'next/link';
import { magnesium as magnesiumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';
import { MagnesiumApplicationTiles } from '@/components/ApplicationTiles';

export const metadata: Metadata = {
  title: 'Magnesium Powder Manufacturer India — Grade 1 & 2 IS 2307 — Jagada Industries',
  description:
    'Buy high-purity magnesium powder (99.8% IS 2307) from India’s Jagada Industries. Grade 1, Grade 1 Coated & Grade 2 for fireworks, pyrotechnics, defense flares. ISO certified since 1992.',
  alternates: {
    canonical: '/magnesium/',
    languages: {
      en: '/magnesium/',
      'es-ES': '/es-ES/magnesium/',
      'vi-VN': '/vi-VN/magnesium/',
      'x-default': '/magnesium/',
    },
  },
  openGraph: {
    title: 'Magnesium Powder Manufacturer & Exporter — Jagada Industries',
    description:
      'IS 2307 Grade 1 & 2 magnesium powder for fireworks, pyrotechnics, and defense illuminating compositions. Batch-verified quality from Virudhunagar, India.',
  },
};

export default function MagnesiumPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
            Magnesium Powder Manufacturer
          </h1>
          <h2 style={{ fontSize: '1.1rem', fontWeight: 500 }}>Grade 1 &amp; 2 · IS 2307 · Exported Worldwide</h2>
          <h3>Where quality meets customer</h3>
        </div>
      </div>

      <div className="container" style={{ padding: '1.5rem 1rem 0', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Magnesium powder is the brightest metal fuel used in fireworks and pyrotechnics — at roughly
          3,100°C flame temperature, few metal fuels match its light output. Jagada Industries manufactures
          and exports <strong>magnesium powder</strong> from Virudhunagar, Tamil Nadu — Grade 1 (Mg 99.8%,
          IS 2307), Grade 1 Coated for humid climates, and Grade 2 for cost-sensitive fireworks formulations.
          Since 1992 we have supplied pyrotechnic, fireworks, and defense illuminating customers who need
          batch-consistent metal fuel, not commodity scrap powder.
        </p>
        <p>
          Every Grade 1 lot is composition-checked by Optical Emission Spectroscopy and classified by sieve
          analysis. See how we verify purity on our{' '}
          <Link href="/high-purity-magnesium-powder/">high-purity magnesium powder</Link> page, or jump to
          application guides for{' '}
          <Link href="/magnesium-powder-for-fireworks/">fireworks</Link> and{' '}
          <Link href="/magnesium-powder-for-defense/">defense</Link>.
        </p>
      </div>

      <div>
        <div className="row no-gutters">
          {magnesiumProducts.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home"
            >
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}/`}>
                <img className="w-100" src={getOptimizedImageUrl(product.url, 400)} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.35rem', color: '#1a3c6b', fontWeight: 700 }}>Why Buyers Specify Jagada Magnesium</h2>
        <ul>
          <li>
            <strong>IS 2307 Grade 1 purity</strong> — Mg 99.8% with documented assay, not a vague “high purity”
            claim.
          </li>
          <li>
            <strong>Defense-ready documentation</strong> — batch COAs and lot traceability for illuminating
            flares and signal compositions.
          </li>
          <li>
            <strong>Export packaging</strong> — UN 1418-compliant packing for sea and air dangerous goods.
          </li>
          <li>
            <strong>Three decades of milling</strong> — ISO 9001:2008 process discipline since 1992.
          </li>
        </ul>
        <p>
          Comparing metal fuels? Read{' '}
          <Link href="/blog/magnalium-vs-magnesium-vs-aluminum/">Magnalium vs Magnesium vs Aluminum</Link>.
          Choosing between grades?{' '}
          <Link href="/blog/grade-1-vs-grade-2-magnesium-powder/">Grade 1 vs Grade 2</Link>. Quality methods:{' '}
          <Link href="/blog/magnesium-powder-quality-control/">magnesium powder quality control</Link>.
        </p>
        <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
          <Link
            href="/high-purity-magnesium-powder/"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              background: 'steelblue',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Quality Controls
          </Link>
        </div>
      </div>

      <MagnesiumApplicationTiles />
    </>
  );
}
