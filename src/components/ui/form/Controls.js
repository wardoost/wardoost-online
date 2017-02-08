import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Controls.scss'

@CSSModules(styles)
export default class Controls extends PureComponent {
  render () {
    return (
      <div styleName='controls' {...this.props} />
    )
  }
}