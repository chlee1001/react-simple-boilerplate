const {merge} = require('webpack-merge');

const common = require('./webpack.common.js');
const paths = require('./paths');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval',
  module: {
    rules: [],
  },
  devServer: {
    devMiddleware: {publicPath: '/dist/'},
    static: paths.public,
    compress: true,
    port: 3001,
    hot: true,
  },
});