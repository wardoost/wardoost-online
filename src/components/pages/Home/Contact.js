/* @flow */
import React, {PureComponent} from 'react'
import {autobind} from 'core-decorators'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'
import SectionAnimated from '../../common/SectionAnimated'
import {Grid, Unit, Form, Input, Button} from '../../ui'
import styles from './Contact.scss'

type Props = {
  activeSection: string,
  atPageEnd: boolean
}

type State = {
  name: string,
  email: string,
  message: string
}

export default class Contact extends PureComponent {
  props: Props
  state: State
  nameInput: any

  state = {
    name: '',
    email: '',
    message: ''
  }

  id = 'contact'

  @autobind
  handleInputChange (e: Object) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  componentDidUpdate (prevProps: Props) {
    if (!prevProps.atPageEnd && this.props.atPageEnd && !this.state.name && !this.state.email && !this.state.message) {
      this.nameInput.refs.input.focus()
    }
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {activeSection, atPageEnd, ...props} = this.props
    const active = activeSection === this.id

    return (
      <SectionAnimated id={this.id} title='Contact' active={active} {...props}>
        <div className={styles.intro}>
          <p>Want to hire me, work with me or just have something awesome to share?<br />Send me an email or fill in the contact form.</p>
        </div>
        <Grid gutter='xs'>
          <Unit smSize='1-4' mdSize='1-5' className={styles.mail} style={{transitionDelay: '0.1s'}}>
            <a href='mailto:wardoosterlijnck@gmail.com' target='_blank' title='Send me an email'>
              <div className={styles.iconMail}>
                <FaEnvelope />
              </div>
            </a>
          </Unit>
          <Unit smSize='3-4' mdSize='4-5' style={{transitionDelay: '0.2s'}}>
            <div className={styles.form}>
              <Form
                kind='stacked'
                name='contact'
                method='POST'
                action='https://formspree.io/wardoosterlijnck@gmail.com'>
                <fieldset>
                  <Input
                    type='text'
                    placeholder='Name'
                    name='name'
                    ref={input => { this.nameInput = input }}
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    size='1' />
                  <Input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    size='1'
                    required />
                  <textarea
                    type='text'
                    placeholder='Message'
                    name='message'
                    value={this.state.message}
                    onChange={this.handleInputChange}
                    required />
                  <Button type='submit' kind='primary'>
                    <FaPaperPlane className={styles.iconSend} /> Send
                      </Button>
                </fieldset>
              </Form>
            </div>
          </Unit>
        </Grid>
      </SectionAnimated>
    )
  }
}
