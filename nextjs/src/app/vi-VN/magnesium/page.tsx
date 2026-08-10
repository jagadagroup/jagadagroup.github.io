import type { Metadata } from 'next';
import { LocaleCatalog } from '@/components/LocaleLanding';
import Link from 'next/link';
import { magnesium as magnesiumProducts } from '@/data';
import { getProductSlug } from '@/lib/slugs';
import { getOptimizedImageUrl } from '@/lib/images';
import { siteConfig } from '@/lib/site-config';

// Not createLocaleMetadata(): that generates hreflang for all 5 locales, but only
// en + es-ES + vi-VN have a Magnesium category page — pt-PT/fr-FR would 404.
export const metadata: Metadata = {
  title: 'Jagada Industries — Bột Magiê',
  description: 'Bột Magiê (Grade 1, Grade 1 phủ bảo vệ, Grade 2) cho pháo hoa và pyrotechnics. Nhà sản xuất và xuất khẩu từ năm 1992.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/vi-VN/magnesium/',
    languages: { en: '/magnesium/', 'es-ES': '/es-ES/magnesium/', 'vi-VN': '/vi-VN/magnesium/', 'x-default': '/magnesium/' },
  },
};

export default function ViMagnesiumPage() {
  return (
    <>
      <LocaleCatalog locale="vi-VN" />
      <div className="container-fluid py-4 px-3 px-md-5">
        <p className="mx-auto text-center" style={{ maxWidth: '48rem' }}>
          Bột Magiê là nhiên liệu kim loại sáng nhất được sử dụng trong pháo hoa và
          pyrotechnics — với nhiệt độ ngọn lửa khoảng 3.100°C, không có nhiên liệu kim loại nào
          khác sánh được về độ sáng. Jagada Industries sản xuất bột Magiê Grade 1 (độ tinh khiết
          99,8%, tiêu chuẩn IS 2307) cho độ sáng tối đa, Grade 1 phủ lớp bảo vệ (Coated) cho các
          thị trường xuất khẩu ẩm ướt hoặc nhiệt đới — nơi bột Magiê không phủ lớp bảo vệ sẽ
          xuống cấp nhanh hơn — và Grade 2 (90% Mg / 9,8% Al) cho các ứng dụng tiết kiệm chi
          phí. Cả ba loại đều được sản xuất tại nhà máy đạt chứng nhận ISO 9001:2008 &amp; ISO
          14001 của chúng tôi ở Virudhunagar, Tamil Nadu, và được xuất khẩu trên toàn thế giới
          từ năm 1992.
        </p>
      </div>
      <div>
        <div className="row no-gutters">
          {magnesiumProducts.map((product) => (
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
