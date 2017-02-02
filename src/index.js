import React from 'react'
import ReactDom from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/App'

const appRoot = document.getElementById('app')

if (process.env.NODE_ENV === 'development') {
  const render = (Component) => {
    ReactDom.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      appRoot
    )
  }

  render(App)

  if (module.hot) {
    module.hot.accept('./components/App', () => {
      render(App)
    })
  }
} else {
  ReactDom.render(<App />, appRoot)
}
