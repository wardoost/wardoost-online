import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import Button from './Button'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import styles from './ButtonLoading.scss'

@CSSModules(styles, {allowMultiple: true})
export default class ButtonLoading extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    disabled: React.PropTypes.bool,
    loading: React.PropTypes.bool.isRequired,
    loadingDisables: React.PropTypes.bool,
    LoadIcon: React.PropTypes.func,
    loadReplace: React.PropTypes.bool
  }

  static defaultProps = {
    loadingDisables: true,
    LoadIcon: FaCircleONotch,
    loadReplace: false
  }

  render () {
    const {children, disabled, loading, loadingDisables, LoadIcon, loadReplace, ...props} = this.props

    return (
      <Button
        styleName={`${loading ? 'button-loading-active' : 'button-loading'} ${loadReplace ? 'button-loading-replace' : ''}`}
        disabled={loadingDisables ? loading : disabled}
        {...props}>
        <span styleName='content'>{children}</span>
        <span styleName='icon'><LoadIcon styleName='icon-spin' /></span>
      </Button>
    )
  }
}
