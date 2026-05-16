import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

interface UnderConstructionProps {
  title: string;
}

export function UnderConstructionPage({ title }: UnderConstructionProps) {
  return (
    <>
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
          <h2 className="text-2xl font-bold">LET&apos;S WORK TOGETHER</h2>
        </div>
      </div>
      <div className="container-fluid about-us py-5">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <Image
              src="/images/under-construction.png"
              alt="under construction"
              width={200}
              height={200}
              className="mb-4"
            />
            <h4 className="font-semibold text-lg">PAGE UNDER CONSTRUCTION</h4>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center py-5 bg-gray-50">
        <Image
          src="/svgs/018-clipboard.svg"
          alt=""
          width={48}
          height={48}
          className="d-none d-md-block mr-4"
        />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-lg font-semibold">KEEP IN TOUCH</h3>
          <Link
            href="/contact-us"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </>
  );
}

export const metadata: Metadata = {
  title: 'Customers — Jagada Industries',
  description: 'Customers page — Jagada Industries.',
};

export default function CustomersPage() {
  return <UnderConstructionPage title="Customers" />;
}