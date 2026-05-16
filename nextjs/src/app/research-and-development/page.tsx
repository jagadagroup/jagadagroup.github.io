import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Research & Development — Jagada Industries',
  description: 'Advanced R&D in metal powder atomisation, plasma spheroidisation, and bespoke materials for aerospace, biomedical, and automotive industries.',
};

export default function ResearchDevPage() {
  return (
    <div className="container-fluid rnd">
      <div id="r1" className="row">
        <div id="c1" className="col-12 col-lg-8 imgc p-0">
          <div className="bg-gray-800 text-white h-full p-4 md:p-5 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-3">Testing methods</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Magnalium Uncoated Test methods</li>
              <li>Magnalium Coated Test methods</li>
            </ul>
          </div>
        </div>
        <div id="c2" className="col-12 col-lg-4 imgc d-none d-lg-block p-0">
          <div className="h-full grid grid-cols-2 gap-2 p-4 bg-gray-700">
            <IconCell src="/svgs/002-flask.svg" />
            <IconCell src="/svgs/006-molecule.svg" />
            <IconCell src="/svgs/008-alarm-clock.svg" />
            <IconCell src="/svgs/012-test-tubes.svg" />
            <IconCell src="/svgs/018-clipboard.svg" />
            <IconCell src="/svgs/020-blackboard-1.svg" />
          </div>
        </div>
      </div>

      <div className="row about-head d-flex flex-column align-items-center py-5 bg-gray-100">
        <h2 className="text-xl md:text-2xl font-bold text-center px-4">
          BRINGING-TO-LIFE A GENERATION OF MATERIALS FOR UNIQUE AND INNOVATIVE PRODUCTS
        </h2>
        <h3 className="text-lg text-gray-600 mt-2 text-center px-4">
          We hold a passion for innovation, brilliant ideas and the execution that brings them all together in one beautiful experience.
        </h3>
      </div>

      <div id="r2" className="row">
        <div id="c3" className="col-12 col-lg-5 p-0">
          <div className="h-full">
            <div id="c4" className="col-12 imgc p-0">
              <div className="bg-gray-700 text-white p-4 md:p-5 h-full">
                <h2 className="text-lg font-bold mb-2">Powder Range</h2>
                <p className="text-sm">
                  PowderRange is a comprehensive range of premium quality off-the-shelf powders and bespoke materials made to your specification based on pure metals, alloys, machine type, application and research needs. We employ a range of techniques including Inert Gas Atomisation, Vacuum Inert Gas Atomisation, Plasma Atomisation and Plasma Spheroidisation to develop powders for LMD, SLM and EBM.
                </p>
                <a href="#" className="inline-block mt-3 py-2 px-4 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">LEARN MORE</a>
              </div>
            </div>
            <div id="c5" className="col-12 imgc p-0 mt-1">
              <div className="bg-gray-800 text-white p-4 md:p-5 h-full">
                <h2 className="text-lg font-bold mb-2">Powder Lab</h2>
                <p className="text-sm">
                  Whether on a standard or custom material, pre-build or after several uses in an AM machine, Jagada Industries offers an extensive range of powder testing services. In addition to testing powders, Jagada Industries can offer further services on AM components, including testing and analysis of solid samples.
                </p>
                <a href="#" className="inline-block mt-3 py-2 px-4 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>
        <div id="c6" className="col-12 col-lg-7 p-0">
          <div className="h-full grid grid-cols-2 gap-1">
            <div id="c7" className="imgc col-span-2 md:col-span-1">
              <div className="bg-gray-600 h-full min-h-[200px] flex items-center justify-center" />
            </div>
            <div id="c8" className="imgc md:col-span-1">
              <div className="bg-gray-500 h-full min-h-[200px] flex items-center justify-center" />
            </div>
            <div id="c9" className="col-span-2 imgc">
              <div className="bg-blue-900 text-white p-5 min-h-[150px] flex flex-col justify-center items-center text-center">
                <h2 className="text-lg font-bold mb-2">Our place in global market</h2>
                <p className="text-sm max-w-md">
                  Our Magnalium &amp; Magnesium powders have better flammability and brightness while compared to Chinese Magnalium or Magnesium. We prepare Magnalium powders and Magnesium powders using Virgin Magnesium and Virgin Aluminum as raw materials.
                </p>
                <a href="#" className="inline-block mt-3 py-2 px-4 bg-amber-500 text-white rounded text-sm hover:bg-amber-600">EXPLORE MORE</a>
              </div>
            </div>
            <div id="c10" className="col-span-2 imgc">
              <div className="bg-gray-700 h-full min-h-[150px] flex items-center justify-center" />
            </div>
          </div>
        </div>
      </div>

      <div id="r6" className="row py-5">
        <div className="col-12 d-flex flex-column align-items-center justify-content-center">
          <p className="text-center mb-3">
            A short video comparing the quality and luminance of Chinese Magnalium and our Magnalium product
          </p>
          <div className="video d-flex justify-content-center text-5xl text-gray-400">
            <i className="fa fa-play-circle" />
          </div>
        </div>
      </div>
    </div>
  );
}

function IconCell({ src }: { src: string }) {
  return (
    <div className="flex justify-center items-center p-3">
      <Image src={src} alt="" width={48} height={48} className="opacity-80" />
    </div>
  );
}