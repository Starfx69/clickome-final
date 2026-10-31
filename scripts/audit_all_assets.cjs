const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

function getAllFiles(dir, exts = ['.tsx', '.ts']) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(getAllFiles(fullPath, exts));
    } else if (exts.includes(path.extname(file))) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = getAllFiles(srcDir);
const assetRegex = /['"](\/[^'"]+\.(?:jpg|jpeg|png|webp|mp4|svg|pdf|JPG|PNG|gif))['"]/gi;

const allReferences = new Map();

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = assetRegex.exec(content)) !== null) {
    const assetUrl = match[1];
    if (!allReferences.has(assetUrl)) {
      allReferences.set(assetUrl, []);
    }
    const relFile = path.relative(srcDir, file);
    if (!allReferences.get(assetUrl).includes(relFile)) {
      allReferences.get(assetUrl).push(relFile);
    }
  }
}

console.log('='.repeat(70));
console.log(`TOTAL UNIQUE ASSET URLS REFERENCED IN CODE: ${allReferences.size}`);
console.log('='.repeat(70));

let missingCount = 0;
let foundCount = 0;

for (const [url, usedIn] of allReferences.entries()) {
  // Decode URL (e.g. %20 -> space)
  const decoded = decodeURIComponent(url);
  const diskPath = path.join(publicDir, decoded.replace(/^\//, '').replace(/\//g, path.sep));

  if (fs.existsSync(diskPath)) {
    foundCount++;
  } else {
    missingCount++;
    console.log(`[MISSING ASSET] ${url}`);
    console.log(`  -> Looked for: ${diskPath}`);
    console.log(`  -> Used in:    ${usedIn.join(', ')}`);
  }
}

console.log('='.repeat(70));
console.log(`AUDIT RESULTS: ${foundCount} Found, ${missingCount} Missing`);
console.log('='.repeat(70));
