<template>
  <footer id="footer" class="footer">

    <!-- Top glow accent -->
    <div class="footer-glow"></div>

    <div class="footer-container">

      <!-- Big headline -->
      <div class="footer-hero">
        <p class="footer-eyebrow">
          <span class="ey-slash">//</span> {{ $t('footer.contact') }}
        </p>
        <h2 class="footer-headline">
          {{ $t('footer.headline') }}<br/><span class="text-gradient">{{ $t('footer.headlineAccent') }}</span>
        </h2>
        <a href="mailto:frhurtado10@gmail.com" class="footer-cta">
          frhurtado10@gmail.com
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
      </div>

      <!-- Divider with closing tag -->
      <div class="footer-divider">
        <span class="divider-tag">&lt;/portfolio&gt;</span>
        <div class="divider-line"></div>
      </div>

      <!-- Three-column links area -->
      <div class="footer-links-grid">

        <!-- Col 1: Navigation -->
        <div class="footer-col">
          <p class="footer-col-label"><span class="col-hash">#</span> {{ $t('footer.navLabel') }}</p>
          <nav class="footer-nav">
            <a href="#hero" class="footer-nav-link"><span class="nav-arr">→</span> {{ $t('nav.home') }}</a>
            <a href="#projects" class="footer-nav-link"><span class="nav-arr">→</span> {{ $t('nav.projects') }}</a>
            <a href="#education" class="footer-nav-link"><span class="nav-arr">→</span> {{ $t('nav.education') }}</a>
            <a href="/CV.pdf" download class="footer-nav-link"><span class="nav-arr">→</span> Download CV</a>
          </nav>
        </div>

        <!-- Col 2: Find me on -->
        <div class="footer-col">
          <p class="footer-col-label"><span class="col-hash">#</span> {{ $t('footer.followMe') }}</p>
          <nav class="footer-nav">
            <a href="https://github.com/franmanic2" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
              <span class="nav-arr">→</span> GitHub
            </a>
            <a href="https://www.linkedin.com/in/francisco-hurtado-p-0b9602301/" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
              <span class="nav-arr">→</span> LinkedIn
            </a>
            <a href="https://www.instagram.com/franmanic" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
              <span class="nav-arr">→</span> Instagram
            </a>
            <a href="https://www.tiktok.com/@franmanic" target="_blank" rel="noopener noreferrer" class="footer-nav-link">
              <span class="nav-arr">→</span> TikTok
            </a>
          </nav>
        </div>

        <!-- Col 3: Stack snippet -->
        <div class="footer-col">
          <p class="footer-col-label"><span class="col-hash">#</span> {{ $t('footer.builtWith') }}</p>
          <div class="footer-snippet">
            <span class="sn-kw">const</span>
            <span class="sn-var"> stack</span>
            <span class="sn-op"> = </span>
            <span class="sn-brace">[</span>
            <br>&nbsp;&nbsp;<span class="sn-str">"Vue.js"</span><span class="sn-p">,</span>
            <br>&nbsp;&nbsp;<span class="sn-str">"CSS"</span><span class="sn-p">,</span>
            <br>&nbsp;&nbsp;<span class="sn-str">"Vite"</span>
            <br><span class="sn-brace">]</span>
          </div>
        </div>

      </div>

    </div>

    <!-- IDE Status Bar – full width, outside container -->
    <div class="footer-statusbar">
      <div class="sb-left">
        <span class="sb-branch">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5C7 3.9 7.9 3 9 3s2 .9 2 2-.9 2-2 2-2-.9-2-2zm12 0c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zM9 7c-1.3 0-2.4.84-2.82 2H5v2h1.18C6.6 12.16 7.7 13 9 13c1.86 0 3-1.5 3-3V9h3.18C15.6 10.16 16.7 11 18 11c1.3 0 2.4-.84 2.82-2H22V7h-1.18C20.4 5.84 19.3 5 18 5c-1.86 0-3 1.5-3 3H12V8c0-1.5-1.14-3-3-1z"/></svg>
          main
        </span>
        <span class="sb-file">portfolio/index.vue</span>
      </div>
      <div class="sb-center">
        © {{ currentYear }} · Francisco Hurtado · {{ $t('footer.rights') }}
      </div>
      <div class="sb-right">
        <span class="sb-heart">
          {{ $t('footer.madeWith') }} <span class="heart">♥</span> {{ $t('footer.using') }}
        </span>
        <span class="sb-encoding">UTF-8</span>
        <span class="sb-lang">Vue</span>
      </div>
    </div>

  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
useI18n()
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--color-bg-secondary);
  border-top: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

