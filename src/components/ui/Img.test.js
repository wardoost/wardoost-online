/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Img from './Button'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Img />, div)
})
