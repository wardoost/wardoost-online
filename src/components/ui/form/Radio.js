/* @flow */
import React, {PureComponent} from 'react'
import styles from './Radio.scss'

type Props = {
  children?: React.Element<*>,
  id: string,
  name: string,
  align?: boolean
}

export default class Radio extends PureComponent {
  props: Props

  defaultProps = {
    align: false
  }

  render () {
    const {children, align, ...rest} = this.props

    return (
      <label htmlFor={this.props.id} className={align ? styles.radioAlign : styles.radio}>
        <input
          type='radio'
          value={this.props.id}
          ref='input'
          {...rest} />
        {children}
      </label>
    )
  }
}
