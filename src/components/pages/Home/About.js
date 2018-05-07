/* @flow */
import React from 'react'
import {Link} from 'react-router'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import SectionAnimated from '../../common/SectionAnimated'
import Logo from '../../common/Logo'
import styles from './About.scss'

export default function About (props: {activeSection?: string}) {
  const id = 'about'
  const {activeSection, ...rest} = props
  const active = activeSection === id || activeSection === ''

  const removeFocus = (e: Object) => {
    if (e.target.blur) e.target.blur()
  }

  return (
    <SectionAnimated id={id} active={active} {...rest}>
      <div>
        <div className={styles.intro}>
          <div className={styles.content}>
            <Logo
              title='Ward Oosterlijnck'
              className={styles.logo}
              active={active}
            />
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
