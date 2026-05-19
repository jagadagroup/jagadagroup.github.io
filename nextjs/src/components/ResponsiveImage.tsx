import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width?: number;
  className?: string;
}

/**
 * Renders an optimized <picture> element:
 * - 400w WebP for catalog cards (/products/, /magnalium/, /magnesium/)
 * - 800w WebP for detail pages (/product/[slug]/)
 * - Falls back to original JPEG if WebP doesn't exist
 *
 * Image naming convention (from scripts/optimize-images.js):
 *   ISO-9001-2008.png → ISO-9001-2008_200w.webp
 *   1.18MeshMagnaliumPowder.jpg → 1.18MeshMagnaliumPowder_400w.webp, 1.18MeshMagnaliumPowder_800w.webp
 */
export default function ResponsiveImage({ src, alt, width = 400, className }: ResponsiveImageProps) {
  const base = src.replace(/\.[^.]+$/, '');
  const ext = src.split('.').pop()?.toLowerCase() || 'jpg';

  // Determine appropriate size based on width prop
  const size = width <= 400 ? 400 : width <= 600 ? 600 : 800;

  // Only generate WebP variants for product images (not SVGs, not certs at weird sizes)
  const shouldOptimize = ext === 'jpg' || ext === 'jpeg' || ext === 'png';
  const webpSrc = shouldOptimize ? `${base}_${size}w.webp` : null;

  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} className={className} loading="lazy" />
      </picture>
    );
  }

  return <img src={src} alt={alt} className={className} loading="lazy" />;
}