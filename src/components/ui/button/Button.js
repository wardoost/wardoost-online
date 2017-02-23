import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Button.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    kind: React.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
    size: React.PropTypes.oneOf(['sm', 'lg', 'xl']),
    active: React.PropTypes.bool
  }

  static defaultProps = {
    active: false
  }

  render () {
    const {children, kind, size, active, ...props} = this.props

    return (
      <button styleName={`${!kind ? 'button' : `button-${kind}`} ${active ? 'button-active' : ''} ${size ? `button-${size}` : ''}`} {...props}>
        {children}
      </button>
    )
  }
}
