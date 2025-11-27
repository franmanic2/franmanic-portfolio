<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="navbar">
        <!-- Logo/Brand -->
        <a href="#hero" class="brand">
          <span class="brand-text">FH</span>
        </a>

        <!-- Navigation Links -->
        <div class="nav-links" :class="{ active: menuOpen }">
          <a href="#hero" class="nav-link" @click="closeMenu">Inicio</a>
          <a href="#projects" class="nav-link" @click="closeMenu">Proyectos</a>
          <a href="#footer" class="nav-link" @click="closeMenu">Contacto</a>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          class="menu-toggle" 
          @click="toggleMenu"
          aria-label="Toggle menu"
        >
          <span class="menu-icon" :class="{ open: menuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: var(--z-header);
  padding: var(--spacing-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  padding: var(--spacing-sm) 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Brand */
.brand {
  font-size: var(--font-size-2xl);
  font-weight: 800;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  transition: all var(--transition-base);
}

.brand:hover {
  color: var(--color-accent);
  transform: scale(1.05);
}

.brand-text {
  padding: var(--spacing-xs) var(--spacing-md);
  border: 2px solid var(--color-accent);
  border-radius: var(--radius-md);
  background: var(--color-bg-card);
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: var(--spacing-xl);
  align-items: center;
}

.nav-link {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-secondary);
  text-decoration: none;
  position: relative;
  transition: color var(--transition-base);
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--color-accent);
  transition: width var(--transition-base);
}

.nav-link:hover {
  color: var(--color-accent);
}

.nav-link:hover::after {
  width: 100%;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
}

.menu-icon {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 24px;
}

.menu-icon span {
  display: block;
  width: 100%;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
}

.menu-icon.open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.98);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: var(--spacing-xl);
    gap: var(--spacing-lg);
    border-bottom: 1px solid var(--color-border);
    transform: translateY(-100%);
    opacity: 0;
    pointer-events: none;
    transition: all var(--transition-base);
  }

  .nav-links.active {
    transform: translateY(0);
    opacity: 1;
    pointer-events: all;
  }

  .nav-link {
    font-size: var(--font-size-lg);
  }
}
</style>
