import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {Grid, Unit} from '../ui'
import styles from './Error.scss'

const emojis = ['😭', '😡', '🙄', '🤔', '😕', '🙁', '😦', '😵', '😪', '🤥', '🐒', '😰', '😢', '😱', '😳', '☠️', '💥', '🖕', '👎', '🙃', '😖', '😩', '😫', '😤']

@CSSModules(styles)
export default class Error extends PureComponent {
  static propTypes = {
    title: React.PropTypes.string,
    message: React.PropTypes.string
  }

  static defaultProps = {
    title: '404',
    message: 'This page could not be found'
  }

  render () {
    const {title, message} = this.props
    const emoji = emojis[Math.floor(Math.random() * emojis.length)]

    return (
      <main>
        <div styleName='page-middle'>
          <Grid padding='xl'>
            <Unit mdSize='1-3' lgSize='2-5' styleName='title'>
              <h1>{title}</h1>
            </Unit>
            <Unit mdSize='2-3' lgSize='3-5' styleName='message'>
              <span>{message}</span>
              <span styleName='emoji'>{emoji}</span>
            </Unit>
          </Grid>
        </div>
      </main>
    )
  }
}
