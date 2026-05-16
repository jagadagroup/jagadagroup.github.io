import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s',
    default: 'Jagada Industries — Pyrotechnic & Non Ferrous Metal Powders',
  },
  description: siteConfig.description,
  robots: 'index,follow',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es-ES': '/es-ES/',
      'fr-FR': '/fr-FR/',
      'de-DE': '/de-DE/',
      'it-IT': '/it-IT/',
    },
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  verification: {
    google: '0FXslA1jM76Ttnn9hSorquOcbioj5ebg2V3_HN6VXBc',
  },
  keywords:
    'Pyrotechnic raw materials, Matières premières pyrotechniques, Materie prime pirotecniche, Materias primas pirotécnicas, Pyrotechnische Rohstoffe, Pyrotechnic powders, Poudre pyrotechnique, Polvere pirotecnica, Polvo pirotécnico, Pyrotechnisches Pulver, Magnalium, Magnalio, Polveri pirotecniche',
  other: {
    'google-site-verification': '0FXslA1jM76Ttnn9hSorquOcbioj5ebg2V3_HN6VXBc',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <OrganizationJsonLd />
        <Menu />
        <div className="flex-1">{children}</div>
        <Footer />
        <Script
          id="google-translate-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function googleTranslateElementInit() {
                new google.translate.TranslateElement(
                  {pageLanguage: 'en', includedLanguages: 'de,en,es,fr,it', layout: google.translate.TranslateElement.InlineLayout.SIMPLE},
                  'google_translate_element'
                );
              }
            `,
          }}
        />
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
        <Script
          src="https://code.jquery.com/jquery-3.3.1.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}