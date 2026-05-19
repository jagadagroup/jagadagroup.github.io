export function getOptimizedImageUrl(url: string, width: number = 400): string {
  if (url.endsWith('.svg')) return url;
  const base = url.replace(/\.[^.]+$/, '');
  return `${base}_${width}w.webp`;
}