import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import {autobind} from 'core-decorators'
import Animate from 'rc-animate'
import ScrollSpy from '../../core/scrollspy'
import menu from '../../core/menu'
import Navigation from './Navigation'
import Page from './Page'
import Home from '../pages/Home'
import styles from './Layout.scss'

@CSSModules(styles, {allowMultiple: true})
export default class Layout extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    location: React.PropTypes.object
  }

  state = {
    navActive: false,
    activeHash: this.props.location.hash.substring(1),
    atPageEnd: false
  }

  componentDidMount () {
    this.scrollSpy = new ScrollSpy(menu, {
      location: this.props.location,
      onUpdateActive: this.updateActiveHash,
      onUpdateAtEnd: this.updateAtEnd,
      duration: 400
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.location !== this.props.location) {
      this.scrollSpy.updateLocation(this.props.location)
    }
  }

  @autobind
  updateActiveHash (hash) {
    this.setState({activeHash: hash})
  }

  @autobind
  updateAtEnd (val) {
    this.setState({atPageEnd: val})
  }

  @autobind
  toggleNav (navActive) {
    document.body.style.overflow = navActive ? 'hidden' : null
    this.setState({ navActive: navActive })
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
      <div styleName={classNames('layout', {'menu-active': navActive})}>
        <Navigation
          menu={menu}
          location={this.props.location}
          onToggle={this.toggleNav}
          active={navActive}
          activeHash={this.state.activeHash} />
        <div styleName='overlay' onClick={this.hideNav} />
        {this.props.children
        ? <Animate component={Page} transitionName={styles}>
          {this.renderChildren()}
        </Animate>
        : null}
      </div>
    )
  }
}
