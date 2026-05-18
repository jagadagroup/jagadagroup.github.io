import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('pt-PT', '/contact-us/', 'Contacto');
export default function PtContact() { return <LocaleLanding locale="pt-PT" />; }