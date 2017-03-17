/* @flow */
import React, {PureComponent} from 'react'
import {Grid, Unit} from '../ui'
import styles from './Error.scss'

type Props = {
  title: string,
  message: string
}

export default class Error extends PureComponent {
  props: Props

  static defaultProps = {
    title: '404',
    message: 'This page could not be found'
  }

  emojis: Array<string> = ['😭', '😡', '🙄', '🤔', '😕', '🙁', '😦', '😵', '😪', '🤥', '🐒', '😰', '😢', '😱', '😳', '☠️', '🖕', '👎', '🙃', '😖', '😩', '😫', '😤']
  emoji:string = this.emojis[Math.floor(Math.random() * this.emojis.length)]

  render () {
    return (
      <main className={styles.error}>
        <div className={styles.verticalCenter}>
          <Grid gutter='xl'>
            <Unit mdSize='1-3' lgSize='2-5' className={styles.title}>
              <h1>{this.props.title}</h1>
            </Unit>
            <Unit mdSize='2-3' lgSize='3-5' className={styles.message}>
              <span>{this.props.message}</span>
              <span className={styles.emoji}>{this.emoji}</span>
            </Unit>
          </Grid>
        </div>
      </main>
    )
  }
}
