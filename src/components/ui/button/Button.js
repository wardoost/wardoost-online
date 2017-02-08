import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    kind: React.PropTypes.oneOf(['primary', 'secondary', 'success', 'warning', 'error']),
    size: React.PropTypes.oneOf(['sm', 'lg', 'xl']),
    active: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    LoadIcon: React.PropTypes.func,
    loadReplace: React.PropTypes.bool
  }

  static defaultProps = {
    active: false,
    LoadIcon: FaCircleONotch,
    loadReplace: false
  }

  render () {
    const {children, kind, size, active, loading, LoadIcon, loadReplace, ...props} = this.props

    return (
      <button styleName={`${!kind ? 'button' : `button-${kind}`} ${active ? 'button-active' : ''} ${size ? `button-${size}` : ''} ${loading === undefined ? '' : loading ? 'button-loading-active' : 'button-loading'} ${loadReplace ? 'button-loading-replace' : ''}`} {...props}>
        {loading === undefined
        ? children
        : <span styleName='label'>{children}</span>}
        {loading !== undefined ? <span styleName={'icon'}><LoadIcon styleName='icon-spin' /></span> : null}
      </button>
    )
  }
}
