import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('it-IT', '/about-us/', 'Chi siamo');
export default function ItAbout() { return <LocaleLanding locale="it-IT" />; }