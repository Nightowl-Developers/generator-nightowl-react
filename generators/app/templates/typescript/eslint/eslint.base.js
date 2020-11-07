const doesHaveDependency = require('../utils/dependencies').doesHaveDependency;

const extendedConfig = doesHaveDependency('eslint-config-airbnb')
    ? './eslint.airbnb'
    : doesHaveDependency('eslint-plugin-prettier')
        ? './eslint.prettier'
        : 'eslint:recommended';

module.exports = {
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        node: true,
    },
    extends: extendedConfig,
};