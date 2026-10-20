<template>
  <!-- ── CTA ── -->
  <section id="contact" class="section cta">
    <div class="container">
      <p class="prompt">$ <TypedCommand text="./contacto.sh" /></p>
      <div class="cta-head" v-reveal>
        <h2 class="cta-title">{{ $t('footer.headline') }} {{ $t('footer.headlineAccent') }}</h2>
        <span class="cta-cursor" aria-hidden="true"></span>
      </div>
      <a :href="`mailto:${email}`" v-reveal="120" class="cta-mail">{{ email }} ↗</a>
    </div>
  </section>

  <!-- ── Footer ── -->
  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-brand">FH_</p>
        <p class="footer-copy">© {{ currentYear }} Francisco Hurtado</p>
      </div>

      <div>
        <p class="footer-label">{{ $t('footer.navLabel') }}</p>
        <nav class="footer-links footer-links--lower">
          <a href="#hero">{{ $t('nav.home') }}</a>
          <a href="#stack">{{ $t('nav.stack') }}</a>
          <a href="#projects">{{ $t('nav.projects') }}</a>
          <a href="#experience">{{ $t('nav.experience') }}</a>
        </nav>
      </div>

      <div>
        <p class="footer-label">{{ $t('footer.social') }}</p>
        <nav class="footer-links">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            :target="s.href.startsWith('mailto:') ? null : '_blank'"
            rel="noopener noreferrer"
          >{{ s.name }}</a>
        </nav>
      </div>

      <div>
        <p class="footer-label">{{ $t('footer.builtWith') }}</p>
        <p class="footer-built">{{ $t('footer.builtWithText') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { socials, email } from '@/data/socials'
import TypedCommand from './TypedCommand.vue'

const currentYear = new Date().getFullYear()
</script>

<style scoped>
.cta {
  padding: 112px 0;
}

.cta-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  margin-top: 28px;
}

.cta-title {
  max-width: 900px;
  font-size: 72px;
  font-weight: 500;
  line-height: 1.15;
  letter-spacing: -0.04em;
}

.cta-cursor {
  flex-shrink: 0;
  width: 34px;
  height: 64px;
  background: var(--color-accent);
  animation: blink 1.1s step-end infinite;
}

.cta-mail {
  position: relative;
  display: inline-block;
  margin-top: 40px;
  padding-bottom: 4px;
  font-size: 20px;
  font-weight: 500;
}

/* Underline that redraws left → right on hover */
.cta-mail::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: currentColor;
  transform-origin: left;
}

.cta-mail:hover {
  color: var(--color-accent);
}

.cta-mail:hover::after {
  animation: draw-line 400ms ease;
}

@keyframes draw-line {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}

.footer {
  padding: 48px 0 64px;
  border-top: 1px solid var(--color-border);
  font-size: 12px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
  gap: 32px;
}

.footer-brand {
  font-weight: 700;
}

.footer-copy {
  margin-top: 8px;
  color: var(--color-text-secondary);
}

.footer-label {
  margin-bottom: 10px;
  color: var(--color-text-tertiary);
  text-transform: lowercase;
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--color-text-secondary);
}

.footer-links--lower {
  text-transform: lowercase;
}

.footer-links a:hover {
  color: var(--color-accent);
}

.footer-built {
  color: var(--color-text-secondary);
}

@media (max-width: 767px) {
  .cta {
    padding: 72px 0;
  }

  .cta-head {
    align-items: flex-end;
  }

  .cta-title {
    font-size: 40px;
  }

  .cta-cursor {
    width: 20px;
    height: 38px;
  }

  .cta-mail {
    font-size: 16px;
    word-break: break-all;
  }

  .footer-grid {
    grid-template-columns: 1fr;
  }
}
</style>
