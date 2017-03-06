import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaMedium from 'react-icons/lib/fa/medium'
import SectionAnimated from '../../common/SectionAnimated'
import {Grid, Unit} from '../../ui'
import styles from './Social.scss'

const social = [
  {
    title: 'Follow me on Twitter',
    url: 'https://twitter.com/wardoost',
    Icon: FaTwitter
  },
  {
    title: 'My coding style on GitHub',
    url: 'https://github.com/wardoost',
    Icon: FaGithub
  },
  {
    title: 'My professional life on LinkedIn',
    url: 'https://www.linkedin.com/in/wardoost',
    Icon: FaLinkedin
  },
  {
    title: 'What I read on Medium',
    url: 'https://medium.com/@wardoost',
    Icon: FaMedium
  }
]

@CSSModules(styles)
export default class Social extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    activeSection: PropTypes.string
  }

  static defaultProps = {
    id: 'social'
  }

  createSocialLinks (active) {
    return social.map((item, i) => {
      const {title, url, Icon} = item

      return (
        <Unit
          key={i}
          size={`1-${Math.ceil(social.length / 2) + (social.length % 2 && i + 1 >= social.length ? 1 : 0)}`} smSize={`1-${social.length}`}
          styleName='social'
          style={{transitionDelay: `${active ? 100 * (i + 1) : 100 * (social.length - i)}ms`}}>
          <a href={url} target='_blank' title={title}>
            <div styleName='icon'>
              <Icon />
            </div>
          </a>
        </Unit>
      )
    })
  }

  render () {
    const {activeSection, ...props} = this.props
    const active = activeSection === this.props.id

    return (
      <SectionAnimated title='Social' active={active} {...props}>
        <div styleName='intro'>
          <p>Want to know more about me? Stalk me on these.</p>
        </div>
        <Grid gutter='xs'>
          {this.createSocialLinks(active)}
        </Grid>
      </SectionAnimated>
    )
  }
}
