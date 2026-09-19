import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium Powder Quality Control — How We Verify Every Batch — Jagada Industries',
  description:
    'Inside Jagada’s magnesium powder quality control: IS 2307 assay, OES testing, sieve analysis, coated vs uncoated checks, and the certificates that ship with every lot.',
  openGraph: {
    title: 'Magnesium Powder Quality Control — Tests Behind the COA',
    description:
      'What “99.8% pure” actually means when we release a Grade 1 magnesium powder lot — and how to audit any supplier’s claim.',
    type: 'article',
    publishedTime: '2026-09-19',
  },
};

const TABLE_CLASS = 'table table-bordered table-sm mb-4';

export default function BlogPost() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/blog.css" />
      <article className="blog-container blog-body">
        <Link href="/blogs/" className="blog-back">
          &larr; Back to Blog
        </Link>

        <h1 className="blog-title">
          Magnesium Powder Quality Control — How We Verify Every Batch Before It Ships
        </h1>
        <p className="blog-meta">Published September 2026 &middot; Jagada Industries &middot; 8 min read</p>

        <p className="blog-lead">
          Procurement managers do not buy “quality.” They buy evidence: assay numbers, sieve results, and a
          paper trail that still makes sense six months after the drums arrive. This is how Jagada Industries
          runs magnesium powder quality control — and the questions you should ask any mill that wants your
          next PO.
        </p>

        <section>
          <h2>1. Start With the Standard, Not the Slogan</h2>
          <p>
            Our Grade 1 magnesium powder is built to <strong>IS 2307</strong> with a magnesium assay target of{' '}
            <strong>99.8%</strong>. That standard exists specifically for pyrotechnic-grade material. For
            grade selection, see{' '}
            <Link href="/blog/grade-1-vs-grade-2-magnesium-powder/">Grade 1 vs Grade 2 magnesium powder</Link>.
          </p>
          <p>
            Marketing language like “ultra pure” or “defense grade” without a named standard and a test method
            is not a specification. It is decoration.
          </p>
        </section>

        <section>
          <h2>2. The Five Checks on Every Release Lot</h2>
          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead>
                <tr>
                  <th>Check</th>
                  <th>Method</th>
                  <th>Fail Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Composition / assay</td>
                  <td>Optical Emission Spectroscopy (OES)</td>
                  <td>Quarantine lot — do not blend into Grade 1</td>
                </tr>
                <tr>
                  <td>Particle size</td>
                  <td>Sieve analysis vs ordered mesh</td>
                  <td>Reclassify or reject; never relabel</td>
                </tr>
                <tr>
                  <td>Visual / foreign matter</td>
                  <td>In-process inspection</td>
                  <td>Hold and investigate contamination source</td>
                </tr>
                <tr>
                  <td>Identity &amp; lot coding</td>
                  <td>Batch records under ISO 9001:2008</td>
                  <td>No ship without complete lot history</td>
                </tr>
                <tr>
                  <td>Packaging integrity</td>
                  <td>UN 1418 packing checklist</td>
                  <td>Repack before release</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            The important cultural rule: failing lots are not “averaged” into a passing shipment. If Grade 1
            misses assay, it does not become Grade 1 with a polite note. That is how you protect illuminating
            flare and signal customers who need the same burn curve year after year.
          </p>
        </section>

        <section>
          <h2>3. Coated vs Uncoated — Quality Is Not Only Purity</h2>
          <p>
            Surface coating does not raise magnesium percentage. It reduces moisture pickup during transit and
            storage. Plants in tropical export markets (Mexico, Brazil, Vietnam) routinely specify Grade 1
            Coated for that reason. Both coated and uncoated Grade 1 share the same IS 2307 assay target; the
            difference is shelf behaviour, not “better metal.”
          </p>
          <p>
            Product pages:{' '}
            <Link href="/product/grade-1-magnesium-powder/">Grade 1</Link> ·{' '}
            <Link href="/product/grade-1-magnesium-powder-coated/">Grade 1 Coated</Link> ·{' '}
            <Link href="/product/grade-2-magnesium-powder/">Grade 2</Link>. Grade selection guide:{' '}
            <Link href="/blog/grade-1-vs-grade-2-magnesium-powder/">Grade 1 vs Grade 2</Link>.
          </p>
        </section>

        <section>
          <h2>4. What Ships With the Drums</h2>
          <ul>
            <li>Batch certificate of analysis (assay + mesh)</li>
            <li>IS 2307 conformance statement for Grade 1 lots</li>
            <li>Material Safety Data Sheet</li>
            <li>Dangerous goods packing declaration (UN 1418)</li>
            <li>Lot numbers matching drum markings</li>
          </ul>
          <p>
            Defense and aerospace buyers sometimes request retained samples or longer COA field lists. We
            support that when the purchase order defines it up front — see{' '}
            <Link href="/magnesium-powder-for-defense/">magnesium powder for defense</Link>.
          </p>
        </section>

        <section>
          <h2>5. How to Audit Any Supplier in 10 Minutes</h2>
          <ol>
            <li>Ask for a recent COA with the same mesh you intend to buy.</li>
            <li>Confirm the assay method (OES, wet chemistry, or “trust us”).</li>
            <li>Ask what happens to fail lots — rework, downgrade, or scrap.</li>
            <li>Check whether coated product has a separate process record.</li>
            <li>Verify UN packaging experience for your destination port.</li>
          </ol>
          <p>
            If those answers are vague, price is irrelevant. Thin powder content is also why Google sometimes
            crawls a page and refuses to index it — the same logic applies to supplier websites that only show
            a product photo and a WhatsApp number.
          </p>
        </section>

        <section>
          <h2>6. Where to Go Next</h2>
          <p>
            Technical landing page:{' '}
            <Link href="/high-purity-magnesium-powder/">high-purity magnesium powder</Link>. Full catalog:{' '}
            <Link href="/magnesium/">magnesium products</Link>. Production overview:{' '}
            <Link href="/production-quality/">production quality</Link>. Ready for a sample COA and quote?{' '}
            <Link href="/contact-us/">Contact us</Link>.
          </p>
        </section>

        <div className="blog-cta">
          <p>Need a sample COA and Grade 1 specifications?</p>
          <Link href="/high-purity-magnesium-powder/" className="btn btn-outline-light btn-sm">
            High-Purity Magnesium Specs
          </Link>
          <Link href="/contact-us/" className="btn btn-warning btn-sm">
            Request COA + Quote
          </Link>
        </div>
      </article>
    </>
  );
}
