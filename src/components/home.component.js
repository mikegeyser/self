/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

import { profilePicture } from './svg-pictures.js';

const styles = css`
  .container {
    margin-top: 1em;
  }

  .profile-picture {
    height: 20em;
    width: 20em;
    overflow: hidden;
    border-radius: 20em;
    position: relative;
    float: left;
  }

  .profile-picture svg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: opacity 500ms linear;
  }

  .profile-picture img {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    transition: opacity 500ms linear;
  }

  h1 {
    font-size: 4em;
    margin: 1em 0 0.5em 0;
    font-family: var(--app-heading-font);
  }

  div.paragraph {
    float: left;
    width: 35em;
    margin-left: 2em;
    padding: 0;
    text-align: justify;
    line-height: 1.8em;
  }
`;

class Home extends PageViewElement {
  static get styles() {
    return [SharedStyles, styles];
  }

  render() {
    return html`
      <section>
        <div class="container">
          <div class="profile-picture">
            ${profilePicture}
          </div>

          <div class="paragraph">
            <h1>
              Hi, I'm Mike!
            </h1>
            <p>
              I’m a Google Developer Expert in Web Technologies from Johannesburg, South Africa,
              where I work in the R&D team at a company called BBD. I am a co-organiser of the
              Jozi.JS meetup group, and a frequent technical speaker. I have been hacking on the web
              since Geocities was a 'thing', and have the keening wail of dialup modem etched into
              my subconscious.
            </p>
            <p>
              While I am fluent in several ‘golden hammer’ programming languages, I have a
              long-lived love affair with JavaScript, and cannot see its (many, obvious) flaws. I
              have worked on lots of interesting enterprise applications, but it is the challenges
              of the public web that really appeal to me - having spent my formative years building
              transactional websites.
            </p>
            <p>
              I am always eager to talk about the web platform, but be warned, I am prone to
              hyperbole.
            </p>

            <a href="https://twitter.com/mikegeyser/">@mikegeyser</a>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('m-home', Home);
