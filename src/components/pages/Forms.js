import React, {PureComponent} from 'react'
import {Grid, Unit, Form, FormGroup, Input, Checkbox, Radio} from '../ui'

export default class Buttons extends PureComponent {
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
            <h2>Checkboxes and radios</h2>
            <Form>
              <Checkbox value='' id='option1'>Option 1</Checkbox>
              <Radio value='' id='option2' name='options' defaultChecked>Option 2</Radio>
              <Radio value='' id='option3' name='options'>Option 3</Radio>
            </Form>
          </Unit>
        </Grid>
      </div>
    )
  }
}
