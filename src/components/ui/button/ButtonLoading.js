/* @flow */
import React from 'react'
import classNames from 'classnames'
import FaCircleONotch from 'react-icons/lib/fa/circle-o-notch'
import Button from './Button'
import styles from './ButtonLoading.scss'

type Props = {
  className?: string,
  kind?: 'primary' | 'secondary' | 'success' | 'warning' | 'error',
  size?: 'sm' | 'lg' | 'xl',
  active?: boolean,
  grouped?: boolean,
  children?: React.Element<*>,
  disabled?: boolean,
  loading: boolean,
  loadingDisables?: boolean,
  LoadIcon?: any,
  loadReplace?: boolean
}

ButtonLoading.defaultProps = {
  loadingDisables: true,
  LoadIcon: FaCircleONotch,
  loadReplace: false
}

export default function ButtonLoading (props: Props) {
  const {className, children, disabled, loading, loadingDisables, LoadIcon, loadReplace, ...rest} = props

  return (
    <Button
      className={classNames(
        loading ? styles.loadingActive : styles.loading,
        {[styles.loadingReplace]: loadReplace},
        className
      )}
      disabled={loadingDisables ? loading : disabled}
      {...rest}>
      <span className={styles.content}>{children}</span>
      {LoadIcon
      ? <span className={styles.icon}><LoadIcon className={styles.iconSpin} /></span>
      : null}
    </Button>
  )
}
