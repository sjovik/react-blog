/**
 * Action types
 */
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';

/**
 * Action creators
 */
export const toggleSpinner = (active) => {
  return { type: TOGGLE_SPINNER, active: active };
};

export const fetchArticles = () => {
  return { type: FETCH_ARTICLES };
};
