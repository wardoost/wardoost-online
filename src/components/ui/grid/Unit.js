import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Unit.scss'

const getValidSizes = () => {
  const grids = [1, 2, 3, 4, 5, 6, 8, 12, 24]
  const values = ['1']
  grids.forEach(grid => {
    for (let i = 1; i <= grid; i++) {
      if (grid % i !== 0 || i === 1) {
        values.push(`${i}-${grid}`)
      }
    }
  })
  return values
}
const validSizes = getValidSizes()

@CSSModules(styles, {allowMultiple: true})
export default class Unit extends PureComponent {
  static propTypes = {
    size: React.PropTypes.oneOf(validSizes),
    smSize: React.PropTypes.oneOf(validSizes),
    mdSize: React.PropTypes.oneOf(validSizes),
    lgSize: React.PropTypes.oneOf(validSizes),
    xlSize: React.PropTypes.oneOf(validSizes)
  }

  static defaultProps = {
    size: '1'
  }

  render () {
    const {size, smSize, mdSize, lgSize, xlSize, ...props} = this.props

    return (
      <div styleName={`unit-${size} ${smSize ? `unit-sm-${smSize}` : ''} ${mdSize ? `unit-md-${mdSize}` : ''} ${lgSize ? `unit-lg-${lgSize}` : ''} ${xlSize ? `unit-xl-${xlSize}` : ''}`} {...props} />
    )
  }
}
