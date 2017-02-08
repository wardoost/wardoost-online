import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import Footer from './Footer'
import styles from './Page.scss'

@CSSModules(styles)
export default class Page extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node
  }

  state = {
    animating: this.props.children.length === 2
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      animating: nextProps.children.length === 2
    })
  }

  render () {
    const {animating} = this.state

    return (
      <main>
        {this.props.children}
        <Footer styleName={animating ? 'footer-hide' : 'footer'} />
      </main>
    )
  }
}
