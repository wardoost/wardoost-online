import React, {Component} from 'react'
import {Grid, Unit, Form, FormGroup, Input} from '../ui'

export default class Buttons extends Component {
  render () {
    return (
      <div>
        <h1>Forms</h1>
        <Grid>
          <Unit size='1'>
            <h2>Default</h2>
            <Form>
              <fieldset>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
              </fieldset>
            </Form>
            <h2>Stacked</h2>
            <Form type='stacked'>
              <fieldset>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
              </fieldset>
            </Form>
            <h2>Aligned</h2>
            <Form type='aligned'>
              <fieldset>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
              </fieldset>
            </Form>
            <h2>Grouped inputs</h2>
            <Form>
              <FormGroup>
                <Input type='text' placeholder='First name' />
                <Input type='text' placeholder='Last name' />
              </FormGroup>
            </Form>
            <h2>Input sizing</h2>
            <Form>
              <fieldset>
                <Input type='text' placeholder='First name' size='1' />
                <Input type='text' placeholder='Last name' size='3-5' />
                <Input type='text' placeholder='Third name' size='2-3' />
              </fieldset>
            </Form>
            <h2>Rounded input</h2>
            <Form>
              <fieldset>
                <Input type='text' placeholder='First name' size='1' rounded />
              </fieldset>
            </Form>
          </Unit>
          <Unit size='1' mdSize='1-2' xlSize='1-3' />
        </Grid>
      </div>
    )
  }
}
