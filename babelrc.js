module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@emotion/babel-preset-css-prop"
  ],
  plugins: [
    [
      "@babel/plugin-proposal-decorators",
      {
        decoratorsBeforeExport: true
      }
    ],
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-syntax-bigint"
  ]
};
