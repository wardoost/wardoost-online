/* @flow */
import React from 'react'
import FaTwitter from 'react-icons/lib/fa/twitter'
import FaGithub from 'react-icons/lib/fa/github'
import FaLinkedin from 'react-icons/lib/fa/linkedin'
import FaMedium from 'react-icons/lib/fa/medium'
import SectionAnimated from '../../common/SectionAnimated'
import {Grid, Unit} from '../../ui'
import styles from './Social.scss'

type SocialLinks = Array<{
  title: string,
  url: string,
  Icon: any
}>

const social: SocialLinks = [
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

export default function Social (props: {activeSection?: string}) {
  const id = 'social'
  const {activeSection, ...rest} = props
  const active = activeSection === id

  const createSocialLinks = (active: boolean) => {
    return social.map((item, i) => {
      const {title, url, Icon} = item

      return (
        <Unit
          key={i}
          size={`1-${Math.ceil(social.length / 2) + (social.length % 2 && i + 1 >= social.length ? 1 : 0)}`}
          smSize={`1-${social.length}`}
          className={styles.social}
          style={{transitionDelay: `${active ? 100 * (i + 1) : 100 * (social.length - i)}ms`}}>
          <a href={url} target='_blank' title={title}>
            <div className={styles.icon}>
              <Icon />
            </div>
          </a>
        </Unit>
      )
    })
  }

  return (
    <SectionAnimated id={id} title='Social' active={active} {...rest}>
      <div className={styles.intro}>
        <p>Want to know more about me? Stalk me on these.</p>
      </div>
      <Grid gutter='xs'>
        {createSocialLinks(active)}
      </Grid>
    </SectionAnimated>
  )
}
