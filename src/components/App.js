import React, {Component} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import Button from './common/Button'
import styles from './App.css'

@CSSModules(styles, {allowMultiple: true})
export default class App extends Component {
  state = {
    count: 0,
    loading: false
  }

  @autobind
  updateCounter () {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  @autobind
  simulateLoading () {
    this.setState({loading: true})

    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  render () {
    const {loading, count} = this.state

    return (
      <div styleName='app'>
        <h1>Hello, world!</h1>
        <Button styleName='button' onClick={this.simulateLoading} loading={loading} disabled={loading}>
          Loading button
        </Button>
        <Button styleName='button' onClick={this.updateCounter}>
          You clicked me {count} times
        </Button>
        <Button styleName='button' disabled>
          Disabled button
        </Button>
      </div>
    )
  }
}
