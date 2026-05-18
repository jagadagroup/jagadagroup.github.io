import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('pt-PT', '/about-us/', 'Sobre');
export default function PtAbout() { return <LocaleLanding locale="pt-PT" />; }