import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig, localeInfo } from '@/lib/site-config';
import { getAlternates } from '@/lib/alternates';

const localeContent: Record<string, { tagline: string; products: string; about: string; contact: string; catalog: string; catalogSub: string }> = {
  'pt-PT': {
    tagline: 'Pioneiros em pós pirotécnicos e metais não ferrosos. Fabrico de pós de Magnalium, Magnésio e Titânio de alta qualidade.',
    products: 'Produtos', about: 'Sobre', contact: 'Contacto',
    catalog: 'CATÁLOGO DE PRODUTOS', catalogSub: 'Onde a qualidade encontra o cliente',
  },
  'fr-FR': {
    tagline: 'Pionniers des poudres pyrotechniques et des métaux non ferreux. Fabrication de poudres de Magnalium, Magnésium et Titane de haute qualité.',
    products: 'Produits', about: 'À propos', contact: 'Contact',
    catalog: 'CATALOGUE DE PRODUITS', catalogSub: 'Là où la qualité rencontre le client',
  },
  'vi-VN': {
    tagline: 'Tiên phong trong lĩnh vực bột pháo hoa và kim loại màu. Sản xuất bột Magnalium, Magiê và Titan chất lượng cao.',
    products: 'Sản phẩm', about: 'Giới thiệu', contact: 'Liên hệ',
    catalog: 'DANH MỤC SẢN PHẨM', catalogSub: 'Nơi chất lượng gặp gỡ khách hàng',
  },
};

export function createLocaleMetadata(locale: string, path: string, titleSuffix?: string): Metadata {
  const info = localeInfo[locale];
  return {
    title: `Jagada Industries ${titleSuffix ? `— ${titleSuffix}` : ''}`,
    description: `Jagada Industries — ${info?.name || locale}`,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: getAlternates(path, locale),
    },
  };
}

export function LocaleLanding({ locale }: { locale: string }) {
  const info = localeInfo[locale] || { name: locale, flag: '🌐' };
  const content = localeContent[locale];
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <h1 className="display-4 mb-3">{info.flag}</h1>
          <h2 className="mb-3">Jagada Industries — {info.name}</h2>
          <p className="lead mb-4">{content?.tagline || 'Pioneers in Pyrotechnic & Non Ferrous Metal Powders.'}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            {content && (
              <>
                <Link href={`/${locale}/products/`} className="btn btn-outline-primary">{content.products}</Link>
                <Link href={`/${locale}/about-us/`} className="btn btn-outline-primary">{content.about}</Link>
                <Link href={`/${locale}/contact-us/`} className="btn btn-outline-primary">{content.contact}</Link>
              </>
            )}
            <Link href="/" className="btn btn-link">🇬🇧 English</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LocaleCatalog({ locale }: { locale: string }) {
  const content = localeContent[locale];
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{content.catalog}</h2>
          <h3>{content.catalogSub}</h3>
        </div>
      </div>
    </>
  );
}