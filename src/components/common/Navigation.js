/* @flow */
import React, {PureComponent} from 'react'
import classNames from 'classnames'
import {autobind} from 'core-decorators'
import {Link} from 'react-router'
import MenuToggle from './MenuToggle'
import type {Menu} from '../../core/menu'
import styles from './Navigation.scss'

type Props = {
  children?: any,
  menu: Menu,
  location: Object,
  active: boolean,
  activeHash: string,
  onToggle: Function
}
type State = {
  menuActive: boolean
}

export default class Navigation extends PureComponent {
  props: Props
  state: State

  state = {
    menuActive: this.props.active !== undefined ? this.props.active : false
  }

  componentWillReceiveProps (nextProps: Props) {
    if (nextProps.active !== undefined && nextProps.active !== this.state.menuActive) {
      this.setState({menuActive: nextProps.active})
    }
  }

  @autobind
  toggleMenu (e: Object) {
    if (this.props.onToggle) this.props.onToggle(!this.state.menuActive)
    this.setState((prevState: State) => {
      return { menuActive: !prevState.menuActive }
    })
    this.removeFocus(e)
  }

  @autobind
  hideMenu (e: Object) {
    if (this.props.onToggle) this.props.onToggle(false)
    this.setState({ menuActive: false })
    this.removeFocus(e)
  }

  removeFocus (e: Object) {
    if (e.target.blur) e.target.blur()
  }

  createMenu (menu: Menu, location: Object) {
    return menu.map((item, i) => {
      const path = item.to.split('#')[0]
      const hash = item.to.split('#')[1]
      const pathMatch = location ? path === location.pathname : false
      const hashMatch = hash === this.props.activeHash
      const active = hash ? pathMatch && hashMatch : pathMatch

      return (
        <li key={i} className={styles.item}>
          <Link
            className={classNames(
              active ? styles.linkActive : styles.link,
              hash && path !== '/' ? styles.subLink : ''
            )}
            to={item.to}
            onClick={this.removeFocus}>
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
      <nav className={menuActive ? styles.navActive : styles.nav} {...props}>
        <a className={activeHash === 'about' || activeHash === '' ? styles.toggle : styles.toggleBg} onClick={this.toggleMenu}>
          <MenuToggle className={styles.toggleIcon} active={menuActive} />
        </a>
        <div className={styles.menu} onClick={this.hideMenu}>
          <ul className={styles.list}>
            {menu ? this.createMenu(menu, location) : children}
          </ul>
        </div>
      </nav>
    )
  }
}
