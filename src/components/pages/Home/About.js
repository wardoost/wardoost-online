// @flow
import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import SectionAnimated from '../../common/SectionAnimated'
import styles from './About.scss'

@CSSModules(styles)
export default class About extends PureComponent {
  props: {
    id: string,
    activeSection: string
  }

  static defaultProps = {
    id: 'about'
  }

  removeFocus (e: Object) {
    if (e.target.blur) e.target.blur()
  }

  render () {
    const {activeSection, ...props} = this.props
    const active = activeSection === this.props.id || activeSection === ''

    return (
      <SectionAnimated title='About' active={active} {...props}>
        <div>
          <div styleName='intro'>
            <div styleName='intro-content'>
              <p>Hi, I'm Ward Oosterlijnck and I’m a digital creative…</p>
              <p>In training at least. I&nbsp;say this because learning is one of the core characteristics of my profession. That became even more apparent when I moved from Ghent to Melbourne at the end of 2016. New country, new keyboard layout, new ideas, new emojis <span className='emoji' title='New emojis is a lie 😬'>😉</span>…</p>
              <p>When you scroll down you'll discover my <span className='emoji' title='love'>❤️</span> for code, color, motion and everything interactive. Those are the skills I like to upgrade every single day and night.</p>
              <p>Enjoy my online ego boost!</p>
            </div>
          </div>
        </div>
        <div styleName='icon-down'>
          <Link to='/#work' title='Enough bull💩, show me some real content' onClick={this.removeFocus}>
            <FaAngleDown />
          </Link>
        </div>
      </SectionAnimated>
    )
  }
}
