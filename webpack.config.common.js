// const env = process.env.NODE_ENV;
const path = require("path");

module.exports = {
  entry: {
    bundle: "./src/index.js",
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
      utils: path.join(__dirname, "src/utils"),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ttf|eot|woff|woff2|otf)$/,
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
