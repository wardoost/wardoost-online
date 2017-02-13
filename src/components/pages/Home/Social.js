import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaMedium from 'react-icons/lib/fa/medium'
import styles from './Social.scss'

@CSSModules(styles)
export default class Social extends PureComponent {
  render () {
    return (
      <div className='animated' {...this.props}>
        <h1>Social</h1>
        <p>Want to know more about me? Stalk me here</p>
        <ul styleName='social'>
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
      </div>
    )
  }
}
