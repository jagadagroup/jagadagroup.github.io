import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Menu from '@/components/Menu'; {/* Header + hamburger menu */}
import Footer from '@/components/Footer';
import { OrganizationJsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/lib/site-config';
import './globals.css';

const GA_ID = 'G-61B30Q6NSG';

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export const metadata: Metadata = {
  title: { template: '%s', default: 'Magnalium & Magnesium Powder Manufacturer India — Jagada Industries' },
  description: 'Leading manufacturer of Magnalium powder, Magnesium powder, and Al-Mg alloy powders for pyrotechnics, fireworks, and industrial use. ISO 9001:2008 certified. Est. 1992.',
  robots: 'index,follow',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'es-ES': '/es-ES/',
      'pt-PT': '/pt-PT/',
      'fr-FR': '/fr-FR/',
      'vi-VN': '/vi-VN/',
      'x-default': '/',
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
  twitter: { card: 'summary_large_image', title: siteConfig.name, description: siteConfig.description },
  verification: { google: '0FXslA1jM76Ttnn9hSorquOcbioj5ebg2V3_HN6VXBc' },
  keywords: 'Magnalium powder, Magnesium powder, Aluminium powder, Magnalium, Magnesium, Aluminium, Aluminium Magnesium Alloy, Al-Mg alloy powder, Mg-Al alloy powder, Magnesium alloy powder, Magnesium granules, Magnesium ribbon, Magnesium fine powder, Magnesium exporters, largest manufacturer of Magnesium powders, Magnalium powder manufacturer India, Magnesium powder supplier, pyrotechnic raw materials, metal powder, non-ferrous metal powder',
  other: { 'google-site-verification': '0FXslA1jM76Ttnn9hSorquOcbioj5ebg2V3_HN6VXBc' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" />
        <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Roboto+Condensed" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/global.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/layout.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/menu.css" />
        <link rel="stylesheet" type="text/css" href="/stylesheets/footer.css" />
        {/* x-default hreflang — Next.js Metadata API doesn't support this, added manually */}
        <link rel="alternate" hrefLang="x-default" href="https://www.jagadagroup.com/" />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
        </Script>
        <OrganizationJsonLd />
        <div className="container-fluid position-fixed">
          <div className="row decorator"></div>
        </div>
        <Menu>
          {children}
          <Footer />
        </Menu>
      </body>
    </html>
  );
}