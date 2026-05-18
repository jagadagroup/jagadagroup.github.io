'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { localeInfo } from '@/lib/site-config';

const locales = Object.entries(localeInfo).map(([code, info]) => ({ code, ...info }));

const localePattern = /^\/(es-ES|pt-PT|fr-FR|vi-VN)/;

function getCurrentLocale(pathname: string): string {
  const match = pathname.match(localePattern);
  return match ? match[1] : 'en';
}

function stripLocale(pathname: string, locale: string): string {
  const stripped = pathname.replace(`/${locale}`, '');
  return stripped === '' ? '/' : stripped;
}

export default function LocaleSwitcher() {
  const pathname = usePathname();
  const currentLocale = getCurrentLocale(pathname);
  const basePath = currentLocale === 'en' ? pathname : stripLocale(pathname, currentLocale);
  const normalizedBase = basePath === '' ? '/' : basePath;

  return (
    <div className="d-flex align-items-center" style={{ padding: '0.25rem 0' }}>
      <span style={{ color: '#ccc', fontSize: '0.75rem', marginRight: '0.5rem' }}>
        🇺🇳
      </span>
      {locales.map((loc) => {
        const href = loc.code === 'en' ? normalizedBase : `/${loc.code}${normalizedBase}`;
        const isActive = loc.code === currentLocale;

        return (
          <Link
            key={loc.code}
            href={href}
            className="px-1"
            style={{
              color: isActive ? '#daa520' : '#ccc',
              fontSize: '0.75rem',
              textDecoration: 'none',
              opacity: isActive ? 1 : 0.7,
            }}
            title={loc.name}
          >
            {loc.flag} {loc.name}
          </Link>
        );
      })}
    </div>
  );
}