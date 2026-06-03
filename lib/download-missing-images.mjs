import { readFileSync, existsSync, readdirSync, createWriteStream } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dir = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dir, '..', 'public', 'wp-images');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = createWriteStream(dest);
    const req = client.get(url, res => {
      if ([301, 302].includes(res.statusCode)) {
        file.close(() => download(res.headers.location, dest).then(resolve).catch(reject));
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error('HTTP ' + res.statusCode));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', e => { file.close(); reject(e); });
  });
}

const content = readFileSync(join(__dir, 'wp-pages.ts'), 'utf8');

// Find all /wp-images/FILENAME references
const found = new Set(
  [...content.matchAll(/\/wp-images\/([^"'\s>\\\/]+\.[a-z]{3,4})/g)].map(m => m[1])
);

console.log(`\nFound ${found.size} image references in wp-pages.ts`);

const YEAR_PATHS = ['2026/02', '2026/04', '2024/11', '2024/07', '2023/09'];
let downloaded = 0;

for (const filename of found) {
  const dest = join(publicDir, filename);
  if (existsSync(dest)) continue;

  let success = false;
  for (const year of YEAR_PATHS) {
    const url = `https://carkeynow.co.il/wp-content/uploads/${year}/${encodeURIComponent(filename)}`;
    try {
      await download(url, dest);
      console.log(`  ↓ ${filename} ✓`);
      downloaded++;
      success = true;
      break;
    } catch {}
    // Also try without encoding
    try {
      const url2 = `https://carkeynow.co.il/wp-content/uploads/${year}/${filename}`;
      await download(url2, dest);
      console.log(`  ↓ ${filename} ✓`);
      downloaded++;
      success = true;
      break;
    } catch {}
  }
  if (!success) console.log(`  ✗ not found: ${filename}`);
}

console.log(`\n✓ Downloaded ${downloaded} additional images`);
console.log(`✓ Total in public/wp-images/: ${readdirSync(publicDir).length} files`);
