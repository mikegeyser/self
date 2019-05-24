import 'prismjs';

import 'prismjs/components/prism-csharp';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-typescript';

const converter = new showdown.Converter({ tables: true, metadata: true });

const rewriteMarkdownImagePaths = (fileLocation, htmlText) => {
  const imagePath = fileLocation.substr(0, fileLocation.lastIndexOf('/'));

  let regEx = /(img.*?)src="(.*?)"(\s)/gi;

  return htmlText.replace(regEx, `$1 src="courses/${imagePath}/$2" $3`);
};

export const convertMarkdownToHtml = (markdown, path) => {
  let htmlText = converter.makeHtml(markdown);
  htmlText = rewriteMarkdownImagePaths(path, htmlText);
  const parser = new DOMParser();

  const element = parser.parseFromString(htmlText, 'text/html').documentElement;

  Prism.highlightAllUnder(element);

  return element;
};
