<template>
  <section class="section tech-section">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">
          <span class="text-gradient">{{ $t('stack.title') }}</span>
        </h2>
        <p class="section-description">
          {{ $t('stack.subtitle') }}
        </p>
      </div>
      
      <div class="tech-grid fade-in">
        <div class="tech-item" v-for="tech in techs" :key="tech.name" :title="tech.name">
          <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import vueLogo from '@/assets/vue.svg'
import astroLogo from '@/assets/astro.svg'
import reactLogo from '@/assets/react.svg'
import nextjsLogo from '@/assets/nextjs.svg'
import html5Logo from '@/assets/html5.svg'
import css3Logo from '@/assets/css3.svg'
import tailwindLogo from '@/assets/tailwind.svg'

const techs = [
  {
    name: 'Vue.js',
    icon: vueLogo
  },
  {
    name: 'Astro',
    icon: astroLogo
  },
  {
    name: 'React',
    icon: reactLogo
  },
  {
    name: 'Next.js',
    icon: nextjsLogo
  },
  {
    name: 'HTML5',
    icon: html5Logo
  },
  {
    name: 'CSS3',
    icon: css3Logo
  },
  {
    name: 'Tailwind CSS',
    icon: tailwindLogo
  }
]
</script>

<style scoped>
.tech-section {
  position: relative;
  background-color: var(--color-bg-secondary);
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  background-position: center center;
}

/* Fade out the grid at the edges */
.tech-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom, 
    var(--color-bg-primary) 0%, 
    transparent 15%, 
    transparent 85%, 
    var(--color-bg-primary) 100%
  );
  pointer-events: none;
  z-index: 0;
}

.container {
  position: relative;
  z-index: 1;
}

/* Section Header */
.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.section-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-md);
}

.section-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto;
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  align-items: center;
}

.tech-item {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  filter: grayscale(100%);
  opacity: 0.5;
}

.tech-item:hover {
  filter: grayscale(0%);
  opacity: 1;
  transform: translateY(-5px) scale(1.1);
}

.tech-icon {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
