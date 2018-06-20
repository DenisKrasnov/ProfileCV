const path = require("path");
const webpack = require("webpack");

module.exports = {
  devtool: "inline-source-map",
  entry: ["webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, "public/build"),
    publicPath: "/",
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: true,
              localIdentName: "[name]-[local]--[hash:base64:5]",
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(pdf|png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [new webpack.NamedModulesPlugin(), new webpack.HotModuleReplacementPlugin()],
};
