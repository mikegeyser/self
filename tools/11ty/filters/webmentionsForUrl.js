const sanitizeHTML = require("sanitize-html");

const webmentionsForUrl = (webmentions, url) => {
  const allowedTypes = ["like-of", "repost-of", "mention-of", "in-reply-to"];
  const clean = content =>
    sanitizeHTML(content, {
      allowedTags: ["b", "i", "em", "strong", "a"],
      allowedAttributes: {
        a: ["href"]
      }
    });

  const allMentionsForUrl = webmentions.filter(
    entry => entry["wm-target"] === url
  );

  const relevantMentions = allMentionsForUrl
    .filter(entry => allowedTypes.includes(entry["wm-property"]))
    .map(entry => {
      if (entry.content) {
        const { html, text } = entry.content;
        entry.content.value = html ? clean(html) : clean(text);
      }
      return entry;
    });

  console.info("Webmentions: ", {
    url,
    allMentionsForUrl: allMentionsForUrl.length,
    relevantMentions: relevantMentions.length
  });

  return relevantMentions;
};

module.exports = webmentionsForUrl;
