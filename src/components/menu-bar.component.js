import { html, LitElement, css } from 'lit-element';
import { SharedStyles } from './shared-styles.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { menuIcon } from './my-icons.js';
import { updateDrawerState } from '../actions/app';

let styles = css`
  app-header {
    width: 100%;
    text-align: center;
    background-color: var(--app-header-background-color);
    color: var(--app-header-text-color);
    border-bottom: 1px solid #eee;
    padding: 0.5em 0;
  }

  [main-title] {
    margin: auto;
    display: flex;
    pointer-events: auto;
    line-height: 2.65em;
  }

  h2 {
    font-family: var(--app-heading-font);
    flex: 1 1 auto;
    text-align: center;
    margin: 0;
    padding: 0.1em;
  }

  app-toolbar {
    line-height: 2.65em;
    margin: auto;
    flex: 0 1 auto;
    display: inline-flex;
    flex-direction: row;
    flex-basis: auto;
  }

  nav.toolbar-list {
    margin-right: 1em;
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5em;
  }

  .toolbar-top {
    background-color: var(--app-header-background-color);
  }

  a {
    text-decoration: none;
  }

  a:visited {
    color: inherit;
    text-decoration: none;
  }

  nav.toolbar-list {
    display: none;
  }

  .toolbar-list > a {
    display: inline-block;
    color: var(--app-header-text-color);
    text-decoration: none;
    line-height: 30px;
    padding: 4px 24px;
  }

  .toolbar-list > a[selected] {
    color: var(--app-header-selected-color);
    font-weight: bold;
  }

  .menu-btn {
    background: none;
    border: none;
    fill: var(--app-header-text-color);
    cursor: pointer;
    height: 44px;
    width: 44px;
  }

  .drawer-list {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 24px;
    background: var(--app-drawer-background-color);
    position: relative;
  }

  .drawer-list > a {
    display: block;
    text-decoration: none;
    color: var(--app-drawer-text-color);
    line-height: 40px;
    padding: 0 24px;
  }

  .drawer-list > a[selected] {
    color: var(--app-drawer-selected-color);
  }

  app-toolbar nav.toolbar-list {
    display: none;
  }

  @media (min-width: 460px) {
    [main-title] {
      padding-right: 0px;
      max-width: var(--app-max-width);
    }

    h2 {
      text-align: left;
    }

    nav.toolbar-list {
      display: flex;
    }

    .menu-btn {
      display: none;
    }
  }
`;

class MenuBar extends connect(store)(LitElement) {
  static get styles() {
    return [SharedStyles, styles];
  }

  menuButtonClicked() {
    store.dispatch(updateDrawerState(true));
  }

  drawerOpenedChanged(e) {
    store.dispatch(updateDrawerState(e.target.opened));
  }

  render() {
    return html`
      <app-header condenses reveals effects="waterfall">
        <div main-title>
          <h2>
            <a href="/">
              // mikerambl.es
            </a>
          </h2>
          <nav class="toolbar-list">
            <a ?selected="${this.selected === 'home'}" href="/">Home</a>
            <a ?selected="${this.selected === 'articles' || this._page === 'article'}" href="/articles">Articles</a>
            <a ?selected="${this.selected === 'view3'}" href="/view3">Talks</a>
          </nav>
          <button class="menu-btn" title="Menu" @click="${this.menuButtonClicked}">${menuIcon}</button>
        </div>
      </app-header>

      <app-drawer .opened="${this.drawerOpened}" @opened-changed="${this.drawerOpenedChanged}">
        <nav class="drawer-list">
          <a ?selected="${this.selected === 'home'}" href="/">Home</a>
          <a ?selected="${this.selected === 'articles' || this._page === 'article'}" href="/articles">Articles</a>
          <a ?selected="${this.selected === 'view3'}" href="/view3">Talks</a>
        </nav>
      </app-drawer>
    `;
  }

  static get properties() {
    return {
      selected: {
        type: String
      },
      drawerOpened: {
        type: Boolean
      }
    };
  }

  stateChanged(state) {
    this.drawerOpened = state.app.drawerOpened;

    switch (state.app.page) {
      case 'articles':
      case 'article':
        this.selected = 'articles';
        break;
      default:
        this.selected = state.app.page;
    }
  }
}

window.customElements.define('m-menu-bar', MenuBar);
