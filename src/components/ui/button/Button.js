/* @flow */
import React from 'react'
import classNames from 'classnames'
import styles from './Button.scss'

type Props = {
  className?: string,
  kind?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  size?: 'sm' | 'lg' | 'xl',
  active?: boolean,
  grouped?: boolean
}

Button.defaultProps = {
  active: false,
  grouped: false
}

export default function Button (props: Props) {
  const {className, kind, size, active, grouped, ...rest} = props

  return (
    <button
      className={classNames(
        styles[kind || 'btn'],
        styles[size],
        active ? styles.active : null,
        grouped ? styles.grouped : null,
        className
      )}
      {...rest} />
  )
}
