/* @flow */
import React from 'react'
import styles from './Form.scss'

type Props = {
  kind?: 'inline' | 'stacked' | 'aligned'
}

export default function Form (props: Props) {
  const {kind, ...rest} = props

  return (
    <form className={kind ? styles[kind] : styles.form} {...rest} />
  )
}
