const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PostCssNormalize = require("postcss-normalize");
const PostCssFlexbugsFixes = require("postcss-flexbugs-fixes");
const PostCssPresetEnv = require("postcss-preset-env");

const isProd = process.env.NODE_ENV === "production";
const plugins = isProd
  ? [
      new MiniCssExtractPlugin({
        filename: "[name]-[contentHash].css",
        chunkFilename: "[name]-[chunkHash].css"
      })
    ]
  : [];
const postCssLoader = {
  loader: "postcss-loader",
  options: {
    plugins: [
      PostCssFlexbugsFixes(),
      PostCssPresetEnv({
        autoprefixer: {
          flexbox: "no-2009"
        },
        stage: 3
      }),
      PostCssNormalize()
    ]
  }
};

const sassPostCssLoaders = isProd
  ? (postCssLoader,
    {
      loader: "sass-loader",
      options: {
        sourceMap: true
      }
    })
  : {
      loader: "sass-loader",
      options: {
        sourceMap: true
      }
    };

module.exports = {
  entry: {
    bundle: "./src/index.js"
  },
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      src: path.join(__dirname, "src"),
      actions: path.join(__dirname, "src/actions"),
      components: path.join(__dirname, "src/components"),
      contexts: path.join(__dirname, "src/contexts"),
      hooks: path.join(__dirname, "src/hooks"),
      pages: path.join(__dirname, "src/pages"),
      reducers: path.join(__dirname, "src/reducers"),
      routes: path.join(__dirname, "src/routes"),
      utils: path.join(__dirname, "src/utils")
    }
  },
  plugins,
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.module\.(s?css|sass)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true
            }
          },
          sassPostCssLoaders
        ]
      },
      {
        test: /\.(s?css|sass)$/,
        exclude: /\.module\.(s?css|sass)$/,
        use: [
          isProd ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          sassPostCssLoaders
        ]
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/fonts"
          }
        }
      }
    ]
  }
};
