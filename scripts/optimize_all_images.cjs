const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, '..', 'public');

function getAllImages(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllImages(fullPath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (['.png', '.jpg', '.jpeg'].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function optimizeImages() {
  const images = getAllImages(publicDir);
  console.log(`Found ${images.length} images to optimize in public/`);
  
  let totalSaved = 0;
  let processedCount = 0;

  for (const imgPath of images) {
    const stat = fs.statSync(imgPath);
    const ext = path.extname(imgPath).toLowerCase();
    const tempPath = `${imgPath}.tmp`;

    try {
      let pipeline = sharp(imgPath);
      const metadata = await pipeline.metadata();

      // Resize if dimension exceeds 1200px (ideal for mobile & retina screens)
      const maxDim = 1200;
      const needsResize = (metadata.width && metadata.width > maxDim) || (metadata.height && metadata.height > maxDim);

      if (needsResize) {
        pipeline = pipeline.resize(maxDim, maxDim, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      if (ext === '.png') {
        // High compression PNG with palette optimization for photographic/rendered PNGs
        await pipeline
          .png({
            quality: 80,
            compressionLevel: 9,
            effort: 8,
            palette: true
          })
          .toFile(tempPath);
      } else {
        // Optimized progressive JPEG
        await pipeline
          .jpeg({
            quality: 80,
            progressive: true,
            mozjpeg: true
          })
          .toFile(tempPath);
      }

      const newStat = fs.statSync(tempPath);
      if (newStat.size < stat.size) {
        const saved = stat.size - newStat.size;
        totalSaved += saved;
        fs.unlinkSync(imgPath);
        fs.renameSync(tempPath, imgPath);
        console.log(`✓ ${path.relative(publicDir, imgPath)}: ${(stat.size/1024).toFixed(0)}KB -> ${(newStat.size/1024).toFixed(0)}KB (saved ${(saved/1024).toFixed(0)}KB)`);
      } else {
        fs.unlinkSync(tempPath);
        console.log(`- ${path.relative(publicDir, imgPath)}: already optimal`);
      }
      processedCount++;
    } catch (err) {
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      console.warn(`! Skipped ${path.relative(publicDir, imgPath)}: ${err.message}`);
    }
  }

  console.log('='.repeat(60));
  console.log(`Optimization completed: ${processedCount} images checked.`);
  console.log(`Total data saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log('='.repeat(60));
}

optimizeImages();
