# Nightowl React Generator

This [Yeoman Generator](https://yeoman.io) scaffolds a simple javascript [React.js](https://reactjs.org/)
application. It is the simplest way to get a working React.js app started.

## Motivation

The motivation behind Nightowl React is to provide a tool that scaffolds a powerful, robust, and easy to extend react application.

## Styling Support

Nightowl React supports the following styling libraries.
- css
- less
- scss
- styled-components

## ESLint Profiles

Nightowl React supports the following ESLint profiles.
- airbnb
- prettier
- eslint:recommended

## Explicit Biases

The project this Yeoman Generator scaffolds does have some inherent biases that are there to enforce higher standards of maintainability and performance in React applications.

- components are functional (no classes)
- components are expected to use [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- components are structured using [Atomic Design](https://atomicdesign.bradfrost.com/)

## Install Nightowl React

To use Nightowl React, you need to install Yeoman and Nightowl React.

```shell script
// install yeoman
npm i -g yo

// install nightowl-react generator
npm i -g @nightowl-developers/generator-nightowl-react
```

## Using Nightowl React

A simple shell command is all that is required to use Nightowl React. Nightowl React will
show multiple prompts to configure your React app.

```shell script
yo @nightowl-developers/nightowl-react
```

### Extending Webpack

The webpack configuration for Nightowl React is robust and has loaders for css, less, and scss. The loaders are loaded based on which dependencies are installed in the package.json file via the `doesHaveDependency()` in `utils/dependencies.js` file.

The webpack build can be extended by making modifications to the `webpack.base.js` file. This is where all common configurations are stored for both the `development` and the `production` build. We will support environment specific configurations in the near future.

### Extending Eslint

The eslint configuration for Nightowl React is simple and easy to extend.

To add plugins or modify base settings, you can modify the `eslint.base.js` file.

If you are using the `airbnb` profile and want to tailor your linting rules, you will want to modify the `eslint.airbnb.js` file.

If you are using the `prettier` profile and want to tailor your linting rules, you will want to modify the `eslint.prettier.js` file.

## Typescript Support

...coming soon
