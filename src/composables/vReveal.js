// v-reveal / v-reveal="delayMs": fades the element in the first time it enters the viewport
let observer = null

const getObserver = () => {
  if (observer || typeof IntersectionObserver === 'undefined') return observer
  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    })
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' })
  return observer
}

export const vReveal = {
  mounted(el, { value }) {
    el.classList.add('reveal')
    if (value) el.style.setProperty('--reveal-delay', `${value}ms`)
    const io = getObserver()
    io ? io.observe(el) : el.classList.add('is-visible')
  },
  unmounted(el) {
    observer?.unobserve(el)
  }
}
