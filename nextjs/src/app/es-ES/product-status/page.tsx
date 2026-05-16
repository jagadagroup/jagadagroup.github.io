import { getDictionary } from '@/lib/i18n';
import Link from 'next/link';

export const metadata = {
  title: 'Estado del Producto — Jagada Industries',
  description: 'Estado del producto.',
  openGraph: { locale: 'es_ES' },
};

export default function EsProductStatusPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/aboutUs.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.underConstruction.heading}</h2>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/images/under-construction.png" alt="en construcción" />
            <h4>{t.underConstruction.pageUnderConstruction}</h4>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>{t.underConstruction.keepInTouch}</h3>
          <Link className="py-2 px-4" href="/es-ES/contact-us/">{t.underConstruction.contactUs}</Link>
        </div>
      </div>
    </>
  );
}