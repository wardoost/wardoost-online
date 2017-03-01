import React, {PureComponent} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaPaperPlane from 'react-icons/lib/fa/paper-plane'
import {Grid, Unit, Form, Input, Button} from '../../ui'
import styles from './Contact.scss'

@CSSModules(styles)
export default class Contact extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool,
    atPageEnd: React.PropTypes.bool
  }

  state = {
    name: '',
    email: '',
    message: ''
  }

  @autobind
  handleInputChange (e) {
    const target = e.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  componentDidUpdate (prevProps) {
    if (!prevProps.atPageEnd && this.props.atPageEnd && !this.state.name && !this.state.email && !this.state.message) {
      this.nameInput.refs.input.focus()
    }
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {active, atPageEnd, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>Contact</h1>
        </div>
        <div styleName='intro' className='section-animated-bg'>
          <p>Want to hire me, work with me or just have something awesome to share?<br />Send me an email or fill the contact form.</p>
        </div>
        <Grid padding='xs'>
          <Unit size='1' smSize='1-4' mdSize='1-5' styleName='mail'>
            <div className='section-animated-bg' style={{transitionDelay: `0.1s`}}>
              <a styleName='mail' href='mailto:wardoosterlijnck@gmail.com' target='_blank' title='Send me an email'>
                <div styleName='icon-mail'>
                  <FaEnvelope />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1' smSize='3-4' mdSize='4-5'>
            <div className='section-animated-bg' style={{transitionDelay: `0.2s`}}>
              <div styleName='contact-form'>
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
                      <FaPaperPlane styleName='icon-send' /> Send
                    </Button>
                  </fieldset>
                </Form>
              </div>
            </div>
          </Unit>
        </Grid>
      </div>
    )
  }
}
