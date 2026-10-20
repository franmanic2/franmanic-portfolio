<template>
  <section id="stack" class="section">
    <div class="container">
      <h2 class="section-label"><span class="section-num">02</span> ── <TypedCommand text="cat stack.txt" /></h2>

      <p class="stack-dir">frontend/</p>
      <ul class="stack-grid">
        <li v-for="(tech, i) in techs" :key="tech" v-reveal="i * 50" class="stack-cell">
          <span class="stack-name">{{ tech }}</span>
          <span class="stack-idx">{{ String(i + 1).padStart(2, '0') }}</span>
        </li>
      </ul>

      <div class="stack-extra" v-reveal>
        <p class="stack-dir">ai_workflow/ <span class="stack-note">— vibe coding</span></p>
        <ul class="workflow">
          <li v-for="tool in workflow" :key="tool.name" class="workflow-row">
            <span><span class="workflow-arrow">→</span> {{ tool.name }}</span>
            <span class="workflow-use">{{ tool.use }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import TypedCommand from './TypedCommand.vue'

const techs = ['Vue.js', 'JavaScript', 'Astro', 'React', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS']

const workflow = [
  { name: 'Claude', use: 'pair programming y revisión' },
  { name: 'Antigravity', use: 'prototipado con agentes' }
]
</script>

<style scoped>
.stack-dir {
  margin-bottom: 12px;
  font-size: 12px;
  color: var(--color-text-secondary);
}

/* Cells draw right/bottom borders, the grid draws top/left */
.stack-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--color-border);
  border-left: 1px solid var(--color-border);
}

.stack-cell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 20px;
  border-right: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
  transition: background-color var(--transition-fast);
}

.stack-cell:hover {
  background: var(--color-bg-hover);
}

.stack-name {
  font-size: 20px;
  font-weight: 500;
}

.stack-idx {
  font-size: 10px;
  color: var(--color-text-tertiary);
}

.stack-cell:hover .stack-idx {
  color: var(--color-accent);
}

.stack-extra {
  max-width: calc(50% - 16px);
  margin-top: 32px;
}

.stack-note {
  color: var(--color-text-tertiary);
}

.workflow-row {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 13px;
  font-weight: 500;
}

.workflow-arrow {
  color: var(--color-accent);
}

.workflow-use {
  font-weight: 400;
  color: var(--color-text-muted);
  text-align: right;
}

@media (max-width: 767px) {
  .stack-extra {
    max-width: none;
  }

  .stack-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stack-cell {
    padding: 16px;
  }

  .stack-name {
    font-size: 16px;
  }
}
</style>
