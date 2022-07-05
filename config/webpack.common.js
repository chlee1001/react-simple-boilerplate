const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { LoaderOptionsPlugin } = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  devtool: 'eval',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.json', '.css'],
  },

  entry: {
    app: paths.src + '/index.jsx',
  }, // 입력
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
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          plugins: [
            '@babel/plugin-proposal-class-properties',
            'react-refresh/babel',
          ],
          exclude: /node_modules/,
        },
      },
    ],
  },
  plugins: [
    new LoaderOptionsPlugin({ debug: true }),
    new CleanWebpackPlugin(),
    new RefreshWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      template: paths.public + '/index.html',
      favicon: paths.public + '/favicon.ico',
      filename: 'index.html',
    }),
  ],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
  }, // 출력
}
