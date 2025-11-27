<template>
  <section id="projects" class="projects-section">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">
          <span class="text-gradient">Proyectos Destacados</span>
        </h2>
        <p class="section-description">
          Una selección de trabajos en los que he contribuido y desarrollado
        </p>
      </div>

      <div class="carousel-container">
        <!-- Navigation Arrows -->
        <button 
          class="carousel-nav carousel-nav-prev" 
          @click="prevSlide"
          aria-label="Proyecto anterior"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

        <!-- 3D Carousel -->
        <div class="carousel-3d">
          <div class="carousel-wrapper">
            <div 
              v-for="(project, index) in projects" 
              :key="index"
              class="carousel-slide"
              :class="{
                'active': index === currentIndex,
                'prev': index === getPrevIndex(),
                'next': index === getNextIndex(),
                'hidden': !isVisible(index)
              }"
            >
              <div class="project-card">
                <!-- Project Image -->
                <div class="project-image">
                  <img :src="project.image" :alt="project.title" />
                  <div class="project-overlay">
                    <a 
                      :href="project.github" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      class="btn btn-overlay"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/>
                      </svg>
                      Ver en GitHub
                    </a>
                  </div>
                </div>

                <!-- Project Info -->
                <div class="project-info">
                  <h3 class="project-title">{{ project.title }}</h3>
                  <p class="project-description">{{ project.description }}</p>
                  
                  <div class="project-contribution">
                    <span class="contribution-label">Mi aporte:</span>
                    <p class="contribution-text">{{ project.contribution }}</p>
                  </div>

                  <div class="project-tags">
                    <span 
                      v-for="(tag, tagIndex) in project.tags" 
                      :key="tagIndex"
                      class="project-tag"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button 
          class="carousel-nav carousel-nav-next" 
          @click="nextSlide"
          aria-label="Siguiente proyecto"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Carousel Indicators -->
      <div class="carousel-indicators">
        <button
          v-for="(project, index) in projects"
          :key="index"
          class="indicator"
          :class="{ active: currentIndex === index }"
          @click="goToSlide(index)"
          :aria-label="`Ir a proyecto ${index + 1}`"
        ></button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const currentIndex = ref(0)

// Sample projects data - Replace with real data
const projects = ref([
  {
    title: 'FleemoPartners Landing Page',
    description: 'Landing page para la empresa de asesoria en redes sociales FleemoPartners.',
    contribution: 'Desarrollo del frontend con Vue.js',
    image: 'https://i.postimg.cc/BvsRqfZQ/Captura-de-pantalla-2025-11-27-010805.png',
    github: 'https://github.com/FleemoPartners/fleemo-webapp',
    tags: ['Vue.js']
  },
  {
    title: 'Elixir-Line Web Application',
    description: 'Aplicacion para la gestion de lotes de produccion de vino',
    contribution: 'Desarrollo de componentes del apartado front-end para la visualizacion de lotes de produccion',
    image: 'https://i.postimg.cc/K8KtR1zd/Captura-de-pantalla-2025-11-27-011255.png',
    github: 'https://github.com/upc-2025-01-MetaSoft-Arquitectura/Elixir-Line-Frontend',
    tags: ['Vue.js', 'C#']
  },
  {
    title: 'GastroGo Web Application',
    description: 'Aplicacion web para la gestion de pedidos de restaurantes para clientes corporativos.',
    contribution: 'Creacion de componentes y arquitectura de la aplicacion web',
    image: 'https://i.postimg.cc/xCjCNZ53/Captura-de-pantalla-2025-11-27-011447.png',
    github: 'https://github.com/G2-UPC-PRE-202402-SI730-WX53-DevDynasty/GastroGo-FrontEnd',
    tags: ['Vue.js', 'C#']
  },
  {
    title: 'PlantCare Web Application',
    description: 'Aplicacion web para la visualizacion del estado de plantas a travez de dispositivos IoT',
    contribution: 'Desarrollo de componentes del apartado community dentro de la web',
    image: 'https://i.postimg.cc/W4vchJ8N/image-(4).png',
    github: 'https://github.com/ASI0639-2520-5362-Grupo-2-IoTeam/FrontendWeb',
    tags: ['Vue.js', 'Flutter', 'Dart']
  }
])

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % projects.value.length
}

const prevSlide = () => {
  currentIndex.value = currentIndex.value === 0 
    ? projects.value.length - 1 
    : currentIndex.value - 1
}

const goToSlide = (index) => {
  currentIndex.value = index
}

const getPrevIndex = () => {
  return currentIndex.value === 0 
    ? projects.value.length - 1 
    : currentIndex.value - 1
}

const getNextIndex = () => {
  return (currentIndex.value + 1) % projects.value.length
}

const isVisible = (index) => {
  return index === currentIndex.value || 
         index === getPrevIndex() || 
         index === getNextIndex()
}

// Auto-play carousel (optional)
// setInterval(() => {
//   nextSlide()
// }, 5000)
</script>

<style scoped>
.projects-section {
  padding: var(--spacing-3xl) 0;
  position: relative;
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

/* Carousel Container */
.carousel-container {
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 var(--spacing-3xl);
}

/* 3D Carousel */
.carousel-3d {
  overflow: visible;
  perspective: 1500px;
  padding: var(--spacing-xl) 0;
}

.carousel-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 600px;
}

