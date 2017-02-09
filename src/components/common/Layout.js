import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import Animate from 'rc-animate'
import {scrollTop, scrollTo} from '../../core/scroll'
import menu from '../../core/menu'
import Navigation from './Navigation'
import Page from './Page'
import styles from './Layout.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Layout extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object
  }

  state = {
    navActive: false
  }

  componentDidUpdate (prevProps) {
    const {location} = this.props

    if (prevProps.location !== location) {
      if (prevProps.location.pathname !== location.pathname && !location.hash) {
        scrollTop(500)
      } else if (prevProps.location.pathname !== location.pathname && location.hash) {
        const to = location.hash.substring(1)
        const child = document.getElementById(to)
        scrollTo(to, 500, child ? child.offsetParent.offsetTop : 0)
      } else if (prevProps.location.pathname === location.pathname && location.hash) {
        scrollTo(location.hash.substring(1), 500)
      } else {
        scrollTop(500)
      }
    }
  }

  @autobind
  toggleNav (navActive) {
    document.body.style.overflow = navActive ? 'hidden' : null
    this.setState({ navActive: navActive })
  }

  hideNav = () => this.toggleNav(false)

  render () {
    const {navActive} = this.state

    return (
      <div styleName={`layout ${navActive ? 'menu-active' : ''}`}>
        <Navigation menu={menu} location={this.props.location} onToggle={this.toggleNav} active={navActive} />
        <div styleName='overlay' onClick={this.hideNav} />
        {this.props.children
        ? <Animate component={Page} transitionName={styles}>
          {React.cloneElement(this.props.children, {
            key: this.props.location.pathname
          })}
        </Animate>
        : null}
      </div>
    )
  }
}
