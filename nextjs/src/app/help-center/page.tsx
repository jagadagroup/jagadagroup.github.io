import { UnderConstructionPage } from '@/app/customers/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center — Jagada Industries',
  description: 'Help Center page — Jagada Industries.',
};

export default function HelpCenterPage() {
  return <UnderConstructionPage title="Help Center" />;
}