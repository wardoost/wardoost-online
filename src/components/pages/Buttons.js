import React, {PureComponent} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaAsterisk from 'react-icons/lib/fa/asterisk'
import {Button, ButtonGroup, Image} from '../ui'
import styles from './Buttons.scss'
import placeholder from '../../assets/placeholder.jpg'

@CSSModules(styles)
export default class Buttons extends PureComponent {
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
      <div>
        <h1>Buttons</h1>
        <h2>Button types</h2>
        <ButtonGroup aria-label='Button types'>
          <Button>Default</Button>
          <Button type='primary'>Primary</Button>
          <Button type='secondary'>Secondary</Button>
          <Button type='success'>Success</Button>
          <Button type='warning'>Warning</Button>
          <Button type='error'>Danger</Button>
          <Button disabled>Disabled</Button>
        </ButtonGroup>
        <h2>Loading buttons</h2>
        <ButtonGroup aria-label='Loading buttons'>
          <Button onClick={this.simulateLoading} loading={loading} disabled={loading}>
            Default button
          </Button>
          <Button onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} disabled={loading} type='primary'>
            Custom button
          </Button>
          <Button onClick={this.simulateLoading} loading={loading} loadReplace>
            Hide button content
          </Button>
        </ButtonGroup>
        <h2>Mixed content</h2>
        <ButtonGroup aria-label='Mixed content buttons'>
          <Button styleName='button-mixed' onClick={this.simulateLoading} loading={loading}>
            With an image
            <Image src={placeholder} styleName='button-img' />
          </Button>
          <Button styleName='button-mixed' onClick={this.simulateLoading} loading={loading} loadReplace>
            Hide button content
            <Image src={placeholder} styleName='button-img' />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
