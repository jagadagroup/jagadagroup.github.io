import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Jagada Industries — Metal Powder Manufacturer Since 1992',
  description: 'Jagada Industries, established 1992, is India\'s leading manufacturer of Magnalium, Magnesium, and non-ferrous metal powders. ISO 9001:2008 & ISO 14001 certified.',
};

export default function AboutUsPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/aboutUs.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>LET&apos;S WORK TOGETHER</h2>
          <h3>Here at JagadaGroup, we hold a passion for innovation, brilliant ideas and the execution that brings them all together in one beautiful experience.</h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/018-physics.svg" alt="sales contact" />
            <h4>DELEEPKUMAR</h4>
            <p>Engineer in Metallurgy</p>
            <a href="tel:+919585544719">+91-95855-44719</a>
            <a href="mailto:info@jagadagroup.com">info@jagadagroup.com</a>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <img className="mb-2 contact" src="/svgs/029-compass.svg" alt="business contact" />
            <h4>SALES PERSON</h4>
            <a href="tel:+919000060000">+91-900-006-0000</a>
            <a href="mailto:info@jagadagroup.com">info@jagadagroup.com</a>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>VIEW BROCHURE HERE</h3>
          <a className="py-2 px-4" href="/docs/magnaliumLabReport.pdf" target="_blank" rel="noopener noreferrer">DOWNLOAD</a>
        </div>
      </div>
    </>
  );
}