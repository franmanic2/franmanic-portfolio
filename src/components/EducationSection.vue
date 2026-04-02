<template>
  <section id="education" class="education-section">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title"><span class="text-gradient">{{ $t('experience.title') }}</span></h2>
        <p class="section-description">{{ $t('experience.subtitle') }}</p>
      </div>

      <div class="education-grid">
        <!-- Work -->
        <div class="education-column">
          <h3 class="column-title">
            <span class="col-icon">⎇</span>
            <span class="col-cmd">git log --</span><span class="col-accent">work</span>
          </h3>
          <div class="git-log">
            <div v-for="(job, i) in workExperience" :key="i" class="git-commit">
              <div class="git-line"></div>
              <div class="git-dot"></div>
              <div class="git-body">
                <div class="git-meta">
                  <span class="git-hash">{{ job.hash }}</span>
                  <span class="git-date">{{ job.period }}</span>
                </div>
                <p class="git-title">{{ job.position }}</p>
                <p class="git-org">{{ job.company }}</p>
                <p class="git-desc" v-if="job.description">{{ job.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="education-column">
          <h3 class="column-title">
            <span class="col-icon">🎓</span>
            <span class="col-cmd">git log --</span><span class="col-accent">education</span>
          </h3>
          <div class="git-log">
            <div v-for="(edu, i) in education" :key="i" class="git-commit">
              <div class="git-line"></div>
              <div class="git-dot"></div>
              <div class="git-body">
                <div class="git-meta">
                  <span class="git-hash">{{ edu.hash }}</span>
                  <span class="git-date">{{ edu.period }}</span>
                </div>
                <p class="git-title">{{ edu.degree }}</p>
                <p class="git-org">{{ edu.institution }}</p>
                <p class="git-desc" v-if="edu.description">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="education-column">
          <h3 class="column-title">
            <span class="col-icon">📜</span>
            <span class="col-cmd">ls </span><span class="col-accent">./certs/</span>
          </h3>
          <div class="certifications-list">
            <a v-for="(cert, i) in certifications" :key="i"
               :href="cert.link" target="_blank" rel="noopener noreferrer"
               class="cert-item">
              <span class="cert-file">📄</span>
              <div class="cert-info">
                <p class="cert-name">{{ cert.name }}</p>
                <p class="cert-date">{{ cert.date }}</p>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const workExperience = computed(() => [
  { hash: 'a3f9c12', position: 'Founder & Frontend Developer', company: 'QuasarLabs', period: '2025 – Present', description: t('experience.work.quasar.desc') },
  { hash: 'b7e2d08', position: 'Software Support', company: 'Minera Enproyec', period: 'May – Aug 2025', description: t('experience.work.enproyec.desc') },
  { hash: 'c1a4f55', position: 'Founder & IT Support', company: 'Frantech', period: '2022 – 2023', description: t('experience.work.frantech.desc') }
])

const education = computed(() => [
  { hash: 'd9b3e77', degree: 'Ingeniería de Software', institution: 'Universidad Peruana de Ciencias Aplicadas', period: '2021 – Present', description: t('experience.edu.upc.desc') },
  { hash: 'e5f1a22', degree: 'English Grade – WeTalk UPC', institution: 'Universidad Peruana de Ciencias Aplicadas', period: '2024', description: t('experience.edu.english.desc') }
])

const certifications = ref([
  { name: 'IBM Cibersecurity Analyst', date: '2024', link: 'https://www.coursera.org/account/accomplishments/specialization/T3PKKL5M5FV9' },
  { name: 'Google IT Support', date: '2024', link: 'https://www.coursera.org/account/accomplishments/specialization/8U8EGAO8XLBJ' },
  { name: 'Scrum Fundamentals Certified', date: '2022', link: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=952629' }
])
</script>

<style scoped>
.education-section {
  padding: var(--spacing-3xl) 0;
  position: relative;
  background-color: var(--color-bg-secondary);
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.education-section::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--color-bg-secondary));
  pointer-events: none; z-index: 0;
}

.container { position:relative; z-index:1; }
.section-header { text-align:center; margin-bottom:var(--spacing-3xl); }
.section-title { font-size:var(--font-size-4xl); margin-bottom:var(--spacing-md); }
.section-description { font-size:var(--font-size-lg); color:var(--color-text-secondary); max-width:600px; margin:0 auto; }

.education-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:var(--spacing-xl); max-width:1200px; margin:0 auto; }

