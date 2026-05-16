/**
 * Converts "18 Mesh Magnalium Powder" → "18-mesh-magnalium-powder"
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** Maps product text → slug (cached at build time) */
export function getProductSlug(text: string): string {
  return slugify(text);
}