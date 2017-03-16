/* @flow */
import React, {PureComponent} from 'react'
import {findDOMNode} from 'react-dom'
import Footer from './Footer'
import styles from './Page.scss'

type Props = {
  children: any
}
type State = {
  animating: boolean,
  animationHeight: number
}

export default class Page extends PureComponent {
  props: Props
  state: State

  state = {
    animating: this.props.children.length > 1,
    animationHeight: 0
  }

  componentWillReceiveProps (nextProps: Props) {
    const component: Object = findDOMNode(this) || {clientHeight: 0}

    this.setState({
      animating: nextProps.children.length > 1,
      animationHeight: component.clientHeight
    })
  }

  render () {
    const {animating, animationHeight} = this.state

    return (
      <div className={styles.page} style={animating ? {minHeight: animationHeight} : null}>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
