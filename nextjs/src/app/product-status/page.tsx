import { UnderConstructionPage } from '@/app/customers/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Status — Jagada Industries',
  description: 'Product Status page — Jagada Industries.',
};

export default function ProductStatusPage() {
  return <UnderConstructionPage title="Product Status" />;
}