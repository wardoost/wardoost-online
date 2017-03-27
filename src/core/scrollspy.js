/* @flow */
import {throttle, autobind} from 'core-decorators'
import type {Menu} from './menu'

const now = window.performance && window.performance.now
  ? window.performance.now.bind(window.performance) : Date.now

const ease = (t) => t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t

type Options = {
  onUpdateActive?: Function,
  onUpdateAtEnd?: Function,
  offset?: {top?: number, left?: number},
  location?: Object,
  duration?: number
}

type AnimContext = {
  to: string,
  startTime: number,
  startX: number,
  startY: number,
  endX: number,
  endY: number,
  duration: number,
  frame?: number,
  method: Function
}

export default class ScrollSpy {
  _menu: Menu
  _updateActiveCb: Function | void
  _atEndCb: Function | void
  _offset: {top: number, left: number}
  _location: Object
  _scrollTop: number
  _targets: Array<{hash: string, top: number, left: number}>
  _activeHash: string
  _atEnd: boolean
  _el: any
  _duration: number

  constructor (menu: Menu, options: Options) {
    this._menu = menu
    this._updateActiveCb = options.onUpdateActive
    this._atEndCb = options.onUpdateAtEnd
    this._offset = {top: 0, left: 0, ...options.offset}
    this._location = options.location || window.location
    this._activeHash = this._location.hash.substring(1)
    this._el = document.body
    this._duration = options.duration || 468

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
    }, 0)
  }

  @autobind
  @throttle(100)
  onScroll () {
    const wHeight = window.innerHeight
    const scrollHeight = this._el.clientHeight - wHeight
    const correction = wHeight / 2
    const corrThreshold = wHeight * 0.4
    const wTop = window.pageYOffset || window.scrollY || 0
    const corrTop = (wTop < corrThreshold ? wTop / corrThreshold : 1) * correction
    const corrBottom = (wTop > scrollHeight - corrThreshold ? (wTop - scrollHeight) / corrThreshold + 1 : 0) * correction
    const scrollPos = Math.round(wTop + corrTop + corrBottom)

    // new active item callback
    const activeItem = this._targets.find(item => scrollPos >= item.top)
    const newHash = activeItem ? activeItem.hash : ''
    if (this._updateActiveCb && newHash !== this._activeHash) {
      this._activeHash = newHash
      this._updateActiveCb(newHash)
    }

    // at page end callback
    const atEnd = scrollPos >= this._el.clientHeight
    if (this._atEndCb && atEnd !== this._atEnd) {
      this._atEnd = atEnd
      this._atEndCb(atEnd)
    }
  }

  @autobind
  @throttle(500)
  updateTargets () {
    this._targets = []
    this._menu.forEach(item => {
      // match menu items to DOM elements and save coordinates
      const pathMatch = item.to.split('#')[0] === this._location.pathname
      const hash = item.to.split('#')[1]
      const target = document.getElementById(hash)

      if (pathMatch && target) {
        this._targets.push({
          hash: hash,
          top: target.offsetTop,
          left: target.offsetLeft
        })
      }
    })
    // Sort targets on top value
    this._targets.sort((a, b) => a.top < b.top ? -1 : a.top > b.top ? 1 : 0).reverse()
    this.onScroll()
  }

  update (location: Object) {
    // update location if changed
    if (location !== this._location) {
      const prevLocation = this._location
      this._location = location

      // update targets and scroll when on new page
      if (prevLocation.pathname !== this._location.pathname) {
        setTimeout(() => {
          this.updateTargets()
          this.scrollTo(this._location.hash.substring(1))
        }, 0)
      // scroll to target if on same page
      } else {
        this.scrollTo(this._location.hash.substring(1))
      }
    }
  }

  scrollTo (to: string | {x?: number, y?: number}) {
    let startX, startY, endX, endY, method, maxX, maxY

    // TODO: get max values depending on if this._el is body
    maxX = this._el.clientWidth - window.innerWidth
    maxY = this._el.clientHeight - window.innerHeight

    // get start and method
    if (this._el === document.body) {
      startX = window.scrollX || window.pageXOffset
      startY = window.scrollY || window.pageYOffset
      method = window.scroll || window.scrollTo
    } else {
      startX = this._el.scrollLeft
      startY = this._el.scrollTop
      method = (x, y) => {
        this._el.scrollLeft = x
        this._el.scrollTop = y
      }
    }

    // get destination
    if (typeof to === 'string') {
      const item = this._targets.find(item => to === item.hash)
      endX = item ? item.left - this._offset.left : 0
      endY = item ? item.top - this._offset.top : 0
    } else {
      endX = (to.x || 0) - this._offset.left
      endY = (to.y || 0) - this._offset.top
    }

    // disable scroll callback when animating scroll
    window.removeEventListener('scroll', this.onScroll)

    // scroll looping over a frame
    this.step({
      to: typeof to === 'string' ? to : '',
      startTime: now(),
      startX: startX,
      startY: startY,
      endX: endX < maxX ? endX : maxX,
      endY: endY < maxY ? endY : maxY,
      duration: this._duration,
      method: method
    })
  }

  step (context: AnimContext) {
    // call again on next available frame
    context.frame = window.requestAnimationFrame(this.step.bind(this, context))

    const time = now()
    const elapsed = (time - context.startTime) / context.duration

    // apply easing to elapsed time while avoiding elapsed times higher than one
    const value = ease(elapsed > 1 ? 1 : elapsed)

    // update scroll position
    const x = context.startX + (context.endX - context.startX) * value
    const y = context.startY + (context.endY - context.startY) * value
    context.method.call(this._el === document.body ? window : this._el, x, y)

    // return when end points have been reached aka animation is done
    if (x === context.endX && y === context.endY) {
      window.cancelAnimationFrame(context.frame)

      // reenable scroll callback
      window.addEventListener('scroll', this.onScroll)

      // new active item callback
      if (this._updateActiveCb && context.to !== this._activeHash) {
        this._activeHash = context.to
        this._updateActiveCb(context.to)
      }

      return
    }
  }

  scrollToTop (duration?: number) {
    this.scrollTo({top: 0})
  }

  enable () {
    window.addEventListener('scroll', this.onScroll)
    window.addEventListener('resize', this.updateTargets)
  }

  disable () {
    window.removeEventListener('scroll', this.onScroll)
    window.removeEventListener('resize', this.updateTargets)
  }
}
