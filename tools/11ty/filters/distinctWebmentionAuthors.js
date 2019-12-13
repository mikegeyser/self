const distinctWebmentionAuthors = webmentions => {
  const authors = webmentions.map(webmention => ({
    name: webmention.author.name,
    photo: webmention.author.photo
  }));

  console.log({ authors });

  const distinctAuthors = authors.reduce((agg, author) => {
    agg[author.name] = author;
    return agg;
  }, {});

  console.log({ distinctAuthors });

  const asArray = Object.values(distinctAuthors);
  console.log({ asArray });

  return asArray;
};

module.exports = distinctWebmentionAuthors;
