const fs = require('fs');
const path = require('path');

const chunkMap = {
  'About': 'About-k_lrPoQu.js',
  'AIVideoGeneration': 'AIVideoGeneration-ClgKsBw4.js',
  'BrandingVisualIdentity': 'BrandingVisualIdentity-BTtLjtzP.js',
  'BrandVideos': 'BrandVideos-HDQBr30T.js',
  'CommercialAds': 'CommercialAds-CF6MgrvJ.js',
  'CommercialProductPhotography': 'CommercialProductPhotography-BkZXPFIm.js',
  'ContentCreation': 'ContentCreation-DY4zddNI.js',
  'Designing': 'Designing-CMD5d44k.js',
  'DigitalMarketing': 'DigitalMarketing-COZQ2b3r.js',
  'EngagementPhotography': 'EngagementPhotography-DLU8KzTL.js',
  'EventPhotography': 'EventPhotography-BbDKgJgg.js',
  'PackagingDesign': 'PackagingDesign-aipMpFJM.js',
  'Photography': 'Photography-7oJwSCzL.js',
  'Portfolio': 'Portfolio-CdONAvl0.js',
  'PreWeddingPhotography': 'PreWeddingPhotography-CecmdLPT.js',
  'PrivacyPolicy': 'PrivacyPolicy-4ktVsunt.js',
  'ProductPrints': 'ProductPrints-BmB6_nC1.js',
  'ProductVideos': 'ProductVideos-WIuaJAiS.js',
  'SignageDesign': 'SignageDesign-An9W9Mtk.js',
  'SocialMediaMarketing': 'SocialMediaMarketing-Ctr00k2O.js',
  'TShirtDesign': 'TShirtDesign-D8tY0XBh.js',
  'Videography': 'Videography-B2LZSayn.js',
  'WeddingPhotography': 'WeddingPhotography-BTBLukzV.js'
};

const pagesDir = path.join(__dirname, '..', 'src', 'pages');
const vercelDir = path.join(__dirname, '..', 'vercel_dist', 'assets');

console.log('='.repeat(60));
console.log('VERIFYING LOCAL SOURCE PAGES AGAINST VERCEL PRODUCTION CHUNKS');
console.log('='.repeat(60));

let allMatch = true;

for (const [pageName, chunkFile] of Object.entries(chunkMap)) {
  const tsxPath = path.join(pagesDir, `${pageName}.tsx`);
  const chunkPath = path.join(vercelDir, chunkFile);

  if (!fs.existsSync(tsxPath)) {
    console.log(`[MISSING LOCAL FILE] ${pageName}.tsx does not exist!`);
    allMatch = false;
    continue;
  }
  if (!fs.existsSync(chunkPath)) {
    console.log(`[MISSING VERCEL CHUNK] ${chunkFile} does not exist!`);
    allMatch = false;
    continue;
  }

  const tsxContent = fs.readFileSync(tsxPath, 'utf8');
  const chunkContent = fs.readFileSync(chunkPath, 'utf8');

  // Extract text strings from TSX (headers, titles, descriptions)
  const stringRegex = />([^<>{}\n]+)</g;
  let match;
  let totalPhrases = 0;
  let matchedPhrases = 0;
  const missingPhrases = [];

  while ((match = stringRegex.exec(tsxContent)) !== null) {
    const text = match[1].trim();
    if (text.length > 3 && !/^\d+$/.test(text)) {
      totalPhrases++;
      if (chunkContent.includes(text)) {
        matchedPhrases++;
      } else {
        missingPhrases.push(text);
      }
    }
  }

  // Also check image paths referenced in TSX
  const imgRegex = /["'](\/[a-zA-Z0-9_\-\.\s\/]+\.(?:jpg|png|webp|mp4|svg|JPG))["']/g;
  let assetMatch;
  let totalAssets = 0;
  let matchedAssets = 0;
  const missingAssets = [];

  while ((assetMatch = imgRegex.exec(tsxContent)) !== null) {
    const assetPath = assetMatch[1];
    totalAssets++;
    if (chunkContent.includes(assetPath)) {
      matchedAssets++;
    } else {
      missingAssets.push(assetPath);
    }
  }

  const phrasePct = totalPhrases > 0 ? Math.round((matchedPhrases / totalPhrases) * 100) : 100;
  const assetPct = totalAssets > 0 ? Math.round((matchedAssets / totalAssets) * 100) : 100;

  console.log(`${pageName.padEnd(30)} Text: ${matchedPhrases}/${totalPhrases} (${phrasePct}%) | Assets: ${matchedAssets}/${totalAssets} (${assetPct}%)`);
  
  if (missingPhrases.length > 0) {
    console.log(`  -> Missing text in Vercel bundle:`, missingPhrases.slice(0, 3));
  }
  if (missingAssets.length > 0) {
    console.log(`  -> Missing assets in Vercel bundle:`, missingAssets.slice(0, 3));
  }
}

console.log('='.repeat(60));
