import { redirect } from 'next/navigation';
import { products } from '@/data';

export default function ProductIndexPage() {
  redirect(`/product/${products[0].id}`);
}