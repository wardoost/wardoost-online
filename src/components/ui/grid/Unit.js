/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './Unit.scss'

type Props = {
  className?: string,
  size?: string,
  smSize?: string,
  mdSize?: string,
  lgSize?: string,
  xlSize?: string,
  gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  reverse?: boolean
}

Unit.defaultProps = {
  size: '1-1',
  reverse: false
}

export default function Unit (props: Props) {
  const {className, size, smSize, mdSize, lgSize, xlSize, gutter, reverse, ...rest} = props

  return (
    <div
      className={classNames(
        size ? styles[`unit-${size}`] : styles.unit,
        smSize ? styles[`sm-${smSize}`] : null,
        mdSize ? styles[`md-${mdSize}`] : null,
        lgSize ? styles[`lg-${lgSize}`] : null,
        xlSize ? styles[`xl-${xlSize}`] : null,
        gutter ? styles[`gutter-${gutter}`] : null,
        reverse ? styles.reverse : null,
        className
      )}
      {...rest} />
  )
}
