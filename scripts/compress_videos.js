import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const dirsToProcess = [
  path.join(process.cwd(), 'public', 'reels'),
  path.join(process.cwd(), 'public', 'food'),
  path.join(process.cwd(), 'public', 'product'),
  path.join(process.cwd(), 'public', 'ai'),
];

console.log(`Using ffmpeg binary at: ${ffmpegPath}`);

function processVideo(filePath) {
  const dir = path.dirname(filePath);
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const posterPath = path.join(dir, `${baseName}.jpg`);
  const tempPath = path.join(dir, `${baseName}_temp_web.mp4`);

  const stat = fs.statSync(filePath);
  console.log(`\n--------------------------------------------------`);
  console.log(`Processing: ${filePath} (${(stat.size / 1024 / 1024).toFixed(2)} MB)`);

  // 1. Generate Poster JPEG
  try {
    console.log(`Generating poster: ${posterPath}`);
    execSync(
      `"${ffmpegPath}" -y -i "${filePath}" -ss 00:00:00.500 -vframes 1 -q:v 3 "${posterPath}"`,
      { stdio: 'inherit' }
    );
  } catch (err) {
    console.error(`Failed to generate poster for ${filePath}:`, err.message);
  }

  // 2. Compress Video to Web-Optimized MP4 (Max 720p width, H.264, Faststart, CRF 26)
  try {
    console.log(`Compressing video to web-optimized format...`);
    execSync(
      `"${ffmpegPath}" -y -i "${filePath}" -vf "scale='min(720,iw)':-2" -c:v libx264 -crf 26 -preset faster -c:a aac -b:a 128k -movflags +faststart "${tempPath}"`,
      { stdio: 'inherit' }
    );

    if (fs.existsSync(tempPath)) {
      const newStat = fs.statSync(tempPath);
      console.log(`Compressed size: ${(newStat.size / 1024 / 1024).toFixed(2)} MB (Saved ${((1 - newStat.size / stat.size) * 100).toFixed(1)}%)`);
      // Replace original file with compressed file
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
    }
  } catch (err) {
    console.error(`Failed to compress video ${filePath}:`, err.message);
    if (fs.existsSync(tempPath)) {
      fs.unlinkSync(tempPath);
    }
  }
}

dirsToProcess.forEach((dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    if (file.toLowerCase().endsWith('.mp4') && !file.includes('_temp_web')) {
      const fullPath = path.join(dir, file);
      processVideo(fullPath);
    }
  });
});

console.log('\nVideo compression and poster generation completed successfully!');
