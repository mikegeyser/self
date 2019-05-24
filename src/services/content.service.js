import { contentReceived } from '../actions/content-received.action';
import { store } from '../store';
import { markdownReceived } from '../actions/markdown-received.action';

export const getContent = () =>
  fetch('content/index.json')
    .then((response) => response.json())
    .then((content) => store.dispatch(contentReceived(content)));

export const getMarkdown = (path) => {
  fetch(`${path}`)
    .then((response) => response.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.readAsText(blob);
      reader.onload = (e) => store.dispatch(markdownReceived(e.target.result));
    });
};
