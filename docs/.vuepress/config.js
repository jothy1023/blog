const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'RichLab',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', {
      rel: 'icon',
      href: 'https://gw.alipayobjects.com/zos/finxbff/compress-tinypng/7a6ec1c9-2680-4817-8748-eeab10cb1469.png'
    }],
    ['meta', { name: 'referrer', content: 'no-referrer' }],
    ['meta', { name: 'theme-color', content: '#272727' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    logo: 'https://gw.alipayobjects.com/zos/finxbff/compress-tinypng/b1a25d04-6a13-4bb5-a929-a5f0db08b8de.png',
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'About',
        link: '/about/'
      },
      {
        text: 'Blog',
        link: '/blog/'
      },
      {
        text: 'Github',
        link: 'https://github.com/rich-lab'
      },
      {
        text: 'Artworks',
        link: 'https://github.com/rich-lab/art/'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
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
    ['@vuepress-reco/comments', {
      solution: 'valine',
      options: {
        appId: 'yPsaft2cSPtwnXW6UiXBS4ld-gzGzoHsz',
        appKey: 'AYI4KeXQloUWsuebDElj8A67',
      }
    }],
    require('./vuepress-plugin-dynamic-public-path')
  ]
}
