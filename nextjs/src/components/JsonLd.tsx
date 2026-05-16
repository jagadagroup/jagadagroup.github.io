import { organizationSchema, siteConfig } from '@/lib/site-config';
import type { Product } from '@/lib/types';

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          ...organizationSchema,
        }),
      }}
    />
  );
}

export function ProductJsonLd({ product }: { product: Product }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: product.text,
          image: `${siteConfig.url}${product.url}`,
          description: product.desc || product.text,
          manufacturer: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
        }),
      }}
    />
  );
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: items.map((item, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: item.name,
            item: `${siteConfig.url}${item.url}`,
          })),
        }),
      }}
    />
  );
}