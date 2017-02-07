/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Forms from './Forms'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Forms />, div)
})
