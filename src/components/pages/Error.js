/* @flow */
import React from 'react'
import {Grid, Unit} from '../ui'
import styles from './Error.scss'

export default function Error ({title = '404', message = 'This page could not be found'}: {title?: string, message?: string}) {
  const emojis: Array<string> = ['😭', '😡', '🙄', '🤔', '😕', '🙁', '😦', '😵', '😪', '🤥', '🐒', '😰', '😢', '😱', '😳', '☠️', '🖕', '👎', '🙃', '😖', '😩', '😫', '😤']
  const emoji = emojis[Math.floor(Math.random() * emojis.length)]

  return (
    <main className={styles.error}>
      <div className={styles.verticalCenter}>
        <Grid gutter='xl'>
          <Unit mdSize='1-3' lgSize='2-5' className={styles.title}>
            <h1>{title}</h1>
          </Unit>
          <Unit mdSize='2-3' lgSize='3-5' className={styles.message}>
            <span>{message}</span>
            <span className={styles.emoji}>{emoji}</span>
          </Unit>
        </Grid>
      </div>
    </main>
  )
}
