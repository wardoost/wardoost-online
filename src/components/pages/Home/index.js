/* @flow */
import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import About from './About'
import Work from './Work'
import Social from './Social'
import Contact from './Contact'
import styles from './index.scss'

@CSSModules(styles)
export default class Home extends PureComponent {
  props: {
    activeSection: string,
    atPageEnd: boolean
  }

  render () {
    return (
      <main>
        <About
          activeSection={this.props.activeSection}
          styleName='about' />
        <Work
          activeSection={this.props.activeSection}
          styleName='work' />
        <Social
          activeSection={this.props.activeSection}
          styleName='social' />
        <Contact
          activeSection={this.props.activeSection}
          styleName='contact'
          atPageEnd={this.props.atPageEnd} />
      </main>
    )
  }
}
