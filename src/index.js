import React from 'react'
import {render} from 'react-dom'
import App from './components/App'
import './styles.css'

if (process.env.NODE_ENV === 'production') {
  require('./pwa')
}

render(
  <App />,
  document.getElementById('app')
)
