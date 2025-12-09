#!/usr/bin/env node

/**
 * Image Optimization Script
 * Optimizes images in the public/images directory for web use
 *
 * Usage: node optimize-images.js
 * Requirements: Install sharp: npm install sharp
 */

const sharp = require('sharp');
const fs = require('node:fs').promises;
const path = require('node:path');

const IMAGES_DIR = path.join(__dirname);
const OUTPUT_DIR = path.join(__dirname, 'optimized');

// Image optimization settings
const OPTIMIZATION_CONFIG = {
  jpg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 90,
    compressionLevel: 9,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
};

// Target sizes for responsive images
const RESPONSIVE_SIZES = {
  small: 400,
  medium: 800,
  large: 1200,
  xlarge: 1600,
};

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

async function optimizeImage(inputPath, outputPath, format, size = null) {
  try {
    let pipeline = sharp(inputPath);

    // Resize if size specified
    if (size) {
      pipeline = pipeline.resize(size, size, {
        fit: 'inside',
        withoutEnlargement: true,
      });
    }

    // Apply format-specific optimizations
    switch (format) {
      case 'jpg':
      case 'jpeg':
        pipeline = pipeline.jpeg(OPTIMIZATION_CONFIG.jpg);
        break;
      case 'png':
        pipeline = pipeline.png(OPTIMIZATION_CONFIG.png);
        break;
      case 'webp':
        pipeline = pipeline.webp(OPTIMIZATION_CONFIG.webp);
        break;
    }

    await pipeline.toFile(outputPath);
    console.log(`✅ Optimized: ${path.basename(inputPath)} -> ${path.basename(outputPath)}`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function createResponsiveImages(inputPath, filename, format) {
  const baseName = path.parse(filename).name;

  for (const [sizeName, size] of Object.entries(RESPONSIVE_SIZES)) {
    const outputFilename = `${baseName}-${sizeName}.${format}`;
    const outputPath = path.join(OUTPUT_DIR, outputFilename);

    await optimizeImage(inputPath, outputPath, format, size);
  }
}

async function main() {
  try {
    console.log('🚀 Starting image optimization...\n');

    // Ensure output directory exists
    await ensureDirectoryExists(OUTPUT_DIR);

    // Read all files in images directory
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter((file) => {
      const ext = path.extname(file).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.gif', '.webp'].includes(ext);
    });

    if (imageFiles.length === 0) {
      console.log('📁 No image files found to optimize');
      return;
    }

    console.log(`📸 Found ${imageFiles.length} image(s) to optimize:\n`);

    // Process each image
    for (const file of imageFiles) {
      const inputPath = path.join(IMAGES_DIR, file);
      const ext = path.extname(file).toLowerCase().slice(1);
      const format = ext === 'jpeg' ? 'jpg' : ext;

      // Create optimized version
      const outputFilename = `optimized-${file}`;
      const outputPath = path.join(OUTPUT_DIR, outputFilename);

      await optimizeImage(inputPath, outputPath, format);

      // Create responsive versions
      await createResponsiveImages(inputPath, file, format);
    }

    console.log('\n🎉 Image optimization complete!');
    console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
    console.log('\n💡 Next steps:');
    console.log('   1. Review optimized images');
    console.log('   2. Update component src paths if needed');
    console.log('   3. Test performance improvements');
  } catch (error) {
    console.error('💥 Error during optimization:', error);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { optimizeImage, createResponsiveImages };
