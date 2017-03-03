import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Button.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    kind: PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
    active: PropTypes.bool,
    grouped: PropTypes.bool
  }

  static defaultProps = {
    active: false,
    grouped: false
  }

  render () {
    const {children, kind, size, active, grouped, ...props} = this.props

    return (
      <button styleName={`${!kind ? 'button' : `button-${kind}`} ${active ? 'button-active' : ''} ${size ? `button-${size}` : ''} ${grouped ? 'button-grouped' : ''}`} {...props}>
        {children}
      </button>
    )
  }
}
