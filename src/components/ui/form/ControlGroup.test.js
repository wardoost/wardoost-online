/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import ControlGroup from './ControlGroup'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ControlGroup />, div)
})
