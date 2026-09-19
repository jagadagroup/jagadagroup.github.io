import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Magnesium Powder for Defense — Illuminating Flares & Countermeasures — Jagada Industries',
  description:
    'IS 2307 Grade 1 magnesium powder for defense pyrotechnics: illuminating flares, signal compositions, tracer elements, and IR decoys. Batch-verified quality from an ISO-certified Indian manufacturer.',
  alternates: { canonical: `${siteConfig.url}/magnesium-powder-for-defense/` },
  openGraph: {
    title: 'Magnesium Powder for Defense Applications — Jagada Industries',
    description:
      'High-purity magnesium powder for defense illuminating flares, signals, and countermeasure compositions. IS 2307 · OES verified · full batch traceability.',
  },
};

export default function MagnesiumPowderForDefensePage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Magnesium Powder for Defense</h2>
          <h3>Illuminating Flares, Signals &amp; Countermeasures — IS 2307 Grade 1</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Defense pyrotechnic systems cannot tolerate compositional drift. A flare that burns darker than
          specified, or a decoy charge that ignites inconsistently, is a mission failure. That is why{' '}
          <strong>magnesium powder for defense</strong> is specified to tighter purity, particle-size, and
          documentation standards than commercial fireworks grades.
        </p>
        <p>
          Jagada Industries has manufactured pyrotechnic-grade magnesium powder in Virudhunagar, India since
          1992. Our Grade 1 material (Mg 99.8%, IS 2307) is supplied for illuminating compositions, signal
          flares, tracer formulations, and infrared countermeasure payloads — with batch-level Optical Emission
          Spectroscopy (OES) verification and full lot traceability.
        </p>

        <h3>Why Magnesium Powder in Defense Pyrotechnics?</h3>
        <p>
          Magnesium burns near 3,100°C and produces an intense white light with high luminous efficiency per
          gram of fuel. In defense illuminating flares and signal devices, that brightness-to-mass ratio
          matters: payloads must deliver specified candlepower within strict weight and volume envelopes.
          Compared with aluminum alone, magnesium ignites more readily and sustains a hotter flame — which is
          why it remains the preferred metal fuel for many illuminating and decoy formulations.
        </p>

        <h3>Recommended Grades &amp; Mesh for Defense Use</h3>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Product</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Specification</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Typical Defense Use</th>
              </tr>
            </thead>
            <tbody>
              {[
                [
                  'Grade 1 Magnesium Powder',
                  'Mg 99.8%, IS 2307, 40–80 mesh',
                  'Illuminating flares, signal compositions, tracer fuel',
                ],
                [
                  'Grade 1 Coated',
                  'Mg 99.8%, moisture-resistant coating',
                  'Humid storage / long shelf-life defense stockpiles',
                ],
                [
                  'Magnalium 100–200 mesh',
                  'Al 50% / Mg 50%',
                  'Flash, burst, and fast-burn countermeasure charges',
                ],
                [
                  'Magnalium 325 mesh',
                  'Al 50% / Mg 50%, ~44 µm',
                  'Sensitive initiating and fine tracer elements',
                ],
              ].map(([product, spec, use], i) => (
                <tr key={product} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{product}</td>
                  <td style={{ padding: '8px 12px' }}>{spec}</td>
                  <td style={{ padding: '8px 12px' }}>{use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Quality Requirements Defense Buyers Should Demand</h3>
        <ul>
          <li>
            <strong>Assay &amp; impurities:</strong> Mg ≥ 99.8% with controlled Fe, Si, Cu, and chloride
            levels per IS 2307 — verified by OES on every batch.
          </li>
          <li>
            <strong>Particle size distribution:</strong> Sieve analysis confirming mesh cut; narrow PSD reduces
            burn-rate scatter between lots.
          </li>
          <li>
            <strong>Certificates:</strong> Batch test certificate, IS 2307 conformance statement, MSDS, and
            packing list tied to lot numbers.
          </li>
          <li>
            <strong>Packaging:</strong> UN 1418-compliant dangerous goods packaging with moisture-resistant
            inner liners suitable for long-term magazine storage.
          </li>
          <li>
            <strong>Traceability:</strong> Raw-material lot → melt → mill → sieve → finished drum — documented
            end to end.
          </li>
        </ul>

        <h3>How Jagada Controls Quality for Defense Supply</h3>
        <p>
          Every defense-facing lot is produced under our ISO 9001:2008 quality management system. Composition
          is checked before and after milling. Mesh classification is confirmed by sieve analysis. We do not
          blend off-spec fines into Grade 1 shipments. If a lot fails assay or PSD limits, it is quarantined —
          not reworked into a “close enough” grade. That discipline is what keeps flare performance predictable
          across multi-year procurement programs.
        </p>
        <p>
          For a deeper look at our inspection methods, see{' '}
          <Link href="/high-purity-magnesium-powder/">high-purity magnesium powder quality controls</Link> and
          our <Link href="/production-quality/">production quality</Link> page. Related reading:{' '}
          <Link href="/blog/metal-powder-for-defense-pyrotechnics/">
            metal powder in defense pyrotechnics
          </Link>
          .
        </p>

        <h3>Export Controls &amp; Compliance</h3>
        <p style={{ fontSize: '0.95rem' }}>
          Supply of magnesium powder for defense end-use is subject to applicable Indian export-control rules
          and end-use verification. Jagada Industries complies with relevant regulations and will request
          end-use declarations where required. Commercial fireworks buyers should use our{' '}
          <Link href="/magnesium-powder-for-fireworks/">magnesium powder for fireworks</Link> page instead.
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
            Request Defense Quote
          </Link>
          <Link
            href="/product/grade-1-magnesium-powder/"
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
            Grade 1 Magnesium Specs
          </Link>
          <Link
            href="/metal-powder-for-defense/"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              border: '2px solid #1a3c6b',
              color: '#1a3c6b',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            All Defense Metal Powders
          </Link>
        </div>
      </div>
    </>
  );
}
