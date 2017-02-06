import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './Button.css'

@CSSModules(styles, {allowMultiple: true})
export default class Button extends Component {
  static propTypes = {
    children: React.PropTypes.node,
    loading: React.PropTypes.bool
  }

  render () {
    const {children, loading} = this.props

    let props = {...this.props}
    delete props.children
    delete props.loading

    return (
      <button styleName={classNames('button', {'loading-button': loading !== undefined, 'loading-active': loading})} {...props}>
        {loading !== undefined ? <span styleName='icon'><FaCircleONotch styleName='icon-spin' /></span> : null}
        <span styleName={loading !== undefined ? 'label' : ''}>{children}</span>
      </button>
    )
  }
}
