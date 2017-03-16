/* @flow */
import React from 'react'
import classNames from 'classnames'
import {Grid} from '../ui'
import styles from './SectionAnimated.scss'

type Props = {
  className?: string,
  children?: React.Element<*>,
  title?: string,
  id: string,
  active: boolean
}

export default function SectionAnimated (props: Props) {
  const {className, children, title, active, ...rest} = props

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        className: child.type === Grid
        ? classNames(child.props.className, styles.animatedGrid)
        : classNames(child.props.className, styles.animated)
      })
    })
  }

  return (
    <div className={classNames(
      active ? styles.sectionActive : styles.section,
      className
    )} {...rest}>
      <div className={styles.content}>
        <section className={styles.container}>
          { title
          ? <div className={styles.animatedHeader}>
            <h1>{title}</h1>
          </div>
          : null}
          {renderChildren()}
        </section>
      </div>
    </div>
  )
}
