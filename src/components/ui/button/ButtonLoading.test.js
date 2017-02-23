/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import ButtonLoading from './ButtonLoading'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<ButtonLoading />, div)
})
