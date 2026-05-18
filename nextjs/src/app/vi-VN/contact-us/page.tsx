import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('vi-VN', '/contact-us/', 'Liên hệ');
export default function ViContact() { return <LocaleLanding locale="vi-VN" />; }