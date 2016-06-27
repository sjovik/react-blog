/**
 * Action types
 */
export const TOGGLE_SPINNER = 'TOGGLE_SPINNER';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const TOGGLE_MENU = 'TOGGLE_MENU';
export const TOGGLE_SUBMENU = 'TOGGLE_SUBMENU';

/**
 * Action creators
 */
export const toggleSpinner = (active) => {
  return { type: TOGGLE_SPINNER, active: active };
};

export const fetchArticles = () => {
  return { type: FETCH_ARTICLES };
};

export const toggleMenu = (isOpen) => {
  return { type: TOGGLE_MENU, isOpen: isOpen };
};

export const toggleSubMenu = (subMenu) => {
  return { type: TOGGLE_SUBMENU, subMenu: subMenu };
};
