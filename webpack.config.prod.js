const path = require("path");
const glob = require("glob");
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
const Sharp = require("responsive-loader/sharp");
const ImageminPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozJpeg = require("imagemin-mozjpeg");
const PurgeCssPlugin = require("purgecss-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name]-[contentHash].bundle.js",
    chunkFilename: "[name]-[chunkhash].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
  optimization: {
    minimizer: [
      new OptimizeCssAssetsPlugin(),
      new TerserPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/public/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contentHash].css",
      chunkFilename: "[id].css",
    }),
    new PurgeCssPlugin({
      paths: glob.sync("./src/**/*", { nodir: true }),
    }),
    new CleanWebpackPlugin(),
    new ImageminPlugin({
      minFileSize: 8193,
      onlyUseIfSmaller: true,
      optipng: {
        optimizationLevel: 5,
      },
      pgquant: {
        quality: [0.1, 0.3],
        speed: 5,
      },
      gifsicle: {
        optimization: 3,
      },
      plugins: [
        ImageminMozJpeg({
          quality: 45,
          progressive: false,
        }),
      ],
    }),
  ],
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(s?css)$/,
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
                PostCssPresetEnv({
                  autoprefixer: {
                    flexbox: "no-2009",
                  },
                  stage: 3,
                }),
                PostCssNormalize(),
              ],
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: [
          {
            loader: "responsive-loader",
            options: {
              adapter: Sharp,
              sizes: [150, 300, 600, 900, 1200, 1500, 2000],
              placeholder: true,
              placeholderSize: 50,
              name: "[name]-[hash]-[width].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 8192,
              name: "[name]-[hash].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "[name]-[hash].[ext]",
              outputPath: "assets/img",
            },
          },
        ],
      },
    ],
  },
});
