import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'NuvioHub',
  description: 'The definitive open-source megathread and directory for debrid streaming, Stremio, Nuvio, and media setups.',
  head: [
    // Legacy browser fallback (.ico)
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    // Modern high-res PNG for desktop browser tabs
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' }],
    // iOS Home Screen Icon
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    // Android Home Screen / Web Manifest
    ['link', { rel: 'manifest', href: '/site.webmanifest' }]
  ],

  base: '/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    logo: '⚡',
    siteTitle: 'NuvioHub',
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apps & Forks', link: '/core-apps' },
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
          { text: 'Apps & Forks', link: '/core-apps' },
          { text: 'Add-ons & Plugins', link: '/addons' },
          { text: 'Tools & Utilities', link: '/tools-utilities' },
          { text: 'Debrid & Usenet', link: '/debrid-services' },
          { text: 'Community Guides', link: '/guides' },
          { text: 'Glossary', link: '/glossary' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jollran2005/NuvioHub' }
    ],
    footer: {
      message: 'Organized community directory. No copyrighted content is hosted or indexed.',
      copyright: 'Copyright © 2026 NuvioHub'
    }
  }
})
