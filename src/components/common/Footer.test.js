/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Footer from './Footer'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Footer />, div)
})