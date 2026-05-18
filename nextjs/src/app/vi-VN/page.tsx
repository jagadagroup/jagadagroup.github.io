import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('vi-VN', '/');
export default function ViHome() { return <LocaleLanding locale="vi-VN" />; }