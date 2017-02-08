/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Page from './Page'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Page />, div)
})
