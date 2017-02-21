import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Grid.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Grid extends PureComponent {
  static propTypes = {
    padding: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    reverseDirection: React.PropTypes.bool
  }

  static defaultProps = {
    reverseDirection: false
  }

  render () {
    const {padding, reverseDirection, ...props} = this.props

    return (
      <div styleName={`${padding ? `grid-padded-${padding}` : 'grid'} ${reverseDirection ? 'grid-reverse' : ''}`} {...props} />
    )
  }
}
