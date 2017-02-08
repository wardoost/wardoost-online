import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
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
    const {children, type, active, loading, LoadIcon, loadReplace, ...props} = this.props

    return (
      <button styleName={`${!type ? 'button' : `button-${type}`} ${active ? 'button-active' : ''} ${loading === undefined ? '' : loading ? 'button-loading-active' : 'button-loading'} ${loadReplace ? 'button-loading-replace' : ''}`} {...props}>
        {loading === undefined
        ? children
        : <span styleName='label'>{children}</span>}
        {loading !== undefined ? <span styleName={'icon'}><LoadIcon styleName='icon-spin' /></span> : null}
      </button>
    )
  }
}
