/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Image from './Image'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Image />, div)
})
