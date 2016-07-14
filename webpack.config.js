/*
* @Author: CJ Ting
* @Date:   2016-07-14 14:58:17
* @Last Modified by:   CJ Ting
* @Last Modified time: 2016-07-14 17:40:33
*/

var path = require("path")

module.exports = {
  entry: "./test/test.jsx",
  devtool: "eval",
  output: {
    path: path.join(__dirname, "_dev"),
    filename: "test.bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-0"],
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
    ],
  },
  resolve: {
    root: [
      __dirname,
    ],
    extensions: ["", ".js", ".jsx"],
  },
};
