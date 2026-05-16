import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Tecnología de Producción — Jagada Industries',
  description: 'Tecnología avanzada de producción en Jagada Industries.',
  openGraph: { locale: 'es_ES' },
};

export default function EsProductionTechnologyPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productionTechnology.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.about.heading}</h2>
          <h3>{t.about.subheading}</h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/018-physics.svg" alt="" />
            <h4>{t.about.salesPerson}</h4>
            <a href="tel:+919000060000">+91-900-006-0000</a>
            <a href="mailto:sales@lpwtechnology.com">sales@lpwtechnology.com</a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/029-compass.svg" alt="" />
            <h4>{t.about.salesPerson}</h4>
            <a href="tel:+919000060000">+91-900-006-0000</a>
            <a href="mailto:sales@lpwtechnology.com">sales@lpwtechnology.com</a>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>{t.about.viewBrochure}</h3>
          <a className="py-2 px-4" href="#">{t.about.download}</a>
        </div>
      </div>
    </>
  );
}