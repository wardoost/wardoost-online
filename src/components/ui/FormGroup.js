import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './FormGroup.scss'

@CSSModules(styles)
export default class FormGroup extends Component {
  render () {
    return (
      <fieldset styleName='group' {...this.props} />
    )
  }
}
