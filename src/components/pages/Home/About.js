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
    if (e.target.blur) e.target.blur()
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
              <p>Hi, I'm Ward Oosterlijnck and I’m a digital creative…</p>
              <p>In training at least. I&nbsp;say this because learning is one of the core characteristics of my profession. That became even more apparent when I moved from Ghent to Melbourne at the end of 2016. New country, new keyboard layout, new ideas, new emojis <span className='emoji' title='New emojis is a lie 😬'>😉</span>…</p>
              <p>When you scroll down you'll discover my <span className='emoji' title='love'>❤️</span> for code, color, motion and everything interactive. Those are the skills I like to upgrade every single day and night.</p>
              <p>Enjoy my online ego boost!</p>
            </div>
          </div>
        </div>
        <div styleName='icon-down' className='section-animated'>
          <Link to='/#work' title='Enough bull💩, show me some real content' onClick={this.removeFocus}>
            <FaAngleDown />
          </Link>
        </div>
      </div>
    )
  }
}
