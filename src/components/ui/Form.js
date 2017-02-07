import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Form.scss'

@CSSModules(styles)
export default class Form extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string
  }

  render () {
    const {children, type} = this.props

    let props = {...this.props}
    delete props.children
    delete props.type

    return (
      <form styleName={type ? `form-${type}` : 'form'} {...props}>
        {children}
      </form>
    )
  }
}
