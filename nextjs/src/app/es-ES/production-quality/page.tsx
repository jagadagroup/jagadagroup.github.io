import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Calidad de Producción — Jagada Industries',
  description: 'Nuestro compromiso con la calidad.',
  openGraph: { locale: 'es_ES' },
};

export default function EsProductionQualityPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productionQuality.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.quality.heading}</h2>
          <h3>{t.quality.subheading}</h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center"><h4>{t.quality.uncoated}</h4></div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center"><h4>{t.quality.coated}</h4></div>
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