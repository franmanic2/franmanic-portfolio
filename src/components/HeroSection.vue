<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-content fade-in">
        <!-- Profile Image -->
        <div class="profile-image-wrapper">
          <div class="profile-image">
            <img src="https://i.postimg.cc/xTgScd7z/1755026008117.jpg" alt="Francisco Hurtado" />
          </div>
        </div>

        <!-- Name & Title -->
        <h1 class="hero-title">
          <span class="text-gradient">Francisco Hurtado</span>
        </h1>
        
        <p class="hero-subtitle">Frontend Developer & Software Engineer</p>
        
        <!-- Bio -->
        <div class="hero-bio">
          <p>
            Desarrollador Frontend apasionado por crear soluciones tecnológicas innovadoras.
            Especializado en desarrollo web moderno, arquitectura de software y diseño de sistemas escalables.
          </p>
        </div>

        <!-- Social Links -->
        <div class="social-links">
          <a 
            href="https://www.linkedin.com/in/francisco-hurtado-p-0b9602301/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
            </svg>
          </a>

          <a 
            href="https://www.instagram.com/franmanic" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/>
            </svg>
          </a>

          <a 
            href="https://www.tiktok.com/@franmanic" 
            target="_blank" 
            rel="noopener noreferrer"
            class="social-btn"
            aria-label="TikTok"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" fill="currentColor"/>
            </svg>
          </a>

          <a 
            href="mailto:frhurtado10@gmail.com" 
            class="social-btn"
            aria-label="Email"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
            </svg>
          </a>
        </div>

        <!-- Skills/Tech Stack -->
        <div class="tech-stack">
          <div class="tech-badge">Vue.js</div>
          <div class="tech-badge">Astro</div>
          <div class="tech-badge">HTML</div>
          <div class="tech-badge">CSS</div>
          <div class="tech-badge">JavaScript</div>
          <div class="tech-badge">Git</div>
          
        </div>

        <!-- CTA -->
        <div class="hero-cta">
          <a href="#projects" class="btn">
            Ver Proyectos
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.75V16.25M10 16.25L15.625 10.625M10 16.25L4.375 10.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#education" class="btn" style="margin-left: 1rem;">
            Ver Educación
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 3.75V16.25M10 16.25L15.625 10.625M10 16.25L4.375 10.625" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
        
      </div>
    </div>
  </section>
</template>

<script setup>
// Component logic can be added here if needed
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) 0;
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

/* Profile Image */
.profile-image-wrapper {
  margin-bottom: var(--spacing-xl);
  display: flex;
  justify-content: center;
}

.profile-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid var(--color-border);
  overflow: hidden;
  position: relative;
  transition: all var(--transition-base);
}

.profile-image:hover {
  border-color: var(--color-accent);
  transform: scale(1.05);
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.image-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  font-size: var(--font-size-4xl);
  font-weight: 700;
  color: var(--color-text-primary);
}

/* Title & Subtitle */
.hero-title {
  font-size: var(--font-size-5xl);
  font-weight: 800;
  margin-bottom: var(--spacing-sm);
  letter-spacing: -0.03em;
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  font-weight: 500;
}

/* Bio */
.hero-bio {
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
}

.hero-bio p {
  font-size: var(--font-size-lg);
  line-height: 1.8;
  color: var(--color-text-secondary);
}

/* Social Links */
.social-links {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.social-btn {
  width: 56px;
  height: 56px;
  border: 2px solid var(--color-border);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
  color: var(--color-text-primary);
}

.social-btn:hover {
  background: var(--color-accent);
  color: var(--color-bg-primary);
  border-color: var(--color-accent);
  transform: translateY(-4px) scale(1.1);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

/* Tech Stack */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.tech-badge {
  padding: var(--spacing-xs) var(--spacing-md);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  font-size: var(--font-size-sm);
  font-weight: 600;
  color: var(--color-text-secondary);
  transition: all var(--transition-base);
  background: var(--color-bg-card);
}

.tech-badge:hover {
  border-color: var(--color-accent);
  color: var(--color-accent);
  transform: translateY(-2px);
}

/* CTA */
.hero-cta {
  margin-top: var(--spacing-xl);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-4xl);
  }
  
  .hero-subtitle {
    font-size: var(--font-size-lg);
  }
  
  .hero-bio p {
    font-size: var(--font-size-base);
  }
  
  .social-links {
    gap: var(--spacing-sm);
  }
  
  .social-btn {
    width: 48px;
    height: 48px;
  }
  
  .tech-stack {
    gap: var(--spacing-xs);
  }
}
</style>
