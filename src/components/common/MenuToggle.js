/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './MenuToggle.scss'

export default function MenuToggle (props: {className?: string, active: boolean}) {
  const {className, active, ...rest} = props
  const pathLengths = [2158.35791015625, 700, 1928.2093505859375]
  const burgerLength = pathLengths[1]
  const crossLength = 707.107
  const pathStyles = active ? [
    {
      strokeDasharray: `${crossLength} ${pathLengths[0] - crossLength}`,
      strokeDashoffset: -(pathLengths[0] - crossLength)
    },
    {
      strokeDasharray: `0 ${pathLengths[1] / 2}`,
      strokeDashoffset: -(pathLengths[1]) / 2
    },
    {
      strokeDasharray: `${crossLength} ${pathLengths[2] - crossLength}`,
      strokeDashoffset: -(pathLengths[2] - crossLength)
    }
  ] : [
    {
      strokeDasharray: `${burgerLength} ${pathLengths[0] - burgerLength}`,
      strokeDashoffset: 0
    },
    {
      strokeDasharray: `${burgerLength} 0`,
      strokeDashoffset: 0
    },
    {
      strokeDasharray: `${burgerLength} ${pathLengths[2] - burgerLength}`,
      strokeDashoffset: 0
    }
  ]

  return (
    <div className={classNames(className, styles.toggle)} {...rest}>
      <svg
        version='1.1'
        preserveAspectRatio='xMidYMid meet'
        fill='none'
        stroke='currentColor'
        strokeWidth='100'
        x='0px'
        y='0px'
        viewBox='0 0 1000 1000'>
        <path
          className={styles.path1}
          style={pathStyles[0]}
          d='M150,250h700c51,0,75,21,75,70v380c0,117-101.5,123.5-175,50L250,250' />
        <path
          className={styles.path2}
          style={pathStyles[1]}
          d='M150,750h700' />
        <path
          className={styles.path3}
          style={pathStyles[2]}
          d='M850,500H150c-50,0-75,24-75,70v145.3C75,837,166,834,250,750l500-500' />
      </svg>
    </div>
  )
}
