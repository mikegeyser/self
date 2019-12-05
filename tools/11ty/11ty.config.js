const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("article", "article.njk");
  eleventyConfig.addLayoutAlias("video", "video.njk");

  const filters = [
    "readableDate",
    "dateFromTimestamp",
    "htmlDateString",
    "webmentionsForUrl",
    "webmentionsByType",
    "head"
  ];
  for (const filter of filters) {
    eleventyConfig.addFilter(filter, require(`./filters/${filter}`));
  }

  eleventyConfig.addCollection("tagList", require("./helpers/getTagList"));

  const copy = [
    "src/images",
    "src/css",
    { "src/article/**/*.png": "images/articles/" }
  ];

  for (const path of copy) {
    eleventyConfig.addPassthroughCopy(path);
  }

  /* Markdown Plugins */
  let markdownIt = require("markdown-it");
  let markdownItAnchor = require("markdown-it-anchor");
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let opts = {
    permalink: true,
    permalinkClass: "direct-link",
    permalinkSymbol: "#"
  };

  eleventyConfig.setLibrary(
    "md",
    markdownIt(options).use(markdownItAnchor, opts)
  );

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, browserSync) {
        const content_404 = fs.readFileSync("build/404.html");

        browserSync.addMiddleware("*", (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

  return {
    templateFormats: ["md", "njk", "html", "liquid"],
    pathPrefix: "/",
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
    dir: {
      input: "src",
      includes: "../tools/11ty/layouts",
      data: "../tools/11ty/data",
      output: "build"
    }
  };
};
