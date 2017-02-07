import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Input.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Input extends Component {
  static propTypes = {
    size: React.PropTypes.string,
    rounded: React.PropTypes.bool
  }

  render () {
    const {size, rounded} = this.props

    let props = {...this.props}
    delete props.size
    delete props.rounded

    return (
      <input styleName={`${size ? `input-${size}` : ''} ${rounded ? 'input-rounded' : ''}`} {...props} />
    )
  }
}
