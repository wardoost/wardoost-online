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

  removeFocus (e) {
    e.target.blur()
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>About</h1>
        </div>
        <div className='section-animated-bg'>
          <div styleName='intro'>
            <div styleName='intro-content'>
              <p>Hi, I'm Ward Oosterlijnck and I’m a digital creative… in training at least.</p>
              <p>I&nbsp;say this because learning is one of the core characteristics of my profession. That became even more apparent when I moved to Melbourne at the end of 2016.</p>
              <p>When you scroll down you'll discover my love for code, color, motion and everything interactive. Those are the things I like to learn the most about.</p>
              <p>Enjoy my online ego boost!</p>
            </div>
          </div>
        </div>
        <div styleName='icon-down' className='section-animated'>
          <Link to='/#work' onClick={this.removeFocus}>
            <FaAngleDown />
          </Link>
        </div>
      </div>
    )
  }
}
