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
          <Button styleName='button'>Default</Button>
          <Button styleName='button' type='primary'>Primary</Button>
          <Button styleName='button' type='secondary'>Secondary</Button>
          <Button styleName='button' type='success'>Success</Button>
          <Button styleName='button' type='warning'>Warning</Button>
          <Button styleName='button' type='error'>Danger</Button>
          <Button styleName='button' disabled>Disabled</Button>
        </ButtonGroup>
        <h2>Loading buttons</h2>
        <ButtonGroup aria-label='Loading buttons'>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} disabled={loading}>
            Default button
          </Button>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} disabled={loading} type='primary'>
            Custom button
          </Button>
          <Button styleName='button' onClick={this.simulateLoading} loading={loading} loadReplace>
            Hide button content
            <Image src={placeholder} styleName='button-img' />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
