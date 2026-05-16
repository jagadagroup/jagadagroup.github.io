import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('de-DE', '/');
export default function DeHome() { return <LocaleLanding locale="de-DE" />; }