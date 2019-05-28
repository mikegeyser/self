define(["./my-app.js"],function(_myApp){"use strict";class Articles extends(0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement){static get properties(){return{articles:{type:Array}}}static get styles(){return[_myApp.SharedStyles]}render(){return _myApp.html`
      ${this.articles.map(article=>_myApp.html`
          <section>
            <article>
              <h3><a href="/article/${article.key}">${article.title}</a></h3>
              <div>${article.date}</div>
              <p>${article.summary}</p>
            </article>
          </section>
        `)}
    `}stateChanged(state){this.articles=state.content.articles}}window.customElements.define("m-articles",Articles)});