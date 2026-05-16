import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Products — Jagada Industries',
  description: 'Browse our complete catalog of pyrotechnic raw materials including Magnalium, Magnesium, and Titanium powders.',
};

export default function ProductsPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
          <h2 className="text-2xl font-bold">PRODUCT CATALOG</h2>
          <h3 className="text-lg text-gray-600 mt-2">Where quality meets customer</h3>
        </div>
      </div>
      <div className="container-fluid py-4">
        <div className="row no-gutters">
          {products.map((product, index) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center p-1">
              <Link href={`/product?id=${index + 1}`} className="block w-full">
                <div className="relative aspect-square">
                  <Image src={product.url} alt={product.text} fill className="object-cover" unoptimized />
                </div>
                <div className="bg-white p-3 text-center font-medium">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}