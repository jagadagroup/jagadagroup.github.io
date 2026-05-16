export interface SEOMetadata {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'product';
  canonical?: string;
  noindex?: boolean;
}

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  sameAs: string[];
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
}