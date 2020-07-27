const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  title: 'Vyte API',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
  
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel:"apple-touch-icon", sizes:"57x57", href: "/assets/favicons/apple-icon-57x57.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"60x60", href: "/assets/favicons/apple-icon-60x60.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"72x72", href: "/assets/favicons/apple-icon-72x72.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"76x76", href: "/assets/favicons/apple-icon-76x76.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"114x114", href: "/assets/favicons/apple-icon-114x114.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"120x120", href: "/assets/favicons/apple-icon-120x120.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"144x144", href: "/assets/favicons/apple-icon-144x144.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"152x152", href: "/assets/favicons/apple-icon-152x152.png"}],
    ['link', { rel:"apple-touch-icon", sizes:"180x180", href: "/assets/favicons/apple-icon-180x180.png"}],
    ['link', { rel:"icon", type:"image/png", sizes:"192x192",  href: "/assets/favicons/android-icon-192x192.png"}],
    ['link', { rel:"icon", type:"image/png", sizes:"32x32", href: "/assets/favicons/favicon-32x32.png"}],
    ['link', { rel:"icon", type:"image/png", sizes:"96x96", href: "/assets/favicons/favicon-96x96.png"}],
    ['link', { rel:"icon", type:"image/png", sizes:"16x16", href: "/assets/favicons/favicon-16x16.png"}],
    ['link', { rel:"manifest", href: "/assets/favicons/manifest.json"}],
    ['meta', { name:"msapplication-TileColor", content:"#428FF0"}],
    ['meta', { name:"msapplication-TileImage", content:"/assets/favicons/ms-icon-144x144.png"}],
    ['meta', { name: "msapplication-config", content: "/assets/favicons/browserconfig.xml"}],
    ['meta', { name:"theme-color", content:"#428FF0"}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    editLinks: false,
    lastUpdated: true,
    smoothScroll: true,
    logo: '/logo.svg',
    nav: [
      {
        text: 'Guides',
        link: '/guides/',
      },
      {
        text: 'Api Reference',
        link: '/reference/',
      },
    ],
    sidebar: {
      '/guides/' : [
        {
          title: 'API Guides',
          collapsable: true,
          children: [
            '',
            'getting-started',
            'create-and-manage-booking-pages'
          ]
        }
      ],
      '/reference/': [
        {
          title: 'API Reference',
          collapsable: true,
          children: [
            '',
            'events',
            'locations',
            'locators',
            'teams',
            'users',
            'webhooks',
            'errors'
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    'vuepress-plugin-element-tabs',
    'vuepress-plugin-mermaidjs',
    'vuepress-plugin-export',
    [require('vuepress-intercom'), { appId: 'sqoiibtg' }],
    [
      'vuepress-plugin-container',
      {
        type: 'left',
        before: `<div class="left">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        before: `<div class="right">`,
        after: '</div>',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'panel',
        before: `<div class="parent">`,
        after: '</div>',
      },
    ],
  ],
  markdown: {
    plugins: []
  }
}
