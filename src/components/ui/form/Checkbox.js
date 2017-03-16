/* @flow */
import React from 'react'
import styles from './Checkbox.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  align?: boolean
}

export default function Checkbox (props: Props) {
  const {children, align, ...rest} = props

  return (
    <label htmlFor={props.id} className={align ? styles.checkboxAlign : styles.checkbox}>
      <input
        type='checkbox'
        ref='input'
        {...rest} />
      {children}
    </label>
  )
}
