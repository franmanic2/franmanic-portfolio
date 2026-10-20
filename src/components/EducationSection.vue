<template>
  <section id="experience" class="section">
    <div class="container exp-grid">

      <!-- ── LEFT: Work ── -->
      <div>
        <h2 class="section-label"><span class="section-num">04</span> ── <TypedCommand text="git log --trabajo" /></h2>
        <ol class="log">
          <li v-for="job in workExperience" :key="job.company" v-reveal class="log-item">
            <p class="log-date">{{ job.period }}</p>
            <h3 class="log-title">{{ job.position }} <span class="log-org">@ {{ job.company }}</span></h3>
            <p v-if="job.description" class="log-desc">{{ job.description }}</p>
          </li>
        </ol>
      </div>

      <!-- ── RIGHT: Education + certifications ── -->
      <div>
        <h2 class="section-label">── {{ $t('experience.educationTitle') }}</h2>
        <ol class="log">
          <li v-for="edu in education" :key="edu.degree" v-reveal class="log-item">
            <p class="log-date">{{ edu.period }}</p>
            <h3 class="log-title">{{ edu.degree }}</h3>
            <p class="log-org">{{ edu.institution }}</p>
            <p v-if="edu.description" class="log-desc">{{ edu.description }}</p>
          </li>
        </ol>

        <h2 class="section-label certs-label">── {{ $t('experience.certTitle') }}</h2>
        <ul class="certs">
          <li v-for="(cert, i) in certifications" :key="cert.name" v-reveal="i * 60">
            <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="cert-row">
              <span>{{ cert.name }} <span class="cert-issuer">· {{ cert.issuer }}</span></span>
              <span class="cert-link">ver ↗</span>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import TypedCommand from './TypedCommand.vue'
const { t } = useI18n()

const workExperience = computed(() => [
  { position: 'AI Engineer', company: 'Hatariy Consulting', period: 'Present', description: '' },
  { position: 'Freelance Developer', company: 'Independiente', period: 'Present', description: t('experience.work.freelance.desc') },
  { position: 'Software Support', company: 'Minera Enproyec', period: 'May – Aug 2025', description: t('experience.work.enproyec.desc') },
  { position: 'Founder & IT Support', company: 'Frantech', period: '2022 – 2023', description: t('experience.work.frantech.desc') }
])

const education = computed(() => [
  { degree: 'Ingeniería de Software', institution: 'Universidad Peruana de Ciencias Aplicadas', period: '2021 – Present', description: t('experience.edu.upc.desc') },
  { degree: 'English Grade – WeTalk UPC', institution: 'Universidad Peruana de Ciencias Aplicadas', period: '2024', description: t('experience.edu.english.desc') }
])

const certifications = [
  { name: 'IBM Cibersecurity Analyst', issuer: 'IBM', link: 'https://www.coursera.org/account/accomplishments/specialization/T3PKKL5M5FV9' },
  { name: 'Google IT Support', issuer: 'Google', link: 'https://www.coursera.org/account/accomplishments/specialization/8U8EGAO8XLBJ' },
  { name: 'Scrum Fundamentals Certified', issuer: 'SCRUMstudy', link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=952629' }
]
</script>

<style scoped>
.exp-grid {
  display: grid;
  grid-template-columns: 1.15fr 1fr;
  gap: 64px;
}

.section-label {
  text-transform: lowercase;
  margin-bottom: 20px;
}

.log-item {
  padding: 20px 0;
  border-top: 1px solid var(--color-border);
}

.log-date {
  font-size: 11px;
  color: var(--color-accent);
}

.log-title {
  margin-top: 6px;
  font-size: 18px;
  font-weight: 500;
}

.log-org {
  font-weight: 400;
  color: var(--color-text-tertiary);
}

p.log-org {
  margin-top: 4px;
  font-size: 12px;
  color: var(--color-text-muted);
}

.log-desc {
  margin-top: 8px;
  font-size: 13px;
  line-height: 1.7;
  color: var(--color-text-muted);
}

.certs-label {
  margin-top: 32px;
  margin-bottom: 12px;
}

.cert-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 12px 0;
  border-top: 1px solid var(--color-border);
  font-size: 13px;
  font-weight: 500;
}

.cert-issuer {
  font-weight: 400;
  color: var(--color-text-tertiary);
}

.cert-link {
  flex-shrink: 0;
}

.cert-row:hover .cert-link {
  color: var(--color-accent);
}

@media (max-width: 767px) {
  .exp-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
