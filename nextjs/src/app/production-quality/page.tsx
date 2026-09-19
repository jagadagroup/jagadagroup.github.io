import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Production Quality — Magnesium & Magnalium Powder Testing — Jagada Industries',
  description:
    'Jagada’s pledge of quality: Magnalium coated/uncoated test methods plus IS 2307 magnesium powder assay, OES verification, and batch certificates for pyrotechnic and defense buyers.',
  alternates: {
    canonical: '/production-quality/',
    languages: {
      en: '/production-quality/',
      'es-ES': '/es-ES/production-quality/',
      'x-default': '/production-quality/',
    },
  },
};

export default function ProductionQualityPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productionQuality.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>PLEDGE OF QUALITY</h2>
          <h3>
            ISO 9001:2008 process discipline for Magnalium and Magnesium powder — assay, mesh, and lot
            documentation you can audit.
          </h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h4>Magnalium Uncoated Test methods</h4>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h4>Magnalium Coated Test methods</h4>
          </div>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <h3 style={{ color: '#1a3c6b', fontWeight: 700 }}>Magnesium Powder Quality Controls</h3>
        <p>
          Grade 1 magnesium powder is released against IS 2307 with Optical Emission Spectroscopy for
          composition and sieve analysis for mesh classification. Fail lots are quarantined — not blended
          into Grade 1 shipments. Full detail:{' '}
          <Link href="/high-purity-magnesium-powder/">high-purity magnesium powder</Link> and{' '}
          <Link href="/blog/magnesium-powder-quality-control/">quality control blog</Link>.
        </p>
        <p>
          Defense illuminating and signal buyers:{' '}
          <Link href="/magnesium-powder-for-defense/">magnesium powder for defense</Link>.
        </p>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>VIEW BROCHURE HERE</h3>
          <a className="py-2 px-4" href="/docs/magnaliumLabReport.pdf" target="_blank" rel="noopener noreferrer">
            DOWNLOAD
          </a>
          <Link className="py-2 px-4 mt-2" href="/contact-us/">
            REQUEST DOCUMENTATION
          </Link>
        </div>
      </div>
    </>
  );
}
