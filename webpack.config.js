const webpack = require('webpack');
const path = require('path');                // a useful node path helper library

const config = {
  entry: [
    // 'webpack/hot/dev-server',
    // 'webpack-dev-server/client?http://localhost:3000',
    './src/main.js'
  ],
  output: {
    path: path.resolve(__dirname, 'dist'), // store the bundled output in dist/bundle.js
    filename: 'bundle.js'                  // specifying file name for our compiled assets
  },
  module: {
    loaders: [
      // telling webpack which loaders we want to use.  For now just run the
      // code through the babel-loader.  'babel' is an alias for babel-loader
      { test: /\.js$/, loaders: ['babel'], exclude: /node_modules/ }
    ]
  }
}

module.exports = config;
