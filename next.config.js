const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
module.exports = withBundleAnalyzer({
  target: "serverless",
  env: { BASE_URL: process.env.BASE_URL },
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  removeRasterImages: false,
                  removeStyleElement: false,
                  removeUnknownsAndDefaults: false,
                  removeViewBox: false,
                },
              ],
            },
          },
        },
      ],
    });
    conf.resolve.modules.push(__dirname);
    return conf;
  },
});
