import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — all 96 pages are SSG, no Node.js needed on server
  output: 'export',
  trailingSlash: true,

  // .build is a junction to AppData/Local (outside OneDrive) for local dev
  // On server / GitHub Actions: .next works fine
  distDir: process.env.NEXT_DIST_DIR ?? ".next",

  // Image optimization disabled (not supported with static export)
  // Headers handled by .htaccess on server
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
