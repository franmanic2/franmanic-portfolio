<template>
  <section class="section tech-section">
    <div class="container">
      <div class="section-header fade-in">
        <h2 class="section-title"><span class="text-gradient">{{ $t('stack.title') }}</span></h2>
        <p class="section-description">{{ $t('stack.subtitle') }}</p>
      </div>

      <!-- Code block window -->
      <div class="code-window fade-in">
        <div class="code-titlebar">
          <div class="code-dots">
            <span class="cdot cdot--red"></span>
            <span class="cdot cdot--yellow"></span>
            <span class="cdot cdot--green"></span>
          </div>
          <span class="code-filename">francisco.config.js</span>
          <div></div>
        </div>
        <div class="code-body">
          <div class="code-line">
            <span class="ln">1</span>
            <span class="c-comment">// Francisco Hurtado — Tech Stack</span>
          </div>
          <div class="code-line">
            <span class="ln">2</span>
          </div>
          <div class="code-line">
            <span class="ln">3</span>
            <span class="c-kw">const </span>
            <span class="c-var">developer</span>
            <span class="c-op"> = </span>
            <span class="c-brace">&#123;</span>
          </div>
          <div class="code-line">
            <span class="ln">4</span>
            &nbsp;&nbsp;<span class="c-key">name</span>
            <span class="c-op">: </span>
            <span class="c-str">"Francisco Hurtado"</span><span class="c-punc">,</span>
          </div>
          <div class="code-line">
            <span class="ln">5</span>
            &nbsp;&nbsp;<span class="c-key">role</span>
            <span class="c-op">: </span>
            <span class="c-str">"Frontend Developer"</span><span class="c-punc">,</span>
          </div>
          <div class="code-line">
            <span class="ln">6</span>
          </div>
          <div class="code-line">
            <span class="ln">7</span>
            &nbsp;&nbsp;<span class="c-key">stack</span>
            <span class="c-op">: </span>
            <span class="c-brace">[</span>
          </div>
          <div class="code-line" v-for="(tech, i) in techs" :key="tech.name">
            <span class="ln">{{ 8 + i }}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <span
              class="c-tech-badge"
              :title="tech.name"
              @mouseenter="hoveredTech = tech.name"
              @mouseleave="hoveredTech = null"
              :class="{ active: hoveredTech === tech.name }"
            >
              <img :src="tech.icon" :alt="tech.name" class="tech-logo" />
              <span class="c-str">"{{ tech.name }}"</span>
              <span v-if="i < techs.length - 1" class="c-punc">,</span>
            </span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 8 + techs.length }}</span>
            &nbsp;&nbsp;<span class="c-brace">]</span><span class="c-punc">,</span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 9 + techs.length }}</span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 10 + techs.length }}</span>
            &nbsp;&nbsp;<span class="c-key">passion</span>
            <span class="c-op">: </span>
            <span class="c-str">"building great user interfaces"</span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 11 + techs.length }}</span>
            <span class="c-brace">&#125;</span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 12 + techs.length }}</span>
          </div>
          <div class="code-line">
            <span class="ln">{{ 13 + techs.length }}</span>
            <span class="c-kw">export default </span>
            <span class="c-var">developer</span>
            <span class="c-punc">;</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import vueLogo    from '@/assets/vue.svg'
import astroLogo  from '@/assets/astro.svg'
import reactLogo  from '@/assets/react.svg'
import nextjsLogo from '@/assets/nextjs.svg'
import html5Logo  from '@/assets/html5.svg'
import css3Logo   from '@/assets/css3.svg'
import tailwindLogo from '@/assets/tailwind.svg'

const hoveredTech = ref(null)

const techs = [
  { name: 'Vue.js',       icon: vueLogo },
  { name: 'Astro',        icon: astroLogo },
  { name: 'React',        icon: reactLogo },
  { name: 'Next.js',      icon: nextjsLogo },
  { name: 'HTML5',        icon: html5Logo },
  { name: 'CSS3',         icon: css3Logo },
  { name: 'Tailwind CSS', icon: tailwindLogo }
]
</script>

<style scoped>
.tech-section {
  position: relative;
  background-color: var(--color-bg-secondary);
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}



.container { position: relative; z-index: 1; }

.section-header { text-align: center; margin-bottom: var(--spacing-3xl); }
.section-title  { font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); }
.section-description { font-size: var(--font-size-lg); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; }

/* ── Code Window ── */
.code-window {
  max-width: 680px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.07);
  box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(57,211,83,0.05);
  background: #0d1117;
}

.code-titlebar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 11px 16px;
  background: #161b22;
  border-bottom: 1px solid rgba(255,255,255,0.06);
  user-select: none;
}

.code-dots { display: flex; gap: 7px; }
.cdot { width: 12px; height: 12px; border-radius: 50%; }
.cdot--red    { background: #ff5f57; }
.cdot--yellow { background: #febc2e; }
.cdot--green  { background: #28c840; }

.code-filename {
  font-family: 'Fira Code', monospace;
  font-size: 0.78rem;
  color: rgba(255,255,255,0.4);
}

/* Code body */
.code-body {
  padding: 20px 0 20px;
  font-family: 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.88rem;
  line-height: 1.9;
}

.code-line {
  display: flex;
  align-items: center;
  padding: 0 24px;
  gap: 0;
  min-height: 1.9em;
  transition: background 0.2s;
}

.code-line:hover { background: rgba(255,255,255,0.025); }

.ln {
  min-width: 36px;
  text-align: right;
  color: rgba(255,255,255,0.2);
  font-size: 0.78em;
  margin-right: 20px;
  user-select: none;
  flex-shrink: 0;
}

/* Syntax colors – VS Code dark+ palette */
.c-comment { color: #6a9955; font-style: italic; }
.c-kw      { color: #569cd6; }
.c-var     { color: #9cdcfe; }
.c-op      { color: rgba(255,255,255,0.5); }
.c-key     { color: #9cdcfe; }
.c-str     { color: #ce9178; }
.c-punc    { color: rgba(255,255,255,0.4); }
.c-brace   { color: #ffd700; }

/* Tech inline badges */
.c-tech-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 2px 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  cursor: default;
  transition: all 0.25s ease;
}

.c-tech-badge:hover,
.c-tech-badge.active {
  background: rgba(57,211,83,0.08);
  border-color: rgba(57,211,83,0.3);
  transform: translateX(6px);
}

.c-tech-badge.active .c-str,
.c-tech-badge:hover .c-str {
  color: #39d353;
}

.tech-logo {
  width: 18px;
  height: 18px;
  object-fit: contain;
  filter: grayscale(60%);
  transition: filter 0.25s;
}

.c-tech-badge:hover .tech-logo,
.c-tech-badge.active .tech-logo {
  filter: grayscale(0%);
}

/* ── Responsive ── */
@media (max-width: 700px) {
  .section-title  { font-size: var(--font-size-3xl); }
  .code-window    { border-radius: 10px; }
  .code-body      { font-size: 0.78rem; padding: 14px 0; }
  .ln             { min-width: 28px; margin-right: 12px; }
  .c-tech-badge   { padding: 2px 6px; gap: 6px; }
  .tech-logo      { width: 15px; height: 15px; }
}

@media (max-width: 480px) {
  .container      { padding: 0 1rem; }
  .code-body      { font-size: 0.72rem; }
  .code-window    { border-radius: 8px; }
  .code-filename  { font-size: 0.7rem; }
  .c-tech-badge   { transform: none !important; }
  .section-description { font-size: 0.95rem; }
}
</style>
