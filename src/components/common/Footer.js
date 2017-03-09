import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import FaBug from 'react-icons/lib/fa/bug'
import styles from './Footer.scss'

@CSSModules(styles)
export default class Footer extends PureComponent {
  render () {
    return (
      <footer styleName='footer'>
        <div styleName='container'>
          <a
            title='Report a bug'
            href='https://github.com/wardoost/wardoost-online/issues'
            target='_blank'
            styleName='bug'>
            <i><FaBug /></i>
          </a>
        </div>
      </footer>
    )
  }
}
