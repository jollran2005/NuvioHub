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
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Core Apps', link: '/core-apps/' },
      { text: 'Debrid Services', link: '/debrid-services/' },
      {
        text: 'Addons & Scrapers',
        items: [
          { text: 'Overview', link: '/scrapers-addons/' },
          { text: 'Stremio Addons', link: '/scrapers-addons/stremio-addons' },
          { text: 'Nuvio Addons', link: '/scrapers-addons/nuvio-addons' },
          { text: 'CloudStream Plugins', link: '/scrapers-addons/cloudstream-repos' },
          { text: 'Metadata & Catalogs', link: '/scrapers-addons/metadata' }
        ]
      },
      { text: 'Self-Hosting', link: '/self-hosting/' },
      { text: 'Usenet', link: '/usenet/' },
      { text: 'Guides', link: '/guides' },
      { text: 'Glossary', link: '/glossary' }
    ],
    sidebar: {
      '/core-apps/': [
        {
          text: 'Core Apps',
          items: [
            { text: 'Overview', link: '/core-apps/' },
            { text: 'Stremio', link: '/core-apps/stremio' },
            { text: 'Nuvio', link: '/core-apps/nuvio' }
          ]
        }
      ],
      '/debrid-services/': [
        {
          text: 'Debrid Services',
          items: [
            { text: 'Overview & Matrix', link: '/debrid-services/' },
            { text: 'Real-Debrid', link: '/debrid-services/real-debrid' },
            { text: 'AllDebrid', link: '/debrid-services/alldebrid' },
            { text: 'Premiumize', link: '/debrid-services/premiumize' },
            { text: 'TorBox', link: '/debrid-services/torbox' }
          ]
        }
      ],
      '/scrapers-addons/': [
        {
          text: 'Addons & Scrapers',
          items: [
            { text: 'Master Overview', link: '/scrapers-addons/' },
            { text: 'Stremio Addons', link: '/scrapers-addons/stremio-addons' },
            { text: 'Nuvio Addons', link: '/scrapers-addons/nuvio-addons' },
            { text: 'CloudStream Plugins', link: '/scrapers-addons/cloudstream-repos' },
            { text: 'Metadata & Catalogs', link: '/scrapers-addons/metadata' }
          ]
        }
      ],
      '/self-hosting/': [
        {
          text: 'Self-Hosting & Automation',
          items: [
            { text: 'Overview', link: '/self-hosting/' },
            { text: 'AIO & Debrid Mounts', link: '/self-hosting/aio-instances' },
            { text: 'The Arr Stack', link: '/self-hosting/arr-stack' },
            { text: 'Reverse Proxies & SSL', link: '/self-hosting/reverse-proxy' }
          ]
        }
      ],
      '/usenet/': [
        {
          text: 'Usenet Integration',
          items: [
            { text: 'Overview', link: '/usenet/' },
            { text: 'Indexers', link: '/usenet/indexers' },
            { text: 'Clients & Downloaders', link: '/usenet/clients' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jollran2005/StreamStack' }
    ],
    footer: {
      message: 'Organized community directory. No copyrighted content is hosted or indexed.',
      copyright: 'Copyright © 2026 StreamStack'
    }
  }
})
