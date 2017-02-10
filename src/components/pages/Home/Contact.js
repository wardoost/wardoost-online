import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaMedium from 'react-icons/lib/fa/medium'
import styles from './Contact.scss'

@CSSModules(styles)
export default class Contact extends PureComponent {
  render () {
    return (
      <section id='contact' styleName='contact'>
        <h1>Contact</h1>
        <p>You want to hire me, work with me or just have something awesome to show me?</p>
        <p>Hit me up at one of these</p>
        <ul styleName='social'>
          <li styleName='mail'>
            <a href='mailto:wardoosterlijnck@gmail.com' target='_blank' title='Send me an email'>
              <FaEnvelope />
            </a>
          </li>
          <li styleName='twitter'>
            <a href='https://twitter.com/wardoost' target='_blank' title='Follow me on Twitter'>
              <FaTwitter />
            </a>
          </li>
          <li styleName='github'>
            <a href='https://github.com/wardoost' target='_blank' title='My coding lifestyle on GitHub'>
              <FaGithub />
            </a>
          </li>
          <li styleName='linkedin'>
            <a href='https://www.linkedin.com/in/wardoost' target='_blank' title='My professional life on LinkedIn'>
              <FaLinkedin />
            </a>
          </li>
          <li styleName='medium'>
            <a href='https://medium.com/@wardoost' target='_blank' title='What I read on Medium'>
              <FaMedium />
            </a>
          </li>
        </ul>
      </section>
    )
  }
}
