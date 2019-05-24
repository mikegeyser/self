import { html } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { SharedStyles } from './shared-styles.js';

class Articles extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      articles: { type: Array }
    };
  }

  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      ${this.articles.map(
        (article) => html`
          <section>
            <h4><a href="/article/${article.key}">${article.title}</a></h4>
            <div>${article.date}</div>
            <p>${article.summary}</p>
          </section>
        `
      )}
    `;
  }

  stateChanged(state) {
    this.articles = state.content.articles;
  }
}

window.customElements.define('m-articles', Articles);
