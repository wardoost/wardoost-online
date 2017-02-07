import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import {Link, IndexLink} from 'react-router'
import MdMenu from 'react-icons/lib/md/menu'
import MdClose from 'react-icons/lib/md/close'
import FaHome from 'react-icons/lib/fa/home'
import styles from './Navigation.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Navigation extends Component {
  static propTypes = {
    children: React.PropTypes.node
  }

  state = {
    menuActive: false
  }

  @autobind
  toggleMenu () {
    this.setState(prevState => {
      return {
        menuActive: !prevState.menuActive
      }
    })
  }

  @autobind
  hideMenu () {
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
            <span styleName='menu-link'>
              <i><FaHome /></i>
            </span>
          </IndexLink>
          <a href='#menu' styleName='menu-toggle' onClick={this.toggleMenu}>
            <span styleName='menu-link'>
              <i>{menuActive ? <MdClose /> : <MdMenu />}</i>
            </span>
          </a>
        </span>
        <nav styleName='nav' id='menu'>
          <div styleName='menu' onClick={this.hideMenu}>
            <ul styleName='menu-list'>
              <li styleName='menu-item'><Link styleName='menu-link' to='/buttons'>Buttons</Link></li>
              <li styleName='menu-item'><Link styleName='menu-link' to='/error'>Error</Link></li>
            </ul>
          </div>
        </nav>
        <main styleName='main'>
          <div styleName='overlay' onClick={this.hideMenu} />
          {this.props.children}
        </main>
      </div>
    )
  }
}
