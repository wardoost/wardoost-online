import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './FormMessage.scss'

@CSSModules(styles)
export default class FormMessage extends PureComponent {
  static propTypes = {
    inline: React.PropTypes.bool
  }

  static defaultProps = {
    inline: false
  }

  render () {
    const {inline, ...props} = this.props

    return (
      <span styleName={inline ? 'form-message-inline' : 'form-message'} {...props} />
    )
  }
}
