import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit, Image} from '../../ui'
import oink from '../../../assets/oink.png'
import tinderMeCards from '../../../assets/tinderme-cards.png'
import shootingTheApes from '../../../assets/shooting-the-apes.jpg'
import styles from './Work.scss'

@CSSModules(styles)
export default class Work extends PureComponent {
  render () {
    return (
      <section id='work' styleName='work'>
        <h1>Work</h1>
        <Grid padding='lg'>
          <Unit size='1' smSize='1-2' lgSize='1-3' styleName='work-item'>
            <h2>Oïnk Agency</h2>
            <p><a href='https://www.oink.agency/'>www.oink.agency</a></p>
            <Image src={oink} styleName='work-img' />
            <p>Loved working here for more than 3 years.</p>
          </Unit>
          <Unit size='1' smSize='1-2' lgSize='1-3' styleName='work-item'>
            <h2>TinderMe Cards</h2>
            <p><a href='http://www.tinderme.cards/'>www.tinderme.cards</a></p>
            <Image src={tinderMeCards} styleName='work-img' />
            <p>Website to create business cards of your <a href='https://www.gotinder.com/'>Tinder</a> profile</p>
          </Unit>
          <Unit size='1' smSize='1-2' lgSize='1-3' styleName='work-item'>
            <h2>Shooting the Apes</h2>
            <p><a href='https://vimeo.com/shootingtheapes'>Vimeo profile</a></p>
            <Image src={shootingTheApes} styleName='work-img' />
            <p>Collective I co-created with <a href='http://www.jeroensmans.be/'>Jeroen Smans</a> to release aftermovies for events and festivals</p>
          </Unit>
        </Grid>
      </section>
    )
  }
}
