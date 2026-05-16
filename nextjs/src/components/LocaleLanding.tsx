import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';
import { getAlternates } from '@/lib/alternates';

const localeMeta: Record<string, { name: string; flag: string }> = {
  'fr-FR': { name: 'Français', flag: '🇫🇷' },
  'de-DE': { name: 'Deutsch', flag: '🇩🇪' },
  'it-IT': { name: 'Italiano', flag: '🇮🇹' },
};

const localeContent: Record<string, { tagline: string; products: string; about: string; contact: string; catalog: string; catalogSub: string }> = {
  'fr-FR': {
    tagline: 'Pionniers des poudres pyrotechniques et des métaux non ferreux. Fabrication de poudres de Magnalium, Magnésium et Titane de haute qualité.',
    products: 'Produits', about: 'À propos', contact: 'Contact',
    catalog: 'CATALOGUE DE PRODUITS', catalogSub: 'Là où la qualité rencontre le client',
  },
  'de-DE': {
    tagline: 'Pioniere für pyrotechnische Pulver und Nichteisenmetalle. Herstellung hochwertiger Magnalium-, Magnesium- und Titanpulver.',
    products: 'Produkte', about: 'Über uns', contact: 'Kontakt',
    catalog: 'PRODUKTKATALOG', catalogSub: 'Wo Qualität auf Kunden trifft',
  },
  'it-IT': {
    tagline: 'Pionieri nelle polveri pirotecniche e nei metalli non ferrosi. Produzione di polveri di Magnalium, Magnesio e Titanio di alta qualità.',
    products: 'Prodotti', about: 'Chi siamo', contact: 'Contatto',
    catalog: 'CATALOGO PRODOTTI', catalogSub: 'Dove la qualità incontra il cliente',
  },
};

export function createLocaleMetadata(locale: string, path: string, titleSuffix?: string): Metadata {
  const { name } = localeMeta[locale] || { name: locale };
  return {
    title: `Jagada Industries ${titleSuffix ? `— ${titleSuffix}` : ''}`,
    description: `Jagada Industries — ${name}`,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `/${locale}${path}`,
      languages: getAlternates(path, locale),
    },
  };
}

export function LocaleLanding({ locale }: { locale: string }) {
  const { name, flag } = localeMeta[locale] || { name: locale, flag: '🌐' };
  const content = localeContent[locale];
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">
          <h1 className="display-4 mb-3">{flag}</h1>
          <h2 className="mb-3">Jagada Industries — {name}</h2>
          <p className="lead mb-4">{content.tagline}</p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link href={`/${locale}/products/`} className="btn btn-outline-primary">{content.products}</Link>
            <Link href={`/${locale}/about-us/`} className="btn btn-outline-primary">{content.about}</Link>
            <Link href={`/${locale}/contact-us/`} className="btn btn-outline-primary">{content.contact}</Link>
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