/* @flow */
import React from 'react'
import classNames from 'classnames'
import Button from './Button'
import ButtonLoading from './ButtonLoading'
import styles from './ButtonGroup.scss'

type Props = {
  className?: string,
  children?: Array<Button|ButtonLoading>
}

export default function ButtonGroup (props: Props) {
  const {className, children, ...rest} = props

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        grouped: true
      })
    })
  }

  return (
    <div className={classNames(styles.btnGroup, className)} role='group' {...rest}>
      {renderChildren()}
    </div>
  )
}
