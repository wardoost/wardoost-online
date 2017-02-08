/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import App from '../components/App'
import {scrollTop} from './scroll'

it('scrolls without crashing', () => {
  const div = document.createElement('div')
  render(<App />, div)

  scrollTop()
})
