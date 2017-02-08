import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

if (process.env.NODE_ENV !== 'development') {
  // Disable React devtools
  if (
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length
  ) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers = {}
  }

  // Enable service worker
  require('./pwa')
}

render(
  <App />,
  document.getElementById('root')
)
