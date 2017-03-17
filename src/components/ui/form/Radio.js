/* @flow */
import React, {PureComponent} from 'react'
import styles from './Radio.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  value?: string,
  checked?: boolean,
  name: string,
  align?: boolean
}

export default class Radio extends PureComponent {
  props: Props

  defaultProps = {
    align: false
  }

  render () {
    const {children, value, align, ...rest} = this.props

    return (
      <label htmlFor={this.props.id} className={align ? styles.radioAlign : styles.radio}>
        <input
          type='radio'
          ref='input'
          value={value !== undefined ? value : this.props.id}
          {...rest} />
        {children}
      </label>
    )
  }
}
