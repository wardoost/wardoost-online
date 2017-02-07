/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Error from './Error'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Error />, div)
})
