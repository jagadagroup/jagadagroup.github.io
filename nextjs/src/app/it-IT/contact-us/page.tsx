import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('it-IT', '/contact-us/', 'Contatto');
export default function ItContact() { return <LocaleLanding locale="it-IT" />; }