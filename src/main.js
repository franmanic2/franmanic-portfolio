import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import { vReveal } from './composables/vReveal'

createApp(App).use(i18n).directive('reveal', vReveal).mount('#app')
