const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
  context: path.resolve(__dirname,'source'), //указаликорневую папку
  entry: './js/main.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Кекстаграм',
      template: path.resolve(__dirname, './source/index.html'),
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'source/fonts'),
          to:  path.resolve(__dirname, 'build/fonts'),
        },
        {
          from: path.resolve(__dirname, 'source/css'),
          to:  path.resolve(__dirname, 'build/css'),
        },
        {
          from: path.resolve(__dirname, 'source/img'),
          to:  path.resolve(__dirname, 'build/img'),
        },
        {
          from: path.resolve(__dirname, 'source/photos'),
          to:  path.resolve(__dirname, 'build/photos'),
        },
        {
          from: path.resolve(__dirname, 'source/favicon.ico'),
          to:  path.resolve(__dirname, 'build/favicon.ico'),
        }
      ],
    }),
  ],
  /*  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(png||svg|| jpg || jpeg)/,
        use: ['file-loader'],
      },
      {
        test: /\.(woff||woff2||ttf||eot)$/,
        use: ['file-loader'],
      },
    ],
  }, */
}
