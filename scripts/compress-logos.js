import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const LOGO_DIR = path.join(process.cwd(), 'public', 'logo');

async function compressLogos() {
  const files = await fs.readdir(LOGO_DIR);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const filePath = path.join(LOGO_DIR, file);
      const tempPath = path.join(LOGO_DIR, `temp_${file}`);
      
      console.log(`Processing ${file}...`);
      
      try {
        await sharp(filePath)
          .resize(400, null, { withoutEnlargement: true })
          .png({ quality: 80, compressionLevel: 9 })
          .toFile(tempPath);
          
        const oldStats = await fs.stat(filePath);
        const newStats = await fs.stat(tempPath);
        
        await fs.rename(tempPath, filePath);
        
        console.log(`✅ Compressed ${file}: ${(oldStats.size / 1024 / 1024).toFixed(2)}MB -> ${(newStats.size / 1024 / 1024).toFixed(2)}MB`);
      } catch (err) {
        console.error(`❌ Failed to compress ${file}:`, err);
      }
    }
  }
}

compressLogos();
