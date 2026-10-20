<script setup>
import TopBar from './components/TopBar.vue'
import HeroSection from './components/HeroSection.vue'
import StackSection from './components/StackSection.vue'
import ProjectCarousel from './components/ProjectCarousel.vue'
import EducationSection from './components/EducationSection.vue'
import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <TopBar />

  <main>
    <HeroSection />
    <StackSection />
    <ProjectCarousel />
    <EducationSection />
  </main>

  <FooterSection />
</template>
