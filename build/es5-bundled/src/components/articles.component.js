define(["./my-app.js"],function(_myApp){"use strict";function _templateObject2_3d003710812811e9a50841ecc49d71d0(){var data=babelHelpers.taggedTemplateLiteral(["\n          <section>\n            <article>\n              <h3><a href=\"/article/","\">","</a></h3>\n              <div>","</div>\n              <p>","</p>\n            </article>\n          </section>\n        "]);_templateObject2_3d003710812811e9a50841ecc49d71d0=function _templateObject2_3d003710812811e9a50841ecc49d71d0(){return data};return data}function _templateObject_3d003710812811e9a50841ecc49d71d0(){var data=babelHelpers.taggedTemplateLiteral(["\n      ","\n    "]);_templateObject_3d003710812811e9a50841ecc49d71d0=function _templateObject_3d003710812811e9a50841ecc49d71d0(){return data};return data}var Articles=/*#__PURE__*/function(_connect){babelHelpers.inherits(Articles,_connect);function Articles(){babelHelpers.classCallCheck(this,Articles);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Articles).apply(this,arguments))}babelHelpers.createClass(Articles,[{key:"render",value:function render(){return(0,_myApp.html)(_templateObject_3d003710812811e9a50841ecc49d71d0(),this.articles.map(function(article){return(0,_myApp.html)(_templateObject2_3d003710812811e9a50841ecc49d71d0(),article.key,article.title,article.date,article.summary)}))}},{key:"stateChanged",value:function stateChanged(state){this.articles=state.content.articles}}],[{key:"properties",get:function get(){return{articles:{type:Array}}}},{key:"styles",get:function get(){return[_myApp.SharedStyles]}}]);return Articles}((0,_myApp.connect)(_myApp.store)(_myApp.PageViewElement));window.customElements.define("m-articles",Articles)});