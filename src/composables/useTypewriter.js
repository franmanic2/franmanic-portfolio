import { ref, onUnmounted } from 'vue'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Reveals `length` characters one by one; `count` is how many are visible
export function useTypewriter(length, speed = 50) {
  const count = ref(0)
  const done = ref(false)
  const started = ref(false)
  let timer = null

  const start = (delay = 0) => {
    if (started.value) return
    started.value = true
    if (prefersReducedMotion()) {
      count.value = length
      done.value = true
      return
    }
    const tick = () => {
      count.value++
      if (count.value >= length) { done.value = true; return }
      timer = setTimeout(tick, speed)
    }
    timer = setTimeout(tick, delay)
  }

  onUnmounted(() => clearTimeout(timer))
  return { count, done, started, start }
}
