export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'first-nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },
  buildModules: ['@nuxt/typescript-build'],

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    // '~/middleware/index'
    '~/plugins/element.js'
    // {
    //   src: '~/plugins/element.js',
    //   mode: 'server' // 设置后将限制为指定环境生效
    // }
  ],
  router: {
    middleware: 'auth'
  },
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [],
  transpile: [/^element-ui/]

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  // build: {
  //   vendor: ['element-ui']
  // }
}
