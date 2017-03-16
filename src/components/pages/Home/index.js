/* @flow */
import React from 'react'
import About from './About'
import Work from './Work'
import Social from './Social'
import Contact from './Contact'
import styles from './index.scss'

export default function Home (props: {activeSection?: string, atPageEnd?: boolean}) {
  return (
    <main>
      <About
        activeSection={props.activeSection}
        className={styles.about} />
      <Work
        activeSection={props.activeSection}
        className={styles.work} />
      <Social
        activeSection={props.activeSection}
        className={styles.social} />
      <Contact
        activeSection={props.activeSection}
        className={styles.contact}
        atPageEnd={props.atPageEnd} />
    </main>
  )
}
