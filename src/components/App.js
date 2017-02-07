import React, {Component} from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {scrollTop} from '../utils/scroll'
import Layout from './common/Layout'
import Home from './pages/Home'
import Buttons from './pages/Buttons'
import Error from './pages/Error'
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
          <Route path='*' component={Error} />
        </Route>
      </Router>
    )
  }
}
