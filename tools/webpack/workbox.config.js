const WorkboxWebpackPlugin = require('workbox-webpack-plugin');

module.exports = {
  plugins: [
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: 'src/sw.js',
      swDest: 'sw.js',
      include: ['index.html', 'manifest.json', /\.js$/],
      exclude: [
        /\/@webcomponents\/webcomponentsjs\//,
        /\/services\/config.js/,
        /\/services\/config.prod.js/
      ]
    })
  ]
};
