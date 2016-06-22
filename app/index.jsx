import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import store from './store/store';

import App from './components/app.jsx';
import MainList from './components/mainList/mainList';
import Article from './components/article/article';

// TODO: Fix back-button not scrolling to top but keeping scrollstate from before (in main-list at least).
render((
  <Provider store={store}>
    <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
      <Route path="/" component={App}>
        <IndexRoute component={MainList}/>
        <Route path="/article/:articleId" component={Article}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));
