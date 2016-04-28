((root, laz) => {
  if (typeof define === 'function' && define.amd) define(laz) // amd
  else root.laz = laz() // browser
})(this, () => {
  let config = {
    attr: 'data-src',
    selector: '.laz',
    debounce: 200,
    offset: 100,
  }

  return (options = {}) => {
    config = Object.assign(config, options)
    window.addEventListener('DOMContentLoaded', laz)
    window.addEventListener('scroll', laz)
    window.addEventListener('resize', laz)
  }

  function laz () {
    throttle(lazyLoadingImages)
  }

  function loadImage (element) {
    const image = new Image()
    image.setAttribute('src', element.getAttribute(config.attr))

    image.addEventListener('load', () => {
      element.setAttribute('src', image.src)
      element.removeAttribute(config.attr)
    })
  }

  function lazyLoadingImages () {
    const { selector, attr } = config
    const images = document.querySelectorAll(`${selector}[${attr}]`)

    // if all images loaded
    if (images && images.length === 0) {
      window.addEventListener('DOMContentLoaded', laz)
      window.addEventListener('scroll', laz)
      window.addEventListener('resize', laz)
      return
    }

    Array.from(images).forEach(img => {
      if (isInViewport(img)) loadImage(img)
    })
  }
  function isInViewport (element) {
    const rect = element.getBoundingClientRect()

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= window.innerHeight + config.offset &&
      rect.right <= window.innerWidth + config.offset
    )
  }

  // set debouce
  function throttle (fn) {
    fn.timerId && (clearTimeout(fn.timerId))

    fn.timerId = setTimeout(() => {
      fn()
    }, 200)
  }
})

laz({
  selector: '.laz',
  attr: 'data-src',
  debounce: 1000,
})
