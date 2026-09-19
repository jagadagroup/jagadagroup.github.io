import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Magnesium Powder Exporter to Vietnam — Jagada Industries',
  description: 'Jagada Industries exports Magnesium powder and Magnalium powder to Vietnam. ISO certified Indian manufacturer and exporter since 1992. Contact us for pricing.',
};

export default function VietnamPage() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/stylesheets/productum.css" />
      <div className="container-fluid">
        <div className="row about-head d-flex flex-column align-items-center">
          <h2>Metal Powder Supplier for Vietnam</h2>
          <h3>Magnesium &amp; Magnalium Powder Exporter</h3>
        </div>
      </div>
      <div className="container" style={{ padding: '2rem 1rem', maxWidth: '900px', margin: '0 auto' }}>
        <p>
          Jagada Industries is a leading Indian manufacturer and exporter of Magnesium powder, Magnalium
          powder, and Aluminium powder to buyers in Vietnam. Since 1992, we have been supplying
          pyrotechnic-grade and industrial-grade metal powders to Vietnam&apos;s fireworks manufacturers
          and industrial companies.
        </p>

        <h2>Products Available for Vietnam</h2>
        <p>
          We supply the following metal powders to Vietnamese customers, manufactured at our ISO 9001:2008
          certified facility in Virudhunagar, Tamil Nadu, India:
        </p>
        <ul>
          <li><strong>Magnalium Powder</strong> — Al-Mg 50:50 alloy, available in 18, 40, 80, 100, 150, 200, and 325 mesh</li>
          <li><strong>Magnesium Powder Grade 1</strong> — 99.8% purity, IS 2307 standard, 40–80 mesh</li>
          <li><strong>Magnesium Powder Grade 2</strong> — Mg-90%, Al-9.8% composition, 40–80 mesh</li>
          <li><strong>Magnesium Granules</strong> — for pyrotechnic and industrial applications</li>
          <li><strong>Magnesium Ribbon</strong> — for laboratory and demonstration use</li>
          <li><strong>Aluminium Powder</strong> — fireworks and industrial grade</li>
        </ul>

        <h2>Supplying Vietnam&apos;s Fireworks Industry</h2>
        <p>
          Vietnam has a growing fireworks and pyrotechnic industry, particularly for state celebrations,
          Tết (Lunar New Year) displays, and export manufacturing. Jagada Industries supplies
          magnesium powder Vietnam buyers need for high-quality pyrotechnic compositions. We ship via sea
          freight to Ho Chi Minh City (Cát Lái port) and Hanoi (Hải Phòng port), with competitive transit
          times from Indian ports.
        </p>
        <p>
          Our magnalium powder Vietnam exporters and manufacturers rely on is made from virgin aluminium and
          magnesium metals, with Al-Mg 50:50 composition verified by atomic emission spectroscopy in every
          batch. The uniform particle size distribution ensures consistent performance in fountain, burst,
          and strobe compositions.
        </p>

        <h2>Quality &amp; Certifications</h2>
        <p>
          Every shipment of magnesium powder and magnalium powder exported to Vietnam meets our strict
          quality standards:
        </p>
        <ul>
          <li>ISO 9001:2008 certified manufacturing facility</li>
          <li>ISO 14001 environmental management certification</li>
          <li>Composition verified by atomic emission spectroscopy</li>
          <li>Magnesium purity: 99.8% per IS 2307 standard</li>
          <li>Uniform particle size distribution throughout the product</li>
          <li>Certificate of Analysis provided with each shipment</li>
        </ul>

        <h2 lang="vi">Nhà cung cấp bột magiê cho Việt Nam</h2>
        <p lang="vi">
          Jagada Industries là nhà sản xuất và xuất khẩu bột magiê, bột magnalium và bột nhôm uy tín từ
          Ấn Độ. Chúng tôi đã cung cấp bột kim loại chất lượng cao cho các nhà sản xuất pháo hoa và công
          nghiệp tại Việt Nam từ năm 1992. Sản phẩm của chúng tôi đạt tiêu chuẩn ISO 9001:2008 và được
          kiểm tra chất lượng nghiêm ngặt. Liên hệ chúng tôi để nhận báo giá.
        </p>

        <div style={{ marginTop: '2rem' }}>
          <Link
            href="/contact-us"
            style={{
              display: 'inline-block',
              backgroundColor: '#1a73e8',
              color: '#fff',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
            }}
          >
            Request a Quote for Vietnam
          </Link>
          {' '}
          <Link
            href="/vi-VN"
            style={{
              display: 'inline-block',
              backgroundColor: '#fff',
              color: '#1a73e8',
              padding: '0.75rem 2rem',
              borderRadius: '4px',
              textDecoration: 'none',
              fontWeight: 600,
              border: '1px solid #1a73e8',
              marginLeft: '1rem',
            }}
          >
            Xem trang tiếng Việt
          </Link>
        </div>

        <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
          <p>
            <strong>Other export destinations:</strong>{' '}
            <Link href="/location/mexico">Mexico</Link> ·{' '}
            <Link href="/location/peru">Peru</Link> ·{' '}
            <Link href="/location/brazil">Brazil</Link> ·{' '}
            <Link href="/vi-VN">Tiếng Việt</Link>
          </p>
        </div>
      </div>
    </>
  );
}
