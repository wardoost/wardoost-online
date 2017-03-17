/* @flow */
import React from 'react'
import classNames from 'classnames'
import FaBug from 'react-icons/lib/fa/bug'
import styles from './Footer.scss'

export default function Footer (props: {className?: string}) {
  const {className, ...rest} = props
  return (
    <footer className={classNames(styles.footer, className)} {...rest}>
      <div className={styles.container}>
        <a
          title='Report a bug'
          href='https://github.com/wardoost/wardoost-online/issues'
          target='_blank'
          className={styles.bug}>
          <i><FaBug /></i>
        </a>
      </div>
    </footer>
  )
}
