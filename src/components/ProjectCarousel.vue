<template>
  <section id="projects" class="projects-section">
    <div class="section-bg-grid"></div>

    <div class="container">
      <!-- Header -->
      <div class="section-header fade-in">
        <h2 class="section-title">
          <span class="text-gradient">{{ $t('projects.title') }}</span>
        </h2>
        <p class="section-description">{{ $t('projects.description') }}</p>
      </div>

      <!-- Main layout: terminal + preview -->
      <div class="workspace" :class="{ 'workspace--split': showGrid }">

        <!-- ── LEFT: Terminal ── -->
        <div class="terminal-window">
          <div class="terminal-titlebar">
            <div class="terminal-dots">
              <span class="dot dot--red"></span>
              <span class="dot dot--yellow"></span>
              <span class="dot dot--green"></span>
            </div>
            <span class="terminal-title">franmanic — projects — bash</span>
            <div class="terminal-titlebar-right"></div>
          </div>

          <div class="terminal-body" ref="terminalBody">
            <div v-for="(entry, i) in history" :key="i" class="terminal-entry">
              <!-- Command line -->
              <div v-if="entry.type === 'command'" class="terminal-line">
                <span class="t-prompt">
                  <span class="t-user">franmanic</span><span class="t-at">@</span><span class="t-host">portfolio</span><span class="t-sep">:</span><span class="t-path">~/projects</span><span class="t-dollar">$</span>
                </span>
                <span class="t-command">{{ entry.text }}</span>
              </div>

              <!-- ls output -->
              <div v-else-if="entry.type === 'ls'" class="terminal-output terminal-output--ls">
                <button
                  v-for="(p, pi) in projects"
                  :key="pi"
                  class="ls-item"
                  @click="runCat(p.slug)"
                >
                  <span class="ls-icon">📁</span>
                  <span class="ls-name">{{ p.slug }}.md</span>
                </button>
              </div>

              <!-- cat output (compact inside terminal) -->
              <div v-else-if="entry.type === 'cat'" class="terminal-output terminal-output--cat">
                <div class="cat-content">
                  <div class="cat-line"><span class="cat-key"># </span><span class="cat-title">{{ entry.project.title }}</span></div>
                  <div class="cat-line"><span class="cat-key">tags: </span>
                    <span v-for="(t, ti) in entry.project.tags" :key="ti" class="cat-badge">{{ t }}</span>
                  </div>
                  <div class="cat-line cat-hint">
                    <span class="cat-arrow">→</span> Preview opened on the right
                  </div>
                </div>
              </div>

              <!-- error -->
              <div v-else-if="entry.type === 'error'" class="terminal-output terminal-output--error">
                bash: {{ entry.text }}: command not found
              </div>

              <!-- help -->
              <div v-else-if="entry.type === 'help'" class="terminal-output terminal-output--help">
                <div class="help-line"><span class="help-cmd">ls</span><span class="help-desc">— listar proyectos</span></div>
                <div class="help-line"><span class="help-cmd">cat &lt;slug&gt;.md</span><span class="help-desc">— abrir preview</span></div>
                <div class="help-line"><span class="help-cmd">clear</span><span class="help-desc">— limpiar terminal</span></div>
                <div class="help-line"><span class="help-cmd">help</span><span class="help-desc">— mostrar ayuda</span></div>
              </div>
            </div>

            <!-- Active line -->
            <div class="terminal-line terminal-line--active">
              <span class="t-prompt">
                <span class="t-user">franmanic</span><span class="t-at">@</span><span class="t-host">portfolio</span><span class="t-sep">:</span><span class="t-path">~/projects</span><span class="t-dollar">$</span>
              </span>
              <span v-if="isTyping" class="t-command">{{ typedText }}<span class="t-cursor blink">█</span></span>
              <span v-else class="t-input-wrapper">
                <input
                  ref="inputEl"
                  v-model="userInput"
                  @keydown.enter="submitCommand"
                  @keydown.up.prevent="historyUp"
                  @keydown.down.prevent="historyDown"
                  class="t-input"
                  autocomplete="off"
                  autocorrect="off"
                  autocapitalize="off"
                  spellcheck="false"
                  placeholder="type a command…"
                />
                <span class="t-cursor blink">█</span>
              </span>
            </div>
          </div>

          <!-- Quick chips -->
          <div class="terminal-actions">
            <button class="action-chip" @click="runQuick('ls')"><span class="chip-dollar">$</span> ls</button>
            <button v-for="p in projects" :key="p.slug" class="action-chip" @click="runCat(p.slug)">
              <span class="chip-dollar">$</span> cat {{ p.slug }}.md
            </button>
            <button class="action-chip action-chip--clear" @click="runQuick('clear')"><span class="chip-dollar">$</span> clear</button>
          </div>
        </div>

        <!-- ── RIGHT: Project Preview Panel ── -->
        <Transition name="preview-slide" @after-leave="onAfterLeave">
          <div v-if="selectedProject" class="preview-panel">
            <!-- Preview titlebar: stays stable, only slug label transitions via JS watcher -->
            <div class="preview-titlebar">
              <div class="terminal-dots">
                <span class="dot dot--red"></span>
                <span class="dot dot--yellow"></span>
                <span class="dot dot--green"></span>
              </div>
              <Transition name="preview-title-fade" mode="out-in">
                <span class="terminal-title" :key="selectedProject.slug">{{ selectedProject.slug }}.md — preview</span>
              </Transition>
              <button class="preview-close" @click="closePreview()" aria-label="Cerrar preview">✕</button>
            </div>

            <!-- Inner content: crossfades on project change -->
            <Transition name="preview-content" mode="out-in">
              <div class="preview-inner" :key="selectedProject.slug">
                <!-- Project image -->
                <div class="preview-image-wrap">
                  <img :src="selectedProject.image" :alt="selectedProject.title" class="preview-image" />
                  <div class="preview-image-gradient"></div>
                  <div class="preview-image-badge">
                    <span v-for="(tag, ti) in selectedProject.tags" :key="ti" class="preview-tag">{{ tag }}</span>
                  </div>
                </div>

                <!-- Project info -->
                <div class="preview-body">
                  <h3 class="preview-title">{{ selectedProject.title }}</h3>
                  <p class="preview-desc">{{ selectedProject.description }}</p>

                  <div class="preview-contribution">
                    <span class="preview-contribution-label">{{ $t('projects.contribution') }}</span>
                    <p class="preview-contribution-text">{{ selectedProject.contribution }}</p>
                  </div>

                  <a
                    :href="selectedProject.github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="preview-btn"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    {{ $t('projects.viewGithub') }}
                  </a>
                </div>
              </div>
            </Transition>
          </div>
        </Transition>

      </div><!-- /workspace -->
    </div>
  </section>
