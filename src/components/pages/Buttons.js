import React, {PureComponent} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaAsterisk from 'react-icons/lib/fa/asterisk'
import {Grid, Unit, Button, ButtonGroup, Image} from '../ui'
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
        <h2>Button states</h2>
        <ButtonGroup aria-label='Button states'>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button active>Active</Button>
        </ButtonGroup>
        <h2>Button sizes</h2>
        <ButtonGroup aria-label='Button sizes'>
          <Button size='sm'>Small</Button>
          <Button>Default</Button>
          <Button size='lg'>Large</Button>
          <Button size='xl'>Extra large</Button>
        </ButtonGroup>
        <h2>Button kinds</h2>
        <ButtonGroup aria-label='Button kinds'>
          <Button>Default</Button>
          <Button kind='primary'>Primary</Button>
          <Button kind='secondary'>Secondary</Button>
          <Button kind='success'>Success</Button>
          <Button kind='warning'>Warning</Button>
          <Button kind='error'>Danger</Button>
        </ButtonGroup>
        <h2>Loading buttons</h2>
        <ButtonGroup aria-label='Loading buttons'>
          <Button onClick={this.simulateLoading} loading={loading} disabled={loading}>
            Default button
          </Button>
          <Button onClick={this.simulateLoading} loading={loading} LoadIcon={FaAsterisk} disabled={loading} kind='primary'>
            Custom button
          </Button>
          <Button onClick={this.simulateLoading} loading={loading} loadReplace>
            Hide button content
          </Button>
        </ButtonGroup>
        <h2>Mixed content</h2>
        <Grid padding='lg'>
          <Unit size='1' smSize='1-2'>
            <Button styleName='button-mixed' onClick={this.simulateLoading} loading={loading}>
              With an image
              <Image src={placeholder} styleName='button-img' />
            </Button>
          </Unit>
          <Unit size='1' smSize='1-2'>
            <Button styleName='button-mixed' onClick={this.simulateLoading} loading={loading} loadReplace>
              Hide button content
              <Image src={placeholder} styleName='button-img' />
            </Button>
          </Unit>
        </Grid>
        <h1>Button groups</h1>
        <Button styleName='standalone'>Standalone button</Button>
        <ButtonGroup aria-label='Button groups' styleName='group'>
          <Button>Buttons</Button>
          <Button>In</Button>
          <Button>Group</Button>
        </ButtonGroup>
      </div>
    )
  }
}
