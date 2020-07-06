const merge = require('webpack-merge');

const webpackBase = require('./webpack.base');
const webpackCss = require('./style/webpack.css');
const webpackLess = require('./style/webpack.less');
const webpackSass = require('./style/webpack.sass');

const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const config = doesHaveDependency('css-loader')
    ? merge([webpackBase, webpackCss])
    : doesHaveDependency('less-loader')
        ? merge([webpackBase, webpackLess])
        : doesHaveDependency('sass-loader')
            ? merge([webpackBase, webpackSass])
            : webpackBase;

module.exports = config;