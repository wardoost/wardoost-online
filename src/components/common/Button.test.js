/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Button from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Button />, div)
})
