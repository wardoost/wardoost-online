import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import routes from '../core/routes'
import {scrollTop} from '../core/scroll'
import './App.scss'

export default class App extends Component {
  handleUpdate () {
    if (this.state.location.action === 'PUSH') {
      scrollTop(500)
    }
  }

  render () {
    return (
      <Router history={browserHistory} onUpdate={this.handleUpdate} routes={routes} />
    )
  }
}
