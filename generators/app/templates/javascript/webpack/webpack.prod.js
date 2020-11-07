const merge = require('webpack-merge');

const webpackBase = require('./webpack.base');
const webpackCss = require('./style/webpack.css');
const webpackLess = require('./style/webpack.less');
const webpackSass = require('./style/webpack.sass');

const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const prodSpecificConfiguration = {
    entry: {
        main: './build/index.js'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx'
        ]
    },
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
