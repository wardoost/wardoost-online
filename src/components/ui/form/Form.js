import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Form.scss'

@CSSModules(styles)
export default class Form extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    kind: React.PropTypes.oneOf(['inline', 'stacked', 'aligned'])
  }

  static defaultProps = {
    kind: 'inline'
  }

  render () {
    const {children, kind, ...props} = this.props

    return (
      <form styleName={`form-${kind}`} {...props}>
        {children}
      </form>
    )
  }
}