</template>

<script setup>
import { ref, computed, nextTick, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

// ── Projects ──────────────────────────────────────────────────────
const projects = computed(() => [
  {
    slug: 'quasar',
    title: 'Quasar Landing Page',
    description: t('projects.items.quasar.desc'),
    contribution: t('projects.items.quasar.cont'),
    image: 'https://i.postimg.cc/bJDn2XRX/1.png',
    github: 'https://quasarlabs-seven.vercel.app/',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'sportli',
    title: 'SportliGym Web Application',
    description: t('projects.items.sportli.desc'),
    contribution: t('projects.items.sportli.cont'),
    image: 'https://i.postimg.cc/T3dWJ5ck/3.png',
    github: 'https://github.com/franmanic2/sportli',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'text-eraser',
    title: 'Text Eraser Web Application',
    description: t('projects.items.eraser.desc'),
    contribution: t('projects.items.eraser.cont'),
    image: 'https://i.postimg.cc/6pHdTXmn/Captura-de-pantalla-2025-11-30-220846.png',
    github: 'http://github.com/franmanic2/text-eraser-web',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'guionify',
    title: 'Guionify Web Application',
    description: t('projects.items.guionify.desc'),
    contribution: t('projects.items.guionify.cont'),
    image: 'https://i.postimg.cc/C1qZxGFK/2.png',
    github: 'http://github.com/franmanic2/guionify',
    tags: ['Vue.js', 'HTML', 'CSS', 'JavaScript']
  },
  {
    slug: 'elixir-line',
    title: 'Elixir-Line Web Application',
    description: t('projects.items.elixir.desc'),
    contribution: t('projects.items.elixir.cont'),
    image: 'https://i.postimg.cc/K8KtR1zd/Captura-de-pantalla-2025-11-27-011255.png',
    github: 'https://github.com/upc-2025-01-MetaSoft-Arquitectura/Elixir-Line-Frontend',
    tags: ['Vue.js', 'C#']
  },
  {
    slug: 'gastrogo',
    title: 'GastroGo Web Application',
    description: t('projects.items.gastrogo.desc'),
    contribution: t('projects.items.gastrogo.cont'),
    image: 'https://i.postimg.cc/xCjCNZ53/Captura-de-pantalla-2025-11-27-011447.png',
    github: 'https://github.com/G2-UPC-PRE-202402-SI730-WX53-DevDynasty/GastroGo-FrontEnd',
    tags: ['Vue.js', 'C#']
  },
  {
    slug: 'plantcare',
    title: 'PlantCare Web Application',
    description: t('projects.items.plantcare.desc'),
    contribution: t('projects.items.plantcare.cont'),
    image: 'https://i.postimg.cc/W4vchJ8N/image-(4).png',
    github: 'https://github.com/ASI0639-2520-5362-Grupo-2-IoTeam/FrontendWeb',
    tags: ['Vue.js', 'Flutter', 'Dart']
  }
])

// ── State ─────────────────────────────────────────────────────────
const history = ref([])
const userInput = ref('')
const isTyping = ref(false)
const typedText = ref('')
const inputEl = ref(null)
const terminalBody = ref(null)
const selectedProject = ref(null)
const showGrid = ref(false)   // stays true during leave animation
const cmdHistory = ref([])
const cmdHistoryIndex = ref(-1)

// Opens / closes the preview keeping the grid alive during exit animation
const openPreview = (project) => {
  selectedProject.value = project
  showGrid.value = true
}
const closePreview = () => {
  selectedProject.value = null  // triggers v-if leave → animation plays
  // showGrid stays true until @after-leave fires
}
const onAfterLeave = () => {
  showGrid.value = false        // NOW collapse the grid
}

// ── Helpers ───────────────────────────────────────────────────────
const scrollToBottom = async () => {
  await nextTick()
  if (terminalBody.value)
    terminalBody.value.scrollTop = terminalBody.value.scrollHeight
}

const pushCommand = (text) => history.value.push({ type: 'command', text })

const typeText = (text, speed = 50) =>
  new Promise(resolve => {
    isTyping.value = true
    typedText.value = ''
    let i = 0
    const tick = () => {
      if (i < text.length) {
        typedText.value += text[i++]
        scrollToBottom()
        setTimeout(tick, speed)
      } else { resolve() }
    }
    tick()
  })

// ── Commands ──────────────────────────────────────────────────────
const processCommand = (cmd) => {
  pushCommand(cmd)
  const lower = cmd.toLowerCase().trim()

  if (lower === 'ls' || lower === 'ls -la' || lower === 'ls -l') {
    history.value.push({ type: 'ls' })
  } else if (lower === 'clear') {
    history.value = []
    closePreview()
  } else if (lower === 'help' || lower === '--help') {
    history.value.push({ type: 'help' })
  } else if (lower.startsWith('cat ')) {
    const arg = lower.replace('cat ', '').replace('.md', '').trim()
    const found = projects.value.find(p => p.slug === arg)
    if (found) {
      history.value.push({ type: 'cat', project: found })
      openPreview(found)
    } else {
      history.value.push({ type: 'error', text: `cat: ${arg}.md: No such file or directory` })
    }
  } else {
    history.value.push({ type: 'error', text: cmd })
  }

  scrollToBottom()
  nextTick(() => inputEl.value?.focus())
}

const runQuick = async (cmd) => {
  if (isTyping.value) return
  await typeText(cmd)
  isTyping.value = false
  await nextTick()
  processCommand(cmd)
}

const runCat = async (slug) => {
  const cmd = `cat ${slug}.md`
  if (isTyping.value) return
  await typeText(cmd)
  isTyping.value = false
  await nextTick()
  processCommand(cmd)
}

const submitCommand = () => {
  const cmd = userInput.value.trim()
  if (!cmd) return
  cmdHistory.value.unshift(cmd)
  cmdHistoryIndex.value = -1
  userInput.value = ''
  processCommand(cmd)
}

const historyUp = () => {
  if (cmdHistoryIndex.value < cmdHistory.value.length - 1) {
    cmdHistoryIndex.value++
    userInput.value = cmdHistory.value[cmdHistoryIndex.value]
  }
}
const historyDown = () => {
  if (cmdHistoryIndex.value > 0) {
    cmdHistoryIndex.value--
    userInput.value = cmdHistory.value[cmdHistoryIndex.value]
  } else {
    cmdHistoryIndex.value = -1
    userInput.value = ''
  }
}

// ── Boot sequence ──────────────────────────────────────────────
onMounted(async () => {
  await new Promise(r => setTimeout(r, 500))
  history.value.push({ type: 'help' })
  await scrollToBottom()
  await new Promise(r => setTimeout(r, 900))
  await typeText('ls', 80)
  isTyping.value = false
  pushCommand('ls')
  history.value.push({ type: 'ls' })
  await scrollToBottom()
})
</script>

<style scoped>
/* ── Section ─────────────────────────────────────────────────── */
.projects-section {
  padding: var(--spacing-xxl, 6rem) 0;
  position: relative;
  background-color: var(--color-bg-secondary);
  overflow: hidden;
}

.section-bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
  z-index: 0;
}


