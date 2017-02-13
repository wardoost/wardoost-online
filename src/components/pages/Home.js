import React, {PureComponent} from 'react'
import {autobind} from 'core-decorators'
import CSSModules from 'react-css-modules'
import ScrollSpy from '../../core/scrollspy'
import SectionAnimated from '../common/SectionAnimated'
import About from './Home/About'
import Work from './Home/Work'
import Social from './Home/Social'
import Contact from './Home/Contact'
import styles from './Home.scss'

@CSSModules(styles)
export default class Home extends PureComponent {
  state = {
    activeSection: window.location.hash.substring(1)
  }

  sections = []

  componentDidMount () {
    this.scrollSpy = new ScrollSpy(this.sections, {
      callback: this.updateActiveSection,
      duration: 400
    })
  }

  @autobind
  updateActiveSection (id) {
    this.setState({activeSection: id})
  }

  render () {
    return (
      <main>
        <SectionAnimated
          id='about'
          ref={section => { this.sections.push(section) }}
          active={this.state.activeSection === 'about'}
          styleName='about'>
          <About />
        </SectionAnimated>
        <SectionAnimated
          id='work'
          ref={section => { this.sections.push(section) }}
          active={this.state.activeSection === 'work'}
          styleName='work'>
          <Work />
        </SectionAnimated>
        <SectionAnimated
          id='social'
          ref={section => { this.sections.push(section) }}
          active={this.state.activeSection === 'social'}
          styleName='social'>
          <Social />
        </SectionAnimated>
        <SectionAnimated
          id='contact'
          ref={section => { this.sections.push(section) }}
          active={this.state.activeSection === 'contact'}
          styleName='contact'>
          <Contact />
        </SectionAnimated>
      </main>
    )
  }
}
