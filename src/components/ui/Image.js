/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './Image.scss'

export default function Image (props: {className?: string, src: string, alt: string}) {
  const {className, ...rest} = props

  return (
    <img className={classNames(styles.img, className)} {...rest} />
  )
}
