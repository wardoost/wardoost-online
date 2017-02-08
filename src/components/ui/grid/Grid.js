import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Grid.scss'

@CSSModules(styles)
export default class Grid extends PureComponent {
  static propTypes = {
    padding: React.PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
  }

  render () {
    const {padding, ...props} = this.props

    return (
      <div styleName={padding ? `grid-padded-${padding}` : 'grid'} {...props} />
    )
  }
}
