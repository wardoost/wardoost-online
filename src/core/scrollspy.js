/* @flow */
import {throttle, autobind} from 'core-decorators'
import type {Menu} from './menu'

type Options = {
  onUpdateActive?: Function,
  onUpdateAtEnd?: Function,
  duration?: number,
  offset?: number,
  location?: Object,
  delay?: number
}

export default class ScrollSpy {
  _menu: Menu
  _updateActiveCb: Function
  _atEndCb: Function
  _duration: number
  _offset: number
  _location: Object
  _scrollTop: number
  _delay: number
  _enabled: boolean
  _targets: Array<{ hash: string, top: number}>
  _activeHash: string
  _el: Object

  constructor (menu: Menu, options: Options) {
    this._menu = menu
    this._updateActiveCb = options.onUpdateActive || function () {}
    this._atEndCb = options.onUpdateAtEnd || function () {}
    this._duration = options.duration || 1000
    this._offset = options.offset || 0
    this._location = options.location || window.location
    this._scrollTop = window.pageYOffset || window.scrollY || 0
    this._delay = options.delay || 50
    this._enabled = true
    this._el = document.body || {clientHeight: 0}

    this.init()
  }

  get menu (): Menu {
    return this._menu
  }

  set menu (menu: Menu) {
    this._menu = menu
    this.updateTargets()
  }

  init () {
    setTimeout(() => {
      this.updateTargets()
      window.addEventListener('scroll', this.onScroll)
      window.addEventListener('resize', this.updateTargets)
    }, this._delay)
  }

  @autobind
  @throttle(100)
  onScroll (e: any) {
    const scrollTop = window.pageYOffset || window.scrollY || 0
    const scrollPosition = scrollTop < 0 ? 0 : scrollTop // Minimum of 0, Safari goes below 0
    const windowHeight = window.innerHeight
    const scrollHeight = this._el.clientHeight - windowHeight
    const correctionTopThreshold = windowHeight / 2
    const correctionTop = (scrollPosition < correctionTopThreshold ? scrollPosition / correctionTopThreshold : 1) * windowHeight / 2
    const correctionBottomThreshold = scrollHeight - windowHeight / 2
    const correctionBottom = (scrollPosition > correctionBottomThreshold ? (scrollPosition - correctionBottomThreshold) / (scrollHeight - correctionBottomThreshold) : 0) * windowHeight / 2
    const scrollCheck = scrollPosition + correctionTop + correctionBottom + this._offset
    const activeItem = scrollTop > this._scrollTop
    ? this._targets.find(item => scrollCheck > item.top)
    : this._targets.find(item => scrollCheck >= item.top)
    const newHash = activeItem ? activeItem.hash : ''

    if (newHash !== this._activeHash) {
      this._activeHash = newHash
      this._updateActiveCb(newHash)
    }

    if (scrollTop > this._scrollTop && scrollTop >= scrollHeight) {
      this._atEndCb(true)
    } else if (scrollTop < this._scrollTop) {
      this._atEndCb(false)
    }

    this._scrollTop = scrollTop
  }

  @autobind
  @throttle(500)
  updateTargets () {
    this._targets = []
    this._menu.forEach(item => {
      const pathMatch = item.to.split('#')[0] === this._location.pathname
      const hash = item.to.split('#')[1]
      const target = document.getElementById(hash)
      if (pathMatch && target) {
        this._targets.push({
          hash: hash,
          top: target.offsetTop
        })
      }
    })
    this._targets.reverse()
    this.onScroll()
  }

  updateLocation (location: any) {
    if (location !== this._location) {
      const prevLocation = this._location
      this._location = location
      if (prevLocation.pathname !== this._location.pathname) {
        setTimeout(() => {
          this.updateTargets()
          this.scrollTo(this._location.hash.substring(1))
        }, this._delay)
      } else {
        this.scrollTo(this._location.hash.substring(1))
      }
      this._activeHash = this._location.hash.substring(1)
    }
  }

  scrollTo (to: string | number, duration: number = this._duration) {
    const max = this._el.clientHeight - window.innerHeight
    const start = window.pageYOffset || window.scrollY || 0
    const child = typeof to === 'string' ? document.getElementById(to) : null
    const end = (typeof to === 'number' ? to : to ? child ? child.offsetTop : start : 0) - this._offset
    const change = (end > max ? max : end) - start
    const increment = 20

    window.removeEventListener('scroll', this.onScroll)

    const animateScroll = elapsedTime => {
      elapsedTime += increment
      var position = this.easeInOut(elapsedTime, start, change, duration)
      window.scrollTo(0, position)
      if (elapsedTime < duration) {
        setTimeout(() => {
          animateScroll(elapsedTime)
        }, increment)
      } else {
        if (this._enabled) this._updateActiveCb(to)
        setTimeout(() => {
          window.addEventListener('scroll', this.onScroll)
        }, increment)
      }
    }
    animateScroll(0)
  }

  scrollToTop (duration: number = this._duration) {
    this.scrollTo(0, duration)
  }

  easeInOut (currentTime: number, start: number, change: number, duration: number): number {
    currentTime /= duration / 2
    if (currentTime < 1) {
      return change / 2 * currentTime * currentTime + start
    }
    currentTime -= 1
    return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
  }

  enable () {
    this._enabled = true
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.updateTargets)
  }

  disable () {
    this._enabled = false
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.updateTargets)
  }
}
