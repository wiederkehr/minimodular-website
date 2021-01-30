const withMdxEnhanced = require("next-mdx-enhanced")();
const sizeOf = require("image-size");

module.exports = withMdxEnhanced({
  target: "serverless",
  pageExtensions: ["tsx"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Fixes npm packages (mdx) that depend on `fs` module
      config.node = {
        fs: "empty",
      };
    }
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4)$/i,
      use: [
        {
          loader: "enhanced-file-loader",
          options: {
            publicPath: "/_next",
            name: "static/media/[name].[hash].[ext]",
            generateMetadata: (path) => sizeOf(path),
          },
        },
      ],
    });
    return config;
  },
});
