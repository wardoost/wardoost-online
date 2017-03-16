/* @flow */
import React from 'react'
import {Link} from 'react-router'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import SectionAnimated from '../../common/SectionAnimated'
import styles from './About.scss'

export default function About (props: {activeSection?: string}) {
  const id = 'about'
  const {activeSection, ...rest} = props
  const active = activeSection === id || activeSection === ''

  const removeFocus = (e: Object) => {
    if (e.target.blur) e.target.blur()
  }

  return (
    <SectionAnimated id={id} title='About' active={active} {...rest}>
      <div>
        <div className={styles.intro}>
          <div className={styles.content}>
            <p>Hi, I'm Ward Oosterlijnck and I’m a digital creative…</p>
            <p>In training at least. I&nbsp;say this because learning is one of the core characteristics of my profession. That became even more apparent when I moved from Ghent to Melbourne at the end of 2016. New country, new keyboard layout, new ideas, new emojis <span className='emoji' title='New emojis is a lie 😬'>😉</span>…</p>
            <p>When you scroll down you'll discover my <span className='emoji' title='love'>❤️</span> for code, color, motion and everything interactive. Those are the skills I like to upgrade every single day and night.</p>
            <p>Enjoy my online ego boost!</p>
          </div>
        </div>
      </div>
      <div className={styles.next}>
        <Link to='/#work' title='Enough bull💩, show me some real content' onClick={removeFocus}>
          <FaAngleDown />
        </Link>
      </div>
    </SectionAnimated>
  )
}
