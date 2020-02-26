# Nightowl-React Component Generator

Both the [ECMAScript 5]() and [ECMAScript 6]() generators have a [.yo-rc.json] file at their root directory. Running this generator within any of their directories will find that `.yo-rc.json` file and use it to generate the files for new components.

All component javascript code is placed inside of the `/components` directory by default. You can use the `--page` flag to generate the component in the `/pages` directory instead.

The css code will be placed in the `/styles` directory no matter what.