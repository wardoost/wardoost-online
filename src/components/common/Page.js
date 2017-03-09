import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import CSSModules from 'react-css-modules'
import Footer from './Footer'
import styles from './Page.scss'

@CSSModules(styles)
export default class Page extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  state = {
    animating: this.props.children.length > 1,
    animationHeight: window.innerHeight
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      animating: nextProps.children.length > 1,
      animationHeight: findDOMNode(this).clientHeight
    })
  }

  render () {
    const {animating, animationHeight} = this.state

    return (
      <div styleName='page' style={animating ? {minHeight: animationHeight} : null}>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
