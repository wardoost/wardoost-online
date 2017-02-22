import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import oink from '../../../assets/oink.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import styles from './Work.scss'

const works = [
  {
    title: 'Oïnk Agency',
    description: 'Loved working here for more than 3 years.',
    image: oink,
    link: 'https://www.oink.agency/',
    linkLabel: 'www.oink.agency'
  },
  {
    title: 'TinderMe Cards',
    description: 'Website to create business cards of your <a href="https://www.gotinder.com/">Tinder</a> profile.',
    image: tinderMeCards,
    link: 'http://www.tinderme.cards/',
    linkLabel: 'www.tinderme.cards'
  },
  {
    title: 'Shooting the Apes',
    description: 'Collective I co-created with <a href="http://www.jeroensmans.be/">Jeroen Smans</a> to release event movies for concerts and festivals.',
    image: shootingTheApes,
    link: 'https://vimeo.com/shootingtheapes',
    linkLabel: 'Vimeo profile'
  }
]

@CSSModules(styles)
export default class Work extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  createWorkItems (active) {
    return works.map((item, i) => {
      const {title, description, image, link, linkLabel} = item

      return (
        <Unit key={i} size='1' smSize='1-2' lgSize='1-3'>
          <div className='section-animated-bg' style={{transitionDelay: `${active ? 0.1 * (i + 1) : 0.1 * (works.length - i)}s`}}>
            <div styleName='work-item'>
              <h2>{title}</h2>
              <Grid padding='md'>
                <Unit size='1-3' smSize='1' mdSize='1-3'>
                  <Image src={image} alt={title} styleName='work-img' />
                </Unit>
                <Unit size='2-3' smSize='1' mdSize='2-3'>
                  <p styleName='work-description' dangerouslySetInnerHTML={{ __html: description }} />
                </Unit>
              </Grid>
            </div>
            <div styleName='work-link'>
              <a href={link} target='_blank'>
                <FaChain /> {linkLabel}
              </a>
            </div>
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
