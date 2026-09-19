import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'High-Purity Magnesium Powder — IS 2307 Quality Controls — Jagada Industries',
  description:
    'How Jagada ensures high-purity magnesium powder quality: IS 2307 assay, OES verification, sieve analysis, coated vs uncoated grades, and batch certificates for pyrotechnic and defense buyers.',
  alternates: { canonical: `${siteConfig.url}/high-purity-magnesium-powder/` },
  openGraph: {
    title: 'High-Purity Magnesium Powder Quality — What We Test on Every Batch',
    description:
      '99.8% Mg (IS 2307), OES composition checks, mesh verification, and full lot documentation from an Indian manufacturer since 1992.',
  },
};

export default function HighPurityMagnesiumPowderPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>High-Purity Magnesium Powder</h2>
          <h3>IS 2307 · OES Verified · Batch-Certified — Quality You Can Audit</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          “High purity” on a magnesium powder datasheet is meaningless without the test methods behind it.
          Buyers ranking suppliers for pyrotechnics, defense illuminating compositions, or specialty chemical
          use should ask three questions: What is the assay target? How is it measured? And can you prove this
          lot meets it?
        </p>
        <p>
          At Jagada Industries, <strong>high-purity magnesium powder</strong> means Grade 1 material at Mg
          99.8% conforming to{' '}
          <Link href="/blog/is-2307-magnesium-powder-standard/">IS 2307</Link>, verified by Optical Emission
          Spectroscopy on every production batch — not a brochure claim recycled from last year’s catalog.
          See also <Link href="/blog/grade-1-vs-grade-2-magnesium-powder/">Grade 1 vs Grade 2</Link>.
        </p>

        <h3>What “High Purity” Means in Practice</h3>
        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Parameter</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Grade 1 Target</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Magnesium (Mg)', '≥ 99.8%', 'Higher Mg → hotter, cleaner white burn'],
                ['Iron / silicon / copper', 'Controlled per IS 2307', 'Impurities shift ignition and colour'],
                ['Particle size', '40–80 mesh typical', 'PSD drives burn rate consistency'],
                ['Moisture / oxide', 'Minimised; coated option available', 'Oxide deadens reactivity in storage'],
              ].map(([param, target, why], i) => (
                <tr key={param} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{param}</td>
                  <td style={{ padding: '8px 12px' }}>{target}</td>
                  <td style={{ padding: '8px 12px' }}>{why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Our Quality Control Sequence</h3>
        <ol>
          <li>
            <strong>Incoming metal:</strong> Raw magnesium screened before milling; off-spec feedstock is
            rejected.
          </li>
          <li>
            <strong>Process control:</strong> Milling and classification under ISO 9001:2008 procedures with
            documented lot identity.
          </li>
          <li>
            <strong>OES composition:</strong> Alloy / metal assay checked so Grade 1 shipments stay at 99.8% Mg.
          </li>
          <li>
            <strong>Sieve analysis:</strong> Mesh cut confirmed so particle size distribution matches the ordered
            grade.
          </li>
          <li>
            <strong>Release package:</strong> Batch test certificate, IS 2307 statement, MSDS, and UN-compliant
            packaging documents ship with the goods.
          </li>
        </ol>

        <h3>Grade 1, Grade 1 Coated, and Grade 2</h3>
        <p>
          Choose purity and surface protection for the environment — not just the lowest invoice price:
        </p>
        <ul>
          <li>
            <Link href="/product/grade-1-magnesium-powder/">Grade 1</Link> — highest purity for illuminating
            flares, signal compositions, and precision pyrotechnics.
          </li>
          <li>
            <Link href="/product/grade-1-magnesium-powder-coated/">Grade 1 Coated</Link> — same purity with a
            thin protective coating for humid climates and longer warehouse life (Mexico, Brazil, Vietnam
            buyers typically prefer this).
          </li>
          <li>
            <Link href="/product/grade-2-magnesium-powder/">Grade 2</Link> — Mg ~90% with aluminum balance;
            used where lower ignition temperature or cost-sensitive fireworks formulations are acceptable.
          </li>
        </ul>
        <p>
          Compare grades in detail:{' '}
          <Link href="/blog/grade-1-vs-grade-2-magnesium-powder/">Grade 1 vs Grade 2 magnesium powder</Link>.
          For defense-critical lots, start with{' '}
          <Link href="/magnesium-powder-for-defense/">magnesium powder for defense</Link>.
        </p>

        <h3>Documentation Buyers Receive</h3>
        <p>
          Every export shipment can include a batch certificate of analysis, packing declaration, dangerous
          goods paperwork for UN 1418, and conformance language referencing IS 2307. Defense and aerospace
          procurement teams often require lot retention samples — we support that on request.
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
            Request COA Sample Pack
          </Link>
          <Link
            href="/production-quality/"
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
            Production Quality
          </Link>
          <Link
            href="/magnesium/"
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
            Magnesium Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
