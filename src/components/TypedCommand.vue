<template>
  <span ref="el" class="typed">
    <span class="sr-only">{{ text }}</span>
    <span aria-hidden="true">{{ text.slice(0, count) }}<span v-if="started && !done" class="typed-caret">_</span><span class="typed-ghost">{{ text.slice(count) }}</span></span>
  </span>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTypewriter } from '@/composables/useTypewriter'

const props = defineProps({ text: { type: String, required: true } })

const el = ref(null)
const { count, done, started, start } = useTypewriter(props.text.length, 45)
let io = null

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return start()
  io = new IntersectionObserver(([entry]) => {
    if (!entry.isIntersecting) return
    start(150)
    io.disconnect()
  }, { threshold: 0.6 })
  io.observe(el.value)
})

onUnmounted(() => io?.disconnect())
</script>

<style scoped>
.typed-caret {
  color: var(--color-accent);
}

.typed-ghost {
  visibility: hidden;
}
</style>
