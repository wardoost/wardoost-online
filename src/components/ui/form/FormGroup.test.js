/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import FormGroup from './FormGroup'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<FormGroup />, div)
})
