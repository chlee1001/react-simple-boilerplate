const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const paths = require('./paths');
const path = require('path');

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = {
  entry: {
    app: paths.src + '/index.jsx',
  }, // 입력
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  }, // 출력
  module: {
    rules: [
      {
        test: /\.js?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR', 'last 2 chrome versions'],
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            isDevelopment && require.resolve('react-refresh/babel'),
            [
              'module-resolver',
              {
                root: ['./src'],
                alias: {
                  '#apis': './src/apis/',
                  '#assets': './src/assets/',
                  '#commons': './src/commons/',
                  '#components': './src/components/',
                  '#constants': './src/constants/',
                  '#containers': './src/containers/',
                },
              },
            ],
          ].filter(Boolean),
          exclude: /node_modules/,
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html',
    }),
    isDevelopment && new RefreshWebpackPlugin(),
  ].filter(Boolean),
  resolve: {
    modules: [path.resolve('./src'), 'node_modules'],
    extensions: ['.js', '.jsx', 'ts', 'tsx', '.json', 'css'],
  },
};
