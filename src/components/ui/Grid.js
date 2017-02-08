import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Grid.scss'

@CSSModules(styles)
export default class Grid extends Component {
  static propTypes = {
    padding: React.PropTypes.string
  }

  render () {
    const {padding, ...props} = this.props

    return (
      <div styleName={padding ? `grid-padded-${padding}` : 'grid'} {...props} />
    )
  }
}
