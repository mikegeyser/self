import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { selectArticle, selectMarkdown } from '../selectors/article.selectors';

import { SharedStyles } from './shared-styles.js';
import { getMarkdown } from '../services/content.service.js';
import { convertMarkdownToHtml } from '../services/markdown.service.js';
import { updateMetadata } from 'pwa-helpers/metadata';

const styles = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--app-heading-font);
    text-align: left;
    margin: 0;
    padding: 8px;
  }

  h2 {
    font-size: 32pt;
    margin-bottom: 0.1em;
  }

  h3 {
    font-size: 26pt;
    margin-top: 1em;
  }

  time {
    font-style: italic;
    padding: 0 0 0 8px;
  }

  p,
  li {
    font-size: 15pt;
    line-height: 19pt;
    text-align: justify;
  }
  
  img {
    max-width: 100%;
    width: inherit;
    display: block;
    margin: auto;
  }
`;

class Article extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      article: Object,
      content: String
    };
  }

  static get styles() {
    return [SharedStyles, styles];
  }

  render() {
    let { article, content } = this;

    return html`
      <link rel="stylesheet" href="node_modules/prismjs/themes/prism-tomorrow.css" />

      <section>
        <article>
          <header>
            <h2>${article.title}</h2>
          </header>
          <time datetime="${article.date}">Originally written on ${article.date}. Revised on ${article.date}</time>
          ${content}
        </article>
      </section>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('article') && this.article) {
      getMarkdown(this.article.path);

      const pageTitle = this.article.title + ' // mikerambl.es';
      updateMetadata({
        title: pageTitle,
        description: pageTitle
      });
    }
  }

  stateChanged(state) {
    this.article = selectArticle(state);
    const markdown = selectMarkdown(state);

    if (markdown) {
      this.content = convertMarkdownToHtml(markdown, this.article.path, this.article.languages);
    }
  }
}

window.customElements.define('m-article', Article);
