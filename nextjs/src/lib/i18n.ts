export type TranslationKey = string;

import en from '@/i18n/en.json';
import es from '@/i18n/es-ES.json';

const dictionaries: Record<string, typeof en> = {
  en,
  'es-ES': es as unknown as typeof en,
};

export function getDictionary(locale: string): typeof en {
  return dictionaries[locale] || dictionaries.en;
}

export function getTranslation(
  dict: typeof en,
  keyPath: string
): string {
  const keys = keyPath.split('.');
  let current: Record<string, unknown> = dict as unknown as Record<string, unknown>;
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key] as Record<string, unknown>;
    } else {
      return keyPath; // Fallback to key path
    }
  }
  return String(current);
}

export const localeNames: Record<string, string> = {
  en: 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'de-DE': 'Deutsch',
  'it-IT': 'Italiano',
};