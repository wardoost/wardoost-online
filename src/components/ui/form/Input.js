import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Input.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Input extends PureComponent {
  static propTypes = {
    size: React.PropTypes.string,
    rounded: React.PropTypes.bool
  }

  render () {
    const {size, rounded, ...props} = this.props

    return (
      <input styleName={`${size ? `input-${size}` : ''} ${rounded ? 'input-rounded' : ''}`} {...props} />
    )
  }
}
