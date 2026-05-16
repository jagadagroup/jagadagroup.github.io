import { permanentRedirect } from 'next/navigation';
import { products } from '@/data';
import { getProductSlug } from '@/lib/slugs';

export default function ProductIndexPage() {
  permanentRedirect(`/product/${getProductSlug(products[0].text)}`);
}