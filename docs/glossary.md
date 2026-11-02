---
title: Ecosystem Glossary & Terminology
description: Common terminology and protocol definitions across the streaming ecosystem.
---

# Ecosystem Glossary & Terminology

A comprehensive reference for concepts, protocols, formats, and terminology used across the NuvioHub ecosystem, including Nuvio, Stremio, Debrid services, Usenet, and community add-ons.

---

## ⚡ Debrid & File Retrieval

### Debrid Service
A paid subscription service (e.g., Real-Debrid, AllDebrid, TorBox, Premiumize) that functions as a high-speed multihoster and torrent cloud cacher. Instead of connecting directly to P2P swarms to download or stream media, the debrid provider retrieves the file onto their servers (or serves it from an existing cached copy) and provides you with a private, high-speed, direct HTTPS/WebDAV stream.

### Instant Cache / Cached Torrent
When a torrent's files have already been downloaded to a debrid provider's cloud servers by another user. When you select a cached stream, playback begins instantly with zero seeding or downloading wait time. Uncached torrents require the debrid service to download the contents first.

### Torrent / P2P (Peer-to-Peer)
A decentralized file-sharing protocol where users (peers, seeders, leechers) upload and download pieces of a file directly to and from one another via torrent swarms. In this ecosystem, scrapers search torrent swarms, but streams are usually passed through a debrid service rather than streamed directly over P2P.

### Magnet Link
A URI scheme containing the cryptographic hash (infohash) of a torrent. Add-ons pass magnet links or infohashes to debrid services to resolve them into direct streaming URLs without needing a `.torrent` file.

### Usenet
A worldwide distributed discussion and binary transfer system that predates the World Wide Web. Binary files are posted to newsgroups in segmented parts and indexed into NZB files. Unlike P2P, downloads originate from dedicated high-speed Usenet servers (e.g., via providers like TorBox) with high retention and fast speeds without relying on peers.

### NZB
An XML-based file format that indexes the message IDs of binary file segments across Usenet newsgroups. NZB files serve a role analogous to `.torrent` files or magnet links, pointing downloaders to the exact parts needed to reconstruct a complete file.

---

## 🧩 Add-ons, Scrapers & Architecture

### Add-on
A server or serverless endpoint that adheres to the Stremio/Nuvio add-on protocol. Add-ons provide catalogs, search metadata, subtitle tracks, or streaming links by exposing a standardized manifest and resource handlers.

### Manifest (`manifest.json`)
A JSON document hosted by an add-on that defines its unique identifier, name, version, supported resource types (`stream`, `meta`, `catalog`, `subtitles`), types of content (`movie`, `series`, `anime`), and configuration parameters. Applications read this manifest to understand what the add-on can provide.

### Scraper
A specialized add-on that queries public and private torrent trackers, indexers, or streaming websites for available media files matching a specific title and episode or movie identifier (such as IMDb ID or TMDB ID).

### Debrid Resolver
A component within a scraper or aggregator that takes scraped magnet links or hashes, checks them against a user's debrid account API for active cache status, and converts cached matches into playable HTTP stream links.

### AIO (All-In-One) Aggregator
A meta-addon (such as **AIOStreams**) that connects to multiple underlying scrapers and resolvers. It queries all configured sources simultaneously, deduplicates results, filters unwanted resolutions or languages, sorts them according to custom rules, and returns a single combined stream list.

### HTTP Stream Add-on
An add-on that provides direct on-demand video or live TV streams hosted on traditional web servers or streaming cyberlockers, bypassing torrent swarms and debrid requirements entirely.

---

## 🖼️ Metadata, Catalogs & UI

### Cinemeta
The default metadata add-on for Stremio and Nuvio. It provides fundamental movie and TV show titles, summaries, release years, cast lists, and poster artwork sourced primarily from IMDb and TVmaze.

### TMDB (The Movie Database)
A popular community-built database for movies and TV series. Used extensively by modern metadata add-ons (such as **AIOMetadata** and **TMDB Discover+**) to deliver detailed synopsis, artwork, cast profiles, and genre classifications.

