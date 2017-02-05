# Single Page React App
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

- [Features](#features)
- [Installation](#installation)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)


## Features
- [React](https://facebook.github.io/react/) as the view
- Hot reloading of changes in `src`
- Optimised for long-term caching
- Progressive Web Application ready via a Service Worker, with offline support
- Long term browser caching of assets with automated cache invalidation
- Source bundled with [Webpack 2](https://webpack.js.org/) so tree-shaking is enabled
- [Standard Javascript](http://standardjs.com/) ESlint configuration
- Testing with


## Installation

```sh
npm install
```

> You're done installing! You can now start developing.


## Development

```sh
npm run dev
```

> Starts a web server and open your app in your browser. When you make changes in the `src` folder, it will rebuild your app and refresh your browser.

```sh
npm run lint
```

> Lint your code and automatically fix lint errors.

```sh
npm start
```

> Simulates a production server with gzip. It starts a static file server with the contents of the `build` folder.


## Testing

```sh
npm run test
```

> This outputs a report of all your tests to the `coverage` folder and serves the report with [serve](https://github.com/zeit/serve).


## Deployment

```sh
npm run build
```

> You can now deploy the `build` folder to your live server!


---


## License

MIT
