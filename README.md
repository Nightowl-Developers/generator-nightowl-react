# Nightowl React Generator

This [Yeoman Generator](https://yeoman.io) scaffolds a simple javascript [React.js](https://reactjs.org/)
application. It is the simplest way to get a working React.js app started.

## Explicit Biases

The project this Yeoman Generator scaffolds does have some inherent biases that are there to enforce higher standards of maintainability and performance in React applications.

- components are functional (no classes)
- components are expected to use [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- components are structured using [Atomic Design](https://atomicdesign.bradfrost.com/)
- styling is done with [Sass](https://sass-lang.com/)

## Install Nightowl React

Before you can use this tool, you will need to install it and Yo. To do
so, run the `npm install --global yo` command. This will allow
you to run Yeoman from any directory on your computer. Now you can run
`npm install --global generator-nightowl-react`.

## Using Nightowl React

Now that you have both Yo and Nightowl React installed, you can run the
`yo nightowl-react` command to create the project in your current directory.

This generator has different flags that can modify how it behaves.

 Flag        | Description
-------------|------------------------------------------------
--typescript | Creates a react Typescript application.
no flag      | Creates a react EcmaScript 6 application.

## Using the Component Sub-Generator

To create components using the Nightowl React Generator, you can use the
`yo nightowl-react:component` command.

This generator knows to create a JavaScript or TypeScript file by reading the `yo-rc.json` file that the `yo nightowl-react` generator placed at the root of your project.

This generator has different flags that can modify how it behaves.

 Flag        | Description
-------------|------------------------------------------------------------
--atom       | Creates an atom component in /src/components/atoms.
--molecule   | Creates a molecule component in /src/components/molecules.
--organism   | Creates an organism component in /src/components/organisms.
--template   | Creates a template component in /src/components/templates.
no flag      | Creates a page component in /src/components/pages.
