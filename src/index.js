import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createLogger } from 'redux-logger'
import promise from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
import history from './history'
import reducers from './reducers';

import Main from './components/Main';
import Events from './components/Events';

import Media from './components/Media';
import About from './components/About';
import PostsIndex from './components/posts_index';
import Landing from './components/Landing';

const middleware = applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
const store = createStore(reducers, composeWithDevTools(middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} >
      <Main>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route path="/events" component={Events} />
          <Route path="/media" component={Media} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </Main>
    </Router>
  </Provider>
  , document.querySelector('.container'));
