import type { Metadata } from 'next';
import { LocaleCatalog } from '@/components/LocaleLanding';
import Link from 'next/link';
import { magnalium as magnaliumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';

// Not createLocaleMetadata(): that generates hreflang for all 5 locales, but only
// en + es-ES + vi-VN have a Magnalium category page — pt-PT/fr-FR would 404.
export const metadata: Metadata = {
  title: 'Jagada Industries — Bột Magnalium',
  description: 'Bột Magnalium (hợp kim Nhôm-Magiê 50:50) cho pháo hoa và pyrotechnics. Nhà sản xuất và xuất khẩu từ năm 1992.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/vi-VN/magnalium/',
    languages: { en: '/magnalium/', 'es-ES': '/es-ES/magnalium/', 'vi-VN': '/vi-VN/magnalium/', 'x-default': '/magnalium/' },
  },
};

export default function ViMagnaliumPage() {
  return (
    <>
      <LocaleCatalog locale="vi-VN" />
      <div className="container-fluid py-4 px-3 px-md-5">
        <p className="mx-auto text-center" style={{ maxWidth: '48rem' }}>
          Bột Magnalium là hợp kim 50% Nhôm / 50% Magiê — được sản xuất từ kim loại nguyên chất
          (không tái chế), nấu chảy và phun sương cùng nhau thay vì trộn thành hai loại bột riêng
          biệt. Jagada Industries đã sản xuất bột Magnalium từ năm 1992 tại nhà máy đạt chứng
          nhận ISO 9001:2008 &amp; ISO 14001 ở Virudhunagar, Tamil Nadu, với thành phần kim loại
          được kiểm tra bằng phương pháp quang phổ phát xạ (OES) trên mỗi lô sản xuất. Chúng tôi
          cung cấp bột Magnalium với 7 kích cỡ mesh — 18, 40, 80, 100, 150, 200 và 325 — dùng cho
          pháo phun, sao nổ, bột flash và hợp chất strobe trong pháo hoa và pyrotechnics.
        </p>
      </div>
      <div>
        <div className="row no-gutters">
          {magnaliumProducts.map((product) => (
            <div key={product.id} className="col-12 col-sm-12 col-md-6 col-lg-4 d-flex justify-content-center parallel-home">
              <Link className="parallel-base d-flex flex-column" href={`/product/${getProductSlug(product.text)}/`}>
                <img className="w-100" src={getOptimizedImageUrl(product.url, 400)} alt={product.text} />
                <div className="parallel-text w-100">{product.text}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
