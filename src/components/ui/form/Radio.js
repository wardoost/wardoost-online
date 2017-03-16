/* @flow */
import React from 'react'
import styles from './Radio.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  name: string,
  align?: boolean
}

Radio.defaultProps = {
  align: false
}

export default function Radio (props: Props) {
  const {children, align, ...rest} = props

  return (
    <label htmlFor={props.id} className={align ? styles.radioAlign : styles.radio}>
      <input
        type='radio'
        ref='input'
        {...rest} />
      {children}
    </label>
  )
}
