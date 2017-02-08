import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './ControlGroup.scss'

@CSSModules(styles)
export default class ControlGroup extends PureComponent {
  render () {
    return (
      <div styleName='control-group' {...this.props} />
    )
  }
}
