import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Quality — Jagada Industries',
  description: 'Our pledge of quality. Magnalium Uncoated and Coated test methods for pyrotechnic metal powder manufacturing.',
};

export default function ProductionQualityPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productionQuality.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>PLEDGE OF QUALITY</h2>
          <h3>Here at JagadaGroup, we hold a passion for innovation, brilliant ideas and the execution that brings them all together in one beautiful experience.</h3>
        </div>
      </div>
      <div className="container-fluid about-us">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h4>Magnalium Uncoated Test methods</h4>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h4>Magnalium Coated Test methods</h4>
          </div>
        </div>
      </div>
      <div className="window d-flex justify-content-center">
        <img className="d-none d-md-block mr-4" src="/svgs/018-clipboard.svg" alt="" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3>VIEW BROCHURE HERE</h3>
          <a className="py-2 px-4" href="#">DOWNLOAD</a>
        </div>
      </div>
    </>
  );
}