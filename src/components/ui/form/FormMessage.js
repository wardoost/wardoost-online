/* @flow */
import React from 'react'
import styles from './FormMessage.scss'

type Props = {
  inline?: boolean
}

FormMessage.defaultProps = {
  inline: false
}

export default function FormMessage (props: Props) {
  const {inline, ...rest} = props

  return (
    <span
      className={inline ? styles.formMessageInline : styles.formMessage}
      {...rest} />
  )
}
