import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium Exporters from India — Largest Magnesium Fine Powder Manufacturer — Jagada Industries',
  description: "India's largest magnesium powder exporter. Magnesium fine powder, Magnesium granules, Magnesium ribbon — exported to Mexico, Brazil, Vietnam, Europe. ISO 9001:2008 certified since 1992.",
};

export default function MagnesiumExportersPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Magnesium Exporters from India — Jagada Industries</h2>
          <h3>Largest Magnesium Fine Powder Manufacturer | ISO 9001:2008 | Est. 1992</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries stands among India&apos;s leading <strong>magnesium exporters</strong>, shipping
          high-purity magnesium products to buyers across four continents. As one of India&apos;s largest{' '}
          <strong>magnesium fine powder manufacturers</strong>, we have built three decades of export
          expertise, reliable logistics partnerships, and an unblemished track record of on-time delivery
          since our founding in 1992. Our facility in Virudhunagar, Tamil Nadu holds ISO 9001:2008 and
          ISO 14001 certifications.
        </p>
        <h3>Export Markets</h3>
        <p>
          As established <strong>magnesium powder exporters from India</strong>, we currently serve buyers in:
        </p>
        <ul>
          <li><strong>Mexico</strong> — Fireworks and pyrotechnic industry (the world&apos;s largest consumer of pyrotechnic magnesium)</li>
          <li><strong>Brazil</strong> — Industrial chemical and fireworks manufacturers</li>
          <li><strong>Vietnam</strong> — Growing pyrotechnic and industrial metal powder market</li>
          <li><strong>Peru</strong> — Mining and chemical processing industries</li>
          <li><strong>France, Spain, Portugal</strong> — European fireworks and specialty chemical sectors</li>
        </ul>
        <h3>Products Available for Export</h3>
        <p>
          Our full range of magnesium products available for international export includes:
        </p>
        <ul>
          <li><strong>Magnesium Fine Powder</strong> — 99.8% IS 2307, Grade 1 and Grade 2, 40-80 mesh</li>
          <li><strong>Magnesium Powder (Coated)</strong> — Grade 1 Coated for improved stability in humid climates</li>
          <li><strong>Magnesium Granules</strong> — For industrial reduction and controlled-burn applications</li>
          <li><strong>Magnesium Ribbon</strong> — Laboratory and pyrotechnic grade, custom dimensions</li>
          <li><strong>Magnalium Powder</strong> — Al-Mg 50:50 alloy, 18 to 325 mesh</li>
        </ul>
        <p>
          Explore our complete <Link href="/magnesium">Magnesium powder product range</Link> for full
          specifications.
        </p>
        <h3>Export Credentials &amp; Certifications</h3>
        <p>
          Every export shipment from Jagada Industries includes a Certificate of Analysis (CoA), Material
          Safety Data Sheet (MSDS/SDS), and full customs documentation. Our products comply with IS 2307
          standards and international shipping regulations for hazardous metal powders (UN class 4.1 for
          flammable solids). We work with experienced freight forwarders experienced in handling pyrotechnic
          materials to ensure safe, compliant delivery to your port of entry.
        </p>
        <h3>Request an Export Quotation</h3>
        <p>
          To receive a competitive export quote, contact us with your required product, quantity (kg or MT),
          destination country, and preferred incoterm (FOB/CIF/EXW). Our export team responds within 24
          business hours.
        </p>
        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              background: '#1a3c6b',
              color: 'white',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Request an Export Quote
          </Link>
        </div>
      </div>
    </>
  );
}
