import { siteConfig, locales } from '@/lib/site-config';

/**
 * Generates hreflang alternates for a given path.
 * Maps an English page like '/products/' to its es-ES counterpart '/es-ES/products/'
 * and vice versa.
 */
export function getAlternates(
  path: string,
  currentLocale: string
): Record<string, string> {
  const result: Record<string, string> = {};

  let base = path;
  if (currentLocale !== 'en') {
    base = path.replace(`/${currentLocale}`, '') || '/';
  }

  for (const loc of locales) {
    if (loc === 'en') {
      result[loc] = base;
    } else {
      result[loc] = `/${loc}${base}`;
    }
  }

  result['x-default'] = base;

  return result;
}

export function getCanonical(path: string): string {
  return `${siteConfig.url}${path}`;
}