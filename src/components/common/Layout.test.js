/* eslint-env jest */
import React from 'react'
import {render} from 'react-dom'
import Layout from './Layout'

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(<Layout />, div)
})
