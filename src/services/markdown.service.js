const converter = new showdown.Converter({ tables: true, metadata: true });

const rewriteMarkdownImagePaths = (fileLocation, htmlText) => {
  const imagePath = fileLocation.substr(0, fileLocation.lastIndexOf('/'));

  let regEx = /(img.*?)src="(.*?)"(\s)/gi;

  return htmlText.replace(regEx, `$1 src="courses/${imagePath}/$2" $3`);
};

export const convertMarkdownToHtml = (markdown, path, languages) => {
  let htmlText = converter.makeHtml(markdown);
  htmlText = rewriteMarkdownImagePaths(path, htmlText);
  const parser = new DOMParser();

  const element = parser.parseFromString(htmlText, 'text/html').documentElement;

  highlightCode(element, languages);

  return element;
};

export const highlightCode = async (element, languages = []) => {
  Promise.all([
    import('prismjs'),
    ...languages.map((language) => import(`/node_modules/prismjs/components/prism-${language}.js`))
  ]).then((_) => Prism.highlightAllUnder(element));
};
