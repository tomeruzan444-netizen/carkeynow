import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — all 96 pages are SSG, no Node.js needed on server
  output: 'export',
  trailingSlash: true,

  distDir: process.env.NEXT_DIST_DIR ?? ".next",

  // Disable image optimization (not supported with static export)
  images: {
    unoptimized: true,
  },

  // Security & performance headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/wp-images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },

  async redirects() {
    return [];
  },
};

export default nextConfig;
