import { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';

export const metadata: Metadata = {
  title: 'Investigación y Desarrollo — Jagada Industries',
  description: 'I+D avanzado en atomización de polvos metálicos.',
  openGraph: { locale: 'es_ES' },
};

export default function EsResearchDevPage() {
  const t = getDictionary('es-ES');
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/researchDev.css" />
      <div className="container-fluid rnd">
        <div id="r1" className="row">
          <div id="c1" className="col-12 col-lg-8 imgc">
            <div className="overlap p-2 p-md-3 p-lg-4 d-flex flex-column justify-content-around">
              <div className="overlap-inner w-100 p-2 p-md-3 p-lg-4">
                <div className="bg-div">
                  <h2>{t.research.testingMethods}</h2>
                  <ul><li>{t.quality.uncoated}</li><li>{t.quality.coated}</li></ul>
                </div>
              </div>
            </div>
          </div>
          <div id="c2" className="col-12 col-lg-4 imgc d-none d-lg-block">
            <div className="container-fluid h-100">
              <div id="r5" className="row d-flex align-content-around flex-wrap h-100">
                {['/svgs/002-flask.svg','/svgs/006-molecule.svg','/svgs/008-alarm-clock.svg','/svgs/012-test-tubes.svg','/svgs/018-clipboard.svg','/svgs/020-blackboard-1.svg'].map((s,i) => (
                  <div key={i} className="d-flex justify-content-center p-2"><span className="d-flex justify-content-center"><img id={`es-i${i+1}`} src={s} alt="" /></span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>{t.research.heading}</h2>
          <h3>{t.research.subheading}</h3>
        </div>
        <div id="r2" className="row">
          <div id="c3" className="col-12 col-lg-5 p-0">
            <div className="container-fluid"><div id="r3" className="row">
              <div id="c4" className="col-12 imgc"><div className="overlap p-2 p-md-3 p-lg-4 d-flex flex-column justify-content-around"><div className="overlap-inner w-100 p-2 p-md-3 p-lg-4"><h2>{t.research.powderRange}</h2><p>PowderRange is a comprehensive range of premium quality powders and bespoke materials.</p></div><span className="py-3 px-5"><a className="learn-more link-button py-3 px-5" href="#">{t.research.learnMore}</a></span></div></div>
              <div id="c5" className="col-12 imgc"><div className="overlap p-2 p-md-3 p-lg-4 d-flex flex-column justify-content-around"><div className="overlap-inner w-100 p-2 p-md-3 p-lg-4"><h2>{t.research.powderLab}</h2><p>Jagada Industries offers an extensive range of powder testing services.</p></div><span className="py-3 px-5"><a className="learn-more link-button py-3 px-5" href="#">{t.research.learnMore}</a></span></div></div>
            </div></div>
          </div>
          <div id="c6" className="col-12 col-lg-7 p-0">
            <div className="container-fluid"><div id="r4" className="row">
              <div id="c7" className="col-6 imgc"><div className="overlap p-2 p-md-3 p-lg-4 d-flex flex-column justify-content-around"></div></div>
              <div id="c8" className="col-6 imgc"><div className="overlap"></div></div>
              <div id="c9" className="col-12 imgc d-flex flex-column justify-content-center align-items-center p-md-5" style={{ color: '#fff' }}>
                <h2>{t.research.globalMarket}</h2>
                <p>Our Magnalium &amp; Magnesium powders have better flammability and brightness while compared to Chinese Magnalium or Magnesium.</p>
                <a className="link-button py-3 px-5" href="#">{t.research.exploreMore}</a>
              </div>
              <div id="c10" className="col-12 imgc"><div className="overlap"></div></div>
            </div></div>
          </div>
        </div>
        <div id="r6" className="row">
          <div className="col-12 d-flex flex-column align-items-center justify-content-center p-md-5">
            <p>{t.research.videoText}</p>
            <div className="video d-flex justify-content-center"><i className="fa fa-play-circle"></i></div>
          </div>
        </div>
      </div>
    </>
  );
}