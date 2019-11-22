const path = require("path");
const common = require("./webpack.config.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PostCssNormalize = require("postcss-normalize");
const PostCssFlexbugsFixes = require("postcss-flexbugs-fixes");
const PostCssPresetEnv = require("postcss-preset-env");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]-[contentHash].bundle.js",
    chunkFilename: "[name]-[chunkhash].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name]-[contentHash].css",
      chunkFilename: "[id].css",
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                PostCssFlexbugsFixes(),
                PostCssNormalize(),
                PostCssPresetEnv({
                  autoprefixer: {
                    flexbox: "no-2009",
                  },
                  stage: 3,
                }),
              ],
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
});
