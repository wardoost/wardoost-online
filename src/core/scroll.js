export function scrollTop (duration = 1000) {
  scrollTo(0, duration)
}

export function scrollTo (to, duration = 1000, correction = 0, element = document.body) {
  const start = element.scrollTop
  const child = document.getElementById(to)
  const end = (typeof to === 'string' ? to ? child ? child.offsetTop : start : 0 : to) + correction
  const change = end - start
  const increment = 20

  const animateScroll = elapsedTime => {
    elapsedTime += increment
    var position = easeInOut(elapsedTime, start, change, duration)
    element.scrollTop = position
    if (elapsedTime < duration) {
      setTimeout(() => {
        animateScroll(elapsedTime)
      }, increment)
    }
  }
  animateScroll(0)
}

function easeInOut (currentTime, start, change, duration) {
  currentTime /= duration / 2
  if (currentTime < 1) {
    return change / 2 * currentTime * currentTime + start
  }
  currentTime -= 1
  return -change / 2 * (currentTime * (currentTime - 2) - 1) + start
}
