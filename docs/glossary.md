---
title: Ecosystem Glossary & Terminology
description: Common terminology, jargon, and protocol definitions across the streaming ecosystem.
---

# Ecosystem Glossary

A quick-reference dictionary explaining common terms used across debrid services, media aggregators, and home server automation.

## Definitions

### Debrid Service
A commercial service providing high-bandwidth caching servers. It converts torrent magnet links and cyberlocker URLs into direct, encrypted HTTPS streams at uncapped speeds without requiring peer-to-peer uploading.

### Instant Caching
When a torrent file has already been completely downloaded by any customer of a debrid provider, that file is stored in the provider's cloud cache. Subsequent requests for the same torrent hash resolve instantly with zero download wait time.

### Scraper
A lightweight script or service that queries public indexers, trackers, or web repositories for a given title, parsing release names, resolutions, and magnet hashes.

### Addon
A modular extension installed into a client (such as Stremio or Nuvio). In Stremio, addons are remote web microservices serving JSON manifests; in Nuvio, they can also include client-side scrapers and `.cs3` plugins.

### CloudStream Repository (`.cs3`)
A community-maintained repository distributing compiled Kotlin or JavaScript plugins adhering to the CloudStream engine specification, supported as an extension mechanism in Nuvio.

### Newznab / Torznab
Standardized XML/JSON API specifications used by Usenet indexers (Newznab) and torrent indexers (Torznab) allowing client tools like Prowlarr, Sonarr, and Radarr to execute automated searches.

### AIO (All-In-One) Stack
In self-hosting contexts, a Docker Compose setup that bundles cloud debrid mount software (like Zurg + Rclone) alongside local media servers (Plex, Jellyfin) and the *Arr automation suite.

### WebDAV
An extension of the HTTP protocol that enables clients to perform remote file-management operations. Used by debrid mounts to present cloud files to local applications like Rclone, Kodi, or Infuse.

<!-- TODO: Add additional streaming protocols, codec definitions, and hardware transcode terms here -->
