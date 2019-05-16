/* @flow */
import React from 'react'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import SectionAnimated from '../../common/SectionAnimated'
import portable from '../../../assets/portable.jpg'
import dotdev from '../../../assets/dotdev.jpg'
import superkraft from '../../../assets/superkraft.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import storyMeWellPlayed from '../../../assets/storyme-wellplayed.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
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
    title: 'Portable',
    when: '2019',
    where: 'Melbourne',
    what: 'Creative technologist',
    description: 'Agile development of web applications, backed by design research. Working closely together with designers in an iterative human-centered design process resulting in effective solutions that work for its users.',
    image: portable,
    links: [{
      url: 'https://portable.com.au',
      label: 'portable.com.au'
    }]
  },
  {
    title: 'DotDev',
    when: '2017‑2019',
    where: 'Melbourne',
    what: 'Full stack developer',
    description: 'Tackling a high variety UI and UX problems and prototyping JAMstack applications for web, hybrid mobile and ChromeOS. Communicating with clients, and working as part of a software development team.',
    image: dotdev,
    links: [{
      url: 'https://dotdev.com.au/',
      label: 'dotdev.com.au'
    }]
  },
  {
    title: 'SuperKraft',
    when: '2013‑2016',
    where: 'Belgium',
    what: 'Multimedia developer',
    description: 'Motion design, EDM and web development with exposure to a broad range of technologies and methodologies.',
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
    when: '2012‑2013',
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
    when: '2011‑2014',
    description: 'Collective I co-created with <a href="http://www.jeroensmans.be/" target="_blank">Jeroen Smans</a> to release event movies for concerts and festivals.',
    image: shootingTheApes,
    links: [{
      url: 'https://vimeo.com/shootingtheapes',
      label: 'Vimeo profile'
    }]
  }
]

export default function Work (props: {activeSection?: string}) {
  const id = 'work'
  const {activeSection, ...rest} = props
  const active = activeSection === id

  const renderWorkItem = (item: WorkItem, i) => {
    const {title, when, where, what, description, image, links} = item
    const summary = [what, where, when].filter(Boolean).join(', ')

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
          <p className={styles.summary}>{summary}</p>
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
