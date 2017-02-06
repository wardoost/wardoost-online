import React, {Component} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaAsterisk from 'react-icons/lib/fa/asterisk'
import Button from './common/Button'
import Img from './common/Img'
import styles from './App.scss'
import placeholder from '../assets/placeholder.jpg'

@CSSModules(styles)
export default class App extends Component {
  state = {
    loading: false
  }

  @autobind
  simulateLoading (e) {
    this.setState({loading: true})

    setTimeout(() => {
      this.setState({loading: false})
    }, 1000)
  }

  render () {
    const {loading} = this.state

    return (
      <div styleName='app'>
        <h1>Hello, world!</h1>
        <div styleName='button-group' role='group' aria-label='Different types of buttons'>
          <Button styleName='button'>
            Default button
          </Button>
          <Button styleName='button' disabled type='primary'>Disabled primary button</Button>
          <Button styleName='button' type='success'>Success button</Button>
          <Button styleName='button' type='warning'>Warning button</Button>
          <Button styleName='button' type='error'>Danger button</Button>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} disabled={loading}>
            Simulate loading
          </Button>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} disabled={loading} type='primary'>
            Loading button with custom icon
          </Button>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} loadReplace>
            Button with mixed content
            <Img src={placeholder} styleName='button-img' />
          </Button>
        </div>
      </div>
    )
  }
}