.carousel-slide {
  position: absolute;
  width: 550px;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  pointer-events: none;
  transform: scale(0.8) translateX(0);
}

/* Active (Center) Card */
.carousel-slide.active {
  opacity: 1;
  pointer-events: all;
  transform: scale(1) translateX(0) translateZ(0);
  z-index: 3;
}

.carousel-slide.active .project-card {
  border: 2px solid var(--color-accent);
  box-shadow: 
    0 0 20px rgba(255, 255, 255, 0.3),
    0 0 40px rgba(255, 255, 255, 0.2),
    0 20px 40px rgba(0, 0, 0, 0.5);
  animation: glow-pulse 3s ease-in-out infinite;
}

@keyframes glow-pulse {
  0%, 100% {
    box-shadow: 
      0 0 20px rgba(255, 255, 255, 0.3),
      0 0 40px rgba(255, 255, 255, 0.2),
      0 20px 40px rgba(0, 0, 0, 0.5);
  }
  50% {
    box-shadow: 
      0 0 30px rgba(255, 255, 255, 0.5),
      0 0 60px rgba(255, 255, 255, 0.3),
      0 20px 40px rgba(0, 0, 0, 0.5);
  }
}

/* Previous Card (Left) */
.carousel-slide.prev {
  opacity: 0.4;
  pointer-events: none;
  transform: scale(0.85) translateX(-120%) translateZ(-100px) rotateY(25deg);
  z-index: 1;
  transform-origin: right center;
}

.carousel-slide.prev .project-card {
  filter: brightness(0.6);
}

/* Next Card (Right) */
.carousel-slide.next {
  opacity: 0.4;
  pointer-events: none;
  transform: scale(0.85) translateX(120%) translateZ(-100px) rotateY(-25deg);
  z-index: 1;
  transform-origin: left center;
}

.carousel-slide.next .project-card {
  filter: brightness(0.6);
}

/* Hidden Cards */
.carousel-slide.hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.7) translateX(0);
  z-index: 0;
}

/* Project Card */
.project-card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  height: 100%;
}

/* Hover effect only on active card */
.carousel-slide.active .project-card:hover {
  transform: translateY(-8px);
  box-shadow: 
    0 0 30px rgba(255, 255, 255, 0.4),
    0 0 60px rgba(255, 255, 255, 0.3),
    0 30px 60px rgba(0, 0, 0, 0.6);
}

/* Project Image */
.project-image {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  background: var(--color-bg-secondary);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.btn-overlay {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
}

/* Project Info */
.project-info {
  padding: var(--spacing-xl);
}

.project-title {
  font-size: var(--font-size-2xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
}

.project-description {
  font-size: var(--font-size-base);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.6;
}

.project-contribution {
  background: var(--color-bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-md);
  border-left: 3px solid var(--color-accent);
}

.contribution-label {
  font-size: var(--font-size-sm);
  font-weight: 700;
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.contribution-text {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Project Tags */
.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.project-tag {
  padding: var(--spacing-xs) var(--spacing-sm);
  background: var(--color-bg-secondary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
}

.project-tag:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
}

/* Navigation Arrows */
.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  background: var(--color-bg-card);
  color: var(--color-text-primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  z-index: 10;
}

.carousel-nav:hover {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
  transform: translateY(-50%) scale(1.1);
}

.carousel-nav-prev {
  left: 0;
}

.carousel-nav-next {
  right: 0;
}

/* Carousel Indicators */
.carousel-indicators {
  display: flex;
  gap: var(--spacing-sm);
  justify-content: center;
  margin-top: var(--spacing-xl);
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid var(--color-border);
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-base);
  padding: 0;
}

.indicator:hover {
  border-color: var(--color-accent);
}

.indicator.active {
  background: var(--color-accent);
  border-color: var(--color-accent);
  width: 32px;
  border-radius: var(--radius-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-container {
    padding: 0 var(--spacing-md);
  }
  
  .carousel-wrapper {
    min-height: 600px;
  }
  
  .carousel-slide {
    width: 90vw;
    max-width: 500px;
  }
  
  /* Hide side cards on mobile */
  .carousel-slide.prev,
  .carousel-slide.next {
    opacity: 0;
    transform: scale(0.7) translateX(0);
  }
  
  .project-image {
    height: 250px;
  }
  
  .project-info {
    padding: var(--spacing-md);
  }
  
  .project-title {
    font-size: var(--font-size-xl);
  }
  
  .carousel-nav {
    width: 40px;
    height: 40px;
  }
  
  .carousel-nav-prev {
    left: -5px;
  }
  
  .carousel-nav-next {
    right: -5px;
  }
}

@media (max-width: 1024px) and (min-width: 769px) {
  .carousel-slide {
    width: 600px;
  }
  
  .carousel-slide.prev {
    transform: scale(0.8) translateX(-110%) translateZ(-80px);
  }
  
  .carousel-slide.next {
    transform: scale(0.8) translateX(110%) translateZ(-80px);
  }
}
</style>
