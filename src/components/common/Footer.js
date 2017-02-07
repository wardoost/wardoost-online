import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import GoCode from 'react-icons/lib/go/code'
import styles from './Footer.scss'

@CSSModules(styles)
export default class Footer extends Component {
  render () {
    return (
      <footer styleName='footer'>
        <a href='https://www.wardoost.online/' target='_blank' styleName='link-code'>
          <GoCode /> by Ward
        </a>
      </footer>
    )
  }
}