### IMDb ID / TMDB ID
Unique alphanumeric identifiers assigned to films and television shows (e.g., `tt0137523` on IMDb). These IDs serve as the universal primary key that allows clients, metadata add-ons, and stream scrapers to coordinate and match the exact same media item.

### Catalog
A categorized collection of media titles presented on the home screen or discover tab of a streaming client (e.g., *Trending Movies*, *Popular Series*, *Anime Season*, *Trakt Watchlists*).

### Trakt
A popular third-party media tracking service that logs watched history, scrobbles current playback, and hosts user-curated lists. Trakt lists can be imported as custom catalogs or synced with client profiles.

### Simkl
A cross-platform tracking service for movies, TV series, and anime. Tools like **NuvioSync** enable users to import their Simkl watchlists directly into client profiles.

---

## 🎨 Badges & Formatting

### Badges / Fusion Badges
Visual tags rendered on stream results (configured via tools like **Badger** or **BetterFormatter**) showing key playback technical properties at a glance:
- **Resolution**: `4K / 2160p`, `1080p`, `720p`
- **Dynamic Range**: `HDR10`, `HDR10+`, `Dolby Vision (DV)`
- **Audio Channels & Codecs**: `7.1 Atmos`, `DTS-HD MA`, `TrueHD`, `5.1 DD+`, `AAC`
- **Video Encoding**: `HEVC / H.265`, `AVC / H.264`, `AV1`
- **Release Source**: `Remux`, `BluRay`, `WEB-DL`, `WEBRip`, `HDTV`

### Remux
A lossless copy of the video and audio streams extracted from an original physical Blu-ray or UHD disc into an MKV or MP4 container without re-encoding or compressing the video data. Provides the highest possible audio and visual quality, resulting in large file sizes.

### WEB-DL / WEBRip
- **WEB-DL**: A bit-for-bit extraction of the stream directly downloaded from a streaming service (e.g., Netflix, Apple TV+, Amazon Prime) without re-encoding.
- **WEBRip**: A video captured or screen-recorded while playing from a web service and then re-encoded.

---

## 🛠️ Video Playback & Features

### IntroDB / Skip-Intro
A community-driven timestamp database that indexes the exact starting and ending points of television intro sequences and end credits. Compatible clients can automatically display a "Skip Intro" button or automatically jump past the title sequence.

### Hardware Acceleration & Video Decoders
- **ExoPlayer**: The default media player engine on Android and Android TV, utilizing hardware decoders built into the device SOC.
- **MPV**: A high-performance, open-source media player engine used on desktop, handhelds, and advanced forks for low-level shader support, custom keybindings, and complex subtitle styling.

### HDR (High Dynamic Range) & Dolby Vision (DV)
Color and luminance standards that provide wider contrast and color gamuts:
- **HDR10**: The open base HDR standard supported by almost all modern 4K displays.
- **Dolby Vision (DV)**: A proprietary HDR format that uses dynamic frame-by-frame metadata. Files can feature different DV Profiles (e.g., Profile 5 for streaming service WEB-DLs, Profile 7/8 for UHD Blu-ray remuxes).

---

## 📲 Platform & Deployment Terms

### Sideloading
The practice of installing an application package on a device outside of an official app store (such as the Google Play Store or Amazon Appstore). Common methods include downloading APK files via tools like **AFTVnews Downloader** or transferring them over local Wi-Fi with **SendFilesToTV**.

### APK (Android Package)
The file format used by the Android operating system for the distribution and installation of mobile apps, Android TV apps, and Fire OS applications.

### WGT (Widget Package)
The web application package format used by Samsung Smart TVs running the **Tizen** operating system. Tools like **Apps2Samsung** allow users to install custom `.wgt` packages onto Samsung TVs without setting up the full Samsung Tizen Studio development suite.

### webOS
The Linux-based smart TV operating system developed by LG. Nuvio and community forks support webOS through dedicated web/native TV clients.
