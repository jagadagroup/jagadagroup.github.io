import { LocaleLanding, createLocaleMetadata } from '@/components/LocaleLanding';
export const metadata = createLocaleMetadata('vi-VN', '/about-us/', 'Giới thiệu');
export default function ViAbout() { return <LocaleLanding locale="vi-VN" />; }