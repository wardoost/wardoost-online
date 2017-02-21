import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit, Image} from '../../ui'
import FaChain from 'react-icons/lib/fa/chain'
import oink from '../../../assets/oink.jpg'
import tinderMeCards from '../../../assets/tinderme-cards.jpg'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import styles from './Work.scss'

@CSSModules(styles)
export default class Work extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  render () {
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>Work</h1>
        </div>
        <Grid padding='xs'>
          <Unit size='1' smSize='1-2' lgSize='1-3'>
            <div styleName='work-item' className='section-animated-bg' style={{transitionDelay: `0.${active ? '1' : '3'}s`}}>
              <h2>Oïnk Agency</h2>
              <Grid padding='md'>
                <Unit size='1-3'>
                  <Image src={oink} styleName='work-img' />
                </Unit>
                <Unit size='2-3'>
                  <p styleName='work-description'>
                    Loved working here for more than 3 years.
                  </p>
                  <p styleName='work-link'>
                    <FaChain /> <a href='https://www.oink.agency/'>www.oink.agency</a>
                  </p>
                </Unit>
              </Grid>
            </div>
          </Unit>
          <Unit size='1' smSize='1-2' lgSize='1-3'>
            <div styleName='work-item' className='section-animated-bg' style={{transitionDelay: '0.2s'}}>
              <h2>TinderMe Cards</h2>
              <Grid padding='md'>
                <Unit size='1-3'>
                  <Image src={tinderMeCards} styleName='work-img' />
                </Unit>
                <Unit size='2-3'>
                  <p styleName='work-description'>
                    Website to create business cards of your <a href='https://www.gotinder.com/'>Tinder</a> profile
                  </p>
                  <p styleName='work-link'>
                    <FaChain /> <a href='http://www.tinderme.cards/'>www.tinderme.cards</a>
                  </p>
                </Unit>
              </Grid>
            </div>
          </Unit>
          <Unit size='1' smSize='1-2' lgSize='1-3'>
            <div styleName='work-item' className='section-animated-bg' style={{transitionDelay: `0.${active ? '3' : '1'}s`}}>
              <h2>Shooting the Apes</h2>
              <Grid padding='md'>
                <Unit size='1-3'>
                  <Image src={shootingTheApes} styleName='work-img' />
                </Unit>
                <Unit size='2-3'>
                  <p styleName='work-description'>
                    Collective I co-created with <a href='http://www.jeroensmans.be/'>Jeroen Smans</a> to release aftermovies for events and festivals
                  </p>
                  <p styleName='work-link'>
                    <FaChain /> <a href='https://vimeo.com/shootingtheapes'>Vimeo profile</a>
                  </p>
                </Unit>
              </Grid>
            </div>
          </Unit>
        </Grid>
      </div>
    )
  }
}
