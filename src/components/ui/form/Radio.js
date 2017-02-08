import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Radio.scss'

@CSSModules(styles)
export default class Radio extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
  }

  render () {
    const {children, ...props} = this.props

    return (
      <label htmlFor={this.props.id} styleName='radio'>
        <input type='radio' {...props} />
        {children}
      </label>
    )
  }
}
