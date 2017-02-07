import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {scrollTop} from '../utils/scroll'
import Layout from './common/Layout'
import {Home, Buttons, Forms, Error} from './pages'
import './App.scss'

export default class App extends Component {
  handleUpdate () {
    if (this.state.location.action === 'PUSH') {
      scrollTop(500)
    }
  }

  render () {
    return (
      <Router history={browserHistory} onUpdate={this.handleUpdate}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} />
          <Route path='buttons' component={Buttons} />
          <Route path='forms' component={Forms} />
          <Route path='*' component={Error} />
        </Route>
      </Router>
    )
  }
}
