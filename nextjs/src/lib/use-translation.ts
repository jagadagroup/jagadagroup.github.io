import { getDictionary } from '@/lib/i18n';

export type Dict = ReturnType<typeof getDictionary>;

export function useTranslation(locale: string = 'en'): Dict {
  return getDictionary(locale);
}