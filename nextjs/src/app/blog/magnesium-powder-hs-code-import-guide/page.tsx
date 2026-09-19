import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium Powder HS Code & Import Guide — Mexico, Brazil, Vietnam, Peru — Jagada Industries',
  description: 'HS codes for magnesium powder, Magnalium, and aluminium powder imports. Country-specific tariff rates, documentation requirements, and what goes wrong at customs — from an Indian exporter.',
  openGraph: {
    title: 'Magnesium Powder HS Code & Import Guide for Mexico, Brazil, Vietnam, Peru',
    description: 'Practical customs and import guide for sourcing magnesium powder from India. HS codes, duties, documentation, and port-of-entry tips.',
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
          Magnesium Powder HS Code and Import Guide — What Every Buyer in Mexico, Brazil, Vietnam, and Peru Needs to Know
        </h1>
        <p className="blog-meta">Published June 2026 &middot; Jagada Industries &middot; 10 min read</p>

        <p className="blog-lead">
          Importing magnesium powder or magnalium powder from India is not complicated — but getting the HS
          code wrong, or missing one document, can hold your shipment at customs for weeks. We ship to buyers
          in Mexico, Brazil, Vietnam, and Peru regularly. This guide covers exactly what you need to know
          before your first shipment arrives.
        </p>

        <p>
          We are not customs brokers and this is not legal advice. But after 30+ years of export, we have
          seen almost every customs scenario play out. The issues that delay shipments are almost always the
          same three things: wrong HS code, missing or incorrect MSDS, and incorrect UN dangerous goods
          declaration. This guide addresses all three.
        </p>

        <section>
          <h2>1. HS Codes for Magnesium Powder and Related Products</h2>

          <p>
            The Harmonized System (HS) code is the international classification used by customs authorities
            worldwide. For magnesium powder and related metal powders, the relevant codes are:
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>HS Code (International 6-digit)</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Magnesium powder</strong> (Grade 1, Grade 2)</td>
                  <td><strong>8104.30</strong></td>
                  <td>Magnesium — raspings, turnings and granules, graded according to size; powders</td>
                </tr>
                <tr>
                  <td><strong>Magnalium powder</strong> (Al-Mg alloy)</td>
                  <td><strong>7603.10</strong></td>
                  <td>Aluminium powders and flakes — non-lamellar powders (atomised). Magnalium is an aluminium alloy and classified under Chapter 76, not Chapter 81.</td>
                </tr>
                <tr>
                  <td><strong>Aluminium powder</strong></td>
                  <td><strong>7603.10</strong></td>
                  <td>Aluminium powders — non-lamellar (atomised)</td>
                </tr>
                <tr>
                  <td><strong>Magnesium granules</strong></td>
                  <td><strong>8104.30</strong></td>
                  <td>Same heading as powder — differentiated by particle size in practice</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The 6-digit HS code is the international common ground. Each country then appends additional
            digits for their own tariff schedule — Mexico uses 8 digits, Brazil uses 10 (NCM), Vietnam uses
            8, Peru uses 10. Your customs broker will handle the country-specific extension, but getting
            the 6-digit base right is your responsibility as the importer.
          </p>

          <div className="blog-callout blog-callout-amber">
            <strong>Common Mistake:</strong> Some importers classify magnalium powder under 8104.30
            (Magnesium powders) because it contains 50% magnesium. This is incorrect — magnalium is an
            aluminium-magnesium alloy and should be classified under Chapter 76 (Aluminium and articles
            thereof), specifically 7603.10. The aluminium content determines classification under the HS
            Convention rules. Mis-classification can trigger duty disputes and delays at customs.
          </div>
        </section>

        <section>
          <h2>2. Country-Specific HS Codes and Duty Rates</h2>

          <h3>Mexico</h3>
          <p>
            Mexico uses the TIGIE (Tarifa de la Ley de los Impuestos Generales de Importación y de
            Exportación) — an 8-digit extension of the HS code.
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Mexico TIGIE</th>
                  <th>General Import Duty</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magnesium powder</td>
                  <td>8104.30.01</td>
                  <td>~10%</td>
                  <td>Verify with SAT before ordering. India-Mexico has no FTA, so MFN rate applies.</td>
                </tr>
                <tr>
                  <td>Magnalium powder (Al-Mg alloy)</td>
                  <td>7603.10.01</td>
                  <td>~5–10%</td>
                  <td>Classified as aluminium powder, not magnesium</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Mexico also applies IVA (VAT) of 16% on imports. This is not a duty — it is a tax you pay at
            import and recover through your tax filings. Budget for it in your landed cost calculation.
            Shipments above a threshold value require a Mexican customs broker (agente aduanal) —
            this is a legal requirement, not optional.
          </p>

          <h3>Brazil</h3>
          <p>
            Brazil uses the NCM (Nomenclatura Comum do Mercosul) — a 10-digit code aligned to HS at the
            6-digit level. Brazil has the most complex import tax structure of the four markets covered here.
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Brazil NCM</th>
                  <th>Import Tax (II)</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magnesium powder</td>
                  <td>8104.30.00</td>
                  <td>~6–10%</td>
                  <td>Plus IPI, PIS, COFINS, ICMS. Total effective burden can reach 40–60% of CIF.</td>
                </tr>
                <tr>
                  <td>Magnalium powder</td>
                  <td>7603.10.00</td>
                  <td>~10–14%</td>
                  <td>Same cascaded taxes apply</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Brazil&apos;s import tax structure is layered — the II (Imposto de Importação) is just the first
            layer. You also pay IPI (Imposto sobre Produtos Industrializados), PIS, COFINS, and ICMS.
            For magnesium powder, the total effective tax burden at the port (Santos or Paranaguá) can
            be 40–60% of the CIF (Cost + Insurance + Freight) value. This is not a surprise if you budget
            for it upfront; it is a nasty shock if you do not.
          </p>

          <div className="blog-callout blog-callout-blue">
            <strong>Brazil Practical Note:</strong> Magnesium powder is classified as a dangerous good
            (UN 1418, Class 4.1 — Flammable Solid). Brazilian IBAMA may require an import license for
            chemical products in addition to standard customs clearance. Confirm with your despachante
            (customs broker) before shipping. First-time imports of pyrotechnic materials typically
            require an ANVISA or Exército (Army) authorization — the required authority depends on
            end use.
          </div>

          <h3>Vietnam</h3>
          <p>
            Vietnam uses an 8-digit import tariff code, aligned to ASEAN Harmonised Tariff
            Nomenclature (AHTN). It is the most import-friendly of the four markets for
            Indian exporters.
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Vietnam HS</th>
                  <th>MFN Duty</th>
                  <th>AIFTA Rate (India-ASEAN FTA)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magnesium powder</td>
                  <td>8104.30.00</td>
                  <td>~5–15%</td>
                  <td>0–5% under AIFTA — significant saving</td>
                </tr>
                <tr>
                  <td>Magnalium powder</td>
                  <td>7603.10.00</td>
                  <td>~5%</td>
                  <td>0–3% under AIFTA</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The ASEAN-India Free Trade Agreement (AIFTA) brings duties on most metal powders close to
            zero for Vietnamese importers — but you must supply a Certificate of Origin (Form AI) issued
            by India&apos;s Export Inspection Council or DGFT to claim the preferential rate. Without it,
            you pay the standard MFN duty. This is a document we prepare with every Vietnam shipment
            as standard.
          </p>

          <h3>Peru</h3>
          <p>
            Peru has a relatively open import policy and uses a 10-digit national tariff
            (Arancel de Aduanas del Perú).
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>Peru Code</th>
                  <th>Ad Valorem Duty</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magnesium powder</td>
                  <td>8104.30.00.00</td>
                  <td>0% or 6%</td>
                  <td>Peru has reduced many chemical input duties to 0%. Verify current rate on SUNAT portal before ordering.</td>
                </tr>
                <tr>
                  <td>Magnalium powder</td>
                  <td>7603.10.00.00</td>
                  <td>6%</td>
                  <td>Plus IGV (VAT) of 18%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2>3. Dangerous Goods Classification — What Every Shipment Needs</h2>

          <p>
            Magnesium powder and magnalium powder are both classified as dangerous goods. This affects
            your shipping documentation, packaging, and which carriers will accept the shipment.
          </p>

          <div className="table-responsive">
            <table className={TABLE_CLASS}>
              <thead className="thead-light">
                <tr>
                  <th>Product</th>
                  <th>UN Number</th>
                  <th>DG Class</th>
                  <th>Packing Group</th>
                  <th>Proper Shipping Name</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Magnesium powder (Grade 1, Grade 2)</td>
                  <td><strong>UN 1418</strong></td>
                  <td>4.1 — Flammable Solid</td>
                  <td>II or III depending on particle size</td>
                  <td>Magnesium powder</td>
                </tr>
                <tr>
                  <td>Magnalium powder (Al-Mg alloy)</td>
                  <td><strong>UN 1396</strong></td>
                  <td>4.3 — Dangerous when wet</td>
                  <td>II or III</td>
                  <td>Aluminium alloys, powder</td>
                </tr>
                <tr>
                  <td>Magnesium granules</td>
                  <td><strong>UN 1869</strong></td>
                  <td>4.1 — Flammable Solid</td>
                  <td>III</td>
                  <td>Magnesium, granules, pellets or turnings</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Note the difference between magnesium powder and magnalium powder. Magnalium is Class 4.3
            (&ldquo;Dangerous when wet&rdquo;) rather than Class 4.1. This affects packaging requirements and
            surcharges. Class 4.3 is a more restrictive classification — some carriers that handle
            Class 4.1 will not accept 4.3 without special arrangements. Check with your freight
            forwarder before booking.
          </p>

          <div className="blog-callout blog-callout-red">
            <strong>What Happens at Customs If the DG Declaration is Wrong:</strong> If a shipment
            is declared as non-dangerous goods and customs inspection finds magnesium powder, the
            shipment will be detained. In most jurisdictions this triggers a formal investigation,
            the goods may be seized, and the importer faces penalties. Never accept a supplier who
            offers to ship without DG marking as a shortcut.
          </div>
        </section>

        <section>
          <h2>4. Required Documentation for a Clean Customs Clearance</h2>

          <p>
            For every shipment of magnesium or magnalium powder from India, you should receive or
            arrange the following documents before the vessel departs:
          </p>

          <ul className="mb-3">
            <li><strong>Commercial Invoice</strong> — must show HS code, unit price, total value in USD or buyer&apos;s preferred currency, Incoterms, and country of origin (India)</li>
            <li><strong>Packing List</strong> — gross weight, net weight, number of packages, package type (typically UN-certified steel or fibre drums)</li>
            <li><strong>Bill of Lading (sea) or Airway Bill (air)</strong></li>
            <li><strong>Material Safety Data Sheet (MSDS / SDS)</strong> — must be in the local language for Vietnam, Brazil, and Mexico. An English-only MSDS may not satisfy customs in those markets.</li>
            <li><strong>Dangerous Goods Declaration</strong> — signed and certified by the shipper. Mandatory for all Class 4.1 and 4.3 shipments.</li>
            <li><strong>Certificate of Analysis (CoA)</strong> — batch-specific purity and particle size data</li>
            <li><strong>Certificate of Origin</strong> — required for preferential duty treatment (critical for Vietnam under AIFTA). Form A or Form AI depending on the scheme.</li>
            <li><strong>Insurance Certificate</strong> — required if Incoterms are CIF or CIP</li>
          </ul>

          <p>
            For Brazil: you also need to be registered with RADAR (the Brazilian import licensing
            system operated by Receita Federal). This is your registration as an importer, not the
            supplier&apos;s — but get it sorted well before your first shipment, as processing takes time.
          </p>
        </section>

        <section>
          <h2>5. Practical Notes from 30 Years of Export</h2>

          <p>
            <strong>Sea freight only for bulk orders.</strong> Many airlines will not accept Class 4
            dangerous goods above exemption quantity limits (typically 500g for 4.3 materials under
            IATA). For anything above 50 kg, sea freight is the practical route. Typical transit
            from India to Manzanillo (Mexico): 25–35 days. Ho Chi Minh City (Vietnam): 12–18 days.
            Santos (Brazil): 20–30 days. Callao (Peru): 22–28 days.
          </p>

          <p>
            <strong>Request UN-certified packaging explicitly.</strong> When ordering, specify
            UN-certified packaging — typically UN 4G or UN 4GV fibre drums, or UN 1A2 steel drums.
            Standard industrial drums are not the same and will not satisfy dangerous goods requirements.
          </p>

          <p>
            <strong>The MSDS language requirement is most strictly enforced in Brazil.</strong>
            Brazilian customs inspectors routinely flag shipments where the MSDS is only in English.
            We supply Portuguese-language MSDS for all Brazilian shipments. Ask specifically for this
            when ordering.
          </p>

          <p>
            <strong>Build in extra time for your first shipment.</strong> Customs will conduct a more
            thorough inspection of first-time product-supplier combinations in all four markets.
            Subsequent shipments clear faster once you are in the system. Do not plan a production
            run around the first shipment arriving exactly on schedule.
          </p>

          <div className="blog-cta">
            <p><strong>Ready to start? We handle the export documentation for all four markets.</strong></p>
            <div>
              <Link href="/magnesium-exporters/" className="btn btn-outline-light btn-sm">Our Export Capabilities</Link>
              {' '}
              <Link href="/contact-us/" className="btn btn-warning btn-sm">Request Shipping Quote</Link>
            </div>
          </div>
        </section>

        <hr className="my-4" />

        <div className="blog-footer-note">
          <p><strong>About the Author:</strong> Jagada Industries has been exporting magnesium powder, magnalium powder, and aluminium powder from Virudhunagar, Tamil Nadu since 1992. We supply buyers across Mexico, Brazil, Vietnam, Peru, and Europe with full export documentation including CoA, MSDS in local languages, DG declarations, and Certificates of Origin.</p>
          <p className="mb-0"><strong>Disclaimer:</strong> HS codes, duty rates, and import regulations change frequently. The information in this article is accurate to the best of our knowledge as of June 2026. Always verify current rates with your customs broker and the official tariff database of your country before importing. This article does not constitute legal or customs advice.</p>
        </div>
      </article>
    </>
  );
}
