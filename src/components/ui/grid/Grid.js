import React, {PureComponent, PropTypes} from 'react'
import Unit from './Unit'
import CSSModules from 'react-css-modules'
import styles from './Grid.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Grid extends PureComponent {
  static propTypes = {
    children: React.PropTypes.oneOfType([
      React.PropTypes.shape({
        type: React.PropTypes.oneOf([Unit])
      }),
      React.PropTypes.arrayOf(React.PropTypes.shape({
        type: React.PropTypes.oneOf([Unit])
      }))
    ]),
    gutter: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    reverseDirection: PropTypes.bool
  }

  static defaultProps = {
    reverseDirection: false
  }

  renderChildren (children, gutter) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        gutter: this.props.gutter,
        reverseDirection: this.props.reverseDirection
      })
    })
  }

  render () {
    const {children, gutter, reverseDirection, ...props} = this.props

    return (
      <div styleName={`${gutter ? `grid-gutter-${gutter}` : 'grid'} ${reverseDirection ? 'grid-reverse' : ''}`} {...props}>
        {this.renderChildren(children, gutter)}
      </div>
    )
  }
}
