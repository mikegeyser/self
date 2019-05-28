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
  time {
    font-style: italic;
    padding: 0 0 0 8px;
  }

  p,
  li,
  footer {
    font-size: 15pt;
    line-height: 19pt;
    text-align: justify;
  }

  footer {
    margin: 2em 0.5em 1em 0.5em;
    font-style: italic;
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

    if (!article) return html``;

    return html`
      <link rel="stylesheet" href="node_modules/prismjs/themes/prism-tomorrow.css" />

      <section>
        <article>
          <header>
            <h2>${article.title}</h2>
          </header>
          <time datetime="${article.date}">Originally written on ${article.date}. Revised on ${article.date}</time>

          ${content}

          <footer>
            If you have any questions or feedback, please feel free to reach out to me
            <a href="https://twitter.com/mikegeyser" target="_blank"> on twitter</a> or
            <a href="https://github.com/mikegeyser/self/issues/${article.issue}" target="_blank">
              join the discussion on github</a
            >.
          </footer>
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

    if (markdown && this.article) {
      this.content = convertMarkdownToHtml(markdown, this.article.path, this.article.languages);
    }
  }
}

window.customElements.define('m-article', Article);