.container {
  position: relative;
  z-index: 1;
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl, 2rem);
}

/* ── Header ──────────────────────────────────────────────────── */
.section-header { text-align: center; margin-bottom: 3rem; }
.section-title { font-size: var(--font-size-4xl); margin-bottom: var(--spacing-md); }
.section-description { font-size: var(--font-size-lg); color: var(--color-text-secondary); max-width: 600px; margin: 0 auto; }

/* ── Workspace (responsive grid) ────────────────────────────── */
.workspace {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  align-items: start;
  transition: grid-template-columns 0.4s ease;
}

.workspace--split {
  grid-template-columns: 1fr 1fr;
}

/* ── Shared titlebar styles ──────────────────────────────────── */
.terminal-titlebar,
.preview-titlebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  background: #161b22;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  user-select: none;
}

.terminal-dots { display: flex; gap: 8px; align-items: center; }

.dot { width: 13px; height: 13px; border-radius: 50%; display: block; }
.dot--red    { background: #ff5f57; }
.dot--yellow { background: #febc2e; }
.dot--green  { background: #28c840; }

.terminal-title {
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 0.75rem;
  color: rgba(255,255,255,0.38);
  letter-spacing: 0.03em;
}

.terminal-titlebar-right { width: 24px; }

/* ── Terminal window ─────────────────────────────────────────── */
.terminal-window {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.07), 0 24px 70px rgba(0,0,0,0.6);
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.07);
}

.terminal-body {
  padding: 18px 20px;
  min-height: 360px;
  max-height: 480px;
  overflow-y: auto;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace;
  font-size: 0.84rem;
  line-height: 1.7;
  scroll-behavior: smooth;
}

.terminal-body::-webkit-scrollbar { width: 5px; }
.terminal-body::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.09); border-radius: 3px; }

