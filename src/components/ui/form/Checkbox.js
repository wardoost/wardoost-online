/* @flow */
import React, {PureComponent} from 'react'
import styles from './Checkbox.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  value?: string,
  checked?: boolean,
  name?: string,
  align?: boolean
}

export default class Checkbox extends PureComponent {
  props: Props

  render () {
    const {value, name, children, align, ...rest} = this.props

    return (
      <label
        htmlFor={this.props.id}
        className={align ? styles.checkboxAlign : styles.checkbox}>
        <input
          type='checkbox'
          ref='input'
          name={name || this.props.id}
          value={value !== undefined ? value : this.props.id}
          {...rest} />
        {children}
      </label>
    )
  }
}
