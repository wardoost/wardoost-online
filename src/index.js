import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './components/App'
import Home from './components/pages/Home'
import Buttons from './components/pages/Buttons'
import Error from './components/pages/Error'
import 'purecss/build/base.css'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

render(
  <Router history={browserHistory} styleName='app'>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='buttons' component={Buttons} />
      <Route path='*' component={Error} />
    </Route>
  </Router>,
  document.getElementById('root')
)
