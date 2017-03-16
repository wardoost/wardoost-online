/* @flow */
import React from 'react'
import classNames from 'classnames'
import Unit from './Unit'
import styles from './Grid.scss'

type Props = {
  className?: string,
  children?: Unit | Array<Unit>,
  gutter?: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
  reverse?: boolean
}

Grid.defaultProps = {
  reverse: false
}

export default function Grid (props: Props) {
  const {className, children, gutter, reverse, ...rest} = props

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        gutter: props.gutter,
        reverse: props.reverse
      })
    })
  }

  return (
    <div
      className={classNames(styles.grid,
        gutter ? styles[`gutter-${gutter}`] : null,
        reverse ? styles.reverse : null,
        className
      )}
      {...rest}>
      {renderChildren()}
    </div>
  )
}
