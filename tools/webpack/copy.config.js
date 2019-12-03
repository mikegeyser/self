const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      'node_modules/@webcomponents/webcomponentsjs/**/*.js',
      'node_modules/roughjs/dist/**/*.js',
      'src/js/css/rough.js'
    ])
  ]
};
