import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Link} from 'react-router'
import styles from './Navigation.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Layout extends Component {
  static propTypes = {
    active: React.PropTypes.bool,
    hideMenu: React.PropTypes.func
  }

  render () {
    const {active, hideMenu, ...props} = this.props

    return (
      <nav styleName={active ? 'nav-active' : 'nav'} id='menu' {...props}>
        <div styleName='menu' onClick={hideMenu}>
          <ul styleName='menu-list'>
            <li styleName='menu-item'><Link styleName='menu-link' to='/buttons'>Buttons</Link></li>
            <li styleName='menu-item'><Link styleName='menu-link' to='/forms'>Forms</Link></li>
            <li styleName='menu-item'><Link styleName='menu-link' to='/404'>404</Link></li>
          </ul>
        </div>
      </nav>
    )
  }
}
