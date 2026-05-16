import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('fr-FR', '/contact-us/', 'Contact');
export default function FrContact() { return <LocaleLanding locale="fr-FR" />; }