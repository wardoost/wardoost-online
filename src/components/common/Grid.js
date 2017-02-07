import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Grid.scss'

@CSSModules(styles)
export default class Grid extends Component {
  static propTypes = {
    padded: React.PropTypes.bool
  }

  static defaultProps = {
    padded: false
  }

  render () {
    const {padded} = this.props

    let props = {...this.props}
    delete props.padded

    return (
      <div styleName={padded ? 'grid-padded' : 'grid'} {...props} />
    )
  }
}
