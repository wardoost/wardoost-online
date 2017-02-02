import React, { Component } from 'react'
import styles from './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      clicked: 0
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }))
  }

  render () {
    return (
      <div className={styles.app}>
        <p>Hello, world!</p>
        <button onClick={this.handleClick}>You clicked me {this.state.clicked} times</button>
      </div>
    )
  }
}
