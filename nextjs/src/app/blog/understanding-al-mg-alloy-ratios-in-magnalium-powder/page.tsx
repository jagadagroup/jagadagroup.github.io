import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Understanding Al-Mg Alloy Ratios in Magnalium Powder — Jagada Industries',
  description: 'Why 50:50 Aluminium-Magnesium is the industry-standard Magnalium ratio for pyrotechnics — what the ratio means, why it matters, and how it’s verified batch to batch.',
  alternates: {
    canonical: '/blog/understanding-al-mg-alloy-ratios-in-magnalium-powder/',
    languages: {
      en: '/blog/understanding-al-mg-alloy-ratios-in-magnalium-powder/',
      'x-default': '/blog/understanding-al-mg-alloy-ratios-in-magnalium-powder/',
    },
  },
  openGraph: {
    title: 'Understanding Al-Mg Alloy Ratios in Magnalium Powder',
    description: 'Why 50:50 Aluminium-Magnesium is the industry-standard Magnalium ratio for pyrotechnics, and how alloy precision is verified.',
    type: 'article',
    publishedTime: '2026-08-10',
  },
};

const TABLE_CLASS = 'table table-bordered table-sm mb-4';

export default function BlogPost() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/blog.css" />
      <article className="blog-container blog-body">
        <Link href="/blogs/" className="blog-back">&larr; Back to Blog</Link>

        <h1 className="blog-title">Understanding Al-Mg Alloy Ratios in Magnalium Powder</h1>
        <p className="blog-meta">Published August 2026 &middot; Jagada Industries &middot; 6 min read</p>

        <p className="blog-lead">
          &ldquo;Magnalium&rdquo; isn&apos;t one fixed material — it&apos;s a family of Aluminium-Magnesium
          alloys, and the ratio between the two metals changes how the powder burns. Almost every
          pyrotechnic application calls for one specific ratio: <strong>50% Aluminium, 50%
          Magnesium by weight</strong>. Here&apos;s why that number became the standard, and why
          getting it precisely right matters more than most buyers realize.
        </p>

        <section>
          <h2>1. What &ldquo;50:50&rdquo; Actually Means</h2>
          <p>
            Magnalium is not aluminium powder and magnesium powder mixed together — it is a true
            alloy, melted as a single molten mixture and then atomized into powder. A 50:50 ratio
            means the finished alloy is, by weight, half aluminium and half magnesium — not two
            separate powders sitting side by side in the same jar, but one particle chemistry
            throughout.
          </p>
          <p>
            That distinction matters because an alloy and a mechanical blend burn differently.
            Every particle of true 50:50 Magnalium ignites and reacts as a single unit, giving
            consistent, predictable performance from batch to batch. A blend of separate Al and Mg
            powders in a 50:50 ratio by weight is not the same material and will not perform the
            same way in a pyrotechnic composition.
          </p>
        </section>

        <section>
          <h2>2. Why 50:50 Became the Industry Standard</h2>
          <p>
            Pure aluminium and pure magnesium sit at opposite ends of a trade-off: magnesium burns
            hotter and brighter but is more moisture-sensitive and more expensive; aluminium is
            cheaper and more stable but burns cooler and less spectacularly. The 50:50 alloy ratio
            is the point the pyrotechnics industry has converged on as the practical middle —
            magnesium ignites first at its lower ignition temperature, which then drives the
            aluminium component into a brighter, more sustained reaction than aluminium produces
            alone.
          </p>
          <div className="blog-callout blog-callout-amber">
            <strong>In practice:</strong> this is why 50:50 Magnalium, not a heavier-magnesium or
            heavier-aluminium ratio, is what you&apos;ll find specified in most published
            pyrotechnic formulas and by most Magnalium manufacturers — it is the ratio the
            established recipes and compositions were built and tested around.
          </div>
        </section>

        <section>
          <h2>3. Why Ratio Precision Matters</h2>
          <p>
            A powder sold as &ldquo;50:50 Magnalium&rdquo; that is actually 55:45 or 45:55 will
            not fail outright, but it will drift from the burn characteristics a formulator
            designed around — slightly duller, slightly hotter, or slightly less consistent shot
            to shot. In bulk manufacturing, that drift compounds: a batch that&apos;s off-ratio by
            a few percentage points can be the difference between a composition performing
            identically to the last order and a customer having to requalify their formula.
          </p>
          <p>
            This is why alloy composition isn&apos;t something a buyer should have to take on
            faith. Jagada Industries verifies the composition of every batch of Magnalium powder
            using OES (Optical Emission Spectroscopy) — an instrumental test that measures the
            actual elemental composition of the alloy, not just the ratio of raw metal that went
            into the melt. We also use virgin (not recycled) aluminium and magnesium ingots;
            recycled feedstock carries impurities that can shift the effective ratio and introduce
            contaminants that recipe testing never accounted for.
          </p>
        </section>

        <section>
          <h2>4. Ratio vs. Mesh Size — Two Different Things</h2>
          <p>
            It&apos;s easy to conflate alloy ratio with mesh size, but they control different
            properties. The 50:50 Al-Mg ratio is fixed across Jagada&apos;s entire Magnalium
            range — it determines <em>how</em> the powder burns. Mesh size (we manufacture 18, 40,
            80, 100, 150, 200, and 325 mesh) determines particle size, which controls burn{' '}
            <em>rate</em> and the resulting spark or flash effect. See our{' '}
            <Link href="/blog/how-to-choose-mesh-size-magnalium-powder/">
              mesh size guide
            </Link>{' '}
            for how to choose between them.
          </p>
          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Property</th>
                  <th>What it controls</th>
                  <th>Fixed or variable in our range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Al-Mg Ratio</strong></td>
                  <td>How the powder burns — brightness, ignition behavior</td>
                  <td>Fixed at 50:50 across all mesh sizes</td>
                </tr>
                <tr>
                  <td><strong>Mesh Size</strong></td>
                  <td>Particle size — burn rate, spark/flash effect</td>
                  <td>Variable — 18 to 325 mesh</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>5. Why Source Your Magnalium Ratio-Verified</h2>
          <p>
            We are not a trader or reseller. Jagada Industries manufactures Magnalium powder in
            our own facility in Virudhunagar, Tamil Nadu, and has done so since 1992.
          </p>
          <ul className="blog-checklist mb-3">
            <li>50:50 Aluminium-Magnesium alloy, true melt-and-atomize — not a mechanical blend</li>
            <li>Virgin raw materials — no recycled metals</li>
            <li>OES (Optical Emission Spectroscopy) composition testing on every batch</li>
            <li>ISO 9001:2008 &amp; ISO 14001 certified</li>
            <li>7 mesh sizes: 18 to 325 mesh, same verified 50:50 ratio throughout</li>
          </ul>

          <div className="blog-cta">
            <p><strong>Ready to order or request a sample?</strong></p>
            <div>
              <Link href="/magnalium/" className="btn btn-outline-light btn-sm">Browse Magnalium Powder</Link>
              <Link href="/contact-us/" className="btn btn-warning btn-sm">Request Quote</Link>
            </div>
          </div>
        </section>

        <hr className="my-4" />

        <div className="blog-footer-note">
          <p><strong>About the Author:</strong> Jagada Industries has been manufacturing pyrotechnic-grade metal powders since 1992. Based in Virudhunagar, Tamil Nadu, we supply Magnalium, Magnesium, Aluminum, and Titanium powders to fireworks manufacturers, defense contractors, and industrial clients worldwide.</p>
          <p className="mb-0"><strong>Disclaimer:</strong> This article is for educational purposes only. Always follow local regulations, safety protocols, and manufacturer specifications when handling pyrotechnic materials. Never experiment without proper training and safety equipment.</p>
        </div>
      </article>
    </>
  );
}
