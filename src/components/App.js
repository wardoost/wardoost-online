import React, {Component} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaAsterisk from 'react-icons/lib/fa/asterisk'
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
  simulateLoading (e) {
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
        <ul styleName='buttons'>
          <li>
            <Button onClick={this.simulateLoading} loading={loading} disabled={loading}>
              Loading button
            </Button>
          </li>
          <li>
            <Button onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} ref='loading1' disabled={loading} styleName='button-alt'>
              Loading with custom icon
            </Button>
          </li>
          <li>
            <Button onClick={this.updateCounter}>
              You clicked me {count} times
            </Button>
          </li>
          <li>
            <Button disabled>
              Disabled button
            </Button>
          </li>
        </ul>
      </div>
    )
  }
}
