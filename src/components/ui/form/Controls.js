/* @flow */
import React from 'react'
import styles from './Controls.scss'

export default function Controls (props: {align?: boolean}) {
  const {align, ...rest} = props

  return (
    <div className={align ? styles.controlsAligned : styles.Controls} {...rest} />
  )
}
