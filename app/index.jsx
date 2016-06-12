import React from 'react';
import { render } from 'react-dom';
import  { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/app.jsx';
import MainList from './components/mainList/mainList';
import Article from './components/article/article';

// TODO: Fix back-button not scrolling to top but keeping scrollstate from before (in main-list at least).
render((
  <Router history={hashHistory} onUpdate={() => window.scrollTo(0, 0)}>
    <Route path="/" component={App}>
      <IndexRoute component={MainList}/>
      <Route path="/article/:articleId" component={Article}/>
    </Route>
  </Router>
), document.getElementById('app'));
