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
  }

  div.paragraph {
    float: left;
    width: 30em;
    margin-left: 2em;
    padding: 0;
    text-align: justify;
    line-height: 1.8em;
  }
`;

class MyView1 extends PageViewElement {
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
              I’m a Tech Lead at BBD in the R&D team, specialising on designing and building for the
              web. I’ve been hacking on the web since Geocities was a thing, have a long-lived love
              affair with JavaScript, and have (almost) come to terms with the fact that I will
              never have a programmer beard. I have been working as a professional software
              developer for over 12 years. While I have worked on some interesting large-scale
              enterprise applications, it is the challenges of the public web that really appeal to
              me - having earned my stripes on high volume transactional websites. I work primarily
              in JavaScript, C# and Java, and have shipped production applications in a variety of
              frameworks.
            </p>

            <a href="https://twitter.com/mikegeyser/">@mikegeyser</a>
          </div>
        </div>
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
