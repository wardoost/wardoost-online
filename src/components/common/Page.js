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
    animating: this.props.children ? this.props.children.length > 1 : false
  }

  componentWillReceiveProps (nextProps) {
    this.setState({
      animating: nextProps.children ? nextProps.children.length > 1 : false
    })
  }

  render () {
    const {animating} = this.state

    return (
      <main styleName='content'>
        {this.props.children}
        <Footer styleName={animating ? 'footer-hide' : 'footer'} />
      </main>
    )
  }
}
