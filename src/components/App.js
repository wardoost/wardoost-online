import React, {Component} from 'react'
import {Router, browserHistory} from 'react-router'
import ReactGA from 'react-ga'
import routes from '../core/routes'
import './App.scss'

export default class App extends Component {
  componentWillMount () {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.initialize(process.env.GOOGLE_ANALYTICS_TRACKING_ID)
    }
  }

  logPageView () {
    if (process.env.NODE_ENV === 'production') {
      ReactGA.set({page: window.location.pathname + window.location.hash})
      ReactGA.pageview(window.location.pathname + window.location.hash)
    }
  }

  render () {
    return (
      <Router history={browserHistory} routes={routes} onUpdate={this.logPageView} />
    )
  }
}
