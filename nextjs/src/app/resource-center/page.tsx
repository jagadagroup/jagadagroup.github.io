import { UnderConstructionPage } from '@/app/customers/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resource Center — Jagada Industries',
  description: 'Resource Center page — Jagada Industries.',
};

export default function ResourceCenterPage() {
  return <UnderConstructionPage title="Resource Center" />;
}