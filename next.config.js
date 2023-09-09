/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './imageLoader/loader.ts',
  },
};

module.exports = nextConfig;
