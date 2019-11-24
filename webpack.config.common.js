// const env = process.env.NODE_ENV;

module.exports = {
  entry: {
    bundle: "./src/index.js",
    vendor: [
      "react",
      "react-dom",
      "react-router",
      "react-router-dom",
      "@emotion/core",
      "react-conflux",
      "webfontloader",
    ],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts",
          },
        },
      },
    ],
  },
};
