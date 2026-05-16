import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('de-DE', '/contact-us/', 'Kontakt');
export default function DeContact() { return <LocaleLanding locale="de-DE" />; }