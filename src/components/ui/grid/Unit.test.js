/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Unit from './Unit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Unit />, div)
})
