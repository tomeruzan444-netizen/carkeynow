import { readFileSync, writeFileSync, mkdirSync, existsSync, createWriteStream } from 'fs';
import { dirname, join, basename } from 'path';
import { fileURLToPath } from 'url';
import https from 'https';
import http from 'http';

const __dir = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dir, '..', 'public', 'wp-images');

if (!existsSync(publicDir)) mkdirSync(publicDir, { recursive: true });

const media = JSON.parse(readFileSync(join(__dir, 'wp-media-raw.json'), 'utf8'));
console.log(`\nFound ${media.length} media files\n`);

function download(url, destPath) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    const file = createWriteStream(destPath);
    const req = client.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close(() => download(res.headers.location, destPath).then(resolve).catch(reject));
        return;
      }
      if (res.statusCode !== 200) {
        file.close();
        reject(new Error(`HTTP ${res.statusCode}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    });
    req.on('error', (err) => { file.close(); reject(err); });
  });
}

const mapping = [];

for (const item of media) {
  const url = item.source_url;
  const filename = basename(url);
  const localPath = `/wp-images/${filename}`;
  const destPath = join(publicDir, filename);

  mapping.push({
    id: item.id,
    slug: item.slug,
    originalUrl: url,
    localPath,
    alt: item.alt_text || item.title?.rendered || '',
  });

  if (existsSync(destPath)) {
    console.log(`  ✓ skip   ${filename}`);
    continue;
  }

  process.stdout.write(`  ↓ ${filename} ...`);
  try {
    await download(url, destPath);
    console.log(' ✓');
  } catch (err) {
    console.log(` ✗ ${err.message}`);
  }
}

writeFileSync(join(__dir, 'wp-image-map.json'), JSON.stringify(mapping, null, 2), 'utf8');
console.log(`\n✓ Images saved to public/wp-images/`);
console.log(`✓ Mapping saved to lib/wp-image-map.json\n`);
mapping.forEach(m =>
  console.log(`  ${m.originalUrl.replace('https://carkeynow.co.il', '').padEnd(60)} → ${m.localPath}`)
);
