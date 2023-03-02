import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nVitePlugin from '@intlify/unplugin-vue-i18n/vite'

export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'fade',
      mode: 'out-in',
      enterToClass: '',
      leaveActiveClass: '',
      enterActiveClass: 'fadeIn',
      leaveToClass: 'fadeOut',
    },
    layoutTransition: {
      name: 'fade',
      mode: 'out-in',
      enterToClass: '',
      leaveActiveClass: '',
      enterActiveClass: 'fadeIn',
      leaveToClass: 'fadeOut',
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/sass/utilities/index.scss" as *;',
        },
      },
    },
    plugins: [
      VueI18nVitePlugin({
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json'),
        ],
      }),
    ],
  },
  css: ['~/assets/sass/main.scss'],
  modules: ['nuxt-simple-sitemap', '@nuxtjs/color-mode'],
  sitemap: {
    hostname: process.env.SITE_BASE_URL || 'https://localhost:3000',
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/'],
    },
  },
  colorMode: {
    classPrefix: '',
    classSuffix: '-theme',
  },
})
