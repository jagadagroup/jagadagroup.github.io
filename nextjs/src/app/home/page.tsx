import type { Metadata } from 'next';
import Image from 'next/image';
import { products } from '@/data';
import HomePage from '@/app/page';

export const metadata: Metadata = {
  title: 'Jagada Industries',
  description: 'Pyrotechnic raw materials',
};

export default function HomeDuplicatePage() {
  return <HomePage />;
}