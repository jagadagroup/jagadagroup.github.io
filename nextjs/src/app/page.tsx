import type { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data';

export const metadata: Metadata = {
  title: 'Jagada Industries',
  description: 'Pioneers in Pyrotechnic & Non Ferrous Metal Powders',
};

export default function HomePage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/index.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trykker" />

      <article className="px-3">
        <div className="jumbotron jumbotron-fluid">
          <div className="container-fluid language d-flex flex-column align-items-center p-4 carousel">
            <img className="iso m-2" src="/images/ISO-9001-2008.png" alt="ISO 9001 2008 Certification" />
            <img className="iso m-2" src="/images/ISO-14001.png" alt="ISO 14001 Certification" />
            <div className="estd d-flex justify-content-center align-items-center w-100">
              <p style={{ transform: 'translateX(2rem)' }}>estd</p>
              <div id="logo"></div>
              <p style={{ transform: 'translateX(-2rem)' }}>1992</p>
            </div>
            <h1 className="display-4 pl-3 pl-md-0">jagada industries</h1>
            <h2 className="lead english">Pioneers in Pyrotechnic &amp; Non Ferrous Metal Powders</h2>
            <div className="xtra d-flex flex-column align-items-center"></div>
          </div>
        </div>

        <div className="container-fluid px-5 d-none d-md-block">
          <div id="head-points" className="row p-4">
            <div className="head-point fade-stagger col-md-6 col-lg-3">
              <div className="head-inside">
                <h4><span>Global Leaders in&nbsp;</span><span className="salmon">Industry</span></h4>
                <p>We produce non metal powders and products through Metallurgical processes and Metallurgical standards</p>
              </div>
            </div>
            <div className="head-point fade-stagger col-md-6 col-lg-3">
              <div className="head-inside">
                <h4 className="salmon">Quality standards</h4>
                <p>Particle size of every powdered products are maintained throughout every process in every mesh sizes</p>
              </div>
            </div>
            <div className="head-point fade-stagger col-md-6 col-lg-3">
              <div className="head-inside">
                <h4>Why Us?</h4>
                <p>We guarantee for the best quality in the market with an affordable price along with a prompt delivery nationally or overseas</p>
              </div>
            </div>
            <div className="head-point fade-stagger col-md-6 col-lg-3">
              <div className="head-inside">
                <h4><span>Advanced&nbsp;</span><span className="salmon">Instrumentation</span></h4>
                <p>Metal compositions are checked before and after alloying through OES (Optical Emission Spectroscopy)</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xtra d-flex flex-column align-items-center my-3">
          <p></p>
        </div>
      </article>

      <section className="info container-fluid">
        <div className="row d-flex flex-column align-items-center mb-4">
          <h2 className="text-center">Begin your journey of Quality Products with us</h2>
          <p className="text-center">Somethings aren&apos;t too good to be true. Experience the quality with us.</p>
        </div>
        <div className="row d-flex justify-content-center p-4">
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0">
            <h4>Experience, Knowledge</h4>
            <p className="text-center">We have extensive knowledge and long experience of manufacturing metal powders, and we can tailor our products to our customers&rsquo; requirements.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0">
            <h4>Trust, Assurance</h4>
            <p className="text-center">Our customers must be able to rest assured that the right product, of the right quality, is delivered to the right place at exactly the agreed time. That&rsquo;s pure precision.</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0">
            <h4>Raw materials, Quality</h4>
            <p className="text-center">Production of best product requires the use of best raw materials. We use the best of the breed to serve our customers by procuring hight quality materials. Then, we refine it in our ultra-modern production plant.</p>
          </div>
        </div>
      </section>

      <section id="inspired" className="container-fluid p-5">
        <div className="row d-flex">
          <div className="emulate col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <div className="em-circle"><span>1</span><span>9</span><span>9</span><span>2</span></div>
            <div className="em-head mt-3">since</div>
            <div className="em-para">Established since</div>
          </div>
          <div className="emulate col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <div className="em-circle"><span>5</span><span>0</span><p className="d-inline">+</p></div>
            <div className="em-head mt-3">since</div>
            <div className="em-para">and counting Nationally and Internationally satisfied customers owing to our concern in Pyrotechnics Quality.</div>
          </div>
          <div className="emulate col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <div className="em-circle d-none d-md-block"><span>1</span><span>0</span><p className="d-inline">+</p></div>
            <div className="em-head d-none d-md-block mt-3">since</div>
            <div className="em-para d-none d-md-block">No of successful products in market</div>
          </div>
          <div className="emulate col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center">
            <div className="em-circle d-none d-lg-block"><p className="d-inline">#</p><span>1</span></div>
            <div className="em-head d-none d-lg-block mt-3">since</div>
            <div className="em-para d-none d-lg-block">Position in market. Leader in our segment.</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid" style={{ background: 'steelblue' }}>
          <div className="row about-head d-flex flex-column align-items-center">
            <h2 style={{ color: '#fff' }}>LET&apos;S WORK TOGETHER</h2>
            <h3 style={{ color: '#fff' }}>With high quality and accuracy in everything we do, we contribute to our customers&rsquo; success.</h3>
          </div>
        </div>
        <div className="row no-gutters">
          {products.map((product, index) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-4 col-lg-2 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product?id=${index + 1}`}>
                <img className="w-100" src={product.url} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}