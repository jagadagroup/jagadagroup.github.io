import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('it-IT', '/');
export default function ItHome() { return <LocaleLanding locale="it-IT" />; }