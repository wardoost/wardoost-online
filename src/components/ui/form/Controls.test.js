/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Controls from './Controls'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Controls />, div)
})
