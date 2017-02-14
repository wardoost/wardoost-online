import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import styles from './About.scss'

@CSSModules(styles)
export default class About extends PureComponent {
  render () {
    return (
      <div styleName='about' {...this.props}>
        <h1>About</h1>
        <p>Loving code, motion design and everything interactive.</p>
        <p>Voluptate est eiusmod occaecat nulla aute duis Lorem labore pariatur aliquip cupidatat irure est do incididunt nulla in. Excepteur sint enim non nulla incididunt eu incididunt ex ex deserunt esse ullamco cillum qui. Quis cillum fugiat nulla elit duis ea labore aute do aliquip nisi occaecat eu. Ea irure exercitation consectetur ad adipisicing eiusmod proident nulla sint. Consequat adipisicing ad magna adipisicing ut ad aute commodo ipsum sit id excepteur id irure velit. Incididunt voluptate eiusmod minim aliquip fugiat tempor ex est. Est ea ut pariatur dolore proident magna pariatur ullamco reprehenderit laborum in consequat commodo laborum laboris. Reprehenderit commodo quis qui ad quis minim magna et sit sint proident est voluptate.</p>
        <p>Consectetur cupidatat minim culpa consequat incididunt velit ipsum eu pariatur duis commodo culpa. Eu anim laboris ullamco excepteur culpa amet nulla sit in qui tempor reprehenderit ea duis non esse fugiat. Laboris anim cupidatat sit laborum est deserunt nostrud mollit aliquip reprehenderit. Id esse Lorem laborum minim amet qui quis duis occaecat veniam aliqua esse sint dolor occaecat.</p>
        <Link styleName='icon-down' to='/#work'>
          <FaAngleDown />
        </Link>
      </div>
    )
  }
}
