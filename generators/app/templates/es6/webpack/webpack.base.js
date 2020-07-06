const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    main: "./src/index.js"
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx'
    ]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  // make conditional based on env variable
  devtool: "inline-source-map",
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jp?g|svg|gif)$/i,
        use: {
          loader: 'file-loader',
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    host: "localhost",
    port: 3000,
    contentBase: path.join(__dirname, "build"),
    filename: "bundle.js",
    historyApiFallback: true,
    hot: true
  }
};