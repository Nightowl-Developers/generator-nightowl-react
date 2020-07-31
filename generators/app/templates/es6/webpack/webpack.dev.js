const merge = require('webpack-merge');

const webpackBase = require('./webpack.base');
const webpackCss = require('./style/webpack.css');
const webpackLess = require('./style/webpack.less');
const webpackSass = require('./style/webpack.sass');

const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const config = doesHaveDependency('sass-loader')
    ? merge([webpackBase, webpackSass])
    : doesHaveDependency('less-loader')
        ? merge([webpackBase, webpackLess])
        : doesHaveDependency('css-loader')
            ? merge([webpackBase, webpackCss])
            : webpackBase;

module.exports = config;