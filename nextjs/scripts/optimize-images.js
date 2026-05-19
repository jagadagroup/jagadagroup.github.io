#!/usr/bin/env node

/**
 * Image optimization script for Jagada Group website.
 *
 * Converts product images to WebP format at responsive sizes,
 * reducing the 52MB image directory to ~5-8MB.
 *
 * Strategy:
 * 1. Product photos: 400px wide WebP (catalog cards) + 800px wide (detail page)
 * 2. Hero/background images: 1200px wide WebP
 * 3. ISO certs / icons: keep as-is or convert to WebP at native size
 *
 * Falls back to JPEG if ImageMagick isn't available.
 * In CI (GitHub Actions), install ImageMagick via apt-get.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '..', 'public', 'images');
const OPTIMIZED_DIR = path.join(__dirname, '..', 'public', 'images', 'optimized');

const hasImageMagick = (() => {
  try { execSync('which convert', { stdio: 'ignore' }); return true; }
  catch { return false; }
})();

if (!hasImageMagick) {
  console.log('⚠ ImageMagick not found. Installing on CI...');
  try {
    execSync('sudo apt-get update && sudo apt-get install -y imagemagick', { stdio: 'inherit' });
  } catch {
    console.error('Could not install ImageMagick. Skipping image optimization.');
    process.exit(0);
  }
}

// Product images that need optimization (used on homepage, catalog, detail pages)
const PRODUCT_IMAGES = [
  '1.18MeshMagnaliumPowder.jpg',
  '2.40MeshMagnaliumPowder.jpg',
  '4.80MeshMagnaliumPowder.jpg',
  '5.100MeshMagnaliumPowder.jpg',
  '150mesh.jpg',
  '200mesh.jpg',
  '325mesh.jpg',
  'Grade_1_Magnesium.jpg',
  'Grade_2_Magnesium.jpg',
  'titanium-powder-500x500.jpg',
];

// Hero/background images
const HERO_IMAGES = [
  '171109_06_49_10_5DSR4201.0.jpg',
  'crafted_splash.jpg',
];

// ISO certs — keep as PNG (already compressed)
const CERT_IMAGES = [
  'ISO-9001-2008.png',
  'ISO-14001.png',
];

const OTHER_IMAGES = [
  'under-construction.png',
];

function optimizeImage(fileName, width, quality = 85) {
  const input = path.join(IMAGES_DIR, fileName);
  const name = path.parse(fileName).name;
  const outputWebp = path.join(IMAGES_DIR, `${name}_${width}w.webp`);
  const outputJpg = path.join(IMAGES_DIR, `${name}_${width}w.jpg`);

  if (!fs.existsSync(input)) {
    console.log(`  ⚠ Skipping ${fileName} (not found)`);
    return null;
  }

  const originalSize = fs.statSync(input).size;

  // Generate WebP
  try {
    execSync(
      `convert "${input}" -resize ${width}x -quality ${quality} -strip "${outputWebp}"`,
      { stdio: 'pipe' }
    );
    const newSize = fs.statSync(outputWebp).size;
    console.log(`  ✓ ${fileName}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${width}w WebP, ${((1-newSize/originalSize)*100).toFixed(0)}% saved)`);
    return { webp: outputWebp, size: newSize };
  } catch (e) {
    // Fallback to JPEG if WebP fails (older ImageMagick)
    try {
      execSync(
        `convert "${input}" -resize ${width}x -quality ${quality} -strip "${outputJpg}"`,
        { stdio: 'pipe' }
      );
      const newSize = fs.statSync(outputJpg).size;
      console.log(`  ✓ ${fileName}: ${(originalSize/1024).toFixed(0)}KB → ${(newSize/1024).toFixed(0)}KB (${width}w JPG, ${((1-newSize/originalSize)*100).toFixed(0)}% saved)`);
      return { jpg: outputJpg, size: newSize };
    } catch (e2) {
      console.log(`  ✗ ${fileName}: optimization failed`);
      return null;
    }
  }
}

console.log('🖼  Optimizing product images...');
let totalBefore = 0;
let totalAfter = 0;

// Product images: generate at 400w (catalog cards) and 800w (detail page)
for (const img of PRODUCT_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  if (fs.existsSync(input)) totalBefore += fs.statSync(input).size;
  optimizeImage(img, 400, 80);
  optimizeImage(img, 800, 85);
}
for (const img of PRODUCT_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  if (!fs.existsSync(input)) continue;
  // Check optimized files for size calculation
  const name = path.parse(img).name;
  [400, 800].forEach(w => {
    const f = path.join(IMAGES_DIR, `${name}_${w}w.webp`);
    if (fs.existsSync(f)) totalAfter += fs.statSync(f).size;
    const j = path.join(IMAGES_DIR, `${name}_${w}w.jpg`);
    if (fs.existsSync(j) && !fs.existsSync(f)) totalAfter += fs.statSync(j).size;
  });
}

// Hero images: 1200w
console.log('\n🖼  Optimizing hero/background images...');
for (const img of HERO_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  if (fs.existsSync(input)) totalBefore += fs.statSync(input).size;
  optimizeImage(img, 1200, 80);
}
for (const img of HERO_IMAGES) {
  const name = path.parse(img).name;
  const f = path.join(IMAGES_DIR, `${name}_1200w.webp`);
  if (fs.existsSync(f)) totalAfter += fs.statSync(f).size;
  const j = path.join(IMAGES_DIR, `${name}_1200w.jpg`);
  if (fs.existsSync(j) && !fs.existsSync(f)) totalAfter += fs.statSync(j).size;
}

// Cert images: keep at native size but convert to WebP
console.log('\n🖼  Optimizing cert/logos...');
for (const img of CERT_IMAGES) {
  const input = path.join(IMAGES_DIR, img);
  if (fs.existsSync(input)) totalBefore += fs.statSync(input).size;
  optimizeImage(img, 200, 90);
}
for (const img of CERT_IMAGES) {
  const name = path.parse(img).name;
  const f = path.join(IMAGES_DIR, `${name}_200w.webp`);
  if (fs.existsSync(f)) totalAfter += fs.statSync(f).size;
}

console.log(`\n📊 Total: ${(totalBefore/1024/1024).toFixed(1)}MB → ${(totalAfter/1024/1024).toFixed(1)}MB (${((1-totalAfter/totalBefore)*100).toFixed(0)}% saved)`);
console.log('✅ Image optimization complete.');
console.log('   Optimized images at: nextjs/public/images/');
console.log('   Update components to use the _800w.webp variants for detail pages, _400w.webp for cards.');