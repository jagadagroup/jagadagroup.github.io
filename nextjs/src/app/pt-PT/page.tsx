import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('pt-PT', '/');
export default function PtHome() { return <LocaleLanding locale="pt-PT" />; }