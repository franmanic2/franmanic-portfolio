<template>
  <section id="projects" class="section">
    <div class="container">
      <h2 class="section-label"><span class="section-num">03</span> ── <TypedCommand text="ls ./proyectos" /></h2>

      <ul class="project-list">
        <li v-for="(p, i) in projects" :key="p.slug" v-reveal>
          <a
            :href="p.website || p.github"
            target="_blank"
            rel="noopener noreferrer"
            class="project-row"
          >
            <span class="project-idx">{{ String(i + 1).padStart(2, '0') }}</span>
            <span class="project-thumb">
              <img :src="p.image" :alt="p.title" loading="lazy" />
            </span>
            <span class="project-info">
              <span class="project-title">{{ p.title }}</span>
              <span class="project-desc">{{ p.description }}</span>
            </span>
            <span class="project-stack">{{ p.tags.join(' · ') }}</span>
            <span class="project-year">{{ p.year }} <span class="project-arrow">↗</span></span>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TypedCommand from './TypedCommand.vue'

const { t } = useI18n()

// year: pendiente de completar por proyecto
const projects = computed(() => [
  {
    slug: 'quasarlabs',
    title: 'Quasar Landing Page',
    description: t('projects.items.quasar.desc'),
    contribution: t('projects.items.quasar.cont'),
    image: 'https://i.postimg.cc/bJDn2XRX/1.png',
    github: '',
    website: 'https://quasarlabs-seven.vercel.app/',
    year: '',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'sportli',
    title: 'SportliGym Web Application',
    description: t('projects.items.sportli.desc'),
    contribution: t('projects.items.sportli.cont'),
    image: 'https://i.postimg.cc/T3dWJ5ck/3.png',
    github: '',
    website: 'https://sportligymweb.vercel.app/',
    year: '',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript', 'Firebase']
  },
  {
    slug: 'text-eraser',
    title: 'Text Eraser Web Application',
    description: t('projects.items.eraser.desc'),
    contribution: t('projects.items.eraser.cont'),
    image: 'https://i.postimg.cc/6pHdTXmn/Captura-de-pantalla-2025-11-30-220846.png',
    github: 'http://github.com/franmanic2/text-eraser-web',
    website: 'https://text-eraser-web.vercel.app/',
    year: '',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'guionify',
    title: 'Guionify Web Application',
    description: t('projects.items.guionify.desc'),
    contribution: t('projects.items.guionify.cont'),
    image: 'https://i.postimg.cc/C1qZxGFK/2.png',
    github: 'http://github.com/franmanic2/guionify',
    website: 'https://guionify-web.vercel.app/',
    year: '',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'elixir-line',
    title: 'Elixir-Line Web Application',
    description: t('projects.items.elixir.desc'),
    contribution: t('projects.items.elixir.cont'),
    image: 'https://i.postimg.cc/K8KtR1zd/Captura-de-pantalla-2025-11-27-011255.png',
    github: 'https://github.com/upc-2025-01-MetaSoft-Arquitectura/Elixir-Line-Frontend',
    website: '',
    year: '',
    tags: ['Vue.js', 'C#']
  },
  {
    slug: 'gastrogo',
    title: 'GastroGo Web Application',
    description: t('projects.items.gastrogo.desc'),
    contribution: t('projects.items.gastrogo.cont'),
    image: 'https://i.postimg.cc/xCjCNZ53/Captura-de-pantalla-2025-11-27-011447.png',
    github: 'https://github.com/G2-UPC-PRE-202402-SI730-WX53-DevDynasty/GastroGo-FrontEnd',
    website: '',
    year: '',
    tags: ['Vue.js', 'C#']
  },
  {
    slug: 'plantcare',
    title: 'PlantCare Web Application',
    description: t('projects.items.plantcare.desc'),
    contribution: t('projects.items.plantcare.cont'),
    image: 'https://i.postimg.cc/W4vchJ8N/image-(4).png',
    github: 'https://github.com/ASI0639-2520-5362-Grupo-2-IoTeam/FrontendWeb',
    website: '',
    year: '',
    tags: ['Vue.js', 'Flutter', 'Dart']
  }
])
</script>

<style scoped>
.project-list {
  border-bottom: 1px solid var(--color-border);
}

.project-row {
  display: grid;
  grid-template-columns: 56px 220px 1fr 220px 70px;
  align-items: center;
  column-gap: 28px;
  padding: 20px 0;
  border-top: 1px solid var(--color-border);
  transition: background-color var(--transition-fast);
}

.project-row:hover {
  background: var(--color-bg-hover);
}

.project-idx {
  font-size: 12px;
  color: var(--color-text-tertiary);
}

.project-row:hover .project-idx {
  color: var(--color-accent);
}

.project-thumb {
  display: block;
  width: 220px;
  height: 124px;
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.project-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: filter 300ms ease;
}

/* Thumbnails in grayscale until hover (only where hover exists) */
@media (hover: hover) {
  .project-thumb img {
    filter: grayscale(1);
  }

  .project-row:hover .project-thumb img {
    filter: none;
  }
}

.project-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.project-title {
  font-size: 22px;
  font-weight: 500;
  line-height: 1.25;
}

.project-desc {
  font-size: 13px;
  line-height: 1.6;
  color: var(--color-text-muted);
}

.project-stack {
  font-size: 12px;
  color: var(--color-text-secondary);
}

.project-year {
  font-size: 12px;
  color: var(--color-accent);
  text-align: right;
}

.project-arrow {
  display: inline-block;
  transition: transform var(--transition-fast);
}

.project-row:hover .project-arrow {
  transform: translate(3px, -3px);
}

/* Mobile: thumbnail on top, text below */
@media (max-width: 767px) {
  .project-row {
    grid-template-columns: 1fr auto;
    row-gap: 14px;
    padding: 24px 0;
  }

  .project-idx {
    grid-column: 1;
    grid-row: 1;
  }

  .project-year {
    grid-column: 2;
    grid-row: 1;
  }

  .project-thumb,
  .project-info,
  .project-stack {
    grid-column: 1 / -1;
  }

  .project-thumb {
    width: 100%;
    height: auto;
    aspect-ratio: 220 / 124;
  }

  .project-title {
    font-size: 19px;
  }
}
</style>
