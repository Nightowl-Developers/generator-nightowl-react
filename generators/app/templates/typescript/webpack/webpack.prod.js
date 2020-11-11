const merge = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const webpackBase = require('./webpack.base');
const webpackCss = require('./style/webpack.css');
const webpackLess = require('./style/webpack.less');
const webpackSass = require('./style/webpack.sass');

const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const prodSpecificConfiguration = {
    mode: "production",
    entry: {
        main: './build/index.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
    plugins: [
        /**
         * These are default options and may not fit your use case perfectly.
         * 
         * I highly recommend that you go to https://webpack.js.org/plugins/compression-webpack-plugin/
         * and read the documentation for this plugin and configure it to fit your
         * use case.
         */
        new CompressionPlugin(),
        /**
         * These are default options and may not fit your use case perfectly.
         * 
         * I highly recommend that you go to https://webpack.js.org/plugins/image-minimizer-webpack-plugin/
         * and read the documentation for this plugin and configure it to fit your
         * use case.
         */
        new ImageMinimizerPlugin({
            minimizerOptions: {
                plugins: [
                    [ 'gifsicle', { interlaced: true } ],
                    [ 'jpegtran', { progressive: true } ],
                    [ 'optipng', { optimizationLevel: 5 } ],
                    [ 
                        'svgo',
                        {
                            plugins: [
                                removeViewBox: false
                            ]
                        }
                    ]
                ]
            }
        })
    ],
    devtool: 'nosources-source-map'
}

const config = doesHaveDependency('sass-loader')
    ? merge([webpackBase, prodSpecificConfiguration, webpackSass])
    : doesHaveDependency('less-loader')
        ? merge([webpackBase, prodSpecificConfiguration, webpackLess])
        : doesHaveDependency('css-loader')
            ? merge([webpackBase, prodSpecificConfiguration, webpackCss])
            : merge([webpackBase, prodSpecificConfiguration]);

module.exports = config;
