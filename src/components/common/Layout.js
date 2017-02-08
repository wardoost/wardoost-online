import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import {IndexLink} from 'react-router'
import Animate from 'rc-animate'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import MdBlurOn from 'react-icons/lib/md/blur-on'
import Navigation from './Navigation'
import Page from './Page'
import styles from './Layout.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Layout extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node
  }

  state = {
    menuActive: false
  }

  @autobind
  toggleMenu () {
    this.setState(prevState => {
      document.body.style.overflow = !prevState.menuActive ? 'hidden' : null

      return {
        menuActive: !prevState.menuActive
      }
    })
  }

  @autobind
  hideMenu () {
    document.body.style.overflow = null

    this.setState({
      menuActive: false
    })
  }

  render () {
    const {menuActive} = this.state

    return (
      <div styleName={`layout ${menuActive ? 'menu-active' : ''}`}>
        <span styleName='menu-heading'>
          <IndexLink to='/' styleName='menu-brand' onClick={this.hideMenu}>
            <span styleName='heading-link'>
              <i><MdBlurOn /></i>
            </span>
          </IndexLink>
          <a styleName='menu-toggle' onClick={this.toggleMenu}>
            <span styleName='heading-link'>
              <i>{menuActive ? <MdClose /> : <MdMenu />}</i>
            </span>
          </a>
        </span>
        <Navigation hideMenu={this.hideMenu} active={menuActive} />
        <div styleName='overlay' onClick={this.hideMenu} />
        {this.props.children
        ? <Animate component={Page} transitionName={styles}>
          {React.cloneElement(this.props.children, {
            key: window.location.pathname
          })}
        </Animate>
        : null}
      </div>
    )
  }
}
