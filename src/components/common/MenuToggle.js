import React, {PureComponent, PropTypes} from 'react'
import CSSModules from 'react-css-modules'
import styles from './MenuToggle.scss'

@CSSModules(styles)
export default class MenuToggle extends PureComponent {
  static propTypes = {
    active: PropTypes.bool.isRequired
  }

  path1Length = 2158.35791015625
  path2Length = 700
  path3Length = 1928.2093505859375
  burgerLength = this.path2Length
  crossLength = 707.107

  render () {
    const {path1Length, path2Length, path3Length, burgerLength, crossLength} = this
    const {active, ...props} = this.props

    const path1Style = active
    ? {
      strokeDasharray: `${crossLength} ${path1Length - crossLength}`,
      strokeDashoffset: -(path1Length - crossLength)
    } : {
      strokeDasharray: `${burgerLength} ${path1Length - burgerLength}`,
      strokeDashoffset: 0
    }

    const path2Style = active
    ? {
      strokeDasharray: `0 ${path2Length / 2}`,
      strokeDashoffset: -(path2Length) / 2
    } : {
      strokeDasharray: `${burgerLength} 0`,
      strokeDashoffset: 0
    }

    const path3Style = active
    ? {
      strokeDasharray: `${crossLength} ${path3Length - crossLength}`,
      strokeDashoffset: -(path3Length - crossLength)
    } : {
      strokeDasharray: `${burgerLength} ${path3Length - burgerLength}`,
      strokeDashoffset: 0
    }

    return (
      <div styleName='menu-toggle' {...props}>
        <svg
          version='1.1'
          preserveAspectRatio='xMidYMid meet'
          fill='none'
          stroke='currentColor'
          strokeWidth='100'
          x='0px'
          y='0px'
          viewBox='0 0 1000 1000'>
          <path
            styleName='path1'
            style={path1Style}
            d='M150,250h700c51,0,75,21,75,70v380c0,117-101.5,123.5-175,50L250,250' />
          <path
            styleName='path2'
            style={path2Style}
            d='M150,750h700' />
          <path
            styleName='path3'
            style={path3Style}
            d='M850,500H150c-50,0-75,24-75,70v145.3C75,837,166,834,250,750l500-500' />
        </svg>
      </div>
    )
  }
}
