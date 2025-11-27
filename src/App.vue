<script setup>
import NavigationHeader from './components/NavigationHeader.vue'
import ParticleBackground from './components/ParticleBackground.vue'
import HeroSection from './components/HeroSection.vue'
import ProjectCarousel from './components/ProjectCarousel.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>

<template>
  <div id="app">
    <!-- Navigation Header -->
    <NavigationHeader />
    
    <!-- Particle Background Effect -->
    <ParticleBackground />
    
    <!-- Main Content -->
    <main class="main-content">
      <!-- Hero Section -->
      <section id="hero">
        <HeroSection />
      </section>
      
      <!-- Projects Section -->
      <section id="projects">
        <ProjectCarousel />
      </section>
      
      <!-- Education Section -->
      <section id="education">
        <EducationSection />
      </section>
      
      <!-- Footer -->
       <section id="footer">
        <FooterSection />
       </section>
      
    </main>
    
    <!-- Scroll to Top Button -->
    <ScrollToTop />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  position: relative;
}

.main-content {
  position: relative;
  z-index: var(--z-content);
}
</style>