/* ── Prompt ──────────────────────────────────────────────────── */
.t-prompt { display: inline-flex; align-items: baseline; gap: 1px; margin-right: 8px; flex-shrink: 0; }
.t-user   { color: #58a6ff; font-weight: 700; }
.t-at     { color: rgba(255,255,255,0.35); }
.t-host   { color: #39d353; font-weight: 700; }
.t-sep    { color: rgba(255,255,255,0.25); }
.t-path   { color: #e3b341; }
.t-dollar { color: rgba(255,255,255,0.45); margin-left: 4px; }

.terminal-line { display: flex; align-items: baseline; flex-wrap: wrap; min-height: 1.7em; }
.terminal-line--active { margin-top: 2px; }
.t-command { color: #e6edf3; }

.t-input-wrapper { display: inline-flex; align-items: center; flex: 1; min-width: 0; }
.t-input {
  background: transparent; border: none; outline: none;
  color: #e6edf3; font-family: inherit; font-size: inherit;
  width: 100%; caret-color: transparent; flex: 1;
}
.t-input::placeholder { color: rgba(255,255,255,0.18); }

.t-cursor { color: #39d353; margin-left: 2px; }
.blink { animation: blink-anim 1.1s step-start infinite; }
@keyframes blink-anim { 0%,100% { opacity:1; } 50% { opacity:0; } }

/* ── Terminal outputs ────────────────────────────────────────── */
.terminal-output { padding: 4px 0 8px 0; }

.terminal-output--ls { display: flex; flex-wrap: wrap; gap: 6px 20px; }

.ls-item {
  display: inline-flex; align-items: center; gap: 6px;
  background: transparent; border: none;
  color: #58a6ff; font-family: inherit; font-size: inherit;
  cursor: pointer; padding: 2px 0;
}
.ls-item:hover .ls-name { text-decoration: underline; color: #79c0ff; }
.ls-icon { font-size: 0.9em; }
.ls-name { color: #58a6ff; }

.terminal-output--cat {
  border-left: 2px solid rgba(57,211,83,0.3);
  padding-left: 14px;
  margin-left: 4px;
}
.cat-content { display: flex; flex-direction: column; gap: 3px; }
.cat-line { display: flex; align-items: center; flex-wrap: wrap; gap: 6px; }
.cat-key   { color: #e3b341; flex-shrink: 0; white-space: nowrap; }
.cat-title { color: #79c0ff; font-weight: 700; }
.cat-badge {
  padding: 1px 7px; border-radius: 4px;
  background: rgba(57,211,83,0.1); border: 1px solid rgba(57,211,83,0.28);
  color: #39d353; font-size: 0.75em; font-weight: 600;
}
.cat-hint { color: rgba(255,255,255,0.38); font-size: 0.82em; margin-top: 2px; }
.cat-arrow { color: #39d353; margin-right: 4px; }

.terminal-output--error { color: #f85149; }

.terminal-output--help { display: flex; flex-direction: column; gap: 3px; }
.help-line { display: flex; gap: 10px; }
.help-cmd  { color: #39d353; min-width: 150px; }
.help-desc { color: rgba(255,255,255,0.38); }

/* ── Quick chips ─────────────────────────────────────────────── */
.terminal-actions {
  display: flex; flex-wrap: wrap; gap: 7px;
  padding: 12px 18px;
  border-top: 1px solid rgba(255,255,255,0.06);
  background: #0a0e14;
}

.action-chip {
  display: inline-flex; align-items: center; gap: 5px;
  padding: 4px 12px; border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.6);
  font-size: 0.72rem; font-family: 'SF Mono', monospace;
  cursor: pointer; transition: all 0.22s ease;
}
.action-chip:hover { border-color: rgba(57,211,83,0.4); background: rgba(57,211,83,0.08); color: #39d353; }
.action-chip--clear:hover { border-color: rgba(248,81,73,0.4); background: rgba(248,81,73,0.07); color: #f85149; }
.chip-dollar { color: rgba(255,255,255,0.28); font-size: 0.68em; }

/* ── Preview panel ───────────────────────────────────────────── */
.preview-panel {
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(255,255,255,0.07), 0 24px 70px rgba(0,0,0,0.6);
  background: #0d1117;
  border: 1px solid rgba(255,255,255,0.07);
  display: flex;
  flex-direction: column;
}

.preview-close {
  background: transparent;
  border: none;
  color: rgba(255,255,255,0.35);
  cursor: pointer;
  font-size: 0.9rem;
  padding: 2px 6px;
  border-radius: 4px;
  transition: color 0.2s ease, background 0.2s ease;
  line-height: 1;
}
.preview-close:hover { color: #f85149; background: rgba(248,81,73,0.1); }

.preview-image-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
  background: #161b22;
}

.preview-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.6s ease;
}

.preview-panel:hover .preview-image { transform: scale(1.04); }

.preview-image-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 40%, #0d1117 100%);
}

.preview-image-badge {
  position: absolute;
  bottom: 12px;
  left: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.preview-tag {
  padding: 3px 10px;
  border-radius: 999px;
  background: rgba(255,255,255,0.12);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
}

.preview-body {
  padding: 1.25rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  flex: 1;
}

.preview-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #e6edf3;
  margin: 0;
  line-height: 1.3;
}

.preview-desc {
  font-size: 0.83rem;
  color: #8b949e;
  line-height: 1.65;
  margin: 0;
}

.preview-contribution {
  background: rgba(255,255,255,0.03);
  border-left: 3px solid rgba(57,211,83,0.5);
  border-radius: 0 8px 8px 0;
  padding: 8px 14px;
}

.preview-contribution-label {
  font-size: 0.63rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #39d353;
  display: block;
  margin-bottom: 4px;
}

.preview-contribution-text {
  font-size: 0.8rem;
  color: #8b949e;
  margin: 0;
  line-height: 1.55;
}

.preview-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  background: rgba(57,211,83,0.12);
  border: 1px solid rgba(57,211,83,0.35);
  border-radius: 10px;
  color: #39d353;
  font-weight: 700;
  font-size: 0.82rem;
  text-decoration: none;
  align-self: flex-start;
  transition: all 0.25s ease;
}
.preview-btn:hover {
  background: rgba(57,211,83,0.22);
  border-color: rgba(57,211,83,0.6);
  transform: scale(1.04);
}

/* ── Transition: preview panel entrance (first open) ─────────── */
.preview-slide-enter-active {
  animation: slideInRight 0.42s cubic-bezier(0.2, 1, 0.3, 1);
}
.preview-slide-leave-active {
  animation: slideOutRight 0.28s ease forwards;
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(40px) scale(0.96); }
  to   { opacity: 1; transform: translateX(0)    scale(1);    }
}
@keyframes slideOutRight {
  from { opacity: 1; transform: translateX(0)    scale(1);    }
  to   { opacity: 0; transform: translateX(24px) scale(0.97); }
}

/* ── Transition: inner content crossfade on project change ───── */
.preview-content-enter-active {
  animation: contentIn 0.35s cubic-bezier(0.2, 1, 0.3, 1);
}
.preview-content-leave-active {
  animation: contentOut 0.2s ease forwards;
}

@keyframes contentIn {
  from { opacity: 0; transform: translateY(12px) scale(0.985); }
  to   { opacity: 1; transform: translateY(0)    scale(1);     }
}
@keyframes contentOut {
  from { opacity: 1; transform: translateY(0)    scale(1);     }
  to   { opacity: 0; transform: translateY(-8px) scale(0.99);  }
}

/* ── Transition: titlebar label fade ─────────────────────────── */
.preview-title-fade-enter-active { transition: opacity 0.25s ease, transform 0.25s ease; }
.preview-title-fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.preview-title-fade-enter-from   { opacity: 0; transform: translateX(8px); }
.preview-title-fade-leave-to     { opacity: 0; transform: translateX(-8px); }

/* ── Responsive ──────────────────────────────────────────────── */
@media (max-width: 900px) {
  .workspace--split { grid-template-columns: 1fr; }
  .preview-panel { order: -1; }
}

@media (max-width: 640px) {
  .container { padding: 0 1rem; }
  .section-title { font-size: var(--font-size-3xl); }
  .section-description { font-size: var(--font-size-base); }
  .terminal-body { font-size: 0.76rem; padding: 12px; max-height: 360px; min-height: 280px; }
  .terminal-title { font-size: 0.72rem; }
  .terminal-actions { gap: 4px; padding: 8px 12px; flex-wrap: wrap; }
  .action-chip { font-size: 0.66rem; padding: 3px 8px; }
  .help-cmd { min-width: 90px; }
  .preview-panel { min-height: 200px; }
}

@media (max-width: 420px) {
  .section-title { font-size: var(--font-size-2xl); }
  .terminal-body { font-size: 0.7rem; padding: 10px; max-height: 300px; }
  .terminal-title { display: none; }
  .action-chip { font-size: 0.62rem; padding: 3px 6px; }
}
</style>
