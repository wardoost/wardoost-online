import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
    loading: React.PropTypes.bool,
    LoadIcon: React.PropTypes.func,
    loadReplace: React.PropTypes.bool
  }

  static defaultProps = {
    LoadIcon: FaCircleONotch,
    loadReplace: false
  }

  render () {
    const {children, type, loading, LoadIcon, loadReplace, ...props} = this.props

    return (
      <button styleName={`${!type ? 'button' : `button-${type}`} ${loading === undefined ? '' : loading ? 'button-loading-active' : 'button-loading'} ${loadReplace ? 'button-loading-replace' : ''}`} {...props}>
        {loading === undefined
        ? children
        : <span styleName='label'>{children}</span>}
        {loading !== undefined ? <span styleName={'icon'}><LoadIcon styleName='icon-spin' /></span> : null}
      </button>
    )
  }
}
