import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import {Grid, Unit, Form, Input, Button} from '../../ui'
import styles from './Contact.scss'

@CSSModules(styles)
export default class Contact extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>Contact</h1>
        </div>
        <div styleName='intro' className='section-animated-bg'>
          <p>You want to hire me, work with me or just have something awesome to show?<br />Send me an email or fill the contact form.</p>
        </div>
        <Grid padding='xs'>
          <Unit size='1' smSize='1-4' mdSize='1-5' styleName='mail'>
            <div className='section-animated-bg' style={{transitionDelay: `0.1s`}}>
              <a styleName='mail' href='mailto:wardoosterlijnck@gmail.com' target='_blank' title='Send me an email'>
                <div styleName='icon'>
                  <FaEnvelope />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1' smSize='3-4' mdSize='4-5'>
            <div className='section-animated-bg' style={{transitionDelay: `0.2s`}}>
              <div styleName='contact-form'>
                <Form kind='stacked' name='contact' data-netlify>
                  <fieldset>
                    <Input type='text' placeholder='Name' size='1' />
                    <Input type='email' placeholder='Email' size='1' required />
                    <textarea type='text' placeholder='Message' required />
                    <Button type='submit' kind='primary'>Send</Button>
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
