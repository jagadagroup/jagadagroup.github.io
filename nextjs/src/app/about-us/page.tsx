import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us — Jagada Industries',
  description: 'Jagada Industries is a pioneer in pyrotechnic raw materials with over 30 years of experience in metallurgy and metal powder manufacturing.',
};

export default function AboutUsPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
          <h2 className="text-2xl font-bold">LET&apos;S WORK TOGETHER</h2>
          <h3 className="text-lg text-gray-600 mt-2">
            Here at JagadaGroup, we hold a passion for innovation, brilliant ideas and the
            execution that brings them all together in one beautiful experience.
          </h3>
        </div>
      </div>

      <div className="container-fluid about-us py-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4">
            <Image
              src="/svgs/018-physics.svg"
              alt="sales contact"
              width={64}
              height={64}
              className="mb-2"
            />
            <h4 className="font-semibold text-lg">DELEEPKUMAR</h4>
            <p className="text-gray-600">Engineer in Metallurgy</p>
            <a href="tel:+919585544719" className="text-blue-600 hover:underline">
              +91-95855-44719
            </a>
            <a href="mailto:info@jagadagroup.com" className="text-blue-600 hover:underline">
              info@jagadagroup.com
            </a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <Image
              src="/svgs/029-compass.svg"
              alt="business contact"
              width={64}
              height={64}
              className="mb-2"
            />
            <h4 className="font-semibold text-lg">SALES PERSON</h4>
            <a href="tel:+919000060000" className="text-blue-600 hover:underline">
              +91-900-006-0000
            </a>
            <a href="mailto:info@jagadagroup.com" className="text-blue-600 hover:underline">
              info@jagadagroup.com
            </a>
          </div>
        </div>
      </div>

      <div className="map" />

      <div className="window d-flex justify-content-center py-5 bg-gray-50">
        <Image
          src="/svgs/018-clipboard.svg"
          alt=""
          width={48}
          height={48}
          className="d-none d-md-block mr-4"
        />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-lg font-semibold">VIEW BROCHURE HERE</h3>
          <a
            href="/docs/magnaliumLabReport.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </>
  );
}