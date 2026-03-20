<template>
  <section class="hero-section">
    <div class="container">
      <div class="hero-grid">

        <!-- ── LEFT: Text content ── -->
        <div class="hero-left fade-in">
          <!-- Status badge -->
          <div class="status-badge">
                      <span class="status-dot"></span>
            {{ $t('hero.available') }}
          </div>

          <h1 class="hero-title">
            Francisco<br/>
            <span class="text-gradient">Hurtado</span>
          </h1>

          <!-- Typewriter -->
          <p class="hero-subtitle">
            <span class="prefix">// </span><span class="typed">{{ displayedText }}</span><span class="cursor" :class="{ blink: !isTyping }">|</span>
          </p>

          <p class="hero-bio">{{ $t('hero.bio') }}</p>

          <!-- Social row -->
          <div class="social-row">
            <a href="https://github.com/franmanic2" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/francisco-hurtado-p-0b9602301/" target="_blank" rel="noopener noreferrer" class="social-pill" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="mailto:frhurtado10@gmail.com" class="social-pill" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>
              Email
            </a>
            <a href="https://www.instagram.com/franmanic" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="Instagram">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
            </a>
            <a href="https://www.tiktok.com/@franmanic" target="_blank" rel="noopener noreferrer" class="social-icon-btn" aria-label="TikTok">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
            </a>
          </div>

          <!-- CTA buttons -->
          <div class="cta-row">
            <a href="#projects" class="hero-chip hero-chip--accent">
              <span class="hchip-dollar">$</span>
              <span class="hchip-cmd">{{ $t('hero.viewProjects') }}</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
            <a href="/CV.pdf" download="CV_Francisco_Hurtado.pdf" class="hero-chip">
              <span class="hchip-dollar">$</span>
              <span class="hchip-cmd">download:cv</span>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>

        <!-- ── RIGHT: Floating code card ── -->
        <div class="hero-right fade-in">
          <!-- Profile photo -->
          <div class="profile-wrap">
            <div class="profile-ring">
              <img src="https://i.postimg.cc/xTgScd7z/1755026008117.jpg" alt="Francisco Hurtado" class="profile-img" />
            </div>
            <div class="profile-glow"></div>
          </div>

          <!-- Code card -->
          <div class="code-card">
            <div class="code-card-bar">
              <div class="cb-dots">
                <span class="cbd cbd--r"></span>
                <span class="cbd cbd--y"></span>
                <span class="cbd cbd--g"></span>
              </div>
              <span class="cb-title">about.js</span>
              <div></div>
            </div>
            <div class="code-card-body">
              <div class="cc-line"><span class="cc-kw">const </span><span class="cc-var">francisco</span><span class="cc-op"> = </span><span class="cc-brace">&#123;</span></div>
              <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">age</span><span class="cc-op">: </span><span class="cc-num">22</span><span class="cc-punc">,</span></div>
              <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">location</span><span class="cc-op">: </span><span class="cc-str">"Lima, Peru 🇵🇪"</span><span class="cc-punc">,</span></div>
                            <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">role</span><span class="cc-op">: </span><span class="cc-str">"{{ $t('hero.role') }}"</span><span class="cc-punc">,</span></div>
              <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">university</span><span class="cc-op">: </span><span class="cc-str">"{{ $t('hero.university') }}"</span><span class="cc-punc">,</span></div>
              <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">stack</span><span class="cc-op">: </span><span class="cc-brace">[</span><span class="cc-str">"Vue"</span><span class="cc-punc">, </span><span class="cc-str">"HTML"</span><span class="cc-punc">, </span><span class="cc-str">"CSS"</span><span class="cc-brace">]</span><span class="cc-punc">,</span></div>
                            <div class="cc-line">&nbsp;&nbsp;<span class="cc-key">openTo</span><span class="cc-op">: </span><span class="cc-bool">true</span><span class="cc-punc">,</span></div>
              <div class="cc-line"><span class="cc-brace">&#125;</span></div>
              <div class="cc-line cc-blank"></div>
              <div class="cc-line"><span class="cc-comment">// {{ $t('hero.passion') }} 🚀</span></div>
            </div>
          </div>

          <!-- Tech chips -->
          <div class="hero-tech-chips">
            <span v-for="t in ['Vue.js','HTML','CSS','JavaScript','Git']" :key="t" class="tech-chip">{{ t }}</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll indicator -->
    <a href="#projects" class="scroll-hint" aria-label="Scroll down">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

useI18n()

const phrases = ['Frontend Developer','Software Engineer']
const displayedText = ref('')
const isTyping = ref(true)
let phraseIndex = 0, charIndex = 0, erasing = false, timer = null

