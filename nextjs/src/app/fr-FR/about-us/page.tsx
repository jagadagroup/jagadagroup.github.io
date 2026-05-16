import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('fr-FR', '/about-us/', 'À propos');
export default function FrAbout() { return <LocaleLanding locale="fr-FR" />; }