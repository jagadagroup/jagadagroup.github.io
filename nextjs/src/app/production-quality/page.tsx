import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Production Quality — Jagada Industries',
  description: 'Our pledge of quality. Magnalium Uncoated and Coated test methods for pyrotechnic metal powder manufacturing.',
};

export default function ProductionQualityPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
          <h2 className="text-2xl font-bold">PLEDGE OF QUALITY</h2>
          <h3 className="text-lg text-gray-600 mt-2">
            Here at JagadaGroup, we hold a passion for innovation, brilliant ideas and the
            execution that brings them all together in one beautiful experience.
          </h3>
        </div>
      </div>
      <div className="container-fluid about-us py-5">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-center mb-4">
            <h4 className="font-semibold text-lg">Magnalium Uncoated Test methods</h4>
          </div>
          <div className="col-12 col-md-6 d-flex flex-column align-items-center">
            <h4 className="font-semibold text-lg">Magnalium Coated Test methods</h4>
          </div>
        </div>
      </div>
      <div className="map" />
      <div className="window d-flex justify-content-center py-5 bg-gray-50">
        <img src="/svgs/018-clipboard.svg" alt="" className="d-none d-md-block mr-4 w-12 h-12" />
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h3 className="text-lg font-semibold">VIEW BROCHURE HERE</h3>
          <a href="#" className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 mt-2">DOWNLOAD</a>
        </div>
      </div>
    </>
  );
}