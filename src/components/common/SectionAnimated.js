/* @flow */
import React from 'react'
import CSSModules from 'react-css-modules'
import {Grid} from '../ui'
import styles from './SectionAnimated.scss'

type Props = {
  children?: React.Element<*>,
  title?: string,
  id: string,
  active: boolean
}

function SectionAnimated (props: Props): React.Element<*> {
  const {children, title, active, ...rest} = props

  const renderChildren = () => {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        styleName: child.type === Grid ? 'section-animated-grid' : 'section-animated'
      })
    })
  }

  return (
    <div styleName={active ? 'section-active' : 'section'} {...rest}>
      <div styleName='section-content'>
        <section styleName='section-container'>
          { title
          ? <div styleName='section-animated-header'>
            <h1>{title}</h1>
          </div>
          : null}
          {renderChildren()}
        </section>
      </div>
    </div>
  )
}

export default CSSModules(SectionAnimated, styles)
