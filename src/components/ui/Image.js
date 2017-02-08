import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Image.scss'

@CSSModules(styles)
export default class Image extends PureComponent {
  render () {
    return (
      <img styleName='img' {...this.props} />
    )
  }
}
