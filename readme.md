# Single Page React App

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

## Features

- [React](https://facebook.github.io/react/) as the view
- Hot reloading of changes in `src`
- Optimised for long-term caching
- Progressive Web Application ready via a Service Worker, with offline support
- Long term browser caching of assets with automated cache invalidation
- Source bundled with [Webpack 2](https://webpack.js.org/) so tree-shaking is enabled
- Static type checking with [Flow](https://flowtype.org/)
- [Standard Javascript](http://standardjs.com/) ESlint configuration
- Testing with [Jest](https://facebook.github.io/jest/)


## Installation

Run `npm install` or `yarn` to install dependencies.

> You're done installing! You can now start developing.

## Scripts

You can run every command with `npm run ...`, `yarn run ...` or `yarn ...`.

Command         | Description
:-------------- | :----------------------------------------------
`yarn dev`      | Starts a web server and open your app in your browser. When you make changes in the `src` folder, it will rebuild your app and refresh your browser.
`yarn lint`     | Lint your code and automatically fix lint errors with [ESLint](http://eslint.org/) where possible.
`yarn flow`     | Typecheck your files with [Flow](https://flowtype.org/). Use a plugin like [linter-flow](https://atom.io/packages/linter-flow) for your text editor to type check your code while writing code. Add `/* @flow */` to the top of each file you’d like to typecheck.
`yarn start`    | Simulate a production server with gzip. It starts a static file server with [serve](https://github.com/zeit/serve) with the `build` folder as root.
`yarn test`     | Run all your tests with [Jest](https://facebook.github.io/jest/) and watch for file changes to restart the tests.
`yarn coverage` | Create and open the coverage report of all your tests.
`yarn build`    | You can now deploy the `build` folder to your live server.

## License

MIT
