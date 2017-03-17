/* @flow */
import React from 'react'
import styles from './ControlGroup.scss'

export default function ControlGroup (props: {align?: boolean}) {
  const {align, ...rest} = props

  return (
    <div className={align ? styles.controlGroupAligned : styles.controlGroup} {...rest} />
  )
}

ControlGroup.defaultProps = {
  align: false
}
