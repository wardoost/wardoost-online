/* @flow */
import React from 'react'
import styles from './Form.scss'

type Props = {
  kind?: 'inline' | 'stacked' | 'aligned'
}

Form.defaultProps = {
  kind: 'inline'
}

export default function Form (props: Props) {
  const {kind, ...rest} = props

  return (
    <form className={styles[kind]} {...rest} />
  )
}
