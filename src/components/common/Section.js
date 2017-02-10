import React, {PureComponent} from 'react'
import CSSModules from 'react-css-modules'
import {autobind} from 'core-decorators'
import CopyToClipboard from 'react-copy-to-clipboard'
import FaChain from 'react-icons/lib/fa/chain'
import FaCheck from 'react-icons/lib/fa/check'
import styles from './Section.scss'

@CSSModules(styles)
export default class Section extends PureComponent {
  static propTypes = {
    children: React.PropTypes.node,
    id: React.PropTypes.string.isRequired
  }

  state = {
    copiedShow: false
  }

  @autobind
  onCopy () {
    this.setState({copiedShow: true})
    setTimeout(() => {
      this.setState({copiedShow: false})
    }, 1000)
  }

  render () {
    const url = `${window.location.origin}${window.location.pathname}#${this.props.id}`

    return (
      <section {...this.props}>
        <CopyToClipboard text={url} onCopy={this.onCopy}>
          <span styleName='copy'>
            {this.state.copiedShow ? <FaCheck /> : <FaChain />}
          </span>
        </CopyToClipboard>
        {this.props.children}
      </section>
    )
  }
}
