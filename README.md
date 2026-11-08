# NuvioHub ⚡

> The definitive open-source megathread and community directory for the modern debrid-powered media ecosystem — centered around Nuvio, Stremio, add-ons, companion tools, debrid services, and setup guides.

[![Built with VitePress](https://img.shields.io/badge/built%20with-VitePress-646CFF.svg)](https://vitepress.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## 📖 Live Documentation

Browse the hub online at: **[https://jollran2005.github.io/NuvioHub/](https://jollran2005.github.io/NuvioHub/)**

---

## 🧭 Directory Overview

NuvioHub is structured into focused, easily scannable category pages:

- **[Apps & Forks](docs/core-apps.md):** Official Nuvio & Stremio client links, downloads, and community forks across Mobile, Android TV, and Desktop.
- **[Add-ons & Plugins](docs/addons.md):** P2P/torrent scrapers (AIOStreams, Torrentio, Comet, MediaFusion), HTTP streaming add-ons, live sports feeds, and plugin directories.
- **[Tools & Utilities](docs/tools-utilities.md):** Custom setup wizards (Xperience, Numax, NuvioInstant), account managers, collection editors, and stream formatters.
- **[Debrid & Usenet](docs/debrid-services.md):** Verified debrid caching services (TorBox, Real-Debrid, Premiumize, AllDebrid) and Usenet resources.
- **[Community Guides](docs/guides.md):** Curated setup walkthroughs, official documentation, community wikis, and live uptime dashboards.
- **[Glossary](docs/glossary.md):** Plain-English definitions of core concepts (Debrid, scrapers, AIO aggregators, video codecs, and protocols).

---

## 🛠️ Local Development

NuvioHub is powered by [VitePress](https://vitepress.dev/). To run and preview the site locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm`

### Setup

```bash
# Clone the repository
git clone https://github.com/jollran2005/NuvioHub.git
cd NuvioHub

# Install dependencies
npm install

# Start the local development server with live reload
npm run docs:dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
# Build the static site into docs/.vitepress/dist
npm run docs:build

# Preview the production build locally
npm run docs:preview
```

---

## 🤝 Submitting Resources & Contributing

Have a new add-on, client fork, setup tool, or guide to suggest?

- **Submit a Resource:** Open a [Resource Submission Issue](https://github.com/jollran2005/NuvioHub/issues/new/choose) on GitHub.
- **Report Broken Links / Corrections:** Open an issue or submit a pull request against the corresponding file in `docs/`.

---

## ⚖️ Legal Disclaimer

NuvioHub is an educational documentation hub and community directory. It does not host, index, or distribute copyrighted media files, torrent files, or streams. All links point exclusively to official open-source software repositories, public configuration interfaces, community wikis, and legitimate service provider homepages.
