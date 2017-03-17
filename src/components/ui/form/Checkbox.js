/* @flow */
import React, {PureComponent} from 'react'
import styles from './Checkbox.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  name?: string,
  align?: boolean
}

export default class Checkbox extends PureComponent {
  props: Props

  render () {
    const {name, children, align, ...rest} = this.props

    return (
      <label
        htmlFor={this.props.id}
        className={align ? styles.checkboxAlign : styles.checkbox}>
        <input
          type='checkbox'
          ref='input'
          name={name || this.props.id}
          {...rest} />
        {children}
      </label>
    )
  }
}
