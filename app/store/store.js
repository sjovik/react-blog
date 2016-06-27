import { createStore, combineReducers } from 'redux';

import { spinner } from '../reducers/spinnerReducer.js';
import { articles } from '../reducers/articlesReducer.js';
import { menu } from '../reducers/menuReducer.js';

const store = createStore(combineReducers({spinner, articles, menu}));

export default store;
