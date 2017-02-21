import React, {PureComponent} from 'react'
import {Link} from 'react-router'
import CSSModules from 'react-css-modules'
import FaAngleDown from 'react-icons/lib/fa/angle-down'
import styles from './About.scss'

@CSSModules(styles)
export default class About extends PureComponent {
  static propTypes = {
    active: React.PropTypes.bool
  }

  render () {
    // eslint-disable-next-line no-unused-vars
    const {active, ...props} = this.props

    return (
      <div {...props}>
        <div className='section-animated-header'>
          <h1>About</h1>
        </div>
        <div styleName='intro' className='section-animated-bg'>
          <p>Loving code, motion design and everything interactive.</p>
          <p>Voluptate est eiusmod occaecat nulla aute duis Lorem labore pariatur aliquip cupidatat irure est do incididunt nulla in. Excepteur sint enim non nulla incididunt eu incididunt ex ex deserunt esse ullamco cillum qui. Quis cillum fugiat nulla elit duis ea labore aute do aliquip nisi occaecat eu.</p>
        </div>
        <div styleName='icon-down' className='section-animated'>
          <Link to='/#work'>
            <FaAngleDown />
          </Link>
        </div>
      </div>
    )
  }
}
