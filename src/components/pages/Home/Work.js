/* @flow */
import React from 'react'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import SectionAnimated from '../../common/SectionAnimated'
import dotdev from '../../../assets/dotdev.jpg'
import superkraft from '../../../assets/superkraft.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import storyMeWellPlayed from '../../../assets/storyme-wellplayed.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import envato from '../../../assets/envato.jpg'
import styles from './Work.scss'

type WorkItem = {
  title: string,
  when: string,
  description: string,
  image: any,
  links: Array<{
    url: string,
    label: string
  }>
}

const works: Array<WorkItem> = [
  {
    title: 'DotDev',
    when: '2017',
    description: '<a href="https://www.instagram.com/p/BMdlRj9l7-1/" target="_blank">Code, everyday, DotDev.</a> My new Melbournian mates know what it\'s about! My <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">JavaScript</a> and <a href="https://facebook.github.io/react/" target="_blank">React</a>/<a href="https://facebook.github.io/react-native/" target="_blank">React Native</a> skills are growing exponentially. This is the future, the future is code.',
    image: dotdev,
    links: [{
      url: 'https://dotdev.com.au/',
      label: 'dotdev.com.au'
    }]
  },
  {
    title: 'SuperKraft',
    when: '2013-2016',
    description: 'Loved working here for more than 3 years. As it was a small agency when I started I dealt with a broad range of responsibilities over the years. Creating EDM workflows to thinking up social media campaigns to managing a small dev team. Good for gaining a lot of experience really fast.',
    image: superkraft,
    links: [{
      url: 'https://www.superkraft.be/',
      label: 'superkraft.be'
    }]
  },
  {
    title: 'TinderMe Cards',
    when: '2016',
    description: 'Website created in collaboration with <a href="http://driesdepoorter.be/" target="_blank">Dries Depoorter</a> to generate personalised <a href="https://www.gotinder.com/" target="_blank">Tinder</a> business cards. Go create your own and make your business life a little more exciting!',
    image: tinderMeCards,
    links: [{
      url: 'http://www.tinderme.cards/',
      label: 'tinderme.cards'
    }, {
      url: 'https://creators.vice.com/en_au/article/tinder-business-cards-depoorter',
      label: 'creators.vice.com'
    }]
  },
  {
    title: 'StoryMe & Well Played',
    when: '2012-2013',
    description: 'Motion designing short explainer videos as a freelancer for <a href="http://www.storyme.com/" target="_blank">StoryMe</a> and <a href="http://www.wellplayed.video/" target="_blank">Well Played</a>. Saw every hidden panel of After Effects while doing this.',
    image: storyMeWellPlayed,
    links: [{
      url: 'http://www.wellplayed.video/',
      label: 'wellplayed.video'
    }, {
      url: 'http://www.storyme.com/',
      label: 'storyme.com'
    }]
  },
  {
    title: 'Shooting the Apes',
    when: '2011-2014',
    description: 'Collective I co-created with <a href="http://www.jeroensmans.be/" target="_blank">Jeroen Smans</a> to release event movies for concerts and festivals.',
    image: shootingTheApes,
    links: [{
      url: 'https://vimeo.com/shootingtheapes',
      label: 'Vimeo profile'
    }]
  },
  {
    title: 'Envato',
    when: '2008-2010',
    description: '<a href="http://www.adobe.com/software/flash/about/" target="_blank">Flash</a> might be a thing of the past but in it&apos;s time it was THE tool to make fancy animations. The <a href="https://market.envato.com/" target="_blank">Envato Market</a> was an ideal place to test out my creations with my first real clients.',
    image: envato,
    links: [{
      url: 'https://themeforest.net/user/wardoosterlijnck',
      label: 'Envato profile'
    }]
  }
]

export default function Work (props: {activeSection?: string}) {
  const id = 'work'
  const {activeSection, ...rest} = props
  const active = activeSection === id

  const renderWorkItem = (item: WorkItem, i) => {
    const {title, when, description, image, links} = item

    return (
      <Unit
        key={i}
        mdSize='1-2'
        xlSize='1-3'
        style={{transitionDelay: `${active ? 100 * (i + 1) : 100 * (works.length - i)}ms`}}
      >
        <div
          className={styles.work}
          style={{paddingBottom: (Math.floor(links.length / 2) + links.length % 2) * 65 - 10}}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.when}>{when}</p>
          <Grid gutter='md'>
            <Unit smSize='1-3' mdSize='1-1' lgSize='1-3'>
              <Image src={image} alt={title} className={styles.img} />
            </Unit>
            <Unit smSize='2-3' mdSize='1-1' lgSize='2-3' className={styles.description}>
              <p dangerouslySetInnerHTML={{ __html: description }} />
            </Unit>
          </Grid>
        </div>
        <div className={styles.links}>
          <Grid>
            {links.map((link, i) => {
              return (
                <Unit key={i} smSize={links.length % 2 !== 0 && links.length - i === 1 ? '1-1' : '1-2'}>
                  <a className={styles.link} href={link.url} target='_blank'>
                    <FaChain /> {link.label || link.url}
                  </a>
                </Unit>
              )
            })}
          </Grid>
        </div>
      </Unit>
    )
  }

  return (
    <SectionAnimated id={id} title='Work' active={active} {...rest}>
      <div className={styles.intro}>
        <p>You don't become a full stack developer overnight.</p>
      </div>
      <Grid gutter='xs'>
        {works.map(renderWorkItem)}
      </Grid>
    </SectionAnimated>
  )
}
