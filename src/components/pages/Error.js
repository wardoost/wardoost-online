import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit} from '../ui'
import styles from './Error.scss'

@CSSModules(styles)
export default class Error extends Component {
  static propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string
  }

  static defaultProps = {
    title: '404',
    message: 'This page could not be found.'
  }

  render () {
    const {title, message} = this.props

    return (
      <div>
        <div styleName='page-middle'>
          <Grid padded>
            <Unit size='2-5' styleName='title'>
              <h1>{title}</h1>
            </Unit>
            <Unit size='3-5' styleName='message'>
              <p>{message}</p>
            </Unit>
          </Grid>
        </div>
      </div>
    )
  }
}
