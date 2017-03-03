import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import Unit from './Unit'
import styles from './Grid.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Grid extends PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.shape({
        type: PropTypes.oneOf([Unit])
      }),
      PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf([Unit])
      }))
    ]),
    gutter: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    reverseDirection: PropTypes.bool
  }

  static defaultProps = {
    reverseDirection: false
  }

  renderChildren (children, gutter, reverseDirection) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        gutter: gutter,
        reverseDirection: reverseDirection
      })
    })
  }

  render () {
    const {children, gutter, reverseDirection, ...props} = this.props

    return (
      <div styleName={`${gutter ? `grid-gutter-${gutter}` : 'grid'} ${reverseDirection ? 'grid-reverse' : ''}`} {...props}>
        {this.renderChildren(children, gutter, reverseDirection)}
      </div>
    )
  }
}
