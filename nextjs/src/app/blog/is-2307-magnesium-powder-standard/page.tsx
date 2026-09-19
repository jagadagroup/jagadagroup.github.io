import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IS 2307 Magnesium Powder Standard — What Buyers Need to Know — Jagada Industries',
  description: 'Complete guide to IS 2307, the Indian Standard for magnesium powder. Purity requirements, particle size limits, test methods, and what to ask your supplier before ordering.',
  openGraph: {
    title: "IS 2307 Magnesium Powder — The Complete Buyer's Guide",
    description: 'Everything a procurement manager needs to know about IS 2307 compliance for magnesium powder — from a manufacturer that has been certified since 1992.',
    type: 'article',
    publishedTime: '2026-06-17',
  },
};

const TABLE_CLASS = 'table table-bordered table-sm mb-4';

export default function BlogPost() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/blog.css" />
      <article className="blog-container blog-body">
        <Link href="/blogs/" className="blog-back">&larr; Back to Blog</Link>

        <h1 className="blog-title">
          IS 2307 Magnesium Powder — What the Standard Actually Requires (and What Suppliers Won&apos;t Tell You)
        </h1>
        <p className="blog-meta">Published June 2026 &middot; Jagada Industries &middot; 8 min read</p>

        <p className="blog-lead">
          If you are sourcing magnesium powder from India, you will see &ldquo;IS 2307 compliant&rdquo; on almost
          every supplier&apos;s brochure. But what does IS 2307 actually require? And how do you know if a
          supplier&apos;s powder genuinely meets it — or if they are just printing those four characters on a
          datasheet?
        </p>

        <p>
          We have been manufacturing to IS 2307 since our founding in 1992. In that time, we have seen the
          standard misquoted, selectively applied, and outright ignored — including by suppliers who claim
          certification. This guide covers what the standard actually specifies, what tests are required,
          and what questions to ask before placing an order.
        </p>

        <section>
          <h2>1. What IS 2307 Is — and What It Covers</h2>

          <p>
            IS 2307 is the Bureau of Indian Standards specification for magnesium powder used in pyrotechnic
            and related applications. The standard was first published in 1963 and has been revised several
            times since. It specifies chemical composition, particle size distribution, and performance
            requirements for magnesium powder intended for fireworks, signal flares, and similar uses.
          </p>

          <p>
            It is <em>not</em> a general-purpose magnesium powder standard. If you are buying magnesium powder
            for chemical synthesis, water treatment, or metallurgical applications, IS 2307 may not be the
            relevant specification — you would typically look at purity grades defined by the supplier&apos;s
            own specifications or international standards like ASTM B92. IS 2307 is specifically for
            pyrotechnic-grade material.
          </p>

          <div className="blog-callout blog-callout-amber">
            <strong>Important:</strong> IS 2307 compliance is a <em>minimum</em> requirement for pyrotechnic
            applications in India, not a quality ceiling. Two suppliers can both be &ldquo;IS 2307 compliant&rdquo;
            while delivering meaningfully different product quality. The difference lies in how consistently
            they stay within specification and what margin they maintain above the minimum purity floor.
          </div>
        </section>

        <section>
          <h2>2. The Chemical Composition Requirements</h2>

          <p>
            IS 2307 specifies the following chemical composition for Grade 1 magnesium powder:
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Parameter</th>
                  <th>IS 2307 Minimum / Maximum</th>
                  <th>Jagada Industries Typical</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Magnesium (Mg) content</strong></td>
                  <td>99.5% minimum</td>
                  <td>99.8%</td>
                </tr>
                <tr>
                  <td><strong>Iron (Fe)</strong></td>
                  <td>0.05% maximum</td>
                  <td>&lt;0.03%</td>
                </tr>
                <tr>
                  <td><strong>Silicon (Si)</strong></td>
                  <td>0.05% maximum</td>
                  <td>&lt;0.02%</td>
                </tr>
                <tr>
                  <td><strong>Copper (Cu)</strong></td>
                  <td>0.02% maximum</td>
                  <td>&lt;0.01%</td>
                </tr>
                <tr>
                  <td><strong>Nickel (Ni)</strong></td>
                  <td>0.005% maximum</td>
                  <td>&lt;0.003%</td>
                </tr>
                <tr>
                  <td><strong>Aluminium (Al)</strong></td>
                  <td>0.05% maximum</td>
                  <td>&lt;0.03%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Notice that IS 2307 sets a <em>minimum</em> of 99.5% Mg. Our typical output is 99.8% — meaning
            we maintain a 0.3 percentage point margin above the floor. That gap matters more than it sounds.
            A supplier at exactly 99.5% is compliant on paper but has zero buffer for batch-to-batch variation.
            Any slight deviation in raw material quality or production process pushes them out of spec.
          </p>

          <p>
            The iron and copper limits deserve particular attention. Iron contamination above 0.05% causes
            erratic burn performance — iron acts as a burn modifier in pyrotechnic compositions, making the
            flame less predictable and in some cases increasing sensitivity. Copper above the limit can
            catalyse unwanted reactions in chlorate-based compositions. These are not minor aesthetic
            concerns; they are safety-relevant parameters.
          </p>
        </section>

        <section>
          <h2>3. Particle Size — Where IS 2307 Meets Real-World Applications</h2>

          <p>
            The standard defines particle size in terms of mesh (sieve) retention rather than a specific
            micron value. For Grade 1, the requirement is:
          </p>

          <ul>
            <li>100% must pass through a 40 mesh sieve (420 µm)</li>
            <li>Not more than 5% retained on an 80 mesh sieve (180 µm)</li>
          </ul>

          <p>
            In practice, this means Grade 1 IS 2307 powder is a 40–80 mesh product, with the bulk of
            particles between 180 µm and 420 µm. This is the standard range for most pyrotechnic
            applications — stars, signal compositions, and propellants.
          </p>

          <p>
            Grade 2 under IS 2307 is a different specification entirely — it allows for an aluminium
            addition (up to 10% Al) which modifies the burn characteristics. Our Grade 2 Magnesium Powder
            runs at approximately Mg-90%, Al-9.8%, which produces a slightly lower ignition temperature
            and is used in compositions where Grade 1&apos;s 3,100°C flame temperature is too aggressive
            for the binder system.
          </p>

          <div className="blog-callout blog-callout-blue">
            <strong>Procurement Note:</strong> When a supplier says &ldquo;IS 2307 magnesium powder,&rdquo; always ask
            which grade — Grade 1 or Grade 2. They have different compositions. Confusing them in a
            composition can cause a formulation to behave completely differently than expected.
          </div>
        </section>

        <section>
          <h2>4. The Test Methods — How to Verify Compliance</h2>

          <p>
            IS 2307 specifies the test methods that must be used to verify compliance. This matters because
            a supplier can measure purity using a cheaper, less accurate method and still report a number
            that sounds compliant. The standard requires:
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Parameter</th>
                  <th>Required Test Method</th>
                  <th>What to Watch For</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mg purity</td>
                  <td>Gravimetric or EDTA titrimetric method</td>
                  <td>Some suppliers report XRF results — faster but less precise for trace elements</td>
                </tr>
                <tr>
                  <td>Fe, Si, Cu, Ni content</td>
                  <td>Optical Emission Spectroscopy (OES) or wet chemical methods</td>
                  <td>OES is faster; wet chemical is reference method for disputes</td>
                </tr>
                <tr>
                  <td>Particle size</td>
                  <td>Standard sieve analysis (IS 460 series sieves)</td>
                  <td>Laser diffraction gives different results — not equivalent for compliance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            At Jagada Industries, we use OES (Optical Emission Spectroscopy) on every production batch.
            OES gives us a complete elemental profile in under 60 seconds — not just the IS 2307
            parameters, but a full 15-element scan. This is not a requirement of the standard; it is our
            internal quality floor. We catch off-spec material before it leaves the plant.
          </p>
        </section>

        <section>
          <h2>5. What Certificate of Analysis to Ask For</h2>

          <p>
            Every shipment of IS 2307 magnesium powder should come with a Certificate of Analysis (CoA)
            that includes at minimum:
          </p>

          <ul className="mb-3">
            <li>Batch or lot number (traceable to production records)</li>
            <li>Mg purity (not rounded — you want three decimal places, e.g., 99.812%)</li>
            <li>Fe, Si, Cu, Ni, Al values with units (ppm or %)</li>
            <li>Particle size distribution: % retained on 40 mesh and 80 mesh</li>
            <li>Test method used for each parameter</li>
            <li>Date of manufacture and date of analysis</li>
            <li>Authorised signatory and laboratory reference</li>
          </ul>

          <p>
            If a CoA shows rounded numbers (&ldquo;99.5% Mg&rdquo; exactly, &ldquo;0.05% Fe&rdquo; exactly), that is a red
            flag. Real analytical results are not round numbers. Rounded values suggest the supplier is
            reporting specification limits rather than actual measured values.
          </p>

          <div className="blog-callout blog-callout-amber">
            <strong>Practical Check:</strong> Ask for the CoA before ordering, not after. A supplier who
            hesitates to share batch-specific test data before the order is placed will be harder to hold
            accountable if a quality issue emerges after the shipment arrives.
          </div>
        </section>

        <section>
          <h2>6. IS 2307 vs International Standards — Where They Align and Diverge</h2>

          <p>
            Buyers in export markets often ask how IS 2307 compares to international equivalents. Short
            answer: it is comparable in intent but different in detail.
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Standard</th>
                  <th>Origin</th>
                  <th>Min Mg Purity</th>
                  <th>Application Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>IS 2307</strong></td>
                  <td>India (BIS)</td>
                  <td>99.5%</td>
                  <td>Pyrotechnics, fireworks</td>
                </tr>
                <tr>
                  <td><strong>MIL-M-382</strong></td>
                  <td>USA (Defense)</td>
                  <td>99.8%</td>
                  <td>Military pyrotechnics</td>
                </tr>
                <tr>
                  <td><strong>EN 13631-3</strong></td>
                  <td>Europe</td>
                  <td>99.0%</td>
                  <td>Explosives — metal powder ingredients</td>
                </tr>
                <tr>
                  <td><strong>GOST 6001</strong></td>
                  <td>Russia</td>
                  <td>99.8%</td>
                  <td>General magnesium powder</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            For most civilian fireworks applications, IS 2307 Grade 1 at 99.8% actual purity (not just the
            99.5% specification floor) is functionally equivalent to the stricter international standards.
            For defense applications specifying MIL-M-382, buyers should confirm the supplier is operating
            at 99.8% actual — not just 99.5% minimum.
          </p>
        </section>

        <section>
          <h2>7. The One Question That Separates Serious Suppliers from the Rest</h2>

          <p>
            After 30+ years in this business, here is the single most revealing question to ask a magnesium
            powder supplier: <em>&ldquo;What is your typical production margin above the IS 2307 minimum purity
            requirement?&rdquo;</em>
          </p>

          <p>
            A supplier who is genuinely manufacturing to the standard — not just claiming it — will answer
            immediately with a specific number. They know their process capability. They can tell you that
            their typical output is 99.7% or 99.8%, and they can explain why (raw material sourcing,
            production controls, etc.).
          </p>

          <p>
            A supplier who is reselling, blending batches, or not actually running QC at this level will
            give you a vague answer or simply repeat the specification limit. That tells you everything.
          </p>

          <p>
            Our answer, for the record: our Grade 1 Magnesium Powder runs at 99.8% typical, with a process
            capability that keeps us above 99.7% in all but exceptional circumstances. We have 30+ years
            of batch records to back that up.
          </p>

          <div className="blog-cta">
            <p><strong>Want to see our Certificate of Analysis before ordering?</strong></p>
            <div>
              <Link href="/product/grade-1-magnesium-powder/" className="btn btn-outline-light btn-sm">Grade 1 Specifications</Link>
              {' '}
              <Link href="/contact-us/" className="btn btn-warning btn-sm">Request CoA + Quote</Link>
            </div>
          </div>
        </section>

        <hr className="my-4" />

        <div className="blog-footer-note">
          <p><strong>About the Author:</strong> Jagada Industries has been manufacturing IS 2307 magnesium powder in Virudhunagar, Tamil Nadu since 1992. We supply Grade 1, Grade 1 Coated, and Grade 2 magnesium powder to fireworks manufacturers, defence contractors, and industrial clients across 15+ countries.</p>
          <p className="mb-0"><strong>Disclaimer:</strong> This article reflects our interpretation of IS 2307 based on 30+ years of manufacturing experience. Always consult the full BIS standard document and your compliance team for regulatory decisions.</p>
        </div>
      </article>
    </>
  );
}
