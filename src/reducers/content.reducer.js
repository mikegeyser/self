import { CONTENT_RECEIVED } from '../actions/content-received.action';
import { MARKDOWN_RECEIVED } from '../actions/markdown-received.action';

const INITIAL_STATE = {
  articles: [],
  talks: [],
  markdown: ''
};

export const content = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CONTENT_RECEIVED:
      return {
        ...state,
        ...action.content
      };

    case MARKDOWN_RECEIVED:
      return {
        ...state,
        markdown: action.markdown
      };

    default:
      return state;
  }
};
