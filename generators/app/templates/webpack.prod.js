const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'production',
  target: 'web',
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[hash].js'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({
        mangle: true,
        extractComments: true,
        keep_fnames: true,
      }),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
    }),
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
        test: /\.js/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '/css',
            }
          },
          'css-loader'
        ]
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    contentBase: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    historyApiFallback: true,
    hot: true
  }
};