<template>
  <div class="topbar">
    <div class="container topbar-inner">
      <span class="topbar-host">franmanic@portafolio: ~</span>

      <span class="topbar-status">
        <span class="status-dot"></span>
        {{ $t('hero.available') }}
      </span>

      <span class="topbar-right">
        <button class="topbar-link" @click="toggleLanguage" aria-label="Toggle language">
          [<span :class="{ active: locale === 'es' }">es</span>/<span :class="{ active: locale === 'en' }">en</span>]
        </button>
        <a href="/CV.pdf" download="CV_Francisco_Hurtado.pdf" class="topbar-link">[cv]</a>
        <span>Lima · {{ currentYear }}</span>
      </span>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentYear = new Date().getFullYear()
const toggleLanguage = () => { locale.value = locale.value === 'es' ? 'en' : 'es' }
</script>

<style scoped>
.topbar {
  border-bottom: 1px solid var(--color-border);
  font-size: 12px;
  color: var(--color-text-secondary);
}

.topbar-inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 16px;
  min-height: 44px;
}

.topbar-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.topbar-right {
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
}

.topbar-link {
  color: var(--color-text-tertiary);
}

.topbar-link .active {
  color: var(--color-text);
}

.topbar-link:hover,
.topbar-link:hover .active {
  color: var(--color-accent);
}

@media (max-width: 767px) {
  .topbar-inner {
    grid-template-columns: 1fr auto;
    row-gap: 4px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .topbar-status {
    grid-column: 1 / -1;
    grid-row: 2;
  }
}
</style>
