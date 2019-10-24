const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/my-app.js',
    'public-leaderboard': './src/public-leaderboard.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      path: '',
      chunksSortMode: 'none',
      filename: 'index.html',
      template: 'index.html',
      excludeChunks: ['public-leaderboard']
    }),
    new HtmlWebpackPlugin({
      path: 'public-leaderboard',
      chunksSortMode: 'none',
      filename: 'public-leaderboard.html',
      template: 'public-leaderboard.html',
      chunks: ['public-leaderboard']
    })
  ]
};
