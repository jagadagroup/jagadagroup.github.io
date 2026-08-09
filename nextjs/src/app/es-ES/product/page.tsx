import type { Metadata } from 'next';
import Link from 'next/link';

const target = '/es-ES/product/1/';

export const metadata: Metadata = {
  title: 'Productos — Jagada Industries',
  robots: 'noindex,follow',
  alternates: { canonical: target, languages: { 'es-ES': target, 'x-default': target } },
};

export default function EsProductIndexPage() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${target}`} />
      <p style={{ padding: '2rem', textAlign: 'center' }}>
        Redirigiendo a <Link href={target}>nuestros productos</Link>&hellip;
      </p>
    </>
  );
}
