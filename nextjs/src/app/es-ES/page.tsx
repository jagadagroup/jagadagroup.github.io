import type { Metadata } from 'next';
import Image from 'next/image';
import { getDictionary } from '@/lib/i18n';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Jagada Industries',
  description: 'Pioneros en Polvos Pirotécnicos y Metales No Ferrosos',
  metadataBase: new URL(`${siteConfig.url}/es-ES/`),
  alternates: {
    canonical: '/es-ES/',
    languages: {
      'en': '/',
      'es-ES': '/es-ES/',
    },
  },
  openGraph: {
    title: 'Jagada Industries',
    description: 'Pioneros en Polvos Pirotécnicos y Metales No Ferrosos',
    locale: 'es_ES',
  },
};

export default function EsHomePage() {
  const dict = getDictionary('es-ES');
  return (
    <article className="px-3">
      <div className="jumbotron jumbotron-fluid mb-0">
        <div className="container-fluid language d-flex flex-column align-items-center p-4">
          <Image src="/images/ISO-9001-2008.png" alt="Certificación ISO 9001 2008" width={120} height={120} className="mb-2" unoptimized />
          <Image src="/images/ISO-14001.png" alt="Certificación ISO 14001" width={120} height={120} className="mb-2" unoptimized />
          <div className="estd d-flex justify-content-center align-items-center w-100 mt-3">
            <p className="mb-0 text-gray-600" style={{ transform: 'translateX(2rem)' }}>estd</p>
            <div id="logo" className="mx-4" />
            <p className="mb-0 text-gray-600" style={{ transform: 'translateX(-2rem)' }}>1992</p>
          </div>
          <h1 className="display-4 text-center text-2xl md:text-4xl mt-3">{dict.home.heroHeading}</h1>
          <h2 className="lead text-center text-xl text-gray-700 mt-2">{dict.home.heroTagline}</h2>
        </div>
      </div>
    </article>
  );
}