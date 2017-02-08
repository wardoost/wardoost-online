/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Form from './Form'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Form />, div)
})
