import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium & Magnalium Powder Exporter to Peru — Jagada Industries',
  description: 'Jagada Industries supplies Magnesium powder and Magnalium powder to Peru. ISO certified Indian exporter. Fireworks-grade and industrial-grade metal powders.',
};

export default function PeruPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Metal Powder Supplier for Peru</h2>
          <h3>Magnesium &amp; Magnalium Powder Exporter</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries exports high-purity Magnesium powder, Magnalium powder, and Aluminium powder to
          buyers in Peru. As an ISO 9001:2008 certified Indian manufacturer established in 1992, we supply
          pyrotechnic-grade and industrial-grade metal powders to Peru&apos;s fireworks and industrial sectors.
        </p>

        <h2>Products Available for Peru</h2>
        <p>
          Our full range of metal powders is available for export to Peru, manufactured at our facility in
          Virudhunagar, Tamil Nadu, India:
        </p>
        <ul>
          <li><strong>Magnalium Powder</strong> — Al-Mg 50:50 alloy, available in 18, 40, 80, 100, 150, 200, and 325 mesh</li>
          <li><strong>Magnesium Powder Grade 1</strong> — 99.8% purity, IS 2307 standard, 40–80 mesh</li>
          <li><strong>Magnesium Powder Grade 2</strong> — Mg-90%, Al-9.8% composition, 40–80 mesh</li>
          <li><strong>Magnesium Granules</strong> — for pyrotechnic and industrial use</li>
          <li><strong>Magnesium Ribbon</strong> — laboratory and demonstration grade</li>
          <li><strong>Aluminium Powder</strong> — fireworks and industrial grade</li>
        </ul>

        <h2>Serving Peru&apos;s Pyrotechnic Industry</h2>
        <p>
          Peru has a rich tradition of fireworks and pyrotechnic celebrations, and Jagada Industries is proud
          to be a trusted magnesium powder supplier for Peru&apos;s fireworks manufacturers. We ship via sea
          freight to the Port of Callao (Lima) — Peru&apos;s primary import hub — with competitive transit times
          from India&apos;s west coast ports.
        </p>
        <p>
          Our Magnalium powder for Peru is favored by pyrotechnic manufacturers for its consistent Al-Mg 50:50
          composition, uniform particle size distribution, and superior brightness in aerial shells and star
          compositions.
        </p>

        <h2>Quality &amp; Certifications</h2>
        <p>
          Jagada Industries maintains rigorous quality controls across all products shipped to Peru:
        </p>
        <ul>
          <li>ISO 9001:2008 certified manufacturing facility</li>
          <li>ISO 14001 environmental management certification</li>
          <li>Composition verified by atomic emission spectroscopy</li>
          <li>Magnesium purity: 99.8% per IS 2307 standard</li>
          <li>Uniform particle size distribution throughout the product</li>
        </ul>

        <h2>Proveedores de polvo de magnesio en Perú</h2>
        <p lang="es">
          ¿Busca proveedores de polvo de magnesio en Perú? Jagada Industries exporta directamente desde India
          con precios competitivos y calidad certificada ISO. Somos fabricantes de polvo de magnálio y polvo de
          magnesio con más de 30 años de experiencia exportando a América Latina. Contáctenos para obtener
          cotizaciones y especificaciones técnicas.
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
            Request a Quote for Peru
          </Link>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
          <p>
            <strong>Other export destinations:</strong>{' '}
            <Link href="/location/mexico">Mexico</Link> ·{' '}
            <Link href="/location/brazil">Brazil</Link> ·{' '}
            <Link href="/location/vietnam">Vietnam</Link> ·{' '}
            <Link href="/es-ES">Español</Link>
          </p>
        </div>
      </div>
    </>
  );
}
