/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Grid from './Grid'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Grid />, div)
})
