# Nightowl React Generator

This [Yeoman Generator]() scaffolds a simple javascript [React.js]()
application. It is the simplest way to get a working React.js app started.
It also provides a dev optimized and prod optimized [Webpack]()
configuration.

## Install Nightowl React

Before you can use this tool, you will need to install it and Yeoman. To do
so, run the `npm install --global yeoman-generator` command. This will allow
you to run Yeoman from any directory on your computer. Now you can run
`npm install --global generator-nightowl-react`.

## Using Nightowl React

Now that you have both Yeoman and Nightowl React installed, you can run the
`yo nightowl-react` command to create the project in your current directory.

This generator has different flags that can modify how it behaves.

 Flag        | Description
-------------|------------------------------------------------
--typescript | Creates a react typescript application.
--es5        | Creates a react ecmascript 5 application.

## Using Component Sub-Generator

To create components using the Nightowl React Generator, you can use the
`` command. It creates anomic components, with page components being the
component that is created by default.

 Flag        | Description
-------------|------------------------------------------------------------
--atom       | Creates an atom component in /src/components/atoms.
--molecule   | Creates a molecule component in /src/components/molecules.
--organism   | Creates an organism component in /src/components/organisms.
--template   | Creates a template component in /src/components/templates.
no flag      | Creates a page component in /src/components/pages.
