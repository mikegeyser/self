const merge = require('webpack-merge');
const path = require('path');

const devServer = require('./dev-server.config');
const babel = require('./babel.config');
const copy = require('./copy.config');

const base = {
  mode: 'production',
  entry: './src/js/index.js',
  output: {
    path: path.resolve('build/js'),
    filename: 'index.js'
  },
  module: {
    rules: []
  }
};

let config = merge(base, devServer, babel, copy);

module.exports = config;
