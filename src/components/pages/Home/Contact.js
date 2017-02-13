import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaEnvelope from 'react-icons/lib/fa/envelope'
import styles from './Contact.scss'

@CSSModules(styles)
export default class Contact extends PureComponent {
  render () {
    return (
      <div className='animated' {...this.props}>
        <h1>Contact</h1>
        <p>You want to hire me, work with me or just have something awesome to show me?</p>
        <a styleName='mail' href='mailto:wardoosterlijnck@gmail.com' target='_blank' title='Send me an email'>
          <FaEnvelope />
        </a>
      </div>
    )
  }
}
