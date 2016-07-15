/*
* @Author: CJ Ting
* @Date:   2016-07-14 14:58:17
* @Last Modified by:   CJ Ting
* @Last Modified time: 2016-07-15 12:00:55
*/

var path = require("path")
var webpack = require("webpack")

module.exports = {
  entry: "./src/index.jsx",
  devtool: "source-map",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "umd",
    library: "ReactDialog",
  },
  module: {
    loaders: [
      {
        include: [
          path.resolve(__dirname, "src"),
        ],
        test: /\.jsx?$/,
        loader: "babel-loader",
        query: {
          presets: ["es2015", "react", "stage-0"],
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      }
    ],
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  externals: [
    {
      react: {
        root: "React",
        commonjs: "react",
        commonjs2: "react",
        amd: "react",
      },
    },
    {
      "react-dom": {
        root: "ReactDOM",
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "react-dom",
      },
    },
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
