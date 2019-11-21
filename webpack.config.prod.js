const path = require("path");
const common = require("./webpack.config.common");

module.exports = merge(common, {
  mode: "production",
  "output": {
    filename: "[name]-[contentHash].bundle.js",
    path: path.resolve(__dirname, "./build"),
  },
});
