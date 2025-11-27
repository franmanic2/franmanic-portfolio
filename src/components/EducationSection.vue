<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title">
          <span class="text-gradient">Experiencia & Educación</span>
        </h2>
        <p class="section-description">
          Mi trayectoria profesional y académica
        </p>
      </div>

      <div class="education-grid">
        <!-- Experiencia Laboral -->
        <div class="education-column">
          <h3 class="column-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 7h-4V5l-2-2h-4L8 5v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm10 15H4V9h16v11z" fill="currentColor"/>
            </svg>
            Experiencia Laboral
          </h3>
          <div class="timeline">
            <div 
              v-for="(job, index) in workExperience" 
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4 class="item-title">{{ job.position }}</h4>
                <p class="item-company">{{ job.company }}</p>
                <p class="item-period">{{ job.period }}</p>
                <p class="item-description" v-if="job.description">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Educación -->
        <div class="education-column">
          <h3 class="column-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" fill="currentColor"/>
            </svg>
            Educación
          </h3>
          <div class="timeline">
            <div 
              v-for="(edu, index) in education" 
              :key="index"
              class="timeline-item"
            >
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <h4 class="item-title">{{ edu.degree }}</h4>
                <p class="item-company">{{ edu.institution }}</p>
                <p class="item-period">{{ edu.period }}</p>
                <p class="item-description" v-if="edu.description">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Certificaciones -->
        <div class="education-column">
          <h3 class="column-title">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z" fill="currentColor"/>
            </svg>
            Certificaciones
          </h3>
          <div class="certifications-list">
            <a 
              v-for="(cert, index) in certifications" 
              :key="index"
              :href="cert.link"
              target="_blank"
              rel="noopener noreferrer"
              class="certification-item"
            >
              <div class="cert-content">
                <h4 class="cert-title">{{ cert.name }}</h4>
                <p class="cert-date">{{ cert.date }}</p>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" fill="currentColor"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// Experiencia Laboral
const workExperience = ref([
  {
    position: 'Co-Founder',
    company: 'Fleemo Partners',
    period: '2025 - Presente',
    description: 'Asesoramiento en estrategias de crecimiento en redes sociales y desarrollo de paginas web'
  },
  {
    position: 'Soporte de Software',
    company: 'Minera Enproyec',
    period: 'Mayo 2025 - Agosto 2025',
    description: 'Practicante de soporte y desarrollo de software'
  },
  {
    position: 'Founder',
    company: 'Frantech',
    period: '2022 - 2023',
    description: 'Mantenimiento de Hardware para PC y Laptops de manera independiente'
  }
])

// Educación
const education = ref([
  {
    degree: 'Ingeniería de Software',
    institution: 'Universidad Peruana de Ciencias Aplicadas',
    period: '2021 - Presente',
    description: 'Especialización en desarrollo web y arquitectura de software'
  },
  {
    degree: 'English Grade - WeTalk UPC',
    institution: 'Universidad Peruana de Ciencias Aplicadas',
    period: '2024',
    description: 'Certificación en inglés en plataforma de Cambridge'
  }
])

// Certificaciones
const certifications = ref([
  {
    name: 'IBM Cibersecurity Analyst',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/T3PKKL5M5FV9'
  },
  {
    name: 'Google IT Support',
    date: '2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/8U8EGAO8XLBJ'
  },
  {
    name: 'Scrum Fundamentals Certified',
    date: '2022',
    link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=952629'
  }
])
</script>

<style scoped>
.education-section {
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

/* Education Grid */
.education-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-xl);
  max-width: 1200px;
  margin: 0 auto;
}

.education-column {
  position: relative;
}

/* Column Title */
.column-title {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-md);
  border-bottom: 2px solid var(--color-border);
}

.column-title svg {
  color: var(--color-accent);
}

/* Timeline */
.timeline {
  position: relative;
  padding-left: var(--spacing-lg);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-border);
}

.timeline-item {
  position: relative;
  margin-bottom: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
}

.timeline-item:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: calc(-1 * var(--spacing-lg) - 6px);
  top: 4px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--color-bg-primary);
  border: 3px solid var(--color-accent);
  z-index: 1;
}

.timeline-content {
  background: var(--color-bg-card);
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  border: 1px solid var(--color-border);
  transition: all var(--transition-base);
}

.timeline-content:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.item-title {
  font-size: var(--font-size-lg);
  font-weight: 700;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.item-company {
  font-size: var(--font-size-base);
  color: var(--color-accent);
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
}

.item-period {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.item-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  line-height: 1.6;
  margin: 0;
}

/* Certifications List */
.certifications-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.certification-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md);
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  text-decoration: none;
  transition: all var(--transition-base);
}

.certification-item:hover {
  border-color: var(--color-accent);
  transform: translateX(4px);
  box-shadow: var(--shadow-md);
}

.certification-item:hover svg {
  transform: translate(2px, -2px);
}

.cert-content {
  flex: 1;
}

.cert-title {
  font-size: var(--font-size-base);
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
}

.cert-date {
  font-size: var(--font-size-sm);
  color: var(--color-text-secondary);
  margin: 0;
}

.certification-item svg {
  color: var(--color-accent);
  flex-shrink: 0;
  transition: transform var(--transition-base);
}

/* Responsive */
@media (max-width: 1024px) {
  .education-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .column-title {
    font-size: var(--font-size-2xl);
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: var(--font-size-3xl);
  }
  
  .timeline {
    padding-left: var(--spacing-md);
  }
  
  .timeline-dot {
    left: calc(-1 * var(--spacing-md) - 6px);
  }
  
  .timeline-content {
    padding: var(--spacing-sm);
  }
  
  .item-title {
    font-size: var(--font-size-base);
  }
}
</style>
