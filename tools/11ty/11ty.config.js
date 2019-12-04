const { DateTime } = require("luxon");
const fs = require("fs");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const pluginSyntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const sanitizeHTML = require("sanitize-html");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight);
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.addLayoutAlias("article", "article.njk");
  eleventyConfig.addLayoutAlias("video", "video.njk");

  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventyConfig.addFilter("dateFromTimestamp", timestamp => {
    return DateTime.fromISO(timestamp, { zone: "utc" }).toJSDate();
  });

  eleventyConfig.addFilter("webmentionsByType", (mentions, ...mentionTypes) => {
    return mentions.filter(entry =>
      mentionTypes.some(mentionType => !!entry[mentionType])
    );
  });

  // Webmentions Filter
  eleventyConfig.addFilter("webmentionsForUrl", (webmentions, url) => {
    const allowedTypes = ["like-of", "repost-of", "mention-of", "in-reply-to"];
    const clean = content =>
      sanitizeHTML(content, {
        allowedTags: ["b", "i", "em", "strong", "a"],
        allowedAttributes: {
          a: ["href"]
        }
      });

    return webmentions
      .filter(entry => entry["wm-target"] === url)
      .filter(entry => allowedTypes.includes(entry["wm-property"]))
      .filter(entry => !!entry.content)
      .map(entry => {
        const { html, text } = entry.content;
        entry.content.value = html ? clean(html) : clean(text);
        return entry;
      });
  });

  // https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-date-string
  eleventyConfig.addFilter("htmlDateString", dateObj => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  // Get the first `n` elements of a collection.
  eleventyConfig.addFilter("head", (array, n) => {
    if (n < 0) {
      return array.slice(n);
    }

    return array.slice(0, n);
  });

  eleventyConfig.addCollection("tagList", require("./helpers/getTagList"));

  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy({
    "src/article/**/*.png": "images/articles/"
  });

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

    // If your site lives in a different subdirectory, change this.
    // Leading or trailing slashes are all normalized away, so don’t worry about it.
    // If you don’t have a subdirectory, use "" or "/" (they do the same thing)
    // This is only used for URLs (it does not affect your file structure)
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
