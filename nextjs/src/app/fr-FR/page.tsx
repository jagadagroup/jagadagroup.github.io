import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('fr-FR', '/');
export default function FrHome() { return <LocaleLanding locale="fr-FR" />; }