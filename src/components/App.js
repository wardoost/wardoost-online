import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Navigation from './common/Navigation'
import Footer from './common/Footer'
import styles from './App.scss'

@CSSModules(styles)
export default class App extends Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  render () {
    return (
      <div styleName='app'>
        <Navigation>
          <ReactCSSTransitionGroup
            transitionName={styles}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {React.cloneElement(this.props.children, {
              key: window.location.pathname
            })}
          </ReactCSSTransitionGroup>
        </Navigation>
        <Footer />
      </div>
    )
  }
}
