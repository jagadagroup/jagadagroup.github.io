import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Magnesium Powder for Fireworks — Bright Stars & White Effects — Jagada Industries',
  description:
    'Buy magnesium powder for fireworks from an Indian manufacturer. Grade 1 & 2 IS 2307 Mg powder for stars, mines, and white flash effects. Mesh guidance and export packaging included.',
  alternates: { canonical: `${siteConfig.url}/magnesium-powder-for-fireworks/` },
};

export default function MagnesiumPowderForFireworksPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Magnesium Powder for Fireworks</h2>
          <h3>Grade 1 &amp; 2 · IS 2307 · Bright White Stars, Mines &amp; Flash</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Fireworks formulators choose <strong>magnesium powder for fireworks</strong> when they need maximum
          white-light intensity. Magnesium burns hotter and brighter than aluminum at equivalent mesh, which
          is why it appears in stars, mines, strobes, and illuminating shells where candlepower matters.
        </p>
        <p>
          Jagada Industries supplies fireworks-grade magnesium powder (IS 2307) from India — Grade 1 for
          premium white effects, Grade 1 Coated for humid plants, and Grade 2 where formulators want a lower
          ignition temperature or a more economical Mg/Al blend.
        </p>

        <h3>Which Grade for Which Effect?</h3>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Grade</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Best For</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Notes</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Grade 1', 'Bright white stars, signal shells, precision displays', 'Mg 99.8% — cleanest burn'],
                ['Grade 1 Coated', 'Factories in humid climates; long stock life', 'Same purity, better moisture resistance'],
                ['Grade 2', 'Cost-sensitive fireworks lines; colour-modified mixes', 'Mg ~90% with Al balance'],
              ].map(([grade, best, notes], i) => (
                <tr key={grade} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{grade}</td>
                  <td style={{ padding: '8px 12px' }}>{best}</td>
                  <td style={{ padding: '8px 12px' }}>{notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Magnesium vs Magnalium in Fireworks</h3>
        <p>
          Need crackling, flash, or fountain spark? Magnalium (Al-Mg alloy powder) is often the better metal
          fuel. Need pure white intensity? Magnesium wins. See our comparison:{' '}
          <Link href="/blog/magnalium-vs-magnesium-vs-aluminum/">
            Magnalium vs Magnesium vs Aluminum powder
          </Link>
          . Magnalium buyers can browse the{' '}
          <Link href="/magnalium/">Magnalium product catalog</Link>.
        </p>

        <h3>Quality &amp; Shipping</h3>
        <p>
          Every lot ships with batch documentation. Packaging follows UN 1418 dangerous-goods rules. Quality
          methods are detailed on our{' '}
          <Link href="/high-purity-magnesium-powder/">high-purity magnesium powder</Link> page. Defense
          illuminating buyers should see{' '}
          <Link href="/magnesium-powder-for-defense/">magnesium powder for defense</Link>.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
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
            href="/magnesium/"
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
            View Magnesium Products
          </Link>
        </div>
      </div>
    </>
  );
}
