const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Import multiple entries with multiple outputs
module.exports = {
  mode: "development",
  entry: {
    pages: {
      import: ["./src/js/home.js", "./src/js/product.js"],
      filename: "js/pages.js",
    },
    main: {
      import: "./src/js/index.js",
      filename: "js/index.js",
    },
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss|css$/,
        use: [MiniCssExtractPlugin.loader, , "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      title: "Webpack",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
