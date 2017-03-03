import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import Button from './Button'
import ButtonLoading from './ButtonLoading'
import styles from './ButtonGroup.scss'

@CSSModules(styles)
export default class ButtonGroup extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf([Button, ButtonLoading])
      }),
      PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([Button, ButtonLoading])
      }))
    ])
  }

  renderChildren (children) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        grouped: true
      })
    })
  }

  render () {
    const {children, ...props} = this.props

    return (
      <div styleName='button-group' role='group' {...props}>
        {this.renderChildren(children)}
      </div>
    )
  }
}
