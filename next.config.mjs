/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '/portfolio', // Add the path where your site is hosted
  env: {
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  },
  images: {
    domains: ['img.daisyui.com'],
    unoptimized: true,
  },
  output: 'export',
    // Add this to handle all section routes through the same static page
    // trailingSlash: true,
  // Add the following headers to the Next.js config to allow Google Analytics to work and not load any external scripts,
  // async rewrites() {
  //   return [
  //     {
  //       source: '/:sections*',
  //       destination: '/index.html',
  //     },
  //   ];
  // },
  // async headers() {
  //   return [
  //     {
  //       source: '/:path*',
  //       headers: [
  //         {
  //           key: 'Content-Security-Policy',
  //           value:
  //             "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; connect-src 'self' https://www.google-analytics.com;",
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
