import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './FormGroup.scss'

@CSSModules(styles)
export default class FormGroup extends PureComponent {
  render () {
    return (
      <fieldset styleName='group' {...this.props} />
    )
  }
}
