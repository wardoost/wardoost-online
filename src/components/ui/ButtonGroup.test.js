/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import ButtonGroup from './ButtonGroup'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ButtonGroup />, div)
})
