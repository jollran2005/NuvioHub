# NuvioHub

A community-maintained megathread and directory for the modern streaming ecosystem, centered around **Nuvio**, add-ons, debrid backbones, and companion utilities.

Built with [VitePress](https://vitepress.dev/) and formatted using an inline, high-density listing pattern inspired by [FreeMediaHeckYeah (FMHY)](https://fmhy.net/).

**Official Website:** [https://nuvihub.pages.dev](https://nuvihub.pages.dev)

---

## What NuvioHub Covers

The directory is split into focused sections across `docs/`:

### 1. 📱 [Apps & Forks](docs/core-apps.md)
Official client repositories, release downloads, and community forks:
- **Core Apps:** Nuvio, Stremio, Wuplay.
- **Mobile Forks (Android / iOS):** Nuvio Enhanced, Nuvio Reshaped, Nuvio One.
- **Android TV & Streaming Boxes:** Nuvio Arc, NuvioTV Reshaped, Nuvio Native Legacy, Nuvio + IPTV, NuvioTV-Lite.
- **Desktop (Windows / macOS / Linux):** Nuvio HTPC, Nuvio HTPC Linux, NuvioCodeineXO.
- **Smart TV & Apple TV:** Nuvio Native Legacy (Tizen / webOS), Nuvio for Roku, Nuvio TV for tvOS.
- **Web Clients:** Nuvio Web, NuvioStreamX, TikTak TV.

### 2. 🧩 [Add-ons & Plugins](docs/addons.md)
Scrapers, stream bridges, live feeds, and plugin catalogs:
- **P2P & Debrid Scrapers:** AIOStreams, Torrentio, Comet, MediaFusion, StremThru Torz, Peerflix, Meteor, TorrentsDB.
- **HTTP Stream Add-ons:** PenguPlay, HDHub, HD Plavio, CNCVerse Bridge, 1111477, FlixNest, Sooti.
- **Live Sports & TV:** NuvioSports, HighFly Sports, Nebula Sports, MediaFusion.
- **Catalogs & Subtitles:** CyberFlix, Trakt, Anime Kitsu, OpenSubtitles v3, SubDL.
- **Plugin Directories:** Nuvio Plugin Library, NuvioPlugin.

### 3. 🛠️ [Tools & Utilities](docs/tools-utilities.md)
Configuration assistants, sync tools, and UI formatters:
- **Setup Wizards:** Xperience, Numax, NuvioInstant, UltraMax, numb3rs Perfect Setup, Stremx Bootstrapper.
- **Account & Profile Management:** AIOManager, NuvioSync, NuvioAccountCloner, Kaptain's Studio.
- **Collections & Catalogs:** Kaptain's Collection, BingeCat, Nuvio Collections Editor, Stremio LabAR.
- **Formatters & Badges:** Badger, BetterFormatter, CrispyFormat.

### 4. ⚡ [Debrid & Usenet](docs/debrid-services.md)
Cloud caching backbones, multihosters, and newsgroup indexers:
- **Debrid Providers:** TorBox, Real-Debrid, Premiumize, AllDebrid, LinkSnappy, Deepbrid, put.io, Offcloud, Debrid-Link.
- **Usenet Integration:** Overview, indexer references, and TorBox direct Usenet caching.

### 5. 📚 [Community Guides](docs/guides.md)
- Official documentation links and wikis ([nuvio.wiki](https://nuvio.wiki/), [docs.nuvio.tv](https://nuvio.tv/docs)).
- Comprehensive community guides (Numb3rs, Duck Guides, AIOStreams Docs).
- Service status and uptime monitors (ibbylabs, Stremio Status, NuvioSync Status, Xperience Status).

### 6. 📖 [Glossary](docs/glossary.md)
Clear definitions of technical terms used across the ecosystem (Debrid caching, AIO aggregators, P2P vs HTTP streaming, manifests, indexers, and video formats).

---

## Local Development

To run or contribute to NuvioHub locally:

### Requirements
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm

### Quickstart

```bash
# Clone the repository
git clone https://github.com/jollran2005/NuvioHub.git
cd NuvioHub

# Install dependencies
npm install

# Start local development server with hot reload
npm run docs:dev
```

The site will be available at `http://localhost:5173`.

### Build

```bash
# Build production static output
npm run docs:build

# Preview production build locally
npm run docs:preview
```

---

## Contributing

Suggestions, corrections, and new resource additions are welcome:

- To suggest a new app, add-on, setup tool, or guide, please open a [GitHub Issue](https://github.com/jollran2005/NuvioHub/issues).
- For broken links or corrections, open an issue or submit a pull request against the relevant Markdown file in `docs/`.

---

## Disclaimer

NuvioHub is an educational documentation project and curated link directory. It does not host, store, index, or distribute any media files, torrent files, streams, or copyrighted content. All listings link strictly to official open-source repositories, public add-on configurators, community wikis, and legitimate service provider homepages.

