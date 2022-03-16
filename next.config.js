/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: '/community',
        destination: '/community/contact',
        permanent: true,
      },
      {
        source: '/community/info',
        destination: '/community/info/faq',
        permanent: true,
      },
    ];
  },
};
