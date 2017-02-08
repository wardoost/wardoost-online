/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Checkbox from './Checkbox'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Checkbox />, div)
})