const tick = () => {
  const cur = phrases[phraseIndex]
  if (!erasing) {
    displayedText.value = cur.slice(0, ++charIndex)
    isTyping.value = true
    if (charIndex === cur.length) { erasing = true; isTyping.value = false; timer = setTimeout(tick, 3800); return }
    timer = setTimeout(tick, 60)
  } else {
    displayedText.value = cur.slice(0, --charIndex)
    isTyping.value = true
    if (charIndex === 0) { erasing = false; phraseIndex = (phraseIndex + 1) % phrases.length; timer = setTimeout(tick, 400); return }
    timer = setTimeout(tick, 28)
  }
}
onMounted(() => { timer = setTimeout(tick, 800) })
onUnmounted(() => clearTimeout(timer))
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: calc(var(--spacing-3xl) + 4rem) 0 var(--spacing-3xl);
  position: relative;
}

.container { max-width: 1200px; margin: 0 auto; padding: 0 var(--spacing-xl); width: 100%; }

/* Two-column grid */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

/* ── LEFT ── */
.hero-left { display: flex; flex-direction: column; gap: 1.6rem; }

/* Status badge */
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 16px;
  border: 1px solid rgba(57,211,83,0.3);
  background: rgba(57,211,83,0.07);
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  color: #39d353;
  width: fit-content;
}

.status-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: #39d353;
  box-shadow: 0 0 8px #39d353;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%,100% { box-shadow: 0 0 4px #39d353; }
  50%      { box-shadow: 0 0 14px #39d353; }
}

/* Title */
.hero-title {
  font-size: clamp(2.8rem, 5vw, 4.2rem);
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin: 0;
  color: #e6edf3;
}

/* Typewriter */
.hero-subtitle {
  font-family: 'Fira Code', monospace;
  font-size: 1.15rem;
  color: var(--color-text-secondary);
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  min-height: 1.8em;
}

