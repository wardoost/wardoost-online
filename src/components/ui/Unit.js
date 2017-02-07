import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Unit.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Unit extends Component {
  static propTypes = {
    size: React.PropTypes.string,
    smSize: React.PropTypes.string,
    mdSize: React.PropTypes.string,
    lgSize: React.PropTypes.string,
    xlSize: React.PropTypes.string
  }

  static defaultProps = {
    size: '1'
  }

  render () {
    const {size, smSize, mdSize, lgSize, xlSize} = this.props

    let props = {...this.props}
    delete props.size
    delete props.smSize
    delete props.mdSize
    delete props.lgSize
    delete props.xlSize

    return (
      <div styleName={`unit-${size} ${smSize ? `unit-sm-${smSize}` : ''} ${mdSize ? `unit-md-${mdSize}` : ''} ${lgSize ? `unit-lg-${lgSize}` : ''} ${xlSize ? `unit-xl-${xlSize}` : ''}`} {...props} />
    )
  }
}
