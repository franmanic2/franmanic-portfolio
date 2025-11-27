<template>
  <transition name="fade">
    <button 
      v-if="isVisible"
      class="scroll-to-top"
      @click="scrollToTop"
      aria-label="Volver arriba"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: var(--spacing-xl);
  right: var(--spacing-xl);
  width: 56px;
  height: 56px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: var(--z-header);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-lg);
}

.scroll-to-top:hover {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
}

.scroll-to-top:active {
  transform: translateY(-2px);
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--transition-base), transform var(--transition-base);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive */
@media (max-width: 768px) {
  .scroll-to-top {
    bottom: var(--spacing-lg);
    right: var(--spacing-lg);
    width: 48px;
    height: 48px;
  }
}
</style>
