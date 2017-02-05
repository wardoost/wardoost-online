import React, {Component} from 'react'
import {autobind} from 'core-decorators'
import styles from './App.css'

export default class App extends Component {
  state = {
    count: 0
  }

  @autobind
  handleClick (e) {
    e.preventDefault()

    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render () {
    return (
      <div className={styles.app}>
        <p>Hello, world!</p>
        <button onClick={this.handleClick}>You clicked me {this.state.count} times</button>
      </div>
    )
  }
}
