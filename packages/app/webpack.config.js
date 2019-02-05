const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CheckerPlugin } = require("awesome-typescript-loader");

const DIST = "/dist";

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  // watch: true,
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, DIST),
    filename: "bundle.js"
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.template.ejs",
      inject: "body"
    }),
    new CheckerPlugin()
  ]
};
