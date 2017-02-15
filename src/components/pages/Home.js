import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import SectionAnimated from '../common/SectionAnimated'
import About from './Home/About'
import Work from './Home/Work'
import Social from './Home/Social'
import Contact from './Home/Contact'
import styles from './Home.scss'

@CSSModules(styles)
export default class Home extends PureComponent {
  static propTypes = {
    location: React.PropTypes.object,
    activeSection: React.PropTypes.string
  }

  render () {
    return (
      <main>
        <SectionAnimated
          id='about'
          active={this.props.activeSection === 'about' || this.props.activeSection === ''}
          styleName='about'>
          <About />
        </SectionAnimated>
        <SectionAnimated
          id='work'
          active={this.props.activeSection === 'work'}
          styleName='work'>
          <Work />
        </SectionAnimated>
        <SectionAnimated
          id='social'
          active={this.props.activeSection === 'social'}
          styleName='social'>
          <Social />
        </SectionAnimated>
        <SectionAnimated
          id='contact'
          active={this.props.activeSection === 'contact'}
          styleName='contact'>
          <Contact />
        </SectionAnimated>
      </main>
    )
  }
}
