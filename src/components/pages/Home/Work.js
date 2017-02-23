import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import oink from '../../../assets/oink.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import storyMeWellPlayed from '../../../assets/storyme-wellplayed.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import styles from './Work.scss'

const works = [
  {
    title: 'Oïnk Agency',
    description: 'Loved working here for more than 3 years. As it was a small agency when I started I had a broad range of responsibilities. Creating EDM workflows to thinking up social media campaigns to managing a small dev team. Good for gaining a lot of experience really fast.',
    image: oink,
    link: {
      url: 'https://www.oink.agency/',
      label: 'oink.agency'
    }
  },
  {
    title: 'TinderMe Cards',
    description: 'Website to create business cards of your <a href="https://www.gotinder.com/" target="_blank">Tinder</a> profile. Go create your own and make you business life a little more exciting!',
    image: tinderMeCards,
    link: {
      url: 'http://www.tinderme.cards/',
      label: 'tinderme.cards'
    }
  },
  {
    title: 'StoryMe & Well Played',
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
    description: 'Collective I co-created with <a href="http://www.jeroensmans.be/" target="_blank">Jeroen Smans</a> to release event movies for concerts and festivals.',
    image: shootingTheApes,
    link: {
      url: 'https://vimeo.com/shootingtheapes',
      label: 'Vimeo profile'
    }
  }
]

@CSSModules(styles)
export default class Work extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  createWorkLinks (links) {
    if (links) {
      return (
        <div styleName='work-links'>
          <Grid>
            {links.map((link, i) => {
              return (
                <Unit key={i} smSize={links.length % 2 !== 0 && links.length - i === 1 ? '1' : '1-2'}>
                  <div styleName='work-link'>
                    <a href={link.url} target='_blank'>
                      <FaChain /> {link.label || link.url}
                    </a>
                  </div>
                </Unit>
              )
            })}
          </Grid>
        </div>
      )
    } else {
      return null
    }
  }

  createWorkItems (active) {
    return works.map((item, i) => {
      const {title, description, image} = item
      let links = item.link ? [item.link] : item.links

      return (
        <Unit key={i} size='1' mdSize='1-2' xlSize='1-3'>
          <div
            className='section-animated-bg'
            style={{transitionDelay: `${active ? 100 * (i + 1) : 100 * (works.length - i)}ms`}}>
            <div
              styleName='work'
              style={{paddingBottom: 20 + (Math.floor(links.length / 2) + links.length % 2) * 65}}>
              <h2>{title}</h2>
              <Grid padding='md'>
                <Unit smSize='1-3'>
                  <Image src={image} alt={title} styleName='work-img' />
                </Unit>
                <Unit smSize='2-3'>
                  <p styleName='work-description' dangerouslySetInnerHTML={{ __html: description }} />
                </Unit>
              </Grid>
            </div>
            {this.createWorkLinks(links)}
          </div>
        </Unit>
      )
    })
  }

  render () {
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>Work</h1>
        </div>
        <Grid padding='xs'>
          {this.createWorkItems(active)}
        </Grid>
      </div>
    )
  }
}
