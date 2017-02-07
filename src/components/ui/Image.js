import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Image.scss'

@CSSModules(styles)
export default class Image extends Component {
  render () {
    return (
      <img styleName='img' {...this.props} />
    )
  }
}
