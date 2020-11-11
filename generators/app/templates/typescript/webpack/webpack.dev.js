const webpack = require('webpack');
const merge = require('webpack-merge');

const webpackBase = require('./webpack.base');
const webpackCss = require('./style/webpack.css');
const webpackLess = require('./style/webpack.less');
const webpackSass = require('./style/webpack.sass');

const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const devSpecificConfiguration = {
    mode: "development",
    entry: {
        main: './src/index.tsx'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx'
        ]
    },
    plugins: [
        new webpack.debug.ProfilingPlugin({
            outputPath: 'profiling/profileEvents.json'
        })
    ],
    devtool: 'inline-source-map'
}

const config = doesHaveDependency('sass-loader')
    ? merge([webpackBase, devSpecificConfiguration, webpackSass])
    : doesHaveDependency('less-loader')
        ? merge([webpackBase, devSpecificConfiguration, webpackLess])
        : doesHaveDependency('css-loader')
            ? merge([webpackBase, devSpecificConfiguration, webpackCss])
            : merge([webpackBase, devSpecificConfiguration]);

module.exports = config;
