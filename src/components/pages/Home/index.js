import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import SectionAnimated from '../../common/SectionAnimated'
import About from './About'
import Work from './Work'
import Social from './Social'
import Contact from './Contact'
import styles from './index.scss'

@CSSModules(styles)
export default class Home extends PureComponent {
  static propTypes = {
    location: React.PropTypes.object,
    activeSection: React.PropTypes.string,
    atPageEnd: React.PropTypes.bool
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
          <Contact atPageEnd={this.props.atPageEnd} />
        </SectionAnimated>
      </main>
    )
  }
}
