import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Metal Powder for Defense & Aerospace — Magnesium & Magnalium — Jagada Industries',
  description: 'High-purity Magnesium and Magnalium powder for defense pyrotechnic applications — signal flares, illuminating compositions, countermeasures. ISO certified Indian manufacturer.',
  alternates: { canonical: `${siteConfig.url}/metal-powder-for-defense/` },
};

export default function MetalPowderForDefensePage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Metal Powder for Defense & Aerospace</h2>
          <h3>Magnesium & Magnalium Powder — ISO 9001:2008 Certified Manufacturer</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>

        <p>
          Defense and aerospace pyrotechnic systems demand the highest levels of compositional consistency,
          purity verification, and supply chain traceability. Jagada Industries has supplied Magnesium and
          Magnalium powder to defense pyrotechnic manufacturers since 1992, backed by ISO 9001:2008
          certification and batch-level OES compositional verification. Our products are used in illuminating
          flares, signal compositions, countermeasure decoys, tracer formulations, and infrared (IR) decoy
          payloads.
        </p>

        <h3>Products for Defense Applications</h3>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Product</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Specification</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Defense Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Magnesium Powder Grade 1', 'Mg 99.8%, IS 2307, 40–80 mesh', 'Illuminating flares, signal compositions, decoy payloads'],
                ['Magnalium 100 mesh', 'Al-50% Mg-50%, 150 µm', 'Flash and burst compositions, pyrotechnic munitions'],
                ['Magnalium 200 mesh', 'Al-50% Mg-50%, 74 µm', 'Fast-burn compositions, IR countermeasure charges'],
                ['Magnalium 325 mesh', 'Al-50% Mg-50%, 44 µm', 'Sensitive initiating compositions, tracer elements'],
              ].map(([product, spec, app], i) => (
                <tr key={product} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{product}</td>
                  <td style={{ padding: '8px 12px' }}>{spec}</td>
                  <td style={{ padding: '8px 12px' }}>{app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Quality Assurance for Defense Supply</h3>
        <p>
          Every batch supplied for defense applications undergoes Optical Emission Spectroscopy (OES)
          verification of alloy composition before and after production. Particle size distribution is
          confirmed by sieve analysis to ensure consistent mesh classification. We issue batch-specific
          test certificates, IS 2307 conformance certificates for Magnesium powder, and full traceability
          records from raw material procurement through to finished product. Our ISO 9001:2008 quality
          management system ensures process consistency across every production run.
        </p>

        <h3>Supply Terms & Packaging</h3>
        <p>
          We supply in bulk quantities suitable for defense procurement programs. All metal powder shipments
          use UN-certified packaging compliant with IATA/IMDG dangerous goods regulations. Secure,
          moisture-resistant inner packaging is standard. Export documentation including packing declarations,
          MSDS, and certificates of conformance are provided with every shipment.
        </p>

        <p style={{ fontSize: '0.85rem', color: '#6b7280', borderLeft: '3px solid #e2e8f0', paddingLeft: '1rem', marginTop: '1rem' }}>
          Note: Supply of metal powders for defense applications is subject to applicable export control
          regulations and end-use verification requirements. Jagada Industries complies with all relevant
          Indian export control laws and international obligations.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/contact-us"
            style={{ display: 'inline-block', padding: '10px 22px', background: '#1a3c6b', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            Request a Quote
          </Link>
          <Link
            href="/magnesium-powder-for-defense/"
            style={{ display: 'inline-block', padding: '10px 22px', background: 'steelblue', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            Magnesium for Defense
          </Link>
          <Link
            href="/high-purity-magnesium-powder/"
            style={{ display: 'inline-block', padding: '10px 22px', border: '2px solid #1a3c6b', color: '#1a3c6b', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            Quality Controls
          </Link>
        </div>
      </div>
    </>
  );
}
