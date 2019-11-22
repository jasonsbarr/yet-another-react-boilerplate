const path = require("path");
const common = require("./webpack.config.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]-[contentHash].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
});
