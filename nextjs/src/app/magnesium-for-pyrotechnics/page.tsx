import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Magnesium Powder for Pyrotechnics — Stars, Strobes & Signal Flares — Jagada Industries',
  description: '99.8% pure Magnesium powder (IS 2307) for pyrotechnic applications — stars, mines, signal flares, strobe compositions. Grade 1 & 2. Indian exporter since 1992.',
  alternates: { canonical: `${siteConfig.url}/magnesium-for-pyrotechnics/` },
};

export default function MagnesiumForPyrotechnicsPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Magnesium Powder for Pyrotechnics</h2>
          <h3>Stars, Mines, Signal Flares & Strobe Compositions — IS 2307 Grade</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>

        <p>
          Magnesium powder is the pyrotechnician&apos;s preferred white-light fuel. When ignited, Magnesium
          burns at approximately 3,100°C — producing an intense, sustained white flame that is unmatched in
          brightness per gram of fuel. Its high energy density, relatively low ignition temperature, and
          clean combustion make it ideal for a wide range of pyrotechnic compositions. Jagada Industries
          supplies 99.8% pure Magnesium powder conforming to IS 2307, manufactured and exported from India
          since 1992.
        </p>

        <h3>Grade Selection for Pyrotechnic Applications</h3>
        <p>
          We produce three grades of Magnesium powder, each suited to different pyrotechnic uses:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Grade</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Composition</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Mesh / Particle Size</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Pyrotechnic Applications</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Grade 1', 'Mg 99.8% (IS 2307)', '40–80 mesh / 420–230 µm', 'Stars, mines, signal flares, illuminating compositions'],
                ['Grade 1 Coated', 'Mg 99.8%, surface-coated', '40–80 mesh / 420–230 µm', 'Humid-climate use — Brazil, Mexico, Vietnam; improved shelf life'],
                ['Grade 2', 'Mg 90%, Al 9.8%', '40–80 mesh / 420–230 µm', 'Compositions requiring lower ignition temp, colour effects'],
              ].map(([grade, comp, mesh, app], i) => (
                <tr key={grade} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{grade}</td>
                  <td style={{ padding: '8px 12px' }}>{comp}</td>
                  <td style={{ padding: '8px 12px' }}>{mesh}</td>
                  <td style={{ padding: '8px 12px' }}>{app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Safety & Compliance</h3>
        <p>
          Magnesium powder is classified UN 1418 (flammable solid). All shipments from Jagada Industries
          include UN-certified packaging, Material Safety Data Sheets (MSDS), IS 2307 batch test certificates,
          and dangerous goods declarations. For customers in tropical climates — particularly Mexico, Brazil,
          and Vietnam — we recommend Grade 1 Coated, which offers significantly better resistance to moisture
          absorption and oxidation during storage and transit. Climate-sealed inner packaging is available on
          request.
        </p>

        <h3>Trusted by Pyrotechnic Manufacturers Worldwide</h3>
        <p>
          Pyrotechnic grade Magnesium powder from Jagada Industries is used by professional manufacturers
          of display fireworks, theatrical pyrotechnics, and industrial signal devices across five continents.
          Our consistent particle size distribution and guaranteed IS 2307 purity mean your compositions
          perform the same way batch after batch. Contact us for specifications, samples, and bulk pricing.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/contact-us"
            style={{ display: 'inline-block', padding: '10px 22px', background: '#1a3c6b', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            Request a Quote
          </Link>
          <Link
            href="/magnesium"
            style={{ display: 'inline-block', padding: '10px 22px', background: 'steelblue', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            View Magnesium Product Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
