const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    main: "./src/index.js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
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
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "scss-loader"]
      }
    ]
  },
  devServer: {
    host: "0.0.0.0",
    port: 3000,
    contentBase: path.join(__dirname, "build"),
    filename: "bundle.js",
    historyApiFallback: true,
    hot: true
  }
};