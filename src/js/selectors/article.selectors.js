import { createSelector } from 'reselect';
import { selectKey } from './route-data.selectors';

export const selectArticles = (state) => state.content.articles;

export const selectArticle = createSelector(
  selectArticles,
  selectKey,
  (articles, key) => articles.find((article) => article.key === key)
);

export const selectMarkdown = (state) => state.content.markdown;
