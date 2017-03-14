import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
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
      <button
        styleName={classNames(kind ? `button-${kind}` : 'button', {
          [`button-${size}`]: size,
          'button-active': active,
          'button-grouped': grouped
        })} {...props}>
        {children}
      </button>
    )
  }
}
