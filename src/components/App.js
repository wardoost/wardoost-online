import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import routes from '../core/routes'
import './App.scss'

export default class App extends Component {
  render () {
    return (
      <Router history={browserHistory} routes={routes} />
    )
  }
}
