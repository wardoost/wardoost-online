/* @flow */
import React from 'react'
import styles from './FormGroup.scss'

export default function FormGroup (props: Object) {
  return <fieldset className={styles.group} {...props} />
}
