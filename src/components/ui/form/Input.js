import React, {PureComponent} from 'react'
import classNames from 'classnames'
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

export default class Input extends PureComponent {
  static propTypes = {
    size: React.PropTypes.oneOf(validSizes),
    rounded: React.PropTypes.bool
  }

  render () {
    const {size, rounded, ...props} = this.props

    return (
      <input
        className={classNames(
          size ? styles[`input-${size}`] : styles.input,
          rounded ? styles.rounded : null
        )}
        ref='input'
        {...props} />
    )
  }
}
