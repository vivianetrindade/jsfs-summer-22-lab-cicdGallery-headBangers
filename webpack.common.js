/* eslint-disable */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/index.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
    }),
    new Dotenv()
  ],
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
