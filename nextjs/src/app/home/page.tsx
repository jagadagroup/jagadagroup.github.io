import HomePage from '@/app/page';

export const metadata = { robots: 'noindex,follow', alternates: { canonical: '/', languages: { en: '/', 'x-default': '/' } } };

export default function HomeDuplicatePage() {
  return <HomePage />;
}