const path = require('path');
const webpack = require('webpack');

const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = Merge(CommonConfig, {
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Enable HMR
  ],
  devtool: 'inline-source-map',
  devServer: {
    hot: true, // Tell the dev-server we're using HMR
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  output: {
    publicPath: '/'
  }
});
