import React, {PureComponent} from 'react'
import About from './Home/About'
import Work from './Home/Work'
import Contact from './Home/Contact'

export default class Home extends PureComponent {
  render () {
    return (
      <div>
        <About />
        <Work />
        <Contact />
      </div>
    )
  }
}
