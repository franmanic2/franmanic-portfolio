<template>
  <section id="hero" class="section hero">
    <div class="container hero-grid">

      <!-- ── LEFT: Text content ── -->
      <div class="hero-left">
        <p class="prompt">$ whoami</p>

        <h1 class="hero-name" aria-label="Francisco Hurtado">
          <span aria-hidden="true"><template v-for="(line, li) in nameLines" :key="line"><br v-if="li" />{{ typedLines[li] }}<span v-if="cursorLine === li" class="hero-cursor" :class="{ 'is-typing': !done }">_</span><span class="hero-ghost">{{ line.slice(typedLines[li].length) }}</span></template></span>
        </h1>

        <ul class="hero-roles" v-reveal="900">
          <li v-for="role in roles" :key="role" class="chip">{{ role }}</li>
        </ul>

        <p class="hero-now" v-reveal="980">
          <span class="status-dot"></span>
          {{ $t('hero.now') }} → AI Engineer @ <span class="hero-company">Hatariy Consulting</span>
        </p>

        <p class="hero-now hero-also" v-reveal="1020">
          <span class="status-dot status-dot--hollow"></span>
          {{ $t('hero.also') }} → {{ $t('hero.freelance') }}
        </p>

        <p class="hero-bio" v-reveal="1080">{{ $t('hero.bio') }}</p>

        <nav class="hero-socials" v-reveal="1140">
          <a
            v-for="s in socials"
            :key="s.name"
            :href="s.href"
            :target="s.href.startsWith('mailto:') ? null : '_blank'"
            rel="noopener noreferrer"
          >[{{ s.name }}]</a>
        </nav>
      </div>

      <!-- ── RIGHT: Photo ── -->
      <figure class="hero-photo" v-reveal="200">
        <img src="/images/francisco.jpg" alt="Francisco Hurtado" />
      </figure>

    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { socials } from '@/data/socials'
import { useTypewriter } from '@/composables/useTypewriter'

const roles = ['software engineer', 'front-end developer', 'vibe coder']

// Name is typed once on load (~0.8s), then the cursor keeps blinking
const nameLines = ['Francisco', 'Hurtado']
const { count, done, start } = useTypewriter(nameLines.join('').length, 50)

const typedLines = computed(() => {
  let remaining = count.value
  return nameLines.map((line) => {
    const typed = line.slice(0, Math.max(0, remaining))
    remaining -= line.length
    return typed
  })
})
const cursorLine = computed(() => (count.value < nameLines[0].length ? 0 : 1))

onMounted(() => start(200))
</script>

<style scoped>
.hero {
  border-top: 0;
  padding: 96px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 64px;
  align-items: start;
}

.hero-name {
  margin-top: 20px;
  font-size: 84px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -0.05em;
}

.hero-cursor {
  color: var(--color-accent);
  animation: blink 1.1s step-end infinite;
}

.hero-cursor.is-typing {
  animation: none;
}

.hero-ghost {
  visibility: hidden;
}

.hero-roles {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 28px;
}

.hero-now {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  font-size: 13px;
}

.hero-also {
  margin-top: 8px;
  color: var(--color-text-secondary);
}

.status-dot--hollow {
  background: transparent;
  border: 1px solid var(--color-accent);
}

.hero-company {
  text-decoration: underline;
  text-underline-offset: 4px;
}

.hero-bio {
  max-width: 560px;
  margin-top: 24px;
  font-size: 15px;
  line-height: 1.75;
  color: var(--color-text-secondary);
}

.hero-socials {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
  margin-top: 32px;
  font-size: 13px;
}

.hero-socials a:hover {
  color: var(--color-accent);
}

.hero-photo {
  height: 460px;
  border: 1px solid var(--color-border);
}

.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
}

/* Mobile: one column, photo right below the name */
@media (max-width: 767px) {
  .hero {
    padding: 56px 0;
  }

  .hero-grid {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .hero-left {
    display: contents;
  }

  .hero-name {
    font-size: 52px;
  }

  .hero-photo {
    order: 1;
    height: 380px;
    margin-top: 28px;
  }

  .hero-left > :nth-child(n + 3) {
    order: 2;
  }
}
</style>