.column-title {
  display:flex; align-items:center; gap:8px;
  font-family:'Fira Code','SF Mono',monospace; font-size:.85rem; font-weight:700;
  margin-bottom:var(--spacing-xl); padding-bottom:var(--spacing-md);
  border-bottom:1px solid rgba(57,211,83,.25);
  color:var(--color-text-secondary);
}
.col-icon { font-size:1rem; }
.col-cmd  { color:rgba(255,255,255,.35); }
.col-accent { color:#39d353; }

/* git log */
.git-log { display:flex; flex-direction:column; }
.git-commit { display:flex; gap:14px; position:relative; padding-bottom:var(--spacing-xl); }
.git-commit:last-child { padding-bottom:0; }
.git-commit:last-child .git-line { display:none; }
.git-line {
  position:absolute; left:6px; top:14px; bottom:0;
  width:2px; background:linear-gradient(to bottom,#39d353,rgba(57,211,83,.1));
}
.git-dot {
  width:14px; height:14px; border-radius:50%;
  background:#0d1117; border:2px solid #39d353;
  flex-shrink:0; margin-top:2px;
  box-shadow:0 0 8px rgba(57,211,83,.4); position:relative; z-index:1;
}
.git-body {
  flex:1; min-width:0;
  background:var(--color-bg-card); border:1px solid var(--color-border);
  border-radius:var(--radius-lg); padding:var(--spacing-md);
  transition:all var(--transition-base);
}
.git-body:hover { border-color:rgba(57,211,83,.4); transform:translateX(4px); box-shadow:0 0 14px rgba(57,211,83,.08); }
.git-meta { display:flex; justify-content:space-between; align-items:center; margin-bottom:6px; flex-wrap:wrap; gap:4px; }
.git-hash { font-family:'Fira Code',monospace; font-size:.7rem; color:#58a6ff; background:rgba(88,166,255,.1); padding:1px 6px; border-radius:4px; }
.git-date { font-family:'Fira Code',monospace; font-size:.68rem; color:rgba(255,255,255,.3); }
.git-title { font-size:var(--font-size-base); font-weight:700; color:var(--color-text-primary); margin:0 0 2px; }
.git-org { font-size:var(--font-size-sm); color:#39d353; font-weight:600; margin:0 0 6px; }
.git-desc { font-size:var(--font-size-sm); color:var(--color-text-secondary); line-height:1.6; margin:0; }

/* certs */
.certifications-list { display:flex; flex-direction:column; gap:var(--spacing-md); }
.cert-item {
  display:flex; align-items:center; gap:var(--spacing-md);
  padding:var(--spacing-md); background:var(--color-bg-card);
  border:1px solid var(--color-border); border-radius:var(--radius-lg);
  text-decoration:none; transition:all var(--transition-base);
}
.cert-item:hover { border-color:rgba(57,211,83,.4); transform:translateX(4px); }
.cert-file { font-size:1.1rem; flex-shrink:0; }
.cert-info { flex:1; }
.cert-name { font-size:var(--font-size-sm); font-weight:600; color:var(--color-text-primary); margin:0 0 2px; }
.cert-date { font-family:'Fira Code',monospace; font-size:.7rem; color:var(--color-text-secondary); margin:0; }
.cert-item svg { color:#39d353; flex-shrink:0; transition:transform var(--transition-base); }
.cert-item:hover svg { transform:translate(2px,-2px); }

@media(max-width:1024px) { .education-grid { grid-template-columns:1fr; gap:var(--spacing-2xl); } }
@media(max-width:768px)  { .section-title { font-size:var(--font-size-3xl); } }

@media(max-width:600px) {
  .education-section { padding: var(--spacing-2xl) 0; }
  .container  { padding: 0 1.25rem; }
  .section-header { margin-bottom: var(--spacing-2xl); }
  .section-title { font-size: var(--font-size-2xl); }
  .section-description { font-size: var(--font-size-base); }
  .column-title { font-size: 0.78rem; }
  .git-body { padding: var(--spacing-sm) var(--spacing-md); }
  .git-title { font-size: var(--font-size-sm); }
  .git-org   { font-size: 0.75rem; }
  .git-desc  { font-size: 0.75rem; }
  .git-meta  { flex-direction: column; align-items: flex-start; gap: 2px; }
  .cert-item { padding: var(--spacing-sm) var(--spacing-md); }
  .cert-name { font-size: 0.78rem; }
  /* Disable translateX hover on touch */
  .git-body:hover { transform: none; }
  .cert-item:hover { transform: none; }
}
</style>
