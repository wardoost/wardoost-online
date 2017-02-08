export function scrollTop (duration) {
  scrollTo(document.body, 0, duration || 1000)
}

export function scrollTo (element, to, duration) {
  const start = element.scrollTop
  const change = to - start
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
