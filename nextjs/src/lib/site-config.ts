import { OrganizationSchema } from '@/lib/seo';

export const siteConfig = {
  name: 'Jagada Industries',
  url: 'https://www.jagadagroup.com',
  description: 'Pioneers in Pyrotechnic & Non Ferrous Metal Powders',
};

export const organizationSchema: OrganizationSchema = {
  name: 'Jagada Industries',
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/ISO-9001-2008.png`,
  sameAs: [
    'https://www.linkedin.com/in/deleep-kumar-504813141/',
  ],
  contactPoint: {
    telephone: '+91-9443144719',
    contactType: 'customer service',
    email: 'info@jagadagroup.com',
  },
  address: {
    streetAddress: '3/1224-6, Sattur Road',
    addressLocality: 'Virudhunagar',
    addressRegion: 'Tamil Nadu',
    postalCode: '626002',
    addressCountry: 'IN',
  },
};

export const locales = ['en', 'es-ES', 'pt-PT', 'fr-FR', 'vi-VN'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeInfo: Record<string, { name: string; flag: string }> = {
  'en':     { name: 'English',   flag: '🇬🇧' },
  'es-ES':  { name: 'Español',   flag: '🇪🇸' },
  'pt-PT':  { name: 'Português', flag: '🇵🇹' },
  'fr-FR':  { name: 'Français',  flag: '🇫🇷' },
  'vi-VN':  { name: 'Tiếng Việt',flag: '🇻🇳' },
};