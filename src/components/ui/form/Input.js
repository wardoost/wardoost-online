import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './Input.scss'

const getValidSizes = () => {
  const grids = [1, 2, 3, 4]
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
export default class Input extends PureComponent {
  static propTypes = {
    size: React.PropTypes.oneOf(validSizes),
    rounded: React.PropTypes.bool
  }

  render () {
    const {size, rounded, ...props} = this.props

    return (
      <input
        styleName={`${size ? `input-${size}` : ''} ${rounded ? 'input-rounded' : ''}`}
        ref='input'
        {...props} />
    )
  }
}
