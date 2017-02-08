import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Form.scss'

@CSSModules(styles)
export default class Form extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string
  }

  render () {
    const {children, type, ...props} = this.props

    return (
      <form styleName={type ? `form-${type}` : 'form'} {...props}>
        {children}
      </form>
    )
  }
}
