import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'StreamStack',
  description: 'The definitive open-source megathread and directory for debrid streaming, Stremio, Nuvio, and media setups.',
  base: '/StreamStack/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '⚡',
    siteTitle: 'StreamStack',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Apps', link: '/core-apps' },
      { text: 'Add-ons & Plugins', link: '/addons' },
      { text: 'Tools & Utilities', link: '/tools-utilities' },
      { text: 'Debrid & Usenet', link: '/debrid-services' },
      { text: 'Guides', link: '/guides' },
      { text: 'Glossary', link: '/glossary' }
    ],
    sidebar: [
      {
        text: 'Navigation',
        items: [
          { text: 'Core Applications', link: '/core-apps' },
          { text: 'Add-ons & Plugins', link: '/addons' },
          { text: 'Tools & Utilities', link: '/tools-utilities' },
          { text: 'Debrid & Usenet', link: '/debrid-services' },
          { text: 'Community Guides', link: '/guides' },
          { text: 'Glossary', link: '/glossary' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jollran2005/StreamStack' }
    ],
    footer: {
      message: 'Organized community directory. No copyrighted content is hosted or indexed.',
      copyright: 'Copyright © 2026 StreamStack'
    }
  }
})
