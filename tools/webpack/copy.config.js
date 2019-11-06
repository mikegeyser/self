const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      'node_modules/@webcomponents/webcomponentsjs/**/*.js',
      'src/js/css/rough.js'
    ])
  ]
};
