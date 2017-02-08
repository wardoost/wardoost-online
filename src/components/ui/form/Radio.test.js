/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Radio from './Radio'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Radio id='id' name='name' />, div)
})
