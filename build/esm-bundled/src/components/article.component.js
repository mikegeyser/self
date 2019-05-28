import{css,html,PageViewElement,connect,store,SharedStyles,getMarkdown,updateMetadata}from"./my-app.js";function defaultEqualityCheck(a,b){return a===b}function areArgumentsShallowlyEqual(equalityCheck,prev,next){if(null===prev||null===next||prev.length!==next.length){return!1}// Do this in a for loop (and not a `forEach` or an `every`) so we can determine equality as fast as possible.
for(var length=prev.length,i=0;i<length;i++){if(!equalityCheck(prev[i],next[i])){return!1}}return!0}function defaultMemoize(func){var equalityCheck=1<arguments.length&&arguments[1]!==void 0?arguments[1]:defaultEqualityCheck,lastArgs=null,lastResult=null;// we reference arguments instead of spreading them for performance reasons
return function(){if(!areArgumentsShallowlyEqual(equalityCheck,lastArgs,arguments)){// apply arguments instead of spreading for performance.
lastResult=func.apply(null,arguments)}lastArgs=arguments;return lastResult}}function getDependencies(funcs){var dependencies=Array.isArray(funcs[0])?funcs[0]:funcs;if(!dependencies.every(function(dep){return"function"===typeof dep})){var dependencyTypes=dependencies.map(function(dep){return typeof dep}).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, "+("instead received the following types: ["+dependencyTypes+"]"))}return dependencies}function createSelectorCreator(memoize){for(var _len=arguments.length,memoizeOptions=Array(1<_len?_len-1:0),_key=1;_key<_len;_key++){memoizeOptions[_key-1]=arguments[_key]}return function(){for(var _len2=arguments.length,funcs=Array(_len2),_key2=0;_key2<_len2;_key2++){funcs[_key2]=arguments[_key2]}var recomputations=0,resultFunc=funcs.pop(),dependencies=getDependencies(funcs),memoizedResultFunc=memoize.apply(void 0,[function(){recomputations++;// apply arguments instead of spreading for performance.
return resultFunc.apply(null,arguments)}].concat(memoizeOptions)),selector=memoize(function(){for(var params=[],length=dependencies.length,i=0;i<length;i++){// apply arguments instead of spreading and mutate a local list of params for performance.
params.push(dependencies[i].apply(null,arguments))}// apply arguments instead of spreading for performance.
return memoizedResultFunc.apply(null,params)});selector.resultFunc=resultFunc;selector.dependencies=dependencies;selector.recomputations=function(){return recomputations};selector.resetRecomputations=function(){return recomputations=0};return selector}}var createSelector=createSelectorCreator(defaultMemoize);function createStructuredSelector(selectors){var selectorCreator=1<arguments.length&&arguments[1]!==void 0?arguments[1]:createSelector;if("object"!==typeof selectors){throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof selectors))}var objectKeys=Object.keys(selectors);return selectorCreator(objectKeys.map(function(key){return selectors[key]}),function(){for(var _len3=arguments.length,values=Array(_len3),_key3=0;_key3<_len3;_key3++){values[_key3]=arguments[_key3]}return values.reduce(function(composition,value,index){composition[objectKeys[index]]=value;return composition},{})})}var index={defaultMemoize:defaultMemoize,createSelectorCreator:createSelectorCreator,createSelector:createSelector,createStructuredSelector:createStructuredSelector};const selectKey=state=>state.app.routeData&&state.app.routeData.length&&state.app.routeData[0];var routeData_selectors={selectKey:selectKey};const selectArticles=state=>state.content.articles,selectArticle=createSelector(selectArticles,selectKey,(articles,key)=>articles.find(article=>article.key===key)),selectMarkdown=state=>state.content.markdown;var article_selectors={selectArticles:selectArticles,selectArticle:selectArticle,selectMarkdown:selectMarkdown};const converter=new showdown.Converter({tables:!0,metadata:!0}),rewriteMarkdownImagePaths=(fileLocation,htmlText)=>{const imagePath=fileLocation.substr(0,fileLocation.lastIndexOf("/"));let regEx=/(img.*?)src="(.*?)"(\s)/gi;return htmlText.replace(regEx,`$1 src="courses/${imagePath}/$2" $3`)},convertMarkdownToHtml=(markdown,path,languages)=>{let htmlText=converter.makeHtml(markdown);// htmlText = rewriteMarkdownImagePaths(path, htmlText);
const parser=new DOMParser,element=parser.parseFromString(htmlText,"text/html").documentElement;highlightCode(element,languages);return element},highlightCode=async(element,languages=[])=>{Promise.all([import("../../node_modules/prismjs/prism.js").then(bundle=>bundle&&bundle.$prism||{}),...languages.map(language=>import(`/node_modules/prismjs/components/prism-${language}.js`))]).then(_=>Prism.highlightAllUnder(element))};var markdown_service={convertMarkdownToHtml:convertMarkdownToHtml,highlightCode:highlightCode};const styles=css`
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
`;class Article extends connect(store)(PageViewElement){static get properties(){return{article:Object,content:String}}static get styles(){return[SharedStyles,styles]}render(){let{article,content}=this;if(!article)return html``;return html`
      <link rel="stylesheet" href="/node_modules/prismjs/themes/prism-tomorrow.css" />

      <section>
        <article>
          <header>
            <h2>${article.title}</h2>
          </header>
          <time datetime="${article.date}">Originally written on ${article.date}. Revised on ${article.revised}</time>

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
    `}updated(changedProperties){if(changedProperties.has("article")&&this.article){getMarkdown(this.article.path);const pageTitle=this.article.title+" // mikerambl.es";updateMetadata({title:pageTitle,description:pageTitle})}}stateChanged(state){this.article=selectArticle(state);const markdown=selectMarkdown(state);if(markdown&&this.article){this.content=convertMarkdownToHtml(markdown,this.article.path,this.article.languages)}}}window.customElements.define("m-article",Article);export{article_selectors as $articleSelectors,index as $index,markdown_service as $markdownService,routeData_selectors as $routeDataSelectors,convertMarkdownToHtml,createSelector,createSelectorCreator,createStructuredSelector,defaultMemoize,highlightCode,selectArticle,selectArticles,selectKey,selectMarkdown};