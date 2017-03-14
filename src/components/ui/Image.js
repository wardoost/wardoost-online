import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Image.scss'

@CSSModules(styles)
export default class Image extends PureComponent {
  static propTypes = {
    src: PropTypes.string.isRequired
  }

  render () {
    const {src, ...props} = this.props

    return (
      <img
        src={src}
        styleName='img'
        {...props} />
    )
  }
}
