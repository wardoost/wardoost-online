import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import styles from './SectionAnimated.scss'

@CSSModules(styles)
export default class SectionAnimated extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired,
    active: React.PropTypes.bool
  }

  renderChildren (children) {
    return React.Children.map(children, child => {
      return React.cloneElement(child, {
        active: this.props.active
      })
    })
  }

  render () {
    const {active, children, ...props} = this.props

    return (
      <div {...props} styleName={active ? 'section-container-active' : 'section-container'}>
        <section>
          {this.renderChildren(children)}
        </section>
      </div>
    )
  }
}
