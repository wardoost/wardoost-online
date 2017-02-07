import React, {Component} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaAsterisk from 'react-icons/lib/fa/asterisk'
import Grid from '../common/Grid'
import Unit from '../common/Unit'
import Button from '../common/Button'
import Img from '../common/Img'
import styles from './Buttons.scss'
import placeholder from '../../assets/placeholder.jpg'

@CSSModules(styles)
export default class Buttons extends Component {
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
        <Grid padded>
          <Unit size='1' mdSize='1-2' xlSize='1-3'>
            <h2>Button types</h2>
            <div styleName='button-group' role='group' aria-label='Different types of buttons'>
              <Button styleName='button'>Default</Button>
              <Button styleName='button' type='primary'>Primary</Button>
              <Button styleName='button' type='success'>Success</Button>
              <Button styleName='button' type='warning'>Warning</Button>
              <Button styleName='button' type='error'>Danger</Button>
              <Button styleName='button' disabled>Disabled</Button>
            </div>
          </Unit>
          <Unit size='1' mdSize='1-2' xlSize='1-3'>
            <h2>Button loading animation</h2>
            <div styleName='button-group' role='group' aria-label='Different types of buttons'>
              <Button styleName='button' onClick={this.simulateLoading} loading={loading} disabled={loading}>
                Default button
              </Button>
              <Button styleName='button' onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} disabled={loading} type='primary'>
                Custom icon
              </Button>
              <Button styleName='button' onClick={this.simulateLoading} loading={loading} loadReplace>
                Mixed content
                <Img src={placeholder} styleName='button-img' />
              </Button>
            </div>
          </Unit>
        </Grid>
      </div>
    )
  }
}
