/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

export const UPDATE_PAGE = 'UPDATE_PAGE';
export const UPDATE_OFFLINE = 'UPDATE_OFFLINE';
export const UPDATE_DRAWER_STATE = 'UPDATE_DRAWER_STATE';
export const OPEN_SNACKBAR = 'OPEN_SNACKBAR';
export const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR';

export const navigate = (path) => (dispatch) => {
  // Extract the page name from path.
  const page = path === '/' ? 'home' : path.slice(1);

  // Any other info you might want to extract from the path (like page type),
  // you can do here
  dispatch(loadPage(page));

  // Close the drawer - in case the *path* change came from a link in the drawer.
  dispatch(updateDrawerState(false));
};

const loadPage = (page) => (dispatch) => {
  const rootPath = /$^/;
  const homePath = /home/;
  const articlesPath = /articles/;
  const articlePath = /article\/(.[^\/]+)$/;
  const videosPath = /videos/;

  let match;
  let routeData = () => (match.length > 1 ? match.slice(1) : null);

  if ((match = page.match(homePath)) || (match = page.match(rootPath))) {
    import('../components/home.component.js');
    dispatch(updatePage('home', routeData()));
  } else if ((match = page.match(articlesPath))) {
    import('../components/articles.component.js');
    dispatch(updatePage('articles', routeData()));
  } else if ((match = page.match(articlePath))) {
    import('../components/article.component.js');
    dispatch(updatePage('article', routeData()));
  } else if ((match = page.match(videosPath))) {
    import('../components/videos.component.js');
    dispatch(updatePage('videos', routeData()));
  } else {
    page = 'view404';
    import('../components/my-view404.js');
    dispatch(updatePage(page));
  }

  if (window.ga) {
    window.ga('set', 'page', page);
  }

  // Scroll to the top of the screen.
  window.scroll({
    top: 0,
    left: 0
  });
};

const updatePage = (page, routeData) => {
  return {
    type: UPDATE_PAGE,
    page,
    routeData
  };
};

let snackbarTimer;

export const showSnackbar = () => (dispatch) => {
  dispatch({
    type: OPEN_SNACKBAR
  });
  window.clearTimeout(snackbarTimer);
  snackbarTimer = window.setTimeout(() => dispatch({ type: CLOSE_SNACKBAR }), 3000);
};

export const updateOffline = (offline) => (dispatch, getState) => {
  // Show the snackbar only if offline status changes.
  if (offline !== getState().app.offline) {
    dispatch(showSnackbar());
  }
  dispatch({
    type: UPDATE_OFFLINE,
    offline
  });
};

export const updateDrawerState = (opened) => {
  return {
    type: UPDATE_DRAWER_STATE,
    opened
  };
};
