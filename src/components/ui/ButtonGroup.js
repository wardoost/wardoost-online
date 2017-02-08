import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './ButtonGroup.scss'

@CSSModules(styles)
export default class ButtonGroup extends PureComponent {
  render () {
    return (
      <div styleName='button-group' role='group' {...this.props} />
    )
  }
}
