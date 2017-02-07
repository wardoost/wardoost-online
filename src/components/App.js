import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import Layout from './common/Layout'
import Home from './pages/Home'
import Buttons from './pages/Buttons'
import Error from './pages/Error'
import './App.scss'

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='buttons' component={Buttons} />
          <Route path='*' component={Error} />
        </Route>
      </Router>
    )
  }
}
