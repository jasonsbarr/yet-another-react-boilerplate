const path = require("path");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.dev.js"
  },
});