/* Top glow */
.footer-glow {
  position: absolute;
  top: -80px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 200px;
  background: radial-gradient(ellipse, rgba(57,211,83,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.footer-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  position: relative;
  z-index: 1;
}

/* Hero section */
.footer-hero {
  padding: 5rem 0 3.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
}

.footer-eyebrow {
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  color: rgba(255,255,255,0.3);
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ey-slash { color: #39d353; }

.footer-headline {
  font-size: clamp(2.4rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.04em;
  color: #e6edf3;
  margin: 0;
}

.footer-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  border: 1px solid rgba(57,211,83,0.4);
  background: rgba(57,211,83,0.08);
  border-radius: 12px;
  color: #39d353;
  font-family: 'Fira Code', monospace;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  margin-top: 0.5rem;
}

.footer-cta:hover {
  background: rgba(57,211,83,0.18);
  border-color: rgba(57,211,83,0.7);
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(57,211,83,0.15);
  color: #39d353;
}

.footer-cta svg { transition: transform 0.25s ease; }
.footer-cta:hover svg { transform: translateX(4px); }

/* Divider */
.footer-divider {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 3rem;
}

.divider-tag {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  color: rgba(57,211,83,0.5);
  white-space: nowrap;
  flex-shrink: 0;
}

.divider-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, rgba(255,255,255,0.06), transparent);
}

/* Three columns */
.footer-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  padding-bottom: 3rem;
}

.footer-col-label {
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  color: rgba(255,255,255,0.28);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin: 0 0 1.2rem;
}

.col-hash { color: #39d353; margin-right: 4px; }

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.45);
  text-decoration: none;
  transition: all 0.2s ease;
  width: fit-content;
}

.footer-nav-link:hover {
  color: #e6edf3;
  transform: translateX(4px);
}

.nav-arr {
  color: #39d353;
  font-size: 0.85em;
  transition: transform 0.2s;
}

.footer-nav-link:hover .nav-arr { transform: translateX(2px); }

/* Code snippet */
.footer-snippet {
  font-family: 'Fira Code', monospace;
  font-size: 0.8rem;
  line-height: 1.9;
  color: rgba(255,255,255,0.4);
  background: rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 10px;
  padding: 14px 18px;
}

.sn-kw   { color: #569cd6; }
.sn-var  { color: #9cdcfe; }
.sn-op   { color: rgba(255,255,255,0.35); }
.sn-str  { color: #ce9178; }
.sn-p    { color: rgba(255,255,255,0.3); }
.sn-brace { color: #ffd700; }

/* IDE Status bar – sits outside .footer-container, so it auto-fills 100% width */
.footer-statusbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background: #161b22;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-family: 'Fira Code', monospace;
  font-size: 0.7rem;
  color: rgba(255,255,255,0.3);
  gap: 1rem;
  width: 100%;
}

.sb-left, .sb-right { display: flex; align-items: center; gap: 14px; }
.sb-center { color: rgba(255,255,255,0.25); text-align: center; }

.sb-branch {
  display: flex; align-items: center; gap: 5px;
  color: #39d353; font-weight: 700;
}

.sb-file { color: rgba(255,255,255,0.3); }

.sb-encoding, .sb-lang {
  padding: 0 8px;
  border-left: 1px solid rgba(255,255,255,0.06);
}

.sb-lang { color: #58a6ff; }

.sb-heart { display: flex; align-items: center; gap: 4px; }

.heart {
  color: #f85149;
  animation: pulse-h 1.5s ease-in-out infinite;
}

@keyframes pulse-h {
  0%,100% { opacity: 1; }
  50%      { opacity: 0.4; }
}

/* Responsive */
@media (max-width: 860px) {
  .footer-links-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .footer-statusbar  { flex-direction: column; text-align: center; gap: 6px; padding: 12px; }
  .sb-right { justify-content: center; }
  .sb-left  { justify-content: center; }
}

@media (max-width: 560px) {
  .footer-hero { padding: 3rem 0 2rem; gap: 1rem; }
  .footer-headline { font-size: 1.8rem; }
  .footer-links-grid { grid-template-columns: 1fr; }
  .footer-container { padding: 0 1.25rem; }
  .footer-cta { width: 100%; justify-content: center; font-size: 0.85rem; padding: 12px 20px; }
  .footer-eyebrow { font-size: 0.75rem; }
  .divider-tag { font-size: 0.72rem; }
}

@media (max-width: 420px) {
  .footer-headline { font-size: 1.55rem; }
  .footer-col-label { font-size: 0.68rem; }
  .footer-nav-link { font-size: 0.82rem; }
  .sb-encoding { display: none; }
  .sb-heart    { display: none; }
}
</style>
