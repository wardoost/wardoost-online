import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Unit.scss'

const getValidSizes = () => {
  const grids = [1, 2, 3, 4, 5, 6, 8, 12, 24]
  const values = []
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
    size: PropTypes.oneOf(validSizes),
    smSize: PropTypes.oneOf(validSizes),
    mdSize: PropTypes.oneOf(validSizes),
    lgSize: PropTypes.oneOf(validSizes),
    xlSize: PropTypes.oneOf(validSizes),
    gutter: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    reverseDirection: PropTypes.bool
  }

  static defaultProps = {
    size: '1-1'
  }

  render () {
    const {size, smSize, mdSize, lgSize, xlSize, gutter, reverseDirection, ...props} = this.props

    return (
      <div styleName={`unit-${size} ${gutter ? `unit-gutter-${gutter}` : ''} ${smSize ? `unit-sm-${smSize}` : ''} ${mdSize ? `unit-md-${mdSize}` : ''} ${lgSize ? `unit-lg-${lgSize}` : ''} ${xlSize ? `unit-xl-${xlSize}` : ''} ${reverseDirection ? 'unit-reverse' : ''}`} {...props} />
    )
  }
}
