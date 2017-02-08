import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import {Link, IndexLink} from 'react-router'
import FaBars from 'react-icons/lib/fa/bars'
import FaClose from 'react-icons/lib/fa/close'
import MdBlurOn from 'react-icons/lib/md/blur-on'
import styles from './Navigation.scss'

@CSSModules(styles)
export default class Layout extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool,
    menu: React.PropTypes.array,
    location: React.PropTypes.object,
    onToggle: React.PropTypes.func,
    onHide: React.PropTypes.func
  }

  static defaultProps = {
    menu: []
  }

  state = {
    active: false
  }

  @autobind
  toggleMenu () {
    this.setState(prevState => {
      return { active: !prevState.active }
    })

    this.props.onToggle()
  }

  @autobind
  hideMenu () {
    this.setState({active: false})
    this.props.onHide()
  }

  createMenu (menu, location) {
    return menu.map((item, i) => {
      const active = item.to === location.pathname

      return (
        <li key={i} styleName='menu-item'>
          <Link styleName={active ? 'menu-link-active' : 'menu-link'} to={!active ? item.to : null}>
            {item.label}
          </Link>
        </li>
      )
    })
  }

  render () {
    const {active, menu, location, onToggle, onHide, ...props} = this.props
    const menuActive = active === undefined ? menuActive : active
    const hideMenu = active === undefined ? this.toggleMenu : onHide
    const toggleMenu = active === undefined ? this.toggleMenu : onToggle

    return (
      <nav {...props} styleName={menuActive ? 'nav-active' : 'nav'}>
        <span styleName='menu-heading'>
          <IndexLink to='/' styleName='menu-brand' onClick={hideMenu}>
            <span styleName='heading-link'>
              <i><MdBlurOn /></i>
            </span>
          </IndexLink>
          <a styleName='menu-toggle' onClick={toggleMenu}>
            <span styleName='heading-link'>
              <i>{menuActive ? <FaClose /> : <FaBars />}</i>
            </span>
          </a>
        </span>
        <div styleName='menu' onClick={this.hideMenu}>
          <ul styleName='menu-list'>
            {this.createMenu(menu, location)}
          </ul>
        </div>
      </nav>
    )
  }
}
