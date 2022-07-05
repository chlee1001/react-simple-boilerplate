# Simple React Project

## Prerequisites

- [Node.js](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)

## Getting Started

### Installation

```bash
git clone https://github.com/chlee1001/simple-react-project.git
cd simple-react-project
yarn install
```

### Development server

Webpack dev server runs at `localhost:3001`.

```bash
yarn run start
```

### Production build

Build outputs are created in `dist`.

```bash
yarn build
```

## Features

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
## Dependencies

### webpack

- [`webpack`](https://github.com/webpack/webpack) - Module and asset bundler.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to backwards compatible JavaScript
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - Smart preset for Babel
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Babel preset for all React plugins

#### Babel plugins
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - The compiler for next generation JavaScript
- [`react-refresh`](https://www.npmjs.com/package/react-refresh) - Implements the wiring necessary to integrate Fast Refresh into bundlers

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel and webpack

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - React Refresh Webpack Plugin

## License

This project is licensed under the [MIT License](./LICENSE).