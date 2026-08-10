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
  const composition = product.data?.find((d) => d.head.toLowerCase().includes('composition'));
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
          sku: String(product.id),
          category: 'Pyrotechnic & Non-Ferrous Metal Powders',
          ...(composition ? { material: composition.value } : {}),
          additionalProperty: (product.data || []).map((d) => ({
            '@type': 'PropertyValue',
            name: d.head,
            value: d.value,
            unitText: d.unit,
          })),
          manufacturer: {
            '@type': 'Organization',
            name: siteConfig.name,
          },
          // No `offers`/price: this is quote-based B2B pricing, not a published
          // price. Fabricating a price here would violate Google's structured
          // data guidelines — offers should only be added once real pricing exists.
        }),
      }}
    />
  );
}

export function FAQPageJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
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