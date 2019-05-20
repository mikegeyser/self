/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';


class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}

      <style>
        :host {
          display: block;
          /* max-width: 1000px; */
          /* margin: 10em auto; */
        }

        :host h1 {
          font-size: 44pt;
          float: left;
          margin: 0 0.5em;
        }

        :host div.paragraph {
          display: block;
          float: left;
          width: 30em;
          text-align: left;
          font-size: 15pt;
          line-height: 1.5em;
          margin: 0 2em;
        }

        :host a {
          margin-top: 1.5em;
          float: left;
        }
      </style>

      <section>
          
          <h1>
            Hi, I'm Mike!
          </h1>
          <div class="paragraph">
            I’m a Tech Lead at BBD in the R&D team, specialising on designing and building for the web. I’ve been hacking on
            the web since Geocities was a thing, have a long-lived love affair with JavaScript, and have (almost) come to terms with
            the fact that I will never have a programmer beard. I have been working as a professional software developer for over
            12 years. While I have worked on some interesting large-scale enterprise applications, it is the challenges of the
            public web that really appeal to me - having earned my stripes on high volume transactional websites. I work primarily
            in JavaScript, C# and Java, and have shipped production applications in a variety of frameworks.
            <br />
            <a href="https://twitter.com/mikegeyser/">@mikegeyser</a>
          </div>
      
      </section>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
