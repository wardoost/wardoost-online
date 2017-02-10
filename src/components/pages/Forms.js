import CSSModules from 'react-css-modules'
import React, {PureComponent} from 'react'
import {
  Form,
  FormMessage,
  FormGroup,
  ControlGroup,
  Controls,
  Input,
  Checkbox,
  Radio,
  Button
} from '../ui'
import Section from '../common/Section'
import styles from './Forms.scss'

@CSSModules(styles)
export default class Buttons extends PureComponent {
  render () {
    return (
      <div styleName='forms'>
        <h1>Forms</h1>
        <Section id='kinds'>
          <h2>Kinds</h2>
          <Form>
            <fieldset>
              <legend>Inline form</legend>
              <Input type='text' placeholder='Name' />
              <Input type='password' placeholder='Password' />
              <Checkbox id='remember'>Remember me</Checkbox>
              <Button type='submit' kind='primary'>Submit</Button>
            </fieldset>
          </Form>
          <Form kind='stacked'>
            <fieldset>
              <legend>Stacked form</legend>
              <Input type='text' placeholder='First name' required />
              <FormMessage>This is a required field</FormMessage>
              <Input type='text' placeholder='Last name' />
              <label htmlFor='state'>State</label>
              <select id='state'>
                <option>AL</option>
                <option>CA</option>
                <option>IL</option>
              </select>
              <Button type='submit' kind='primary'>Submit</Button>
            </fieldset>
          </Form>
          <Form kind='aligned'>
            <fieldset>
              <legend>Aligned inline form</legend>
              <ControlGroup>
                <label htmlFor='first'>First name</label>
                <Input id='first' type='text' placeholder='First name' />
              </ControlGroup>
              <ControlGroup>
                <label htmlFor='last'>Last name</label>
                <Input id='last' type='text' placeholder='Last name' />
              </ControlGroup>
              <Controls>
                <Checkbox value='' id='agree'>I've read the terms and conditions</Checkbox>
                <Button type='submit' kind='primary'>Submit</Button>
              </Controls>
            </fieldset>
          </Form>
        </Section>
        <Section id='input-states'>
          <h2>Input states</h2>
          <Form>
            <Input type='text' placeholder='Required input' required />
            <Input type='text' placeholder='Disabled input' disabled />
            <Input type='text' placeholder='Read-only input' readOnly />
          </Form>
        </Section>
        <Section id='grouped-inputs'>
          <h2>Grouped inputs</h2>
          <Form>
            <FormGroup>
              <Input type='email' placeholder='Email' />
              <Input type='password' placeholder='Password' />
            </FormGroup>
          </Form>
        </Section>
        <Section id='input-sizing'>
          <h2>Input sizing</h2>
          <Form>
            <fieldset>
              <Input type='text' placeholder='1' size='1' />
              <Input type='text' placeholder='1-2' size='1-2' />
              <Input type='text' placeholder='1-2' size='1-2' />
              <Input type='text' placeholder='1-3' size='1-3' />
              <Input type='text' placeholder='2-3' size='2-3' />
              <Input type='text' placeholder='3-4' size='3-4' />
              <Input type='text' placeholder='1-4' size='1-4' />
            </fieldset>
          </Form>
        </Section>
        <Section id='rounded-input'>
          <h2>Rounded input</h2>
          <Form>
            <fieldset>
              <Input type='text' placeholder='Search' rounded />
            </fieldset>
          </Form>
        </Section>
        <Section id='checkbox-and-radio'>
          <h2>Checkboxes and radios</h2>
          <Form>
            <Checkbox value='' id='option1' align>Option 1</Checkbox>
            <Radio value='' id='option2' name='options' align defaultChecked>Option 2</Radio>
            <Radio value='' id='option3' name='options' align>Option 3</Radio>
          </Form>
        </Section>
      </div>
    )
  }
}
