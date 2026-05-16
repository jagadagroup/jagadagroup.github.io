import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('de-DE', '/about-us/', 'Über uns');
export default function DeAbout() { return <LocaleLanding locale="de-DE" />; }