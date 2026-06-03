import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const html = readFileSync(join(__dir, 'home.html'), 'utf8');

// Extract all <nav> blocks
const navBlocks = [...html.matchAll(/<nav[^>]*>([\s\S]*?)<\/nav>/g)];

const allNavs = navBlocks.map((match, i) => {
  const links = [...match[1].matchAll(/href="(https:\/\/carkeynow\.co\.il\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)];
  return links
    .map(([, url, label]) => ({
      url: decodeURIComponent(url.replace('https://carkeynow.co.il', '')).replace(/\/$/, '') || '/',
      label: label.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
    }))
    .filter((l) => l.label && l.label.length < 60 && !l.label.includes('\n'));
});

// Also extract footer links from <footer>
const footerMatch = html.match(/<footer[\s\S]*?<\/footer>/);
const footerLinks = footerMatch
  ? [...footerMatch[0].matchAll(/href="(https:\/\/carkeynow\.co\.il\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/g)]
      .map(([, url, label]) => ({
        url: decodeURIComponent(url.replace('https://carkeynow.co.il', '')).replace(/\/$/, '') || '/',
        label: label.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim(),
      }))
      .filter((l) => l.label && l.label.length < 60)
  : [];

// Print results
allNavs.forEach((nav, i) => {
  if (nav.length === 0) return;
  console.log(`\n=== NAV BLOCK ${i + 1} (${nav.length} links) ===`);
  nav.forEach((l) => console.log(`  ${l.label.padEnd(40)} -> ${l.url}`));
});

console.log(`\n=== FOOTER (${footerLinks.length} links) ===`);
footerLinks.forEach((l) => console.log(`  ${l.label.padEnd(40)} -> ${l.url}`));

// Build structured output
const result = {
  navBlocks: allNavs.filter((n) => n.length > 0),
  footer: footerLinks,
};

writeFileSync(join(__dir, 'wp-nav.json'), JSON.stringify(result, null, 2), 'utf8');
console.log('\n✓ Saved to wp-nav.json');
