# Nightowl React Generator

This [Yeoman Generator](https://yeoman.io) scaffolds a simple javascript [React.js](https://reactjs.org/)
application. It is the simplest way to get a working React.js app started.

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
npm i -g generator-nightowl-react
```

## Using Nightowl React

A simple shell command is all that is required to use Nightowl React. Nightowl React will
show multiple prompts to configure your React app.

```shell script
yo nightowl-react
```