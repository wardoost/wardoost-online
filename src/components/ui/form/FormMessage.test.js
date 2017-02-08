/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import FormMessage from './FormMessage'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<FormMessage />, div)
})
