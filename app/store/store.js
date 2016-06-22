import { createStore, combineReducers } from 'redux';

import { spinner } from '../reducers/spinnerReducer.js';
import { articles } from '../reducers/articlesReducer.js';

const store = createStore(combineReducers({spinner, articles}));

export default store;
