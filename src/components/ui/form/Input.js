/* @flow */
import React, {PureComponent} from 'react'
import classNames from 'classnames'
import styles from './Input.scss'

type Props = {
  id?: string,
  value?: string,
  name?: string,
  size?: '1' | '1-1' | '1-2' | '1-3' | '2-3' | '1-4' | '3-4',
  placeholder?: string,
  rounded?: boolean
}

export default class Input extends PureComponent {
  props: Props

  render () {
    const {name, size, rounded, ...props} = this.props

    return (
      <input
        className={classNames(
          size ? styles[`input-${size}`] : styles.input,
          rounded ? styles.rounded : null
        )}
        ref='input'
        name={name || this.props.id || 'input'}
        {...props} />
    )
  }
}
