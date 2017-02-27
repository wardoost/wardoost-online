import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import oink from '../../../assets/oink.jpg'
import vercamstConsult from '../../../assets/vercamst-consult.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import storyMeWellPlayed from '../../../assets/storyme-wellplayed.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import envato from '../../../assets/envato.jpg'
import styles from './Work.scss'

const works = [
  {
    title: 'Oïnk Agency',
    when: '2013-2016',
    description: 'Loved working here for more than 3 years. As it was a small agency when I started I dealt with a broad range of responsibilities over the years. Creating EDM workflows to thinking up social media campaigns to managing a small dev team. Good for gaining a lot of experience really fast.',
    image: oink,
    link: {
      url: 'https://www.oink.agency/',
      label: 'oink.agency'
    }
  },
  {
    title: 'Vercamst Consult',
    when: '2016',
    description: 'I taught myself <a href="https://facebook.github.io/react/" target="_blank">React</a> and <a href="http://redux.js.org/" target="_blank">Redux</a> while developing this basic but clean website. Content management is powered by <a href="https://firebase.google.com/" target="_blank">Firebase</a>. These are the technologies I will use in the future as they work so well together.',
    image: vercamstConsult,
    link: {
      url: 'https://www.vercamstconsult.be/',
      label: 'vercamstconsult.be'
    }
  },
  {
    title: 'TinderMe Cards',
    when: '2016',
    description: 'Website created in collaboration with <a href="http://driesdepoorter.be/" target="_blank">Dries Depoorter</a> to generate personalised <a href="https://www.gotinder.com/" target="_blank">Tinder</a> business cards. Go create your own and make you business life a little more exciting!',
    image: tinderMeCards,
    link: {
      url: 'http://www.tinderme.cards/',
      label: 'tinderme.cards'
    }
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
    link: {
      url: 'https://vimeo.com/shootingtheapes',
      label: 'Vimeo profile'
    }
  },
  {
    title: 'Envato',
    when: '2008-2010',
    description: '<a href="http://www.adobe.com/software/flash/about/" target="_blank">Flash</a> might be a thing of the past but in it&apos;s time it was THE tool to make fancy animations. The <a href="https://market.envato.com/" target="_blank">Envato Market</a> was the ideal place to test out my creations with my first real clients.',
    image: envato,
    link: {
      url: 'https://themeforest.net/user/wardoosterlijnck',
      label: 'Envato profile'
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
                  <a styleName='work-link' href={link.url} target='_blank'>
                    <FaChain /> {link.label || link.url}
                  </a>
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
      const {title, when, description, image} = item
      let links = item.link ? [item.link] : item.links

      return (
        <Unit key={i} size='1' mdSize='1-2' xlSize='1-3'>
          <div
            className='section-animated-bg'
            style={{transitionDelay: `${active ? 100 * (i + 1) : 100 * (works.length - i)}ms`}}>
            <div
              styleName='work'
              style={{paddingBottom: (Math.floor(links.length / 2) + links.length % 2) * 65 - 10}}>
              <h2 styleName='work-title'>{title}</h2>
              <p styleName='work-when'>{when}</p>
              <Grid padding='md'>
                <Unit smSize='1-3' mdSize='1' lgSize='1-3'>
                  <Image src={image} alt={title} styleName='work-img' />
                </Unit>
                <Unit smSize='2-3' mdSize='1' lgSize='2-3' styleName='work-description'>
                  <p dangerouslySetInnerHTML={{ __html: description }} />
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
        <div styleName='intro' className='section-animated-bg'>
          <p>This selection of work shows my journey in the digital world.</p>
        </div>
        <Grid padding='xs'>
          {this.createWorkItems(active)}
        </Grid>
      </div>
    )
  }
}
