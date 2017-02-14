import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaMedium from 'react-icons/lib/fa/medium'
import {Grid, Unit} from '../../ui'
import styles from './Social.scss'

@CSSModules(styles)
export default class Social extends PureComponent {
  render () {
    return (
      <div {...this.props}>
        <div styleName='social-header' className='section-animated'>
          <h1>Social</h1>
          <p>Want to know more about me? Stalk me here</p>
        </div>
        <Grid padding='xs'>
          <Unit size='1-4' styleName='twitter'>
            <div className='section-animated' style={{transitionDelay: '0.1s'}}>
              <a href='https://twitter.com/wardoost' target='_blank' title='Follow me on Twitter'>
                <div styleName='icon'>
                  <FaTwitter />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-4' styleName='github'>
            <div className='section-animated' style={{transitionDelay: '0.2s'}}>
              <a href='https://github.com/wardoost' target='_blank' title='My coding lifestyle on GitHub'>
                <div styleName='icon'>
                  <FaGithub />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-4' styleName='linkedin'>
            <div className='section-animated' style={{transitionDelay: '0.3s'}}>
              <a href='https://www.linkedin.com/in/wardoost' target='_blank' title='My professional life on LinkedIn'>
                <div styleName='icon'>
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-4' styleName='medium'>
            <div className='section-animated' style={{transitionDelay: '0.4s'}}>
              <a href='https://medium.com/@wardoost' target='_blank' title='What I read on Medium'>
                <div styleName='icon'>
                  <FaMedium />
                </div>
              </a>
            </div>
          </Unit>
        </Grid>
      </div>
    )
  }
}
