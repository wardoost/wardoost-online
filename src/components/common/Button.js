import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.css'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    loading: React.PropTypes.bool,
    LoadIcon: React.PropTypes.func
  }

  static defaultProps = {
    LoadIcon: FaCircleONotch
  }

  render () {
    const {children, loading, LoadIcon} = this.props

    let props = {...this.props}
    delete props.children
    delete props.loading
    delete props.LoadIcon

    return (
      <button styleName={classNames('button', {'loading-button': loading !== undefined, 'loading-active': loading})} {...props}>
        <span styleName={loading !== undefined ? 'label' : ''}>{children}</span>
        {loading !== undefined ? <span styleName='icon'><LoadIcon styleName='icon-spin' /></span> : null}
      </button>
    )
  }
}
