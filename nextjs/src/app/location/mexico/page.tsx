import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium & Magnalium Powder Exporter to Mexico — Jagada Industries',
  description: 'Jagada Industries exports Magnesium powder, Magnalium powder, and Aluminium powder to Mexico. ISO 9001:2008 certified Indian manufacturer since 1992. Contact us for pricing.',
};

export default function MexicoPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Metal Powder Supplier for Mexico</h2>
          <h3>Magnesium &amp; Magnalium Powder Exporter</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries is a leading Indian manufacturer and exporter of Magnesium powder, Magnalium powder,
          and Aluminium powder to buyers in Mexico. We have been supplying pyrotechnic-grade and industrial-grade
          metal powders to Mexican fireworks manufacturers and industrial companies since the 1990s.
        </p>

        <h2>Products Available for Mexico</h2>
        <p>
          We supply the following metal powders to our Mexican customers — all manufactured at our ISO 9001:2008
          certified facility in Virudhunagar, Tamil Nadu, India:
        </p>
        <ul>
          <li><strong>Magnalium Powder</strong> — Al-Mg 50:50 alloy, available in 18, 40, 80, 100, 150, 200, and 325 mesh</li>
          <li><strong>Magnesium Powder Grade 1</strong> — 99.8% purity, IS 2307 standard, 40–80 mesh</li>
          <li><strong>Magnesium Powder Grade 2</strong> — Mg-90%, Al-9.8% composition, 40–80 mesh</li>
          <li><strong>Magnesium Granules</strong> — for pyrotechnic and industrial applications</li>
          <li><strong>Magnesium Ribbon</strong> — for laboratory and demonstration use</li>
          <li><strong>Aluminium Powder</strong> — for fireworks and industrial applications</li>
        </ul>

        <h2>Supplying Mexico&apos;s Fireworks Industry</h2>
        <p>
          Our powders meet the quality standards required for Mexico&apos;s vibrant fireworks and pyrotechnic
          industry — one of the largest in the world. Mexico is home to thousands of pyrotechnic artisans and
          manufacturers, particularly in states like Tultepec, Puebla, and Oaxaca. We ship via sea and air
          freight to Mexican ports including Veracruz, Manzanillo, and Lázaro Cárdenas.
        </p>

        <h2>Quality &amp; Certifications</h2>
        <p>
          Every batch of magnesium powder Mexico buyers receive from Jagada Industries is manufactured to the
          highest standards. Our quality assurance includes:
        </p>
        <ul>
          <li>ISO 9001:2008 certified manufacturing facility</li>
          <li>ISO 14001 environmental management certification</li>
          <li>Composition verified by atomic emission spectroscopy</li>
          <li>Particle size uniformity maintained throughout production</li>
          <li>Magnesium purity: 99.8% per IS 2307 standard</li>
          <li>Magnalium composition: Al-50%, Mg-50% (verified per batch)</li>
        </ul>
        <p>
          As a trusted magnalium powder exporter to Mexico and a reliable metal powder supplier Mexico buyers
          can depend on, we offer consistent quality with every shipment.
        </p>

        <h2>Solicitud de Cotización — polvo de magnesio Mexico</h2>
        <p lang="es">
          ¿Busca un proveedor confiable de polvo de magnesio en México? Jagada Industries exporta directamente
          desde India y ofrece precios competitivos para compradores mexicanos. Contáctenos hoy para obtener
          precios y especificaciones de nuestros polvos de magnesio y magnálio.
        </p>

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
            Request a Quote for Mexico
          </Link>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
          <p>
            <strong>Other export destinations:</strong>{' '}
            <Link href="/location/brazil">Brazil</Link> ·{' '}
            <Link href="/location/peru">Peru</Link> ·{' '}
            <Link href="/location/vietnam">Vietnam</Link> ·{' '}
            <Link href="/es-ES">Español</Link>
          </p>
        </div>
      </div>
    </>
  );
}
