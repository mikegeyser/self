import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { connect } from 'pwa-helpers/connect-mixin.js';

import { store } from '../store.js';

import { SharedStyles } from './shared-styles.js';

const styles = css`
  iframe {
    float: left;
    margin: 0 1em 0.5em 1em;
  }
  p {
    text-align: justify;
  }
`;

class Videos extends connect(store)(PageViewElement) {
  static get properties() {
    return {
      videos: Array
    };
  }

  static get styles() {
    return [SharedStyles, styles];
  }

  render() {
    const { videos } = this;

    return html`
      ${videos.map(
        (video) => html`
          <section>
            <article>
              <iframe
                width="400"
                height="250"
                src="https://www.youtube.com/embed/${video.id}"
                loading="lazy"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <h3>${video.title}</h3>
              <div>${video.date}</div>
              <p>${video.description}</p>
            </article>
          </section>
        `
      )}
    `;
  }

  _checkoutButtonClicked() {
    store.dispatch(checkout());
  }

  stateChanged(state) {
    this.videos = state.content.videos;
  }
}

window.customElements.define('m-videos', Videos);
