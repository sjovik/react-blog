import { createStore } from 'redux';

import { spinnerReducer } from './../reducers/spinnerReducer.js';

const store = createStore(spinnerReducer);

export default store;
