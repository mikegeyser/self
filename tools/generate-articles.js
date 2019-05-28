const { html, renderToString } = require('@popeindustries/lit-html-server');
const { unsafeHTML } = require('@popeindustries/lit-html-server/directives/unsafe-html.js');
const fs = require('fs-extra');
const recursive = require('recursive-readdir');
const showdown = require('showdown');

const render_article = (article) => html`
  <h2>wat?</h2>
`;

const render_page = (article) =>
  html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <title>mikerambl.es</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Something about javascript and the web platform." />

        <base href="/" />

        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png?v=Kmnp75vWl7" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png?v=Kmnp75vWl7" />

        <!-- See https://goo.gl/OOhYW5 -->
        <link rel="manifest" href="manifest.json" />

        <!-- See https://goo.gl/qRE0vM -->
        <meta name="theme-color" content="#ffffff" />

        <!-- Add to homescreen for Chrome on Android. Fallback for manifest.json -->
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="mikerambl.es" />

        <!-- Add to homescreen for Safari on iOS -->
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="mikerambl.es" />

        <!-- Homescreen icons -->
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png?v=Kmnp75vWl7" />

        <!-- Tile icon for Windows 8 (144x144 + tile color) -->
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/images/browserconfig.xml?v=Kmnp75vWl7" />

        <!-- Default twitter cards -->
        <meta name="twitter:title" content="mikerambl.es" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@mikegeyser" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Something about javascript and the web platform." />
        <meta property="og:site_name" content="mikerambl.es" />
        <meta property="og:image" content="images/manifest/icon-144x144.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
        <link rel="preconnect" href="https://www.googletagmanager.com/" crossorigin />

        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('sw.js', {
                scope: '/'
              });
            });
          }

          window.process = { env: { NODE_ENV: 'production' } };
        </script>

        <style>
          @import url('https://fonts.googleapis.com/css?family=Indie+Flower&display=swap');

          body {
            margin: 0;
            font-family: Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            line-height: 1.5;
            min-height: 100vh;
            -webkit-font-smoothing: antialiased;
          }
        </style>
      </head>
      <body>
        <my-app appTitle="my app">
          <article>
            ${unsafeHTML(article)}
          </article>
        </my-app>
        <script src="node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
        <script type="module" src="src/components/my-app.js"></script>
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-98817499-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            dataLayer.push(arguments);
          }
          gtag('js', new Date());

          gtag('config', 'UA-98817499-1');
        </script>
      </body>
    </html>
  `;

// Articles
const ignore = ['*.png'];
const converter = new showdown.Converter({ tables: true, metadata: true });
converter.setFlavor('github');

recursive('content/articles', ignore, (err, files) => {
  if (err) console.error(err);

  fs.readFile(files[0], 'utf8', (err, markdown) => {
    const article = converter.makeHtml(markdown);
    const metadata = converter.getMetadata();
    const page = render_page(article);
    const file = `article/${metadata.key}/index.html`;

    renderToString(page)
      .then((text) => fs.outputFile(file, text))
      .then(() => console.log(`Successfully created ${file}`))
      .catch((err) => console.log(err));
  });
});