.prefix { color: #6a9955; }
.typed  { color: #9cdcfe; }
.cursor { color: #39d353; }
.cursor.blink { animation: bl 1.1s step-start infinite; }
@keyframes bl { 0%,100%{opacity:1}50%{opacity:0} }

/* Bio */
.hero-bio {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.75;
  margin: 0;
  max-width: 480px;
}

/* Social row */
.social-row { display: flex; align-items: center; flex-wrap: wrap; gap: 10px; }

.social-pill {
  display: inline-flex; align-items: center; gap: 7px;
  padding: 8px 16px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  border-radius: 999px;
  color: var(--color-text-secondary);
  font-size: 0.82rem; font-weight: 600;
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-pill:hover {
  border-color: rgba(57,211,83,0.5);
  background: rgba(57,211,83,0.08);
  color: #39d353;
  transform: translateY(-2px);
}

.social-icon-btn {
  width: 40px; height: 40px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.04);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: all 0.25s ease;
}

.social-icon-btn:hover {
  border-color: rgba(57,211,83,0.4);
  color: #39d353;
  transform: translateY(-2px);
}

/* CTA – console chip style */
.cta-row { display: flex; gap: 12px; flex-wrap: wrap; }

.hero-chip {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  height: 42px;
  padding: 0 18px;
  font-family: 'Fira Code', 'SF Mono', monospace;
  font-size: 0.82rem;
  font-weight: 600;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.14);
  border-radius: 10px;
  color: rgba(255,255,255,0.65);
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.22s ease;
  cursor: pointer;
}

.hero-chip:hover {
  border-color: rgba(57,211,83,0.5);
  background: rgba(57,211,83,0.08);
  color: #39d353;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(57,211,83,0.12);
}

/* Accent: view projects (pre-green) */
.hero-chip--accent {
  border-color: rgba(57,211,83,0.45);
  background: rgba(57,211,83,0.1);
  color: #39d353;
}

.hero-chip--accent:hover {
  background: rgba(57,211,83,0.22);
  border-color: rgba(57,211,83,0.8);
  box-shadow: 0 8px 28px rgba(57,211,83,0.2);
}

.hchip-dollar {
  color: #39d353;
  opacity: 0.55;
  font-size: 0.75em;
  flex-shrink: 0;
}

.hero-chip:hover .hchip-dollar,
.hero-chip--accent .hchip-dollar { opacity: 1; }

.hchip-cmd { color: inherit; }

/* ── RIGHT ── */
.hero-right {
  display: flex; flex-direction: column; align-items: center;
  gap: 1.5rem; position: relative;
}

/* Profile */
.profile-wrap { position: relative; }

.profile-ring {
  width: 180px; height: 180px; border-radius: 50%;
  border: 3px solid rgba(57,211,83,0.5);
  overflow: hidden; position: relative; z-index: 1;
  box-shadow: 0 0 30px rgba(57,211,83,0.15), 0 0 60px rgba(57,211,83,0.08);
  transition: all 0.4s ease;
}

.profile-ring:hover {
  border-color: #39d353;
  box-shadow: 0 0 40px rgba(57,211,83,0.3), 0 0 80px rgba(57,211,83,0.12);
  transform: scale(1.04);
}

.profile-img { width: 100%; height: 100%; object-fit: cover; object-position: center; }

.profile-glow {
  position: absolute; inset: -20px;
  background: radial-gradient(circle, rgba(57,211,83,0.12) 0%, transparent 70%);
  pointer-events: none; z-index: 0;
}

/* Code card */
.code-card {
  width: 100%;
  max-width: 380px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 20px 50px rgba(0,0,0,0.5), 0 0 30px rgba(57,211,83,0.05);
  background: #0d1117;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.code-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 70px rgba(0,0,0,0.6), 0 0 40px rgba(57,211,83,0.1);
}

.code-card-bar {
  display: flex; align-items: center; justify-content: space-between;
  padding: 10px 14px;
  background: #161b22;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.cb-dots { display: flex; gap: 6px; }
.cbd { width: 11px; height: 11px; border-radius: 50%; }
.cbd--r { background: #ff5f57; }
.cbd--y { background: #febc2e; }
.cbd--g { background: #28c840; }

.cb-title { font-family: 'Fira Code', monospace; font-size: 0.72rem; color: rgba(255,255,255,0.38); }

.code-card-body {
  padding: 16px 20px;
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem; line-height: 1.8;
}

.cc-line { white-space: nowrap; overflow: hidden; }
.cc-blank { height: 0.5em; }
.cc-comment { color: #6a9955; font-style: italic; }
.cc-kw   { color: #569cd6; }
.cc-var  { color: #9cdcfe; }
.cc-key  { color: #9cdcfe; }
.cc-op   { color: rgba(255,255,255,0.4); }
.cc-str  { color: #ce9178; }
.cc-num  { color: #b5cea8; }
.cc-bool { color: #569cd6; }
.cc-punc { color: rgba(255,255,255,0.35); }
.cc-brace { color: #ffd700; }

/* Tech chips */
.hero-tech-chips { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }

.tech-chip {
  padding: 4px 12px;
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem; font-weight: 600;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px;
  background: rgba(255,255,255,0.04);
  color: rgba(255,255,255,0.5);
  transition: all 0.2s;
}

.tech-chip:hover {
  border-color: rgba(57,211,83,0.4);
  color: #39d353;
  background: rgba(57,211,83,0.07);
}

/* Scroll hint */
.scroll-hint {
  position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
  color: rgba(255,255,255,0.25); text-decoration: none;
  animation: bounce 2s ease-in-out infinite;
  transition: color 0.2s;
}

.scroll-hint:hover { color: #39d353; }

@keyframes bounce {
  0%,100% { transform: translateX(-50%) translateY(0); }
  50%      { transform: translateX(-50%) translateY(6px); }
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2.5rem; }
  .hero-left  { align-items: center; }
  .hero-bio   { text-align: center; max-width: 100%; }
  .cta-row    { justify-content: center; }
  .social-row { justify-content: center; }
  .status-badge { margin: 0 auto; }
  .hero-right { order: -1; }
  .profile-ring { width: 140px; height: 140px; }
  .code-card  { max-width: 100%; }
}

@media (max-width: 600px) {
  .hero-section { padding: calc(var(--spacing-3xl) + 3rem) 0 var(--spacing-xl); }
  .container    { padding: 0 1.25rem; }
  .hero-title   { font-size: 2.1rem; letter-spacing: -0.03em; }
  .hero-subtitle { font-size: 0.85rem; justify-content: center; flex-wrap: wrap; }
  .hero-bio     { font-size: 0.92rem; }
  .profile-ring { width: 110px; height: 110px; }
  .code-card-body { font-size: 0.72rem; padding: 12px 14px; }
  .cc-line { white-space: normal; word-break: break-word; overflow: hidden; }
  .cta-row { flex-direction: column; align-items: center; }
  .hero-chip { width: 100%; max-width: 260px; justify-content: center; }
  .social-pill { padding: 6px 12px; font-size: 0.75rem; }
  .social-icon-btn { width: 36px; height: 36px; }
  .scroll-hint { display: none; }
  .hero-tech-chips { justify-content: center; }
}
</style>
