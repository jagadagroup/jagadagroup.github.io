import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Metal Powder Exporter — Global Export Destinations — Jagada Industries',
  description: 'Jagada Industries exports Magnesium, Magnalium, and Aluminium powder worldwide. See our export presence in Mexico, Brazil, Peru, and Vietnam.',
};

export default function LocationIndexPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Global Metal Powder Exports</h2>
          <h3>Jagada Industries — Exporting Since 1992</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries is an ISO 9001:2008 certified Indian manufacturer and exporter of Magnesium
          powder, Magnalium powder, and Aluminium powder. Established in 1992 in Virudhunagar, Tamil Nadu,
          we supply pyrotechnic-grade and industrial-grade metal powders to buyers worldwide.
        </p>
        <p>
          Our export footprint spans Latin America, Southeast Asia, Europe, and beyond. Click your region
          below to learn about our products, shipping routes, and local-language resources.
        </p>

        <h2>Export Destinations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', margin: '1.5rem 0' }}>
          <Link
            href="/location/mexico"
            style={{
              display: 'block',
              padding: '1.25rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'border-color 0.2s',
            }}
          >
            <div style={{ fontSize: '2rem' }}>🇲🇽</div>
            <strong>Mexico</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#555' }}>
              Magnesium &amp; Magnalium powder for Mexico&apos;s pyrotechnic industry
            </p>
          </Link>
          <Link
            href="/location/brazil"
            style={{
              display: 'block',
              padding: '1.25rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ fontSize: '2rem' }}>🇧🇷</div>
            <strong>Brazil</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#555' }}>
              Pó de magnésio e magnálio para o Brasil
            </p>
          </Link>
          <Link
            href="/location/peru"
            style={{
              display: 'block',
              padding: '1.25rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ fontSize: '2rem' }}>🇵🇪</div>
            <strong>Peru</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#555' }}>
              Metal powder supplier for Peru&apos;s fireworks and industrial sector
            </p>
          </Link>
          <Link
            href="/location/vietnam"
            style={{
              display: 'block',
              padding: '1.25rem',
              border: '1px solid #ddd',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <div style={{ fontSize: '2rem' }}>🇻🇳</div>
            <strong>Vietnam</strong>
            <p style={{ margin: '0.5rem 0 0', fontSize: '0.875rem', color: '#555' }}>
              Bột magiê và magnalium xuất khẩu sang Việt Nam
            </p>
          </Link>
        </div>

        <h2>Browse in Your Language</h2>
        <ul>
          <li><Link href="/es-ES">Español — Productos de polvo metálico</Link></li>
          <li><Link href="/vi-VN">Tiếng Việt — Sản phẩm bột kim loại</Link></li>
          <li><Link href="/pt-PT">Português — Produtos em pó metálico</Link></li>
        </ul>

        <h2>Our Export Products</h2>
        <ul>
          <li><Link href="/magnalium">Magnalium Powder (Al-Mg Alloy, 18–325 Mesh)</Link></li>
          <li><Link href="/magnesium">Magnesium Powder (Grade 1 &amp; 2, 99.8% IS 2307)</Link></li>
          <li><Link href="/products">Full Product Catalog</Link></li>
        </ul>

        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-block',
              backgroundColor: '#1a73e8',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </>
  );
}
