import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Sobre Nosotros — Jagada Industries',
  description: 'Jagada Industries es pionero en materias primas pirotécnicas con más de 30 años de experiencia en metalurgia.',
  openGraph: { locale: 'es_ES' },
};

export default function EsAboutPage() {
  const dict = getDictionary('es-ES');
  return (
    <>
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
          <h2 className="text-2xl font-bold">{dict.about.heading}</h2>
          <h3 className="text-lg text-gray-600 mt-2">{dict.about.subheading}</h3>
        </div>
      </div>
      <div className="container-fluid about-us py-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4">
            <Image src="/svgs/018-physics.svg" alt="contacto de ventas" width={64} height={64} className="mb-2" />
            <h4 className="font-semibold text-lg">{dict.about.deleep}</h4>
            <p className="text-gray-600">{dict.about.engineer}</p>
            <a href="tel:+919585544719" className="text-blue-600 hover:underline">+91-95855-44719</a>
            <a href="mailto:jagadagroupofindustries@gmail.com" className="text-blue-600 hover:underline">jagadagroupofindustries@gmail.com</a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <Image src="/svgs/029-compass.svg" alt="contacto comercial" width={64} height={64} className="mb-2" />
            <h4 className="font-semibold text-lg">{dict.about.salesPerson}</h4>
            <a href="tel:+919000060000" className="text-blue-600 hover:underline">+91-900-006-0000</a>
            <a href="mailto:jagadagroupofindustries@gmail.com" className="text-blue-600 hover:underline">jagadagroupofindustries@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="map" />
      <div className="window d-flex justify-content-center py-5 bg-gray-50">
        <Image src="/svgs/018-clipboard.svg" alt="" width={48} height={48} className="d-none d-md-block mr-4" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-lg font-semibold">{dict.about.viewBrochure}</h3>
          <a href="/docs/magnaliumLabReport.pdf" target="_blank" rel="noopener noreferrer" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2">
            {dict.about.download}
          </a>
        </div>
      </div>
    </>
  );
}