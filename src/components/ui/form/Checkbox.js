import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Checkbox.scss'

@CSSModules(styles)
export default class Checkbox extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired,
    align: React.PropTypes.bool
  }

  render () {
    const {children, align, ...props} = this.props

    return (
      <label htmlFor={this.props.id} styleName={align ? 'checkbox-align' : 'checkbox'}>
        <input
          type='checkbox'
          ref='input'
          {...props} />
        {children}
      </label>
    )
  }
}
