/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  rewrites: async () => {
    return [
      {
        source: "/api/:slug*",
        destination: `http://localhost:8000/api/:slug*`,
      },
      // {
      //   source: '/api/:path*/',
      //   // Proxy to Backend - dockerized version by default, unless we override for direct local dev
      //   destination: `${process.env['API_HOST'] || 'http://api:8000'}/api/:path*`
      // }
    ];
  },
  // client-side env vars
  env: {
    apiHost: process.env["API_HOST"],
  },
  i18n: {
    locales: ["en", "cn"],
    defaultLocale: "en",
  },
};
