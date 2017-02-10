/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Text from './Text'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Text />, div)
})
