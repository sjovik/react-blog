import { FETCH_ARTICLES } from './../actions/actions';

// TODO: Replace with real data.
import data from '../src/data.js';

const addArticles = (currentList = []) => {
  return currentList.concat(data.articles);
}

export const articles = (state = addArticles(), action) => {
  switch (action.type) {
    case FETCH_ARTICLES:
      return addArticles(state);
    default:
      return state;
  }
};
