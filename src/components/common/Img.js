import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Img.css'

@CSSModules(styles)
export default class Img extends Component {
  render () {
    return (
      <img styleName='img' {...this.props} />
    )
  }
}
