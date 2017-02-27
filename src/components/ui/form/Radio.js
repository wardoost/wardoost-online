import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Radio.scss'

@CSSModules(styles)
export default class Radio extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
    align: React.PropTypes.bool
  }

  static defaultProps = {
    align: false
  }

  render () {
    const {children, align, ...props} = this.props

    return (
      <label htmlFor={this.props.id} styleName={align ? 'radio-align' : 'radio'}>
        <input
          type='radio'
          ref='input'
          {...props} />
        {children}
      </label>
    )
  }
}
