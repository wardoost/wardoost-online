/* @flow */
import React, {PureComponent} from 'react'
import classNames from 'classnames'
import {autobind} from 'core-decorators'
import Animate from 'rc-animate'
import ScrollSpy from '../../core/scrollspy'
import menu from '../../core/menu'
import Navigation from './Navigation'
import Page from './Page'
import Home from '../pages/Home'
import styles from './Layout.scss'

type Props = {
  children: React.Element<*>,
  location: Object
}
type State = {
  navActive: boolean,
  activeHash: string,
  atPageEnd: boolean
}

export default class Layout extends PureComponent {
  props: Props
  state: State
  scrollSpy: ScrollSpy

  state = {
    navActive: false,
    activeHash: this.props.location.hash.substring(1),
    atPageEnd: false
  }

  componentDidMount () {
    this.scrollSpy = new ScrollSpy(menu, {
      location: this.props.location,
      onUpdateActive: this.updateActiveHash,
      onUpdateAtEnd: this.updateAtEnd
    })
  }

  componentDidUpdate (prevProps: Props) {
    if (prevProps.location !== this.props.location) {
      this.scrollSpy.update(this.props.location)
    }
  }

  componentWillUnmount () {
    this.scrollSpy.disable()
  }

  @autobind
  updateActiveHash (hash: string) {
    this.setState({activeHash: hash})
  }

  @autobind
  updateAtEnd (val: boolean) {
    this.setState({atPageEnd: val})
  }

  @autobind
  toggleNav (navActive: boolean, element?: any = document.body) {
    if (!element) throw new Error('Failed to find element')
    element.style.overflow = navActive ? 'hidden' : 'initial'
    this.setState({navActive: navActive})
  }

  hideNav = () => this.toggleNav(false)

  renderChildren () {
    return React.Children.map(this.props.children, child => {
      if (child.type === Home) {
        return React.cloneElement(child, {
          key: this.props.location.pathname,
          activeSection: this.state.activeHash,
          atPageEnd: this.state.atPageEnd
        })
      } else {
        return React.cloneElement(child, {
          key: this.props.location.pathname
        })
      }
    })
  }

  render () {
    const {navActive} = this.state

    return (
      <div className={classNames(styles.layout, {[styles.menuActive]: navActive})}>
        <Navigation
          menu={menu}
          location={this.props.location}
          onToggle={this.toggleNav}
          active={navActive}
          activeHash={this.state.activeHash} />
        <div className={styles.overlay} onClick={this.hideNav} />
        <Animate component={Page} transitionName={styles}>
          {this.renderChildren()}
        </Animate>
      </div>
    )
  }
}
