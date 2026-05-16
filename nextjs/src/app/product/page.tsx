import { redirect } from 'next/navigation';
import { products } from '@/data';

/**
 * Static export fallback for /product (no id) — redirects to product 1.
 * All /product?id=N links from existing menus/buttons should be updated
 * to use /product/N format, but this provides backward compatibility.
 */
export default function ProductIndexPage() {
  // In static mode, default to first product
  redirect(`/product/${products[0].id}`);
}