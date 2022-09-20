const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["shared"]);
const withImages = require("next-images");
module.exports = withPlugins([withTM(), withImages], {
  webpack: (config) => {
    // custom webpack config
    return config;
  },
  optimizeFonts: false,
  reactStrictMode: false,
  eslint:{
    ignoreDuringBuilds:true
  },
  env:{
    DB_HOST : process.env.DB_HOST
  },
  experimental: {
    outputStandalone: true,
  },
  images: {},
});
