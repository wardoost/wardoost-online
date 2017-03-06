import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import {Grid} from '../ui'
import styles from './SectionAnimated.scss'

@CSSModules(styles)
export default class SectionAnimated extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string,
    id: PropTypes.string.isRequired,
    active: PropTypes.bool
  }

  renderChildren (children) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        styleName: child.type === Grid ? 'section-animated-grid' : 'section-animated'
      })
    })
  }

  render () {
    const {children, active, title, ...props} = this.props

    return (
      <div styleName={active ? 'section-active' : 'section'} {...props}>
        <div styleName='section-content'>
          <section styleName='section-container'>
            { title
            ? <div styleName='section-animated-header'>
              <h1>{title}</h1>
            </div>
            : null}
            {this.renderChildren(children)}
          </section>
        </div>
      </div>
    )
  }
}
