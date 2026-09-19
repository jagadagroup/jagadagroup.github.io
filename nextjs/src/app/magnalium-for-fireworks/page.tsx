import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Magnalium Powder for Fireworks — Fountains, Bursts & Colour Shells — Jagada Industries',
  description: 'Premium Magnalium (Al-Mg 50:50) powder for fireworks — fountains, aerial bursts, colour compositions. 18 to 325 mesh. Indian manufacturer & exporter since 1992.',
  alternates: { canonical: `${siteConfig.url}/magnalium-for-fireworks/` },
};

export default function MagnaliumForFireworksPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Magnalium Powder for Fireworks</h2>
          <h3>Fountains, Aerial Bursts & Colour Compositions — 18 to 325 Mesh</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>

        <p>
          Magnalium — an alloy of Aluminium (50%) and Magnesium (50%) — is the preferred fuel for fireworks
          manufacturers worldwide. When Magnalium burns, it produces an intense white-silver flash that is
          brighter and more energetic than either pure Aluminium or pure Magnesium alone. The Al-Mg 50:50
          composition lowers the alloy&apos;s melting point while raising its burn temperature, giving
          pyrotechnicians precise control over effect intensity and duration. Jagada Industries has manufactured
          Magnalium powder for fireworks applications since 1992.
        </p>

        <h3>Mesh Size Selection Guide for Fireworks</h3>
        <p>
          Choosing the right mesh size is the most critical variable in Magnalium-based fireworks compositions.
          Coarser particles burn slower with sustained visible effects; finer particles ignite faster and produce
          sharper, brighter flashes. Here is the guide used by our customers:
        </p>

        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ background: '#1a3c6b', color: '#fff' }}>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Mesh Size</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Particle Size</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Burn Character</th>
                <th style={{ padding: '10px 12px', textAlign: 'left' }}>Fireworks Application</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['18 mesh', '1000 µm', 'Slow, sustained', 'Waterfalls, ground fountains'],
                ['40 mesh', '420 µm', 'Moderate, sustained', 'Fountains, Roman candles'],
                ['80 mesh', '230 µm', 'Medium flash', 'Aerial shells, colour stars'],
                ['100 mesh', '150 µm', 'Controlled flash', 'Aerial bursts, colour compositions'],
                ['150 mesh', '98 µm', 'Fast, bright', 'Strobe effects, colour shells'],
                ['200 mesh', '74 µm', 'Very fast', 'Flash mixtures, report compositions'],
                ['325 mesh', '44 µm', 'Rapid ignition', 'Sensitive flash compositions, quick-match'],
              ].map(([mesh, size, burn, app], i) => (
                <tr key={mesh} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff' }}>
                  <td style={{ padding: '8px 12px', fontWeight: 600 }}>{mesh}</td>
                  <td style={{ padding: '8px 12px' }}>{size}</td>
                  <td style={{ padding: '8px 12px' }}>{burn}</td>
                  <td style={{ padding: '8px 12px' }}>{app}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h3>Quality You Can Rely On</h3>
        <p>
          Every batch of Magnalium powder for fireworks is produced from virgin primary-grade Aluminium and
          Magnesium — never recycled scrap. Alloy composition is verified by Optical Emission Spectroscopy
          (OES) before and after alloying to confirm the 50:50 Al-Mg ratio. Particle size distribution is
          checked to ensure uniform mesh classification throughout the batch. This consistency translates
          directly to predictable burn rates and repeatable pyrotechnic effects — critical for professional
          fireworks display companies.
        </p>

        <h3>Supplied to Fireworks Manufacturers Worldwide</h3>
        <p>
          Jagada Industries supplies Magnalium powder for fireworks to manufacturers in Mexico, Brazil, Vietnam,
          Spain, and across Europe. We ship by sea and air freight with UN-compliant dangerous goods packaging
          (UN 1396 — Aluminium-Magnesium alloy powder). Full MSDS documentation, batch test certificates, and
          export paperwork are provided with every shipment. Minimum order quantities and pricing are available
          on request.
        </p>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link
            href="/contact-us"
            style={{ display: 'inline-block', padding: '10px 22px', background: '#1a3c6b', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            Request a Quote
          </Link>
          <Link
            href="/magnalium"
            style={{ display: 'inline-block', padding: '10px 22px', background: 'steelblue', color: 'white', borderRadius: '4px', textDecoration: 'none', fontWeight: 600 }}
          >
            View Magnalium Product Catalog
          </Link>
        </div>
      </div>
    </>
  );
}
