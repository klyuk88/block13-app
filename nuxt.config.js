export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Обучающий курс по трейдингу',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/main.css',
    '~/assets/sass/index.sass',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-mask.js', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-clipboard2.js', mode: 'client' },
    { src: '~/plugins/vue-countdown-timer.js', mode: 'client' },
    { src: '~/plugins/vue-plyr', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],
  axios: {
    baseURL: process.env.API_URL || 'https://block13.ru:8086/api', // Used as fallback if no runtime config is provided
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL || 'https://block13.ru:8086/api'
  },
  target: 'static',
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt',
    'vue-scrollto/nuxt'
  ],
  router: {
    middleware: 'header',
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
}
