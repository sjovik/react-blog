import React from 'react';
import { render } from 'react-dom';
import  { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/app.jsx';
import MainList from './components/mainList/mainList';
import Article from './components/article/article';

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={MainList}/>
      <Route path="/article" component={Article}/>
    </Route>
  </Router>
), document.getElementById('app'));
