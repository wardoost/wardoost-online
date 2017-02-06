import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.css'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
    loading: React.PropTypes.bool,
    LoadIcon: React.PropTypes.func
  }

  static defaultProps = {
    LoadIcon: FaCircleONotch
  }

  render () {
    const {children, loading, LoadIcon, type} = this.props

    let props = {...this.props}
    delete props.children
    delete props.type
    delete props.loading
    delete props.LoadIcon

    return (
      <button styleName={`${!type ? 'button' : `button-${type}`} ${loading === undefined ? '' : loading ? 'button-loading-active' : 'button-loading'}`} {...props}>
        {loading === undefined
        ? children
        : <span styleName='label'>{children}</span>}
        {loading !== undefined ? <span styleName={'icon'}><LoadIcon styleName='icon-spin' /></span> : null}
      </button>
    )
  }
}
