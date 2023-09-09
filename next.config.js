/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader/loader.ts',
  },
  basePath: '/portfolio_site',
};

module.exports = nextConfig;
