import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import App from './components/App'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

render(
  <App />,
  document.getElementById('root')
)
