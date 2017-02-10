import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './About.scss'

@CSSModules(styles)
export default class About extends PureComponent {
  render () {
    return (
      <section id='about' styleName='about'>
        <h1>About</h1>
        <p>Loving code, motion design and everything interactive.</p>
      </section>
    )
  }
}
