import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import {AppContainer} from 'react-hot-loader'

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

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => { render(App) })
}
