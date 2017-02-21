import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import styles from './About.scss'

@CSSModules(styles)
export default class About extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>About</h1>
        </div>
        <div className='section-animated'>
          <div styleName='intro'>
            <div styleName='intro-content'>
              <p>I’m a digital creative… in training at least. I&nbsp;say this because learning is one of the core characteristics of my profession. That became even more apparent when I moved to Melbourne at the end of 2016.</p>
              <p>When you scroll down you'll discover my love for code, color, motion and everything interactive. Those are the things I like to learn the most about.</p>
              <p>Enjoy my online ego boost!</p>
            </div>
          </div>
        </div>
        <div styleName='icon-down' className='section-animated'>
          <Link to='/#work'>
            <FaAngleDown />
          </Link>
        </div>
      </div>
    )
  }
}
