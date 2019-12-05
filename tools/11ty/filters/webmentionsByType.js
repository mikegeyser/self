const webmentionsByType = (mentions, ...mentionTypes) => {
  return mentions.filter(entry =>
    mentionTypes.some(mentionType => !!entry[mentionType])
  );
};

module.exports = webmentionsByType ;
