import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data';

export const metadata: Metadata = {
  title: 'Jagada Industries',
  description: 'Pioneers in Pyrotechnic & Non Ferrous Metal Powders',
};

export default function HomePage() {
  return (
    <>
      <article className="px-3">
        <div className="jumbotron jumbotron-fluid mb-0">
          <div className="container-fluid language d-flex flex-column align-items-center p-4">
            <Image
              src="/images/ISO-9001-2008.png"
              alt="ISO 9001 2008 Certification"
              width={120}
              height={120}
              className="mb-2"
              unoptimized
            />
            <Image
              src="/images/ISO-14001.png"
              alt="ISO 14001 Certification"
              width={120}
              height={120}
              className="mb-2"
              unoptimized
            />
            <div className="estd d-flex justify-content-center align-items-center w-100 mt-3">
              <p className="mb-0 text-gray-600" style={{ transform: 'translateX(2rem)' }}>
                estd
              </p>
              <div id="logo" className="mx-4" />
              <p className="mb-0 text-gray-600" style={{ transform: 'translateX(-2rem)' }}>
                1992
              </p>
            </div>
            <h1 className="display-4 text-center text-2xl md:text-4xl mt-3">
              jagada industries
            </h1>
            <h2 className="lead text-center text-xl text-gray-700 mt-2">
              Pioneers in Pyrotechnic &amp; Non Ferrous Metal Powders
            </h2>
            <div className="xtra d-flex flex-column align-items-center mt-3" />
          </div>
        </div>

        {/* Feature cards */}
        <div className="container-fluid px-5 d-none d-md-block">
          <div className="row p-4" id="head-points">
            <FeatureCard
              title={<><span>Global Leaders in&nbsp;</span><span className="text-orange-500">Industry</span></>}
              body="We produce non metal powders and products through Metallurgical processes and Metallurgical standards"
            />
            <FeatureCard
              title={<span className="text-orange-500">Quality standards</span>}
              body="Particle size of every powdered products are maintained throughout every process in every mesh sizes"
            />
            <FeatureCard
              title="Why Us?"
              body="We guarantee for the best quality in the market with an affordable price along with a prompt delivery nationally or overseas"
            />
            <FeatureCard
              title={<><span>Advanced&nbsp;</span><span className="text-orange-500">Instrumentation</span></>}
              body="Metal compositions are checked before and after alloying through OES (Optical Emission Spectroscopy)"
            />
          </div>
        </div>

        <div className="xtra my-3" />
      </article>

      {/* Info section */}
      <section className="info container-fluid py-5">
        <div className="row d-flex flex-column align-items-center mb-4">
          <h2 className="text-center text-2xl font-bold">
            Begin your journey of Quality Products with us
          </h2>
          <p className="text-center text-gray-600">
            Somethings aren&apos;t too good to be true. Experience the quality with us.
          </p>
        </div>
        <div className="row d-flex justify-content-center p-4">
          <InfoCard
            title="Experience, Knowledge"
            body="We have extensive knowledge and long experience of manufacturing metal powders, and we can tailor our products to our customers' requirements."
          />
          <InfoCard
            title="Trust, Assurance"
            body="Our customers must be able to rest assured that the right product, of the right quality, is delivered to the right place at exactly the agreed time. That's pure precision."
          />
          <InfoCard
            title="Raw materials, Quality"
            body="Production of best product requires the use of best raw materials. We use the best of the breed to serve our customers by procuring high quality materials. Then, we refine it in our ultra-modern production plant."
          />
        </div>
      </section>

      {/* Stats counters */}
      <section id="inspired" className="container-fluid p-5 bg-gray-50">
        <div className="row d-flex">
          <StatCounter digits={['1', '9', '9', '2']} label="Established since" />
          <StatCounter digits={['5', '0']} label="and counting Nationally and Internationally satisfied customers owing to our concern in Pyrotechnics Quality." suffix="+" />
          <StatCounter digits={['1', '0']} label="No of successful products in market" suffix="+" className="d-none d-md-block" />
          <StatCounter digits={['#', '1']} label="Position in market. Leader in our segment." className="d-none d-lg-block" />
        </div>
      </section>

      {/* Product grid */}
      <section>
        <div className="container-fluid" style={{ background: 'steelblue' }}>
          <div className="row about-head d-flex flex-column align-items-center py-4">
            <h2 className="text-white text-xl font-bold">LET&apos;S WORK TOGETHER</h2>
            <h3 className="text-white text-base opacity-90">
              With high quality and accuracy in everything we do, we contribute to our customers&apos; success.
            </h3>
          </div>
        </div>
        <div className="row no-gutters">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="col-12 col-sm-12 col-md-4 col-lg-2 d-flex justify-content-center p-0"
            >
              <Link href={`/product?id=${index + 1}`} className="block w-full">
                <div className="relative aspect-square">
                  <Image
                    src={product.url}
                    alt={product.text}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="bg-white p-2 text-center text-xs font-medium">
                  {product.text}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function FeatureCard({ title, body }: { title: React.ReactNode; body: string }) {
  return (
    <div className="col-md-6 col-lg-3 mb-3">
      <div className="p-3 h-full">
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-sm text-gray-600">{body}</p>
      </div>
    </div>
  );
}

function InfoCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 d-flex flex-column align-items-center mb-3 mb-lg-0">
      <h4 className="text-lg font-semibold mb-2 text-center">{title}</h4>
      <p className="text-center text-sm text-gray-600">{body}</p>
    </div>
  );
}

function StatCounter({
  digits,
  label,
  suffix,
  className = '',
}: {
  digits: string[];
  label: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <div className={`col-12 col-md-4 col-lg-3 d-flex flex-column align-items-center mb-4 ${className}`}>
      <div className="text-4xl font-bold text-gray-800">
        {digits.join('')}
        {suffix && <span>{suffix}</span>}
      </div>
      <div className="text-sm text-gray-500 text-center mt-1">{label}</div>
    </div>
  );
}