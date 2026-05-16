import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';
import { getAlternates } from '@/lib/alternates';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Jagada Industries',
  description: 'Jagada Industries es pionero en materias primas pirotécnicas con más de 30 años de experiencia.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/es-ES/about-us/',
    languages: getAlternates('/es-ES/about-us/', 'es-ES'),
  },
  openGraph: { locale: 'es_ES' },
};

export default function EsAboutPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/aboutUs.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.about.heading}</h2>
          <h3>{t.about.subheading}</h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/018-physics.svg" alt="contacto de ventas" />
            <h4>{t.about.deleep}</h4>
            <p>{t.about.engineer}</p>
            <a href="tel:+919585544719">+91-95855-44719</a>
            <a href="mailto:jagadagroupofindustries@gmail.com">jagadagroupofindustries@gmail.com</a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/029-compass.svg" alt="contacto comercial" />
            <h4>{t.about.salesPerson}</h4>
            <a href="tel:+919000060000">+91-900-006-0000</a>
            <a href="mailto:jagadagroupofindustries@gmail.com">jagadagroupofindustries@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>{t.about.viewBrochure}</h3>
          <a className="py-2 px-4" href="/docs/magnaliumLabReport.pdf" target="_blank" rel="noopener noreferrer">{t.about.download}</a>
        </div>
      </div>
    </>
  );
}