import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import Animate from 'rc-animate'
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
