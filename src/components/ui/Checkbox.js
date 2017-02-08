import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Checkbox.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Checkbox extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    type: React.PropTypes.string,
    id: React.PropTypes.string.isRequired
  }

  static defaultProps = {
    type: 'checkbox'
  }

  render () {
    const {children, ...props} = this.props

    return (
      <label htmlFor={this.props.id} styleName={this.props.type}>
        <input {...props} />
        {children}
      </label>
    )
  }
}
