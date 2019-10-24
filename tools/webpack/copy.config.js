const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  plugins: [
    new CopyWebpackPlugin([
      'images/**',
      'node_modules/@webcomponents/webcomponentsjs/**',
      'node_modules/msal/dist/**/*.min.js',
      'node_modules/showdown/dist/**/*.min.js',
      'node_modules/prismjs/**/*.js',
      'src/services/config.*',
      'manifest.json'
    ])
  ]
};
