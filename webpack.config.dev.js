const path = require("path");
const common = require("./webpack.config.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "app.bundle.dev.js",
    path: path.resolve(__dirname, "./build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
  ],
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name]-[hash].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
    ],
  },
});
