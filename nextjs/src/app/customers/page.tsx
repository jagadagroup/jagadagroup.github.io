import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Customers — Jagada Industries',
  description: 'Customers page — Jagada Industries.',
};

export default function CustomersPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/aboutUs.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>LET&apos;S WORK TOGETHER</h2>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/images/under-construction.png" alt="under construction" />
            <h4>PAGE UNDER CONSTRUCTION</h4>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>KEEP IN TOUCH</h3>
          <Link className="py-2 px-4" href="/contact-us">CONTACT US</Link>
        </div>
      </div>
    </>
  );
}