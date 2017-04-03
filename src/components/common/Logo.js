/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './Logo.scss'

const Logo = (props: {className?: string, active: boolean}) => {
  const {className, active, ...rest} = props

  return (
    <div className={classNames(styles.logo, className)} {...rest}>
      <svg
        version='1.1'
        preserveAspectRatio='xMidYMid meet'
        fill='none'
        stroke='currentColor'
        strokeWidth='20'
        strokeLinecap='square'
        x='0px'
        y='0px'
        viewBox='0 0 1000 500'>
        <g className={active ? styles.logoPathsActive : styles.logoPaths}>
          <path
            className={styles.path1}
            d='M58.4,338.7c97.7,97.3,255.7,97.2,353.2-0.3l176.8-176.7c97.5-97.5,255.5-97.6,353.2-0.3'
          />
          <path
            className={styles.path2}
            d='M235.4,161.7l176,177c97.7,97.3,255.7,97.2,353.2-0.3l177-177'
          />
          <path
            className={styles.path3}
            d='M58.4,338.7l177-177c97.5-97.5,255.5-97.6,353.2-0.3l176.2,176.8'
          />
        </g>
        <path
          className={active ? styles.path4Active : styles.path4}
          d='M235.4,161.7l176,177l177.2-177.3l176.2,176.8l176.8-176.8'
        />
      </svg>
    </div>
  )
}

export default Logo
