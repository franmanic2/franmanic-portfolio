<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <nav class="navbar">
        <!-- Logo/Brand – monospace style -->
        <a href="#hero" class="brand">
          <span class="brand-tilde">~/</span><span class="brand-text">franmanic</span>
        </a>

        <!-- Navigation Links -->
        <div class="nav-links" :class="{ active: menuOpen }">
          <a href="#hero"      class="nav-link" @click="closeMenu"><span class="nav-num">01.</span>{{ $t('nav.home') }}</a>
          <a href="#projects"  class="nav-link" @click="closeMenu"><span class="nav-num">02.</span>{{ $t('nav.projects') }}</a>
          <a href="#education" class="nav-link" @click="closeMenu"><span class="nav-num">03.</span>{{ $t('nav.education') }}</a>
          <a href="#footer"    class="nav-link" @click="closeMenu"><span class="nav-num">04.</span>{{ $t('nav.contact') }}</a>

          <!-- Language chip -->
          <button class="nav-chip" @click="toggleLanguage" aria-label="Toggle language">
            <span class="chip-dollar">$</span>
            <template v-if="locale === 'es'">
              <img src="https://flagcdn.com/w20/es.png" alt="ES" class="chip-flag" />
              <span class="chip-cmd">lang:es</span>
            </template>
            <template v-else>
              <img src="https://flagcdn.com/w20/us.png" alt="US" class="chip-flag" />
              <span class="chip-cmd">lang:en</span>
            </template>
          </button>

          <!-- Download CV chip -->
          <a href="/CV.pdf" download="CV_Francisco_Hurtado.pdf" class="nav-chip nav-chip--accent" @click="closeMenu">
            <span class="chip-dollar">$</span>
            <span class="chip-cmd">{{ $t('nav.downloadCV') }}</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>

        <!-- Scroll indicator (IDE status bar) -->
        <div class="ide-status" v-if="isScrolled">
          <span class="ide-status-ln">Ln {{ scrollLine }}</span>
          <span class="ide-status-branch">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5C7 3.9 7.9 3 9 3s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM9 7c-1.3 0-2.4.84-2.82 2H5v2h1.18C6.6 12.16 7.7 13 9 13c1.86 0 3-1.5 3-3V9h3.18C15.6 10.16 16.7 11 18 11c1.3 0 2.4-.84 2.82-2H22V7h-1.18C20.4 5.84 19.3 5 18 5c-1.86 0-3 1.5-3 3H12V8c0-1.5-1.14-3-3-1z"/></svg>
            main
          </span>
        </div>

        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span class="menu-icon" :class="{ open: menuOpen }">
            <span></span><span></span><span></span>
          </span>
        </button>
      </nav>
    </div>
    <!-- IDE progress bar -->
    <div class="scroll-bar" :style="{ width: scrollPercent + '%' }"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const isScrolled  = ref(false)
const menuOpen    = ref(false)
const scrollLine  = ref(1)
const scrollPercent = ref(0)

const handleScroll = () => {
  const scrollY = window.scrollY
  const maxScroll = document.body.scrollHeight - window.innerHeight
  isScrolled.value = scrollY > 50
  scrollPercent.value = maxScroll > 0 ? Math.round((scrollY / maxScroll) * 100) : 0
  scrollLine.value = Math.max(1, Math.round((scrollY / Math.max(maxScroll, 1)) * 999) + 1)
}

const toggleMenu   = () => { menuOpen.value = !menuOpen.value }
const closeMenu    = () => { menuOpen.value = false }
const toggleLanguage = () => { locale.value = locale.value === 'es' ? 'en' : 'es' }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: var(--z-header);
  padding: var(--spacing-md) 0;
  transition: all var(--transition-base);
  background: transparent;
}

.header.scrolled {
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(57, 211, 83, 0.2);
  padding: var(--spacing-sm) 0;
}

/* IDE progress bar */
.scroll-bar {
  position: absolute;
  bottom: 0; left: 0;
  height: 2px;
  background: linear-gradient(90deg, #39d353, #58a6ff);
  transition: width 0.1s linear;
  border-radius: 0 2px 2px 0;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

/* Brand */
.brand {
  font-family: 'Fira Code', 'SF Mono', monospace;
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: all var(--transition-base);
}

.brand:hover { opacity: 0.8; }

.brand-tilde { color: #39d353; }
.brand-text  { color: var(--color-text-primary); }

/* Nav Links */
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
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.nav-num {
  font-family: 'Fira Code', monospace;
  font-size: 0.7em;
  color: #39d353;
  font-weight: 700;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 2px;
  background: #39d353;
  transition: width var(--transition-base);
}

.nav-link:hover { color: var(--color-text-primary); }
.nav-link:hover::after { width: 100%; }

/* IDE Status bar (scroll position) */
.ide-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  color: rgba(255,255,255,0.35);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  padding: 3px 10px;
  background: rgba(255,255,255,0.03);
  white-space: nowrap;
}

.ide-status-ln { color: rgba(255,255,255,0.5); }
.ide-status-branch {
  display: flex;
  align-items: center;
  gap: 4px;
  color: #39d353;
}

/* ── Console chip buttons (lang + cv) ── */
.nav-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 14px;
  font-family: 'Fira Code', 'SF Mono', monospace;
  font-size: 0.78rem;
  font-weight: 600;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  color: rgba(255,255,255,0.6);
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.22s ease;
  user-select: none;
}

.nav-chip:hover {
  border-color: rgba(57,211,83,0.5);
  background: rgba(57,211,83,0.08);
  color: #39d353;
  box-shadow: 0 0 12px rgba(57,211,83,0.12);
}

/* Accent variant (CV button) */
.nav-chip--accent {
  border-color: rgba(57,211,83,0.35);
  color: #39d353;
  background: rgba(57,211,83,0.07);
}

.nav-chip--accent:hover {
  background: rgba(57,211,83,0.18);
  border-color: rgba(57,211,83,0.7);
  box-shadow: 0 0 16px rgba(57,211,83,0.2);
  color: #39d353;
}

.chip-dollar {
  color: #39d353;
  opacity: 0.6;
  font-size: 0.72em;
  flex-shrink: 0;
}

.nav-chip:hover .chip-dollar,
.nav-chip--accent .chip-dollar { opacity: 1; }

.chip-cmd { color: inherit; }

.chip-flag {
  width: 18px;
  height: 13px;
  border-radius: 2px;
  object-fit: cover;
  flex-shrink: 0;
}

/* Mobile Toggle */
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

.menu-icon.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.menu-icon.open span:nth-child(2) { opacity: 0; }
.menu-icon.open span:nth-child(3) { transform: rotate(-45deg) translate(7px, -6px); }

/* Responsive */
@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .ide-status { display: none; }

  .nav-links {
    position: fixed;
    top: 70px; left: 0; right: 0;
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

  .nav-link { font-size: var(--font-size-lg); }
}
</style>
