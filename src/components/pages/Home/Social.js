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
  static propTypes = {
    active: React.PropTypes.bool
  }

  render () {
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>Social</h1>
        </div>
        <div styleName='intro' className='section-animated-bg'>
          <p>Want to know more about me? Stalk me on these.</p>
        </div>
        <Grid padding='xs'>
          <Unit size='1-2' smSize='1-4' styleName='social'>
            <div className='section-animated-bg' style={{transitionDelay: `0.${active ? '1' : '4'}s`}}>
              <a href='https://twitter.com/wardoost' target='_blank' title='Follow me on Twitter'>
                <div styleName='icon'>
                  <FaTwitter />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-2' smSize='1-4' styleName='social'>
            <div className='section-animated-bg' style={{transitionDelay: `0.${active ? '2' : '3'}s`}}>
              <a href='https://github.com/wardoost' target='_blank' title='My coding style on GitHub'>
                <div styleName='icon'>
                  <FaGithub />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-2' smSize='1-4' styleName='social'>
            <div className='section-animated-bg' style={{transitionDelay: `0.${active ? '3' : '2'}s`}}>
              <a href='https://www.linkedin.com/in/wardoost' target='_blank' title='My professional life on LinkedIn'>
                <div styleName='icon'>
                  <FaLinkedin />
                </div>
              </a>
            </div>
          </Unit>
          <Unit size='1-2' smSize='1-4' styleName='social'>
            <div className='section-animated-bg' style={{transitionDelay: `0.${active ? '4' : '1'}s`}}>
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
