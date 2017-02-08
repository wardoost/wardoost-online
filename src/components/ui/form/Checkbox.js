import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Checkbox.scss'

@CSSModules(styles)
export default class Checkbox extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired
  }

  render () {
    const {children, ...props} = this.props

    return (
      <label htmlFor={this.props.id} styleName='checkbox'>
        <input type='checkbox' {...props} />
        {children}
      </label>
    )
  }
}
