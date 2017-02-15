import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import {Link, IndexLink} from 'react-router'
import FaBars from 'react-icons/lib/fa/bars'
import FaClose from 'react-icons/lib/fa/close'
import MdBlurOn from 'react-icons/lib/md/blur-on'
import styles from './Navigation.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Layout extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    menu: React.PropTypes.array,
    location: React.PropTypes.object,
    active: React.PropTypes.bool,
    activeHash: React.PropTypes.string,
    onToggle: React.PropTypes.func
  }

  state = {
    menuActive: this.props.active !== undefined ? this.props.active : false
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.active !== undefined && nextProps.active !== this.state.menuActive) {
      this.setState({menuActive: nextProps.active})
    }
  }

  @autobind
  toggleMenu (state) {
    const newState = typeof state === 'boolean' ? state : !this.state.menuActive
    if (this.props.onToggle) this.props.onToggle(newState)
    this.setState({ menuActive: newState })
  }

  hideMenu = () => this.toggleMenu(false)

  removeFocus (e) {
    e.target.blur()
  }

  createMenu (menu, location) {
    return menu.map((item, i) => {
      const path = item.to.split('#')[0]
      const hash = item.to.split('#')[1]
      const pathMatch = location ? path === location.pathname : false
      const hashMatch = hash === this.props.activeHash
      const active = hash ? pathMatch && hashMatch : pathMatch

      return (
        <li key={i} styleName='menu-item'>
          <Link
            styleName={`${active ? 'menu-link-active' : 'menu-link'} ${hash && path !== '/' ? 'menu-link-sub' : ''}`}
            to={item.to}
            onClick={this.removeFocus}
          >
            {item.label}
          </Link>
        </li>
      )
    })
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {children, menu, location, active, activeHash, onToggle, ...props} = this.props
    const {menuActive} = this.state

    return (
      <nav styleName={menuActive ? 'nav-active' : 'nav'} {...props}>
        <div styleName='menu-heading'>
          <IndexLink to='/' styleName='menu-brand' onClick={this.hideMenu}>
            <i><MdBlurOn /></i>
          </IndexLink>
          <a styleName='menu-toggle' onClick={this.toggleMenu}>
            <i>{menuActive ? <FaClose /> : <FaBars />}</i>
          </a>
        </div>
        <div styleName='menu' onClick={this.hideMenu}>
          <ul styleName='menu-list'>
            {menu ? this.createMenu(menu, location) : children}
          </ul>
        </div>
      </nav>
    )
  }
}
