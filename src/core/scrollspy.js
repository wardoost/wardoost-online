import {throttle, autobind} from 'core-decorators'

export default class ScrollSpy {
  constructor (linkRefs, loc, cb, duration = 1000, offset = 0, element = document.body) {
    if (typeof cb !== 'function') {
      throw new Error('callback should be a function')
    }

    this._linkRefs = linkRefs.reverse()
    this._cb = cb
    this._duration = duration
    this._offset = offset
    this._element = element
    this.scrollTop = window.pageYOffset

    this.init(loc)
  }

  init (loc) {
    this.updateTargets(loc)
    setTimeout(() => {
      window.addEventListener('scroll', this.onScroll)
    }, 500)
  }

  @autobind
  @throttle(100)
  onScroll (e) {
    const scrollTop = window.pageYOffset
    const maxScroll = document.body.clientHeight - window.innerHeight
    const scrollCheck = scrollTop + scrollTop / maxScroll * window.innerHeight
    const activeItem = scrollTop > this._scrollTop
    ? this._targets.find(item => scrollCheck > item.top)
    : this._targets.find(item => scrollCheck > item.top)

    if (activeItem) {
      if (activeItem.hash !== this._activeHash) {
        this._activeHash = activeItem ? activeItem.hash : ''
        this._cb(activeItem.hash)
      }
    }

    this._scrollTop = scrollTop
  }

  updateTargets (location) {
    this._targets = []
    this._linkRefs.forEach(item => {
      if (item.props.to) {
        const pathMatch = item.props.to.split('#')[0] === location.pathname
        const hash = item.props.to.split('#')[1]
        const target = document.getElementById(hash)
        if (pathMatch && target) {
          this._targets.push({
            hash: hash,
            top: target.offsetTop - target.scrollTop
          })
        }
      }
    })
  }

  updateLocation (loc, prevLoc) {
    if (prevLoc.pathname !== loc.pathname) {
      this.updateTargets(loc)
      this.scrollTo(loc.hash.substring(1))
    } else if (prevLoc.hash !== loc.hash && loc.action !== 'REPLACE') {
      this.scrollTo(loc.hash.substring(1))
    }
    this._activeHash = loc.hash.substring(1)
  }

  scrollTo (to, duration) {
    const dur = duration || this._duration
    const max = document.body.clientHeight - window.innerHeight
    const start = this._element.scrollTop
    const child = document.getElementById(to)
    const end = (typeof to === 'number' ? to : to ? child ? child.offsetTop : start : 0) - this._offset
    const change = (end > max ? max : end) - start
    const increment = 20

    window.removeEventListener('scroll', this.onScroll)

    const animateScroll = elapsedTime => {
      elapsedTime += increment
      var position = this.easeInOut(elapsedTime, start, change, dur)
      this._element.scrollTop = position
      if (elapsedTime < dur) {
        setTimeout(() => {
          animateScroll(elapsedTime)
        }, increment)
      } else {
        window.addEventListener('scroll', this.onScroll)
      }
    }
    animateScroll(0)
  }

  scrollTop (duration) {
    this.scrollTo(0, duration || this._duration)
  }

  easeInOut (currentTime, start, change, duration) {
    currentTime /= duration / 2
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start
    }
    currentTime -= 1
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
  }
}
