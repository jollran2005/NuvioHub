---
title: AIO Instances & Debrid Mounts
description: Tools for mounting debrid torrent caches as virtual file systems for Plex, Jellyfin, and Emby.
---

# AIO Instances & Debrid Mounts

::: tip In-Memory Directory Caching
Mounting a Debrid cache triggers hundreds of HTTP requests when media servers analyze video headers. Tools like **Zurg** cache directory structures in memory to prevent API rate-limit bans from Real-Debrid.
:::

### Verified Debrid Mount Tools

- ⭐ **[Zurg](https://github.com/debridmediamanager/zurg-testing)** / [Docker Image](https://ghcr.io/debridmediamanager/zurg-testing) - High-performance Real-Debrid WebDAV proxy caching directory structures in memory to avoid rate-limit bans. 🔑 💻
- ⭐ **[Rclone](https://rclone.org)** / [Documentation](https://rclone.org/docs/) - Swiss army knife for cloud mounting; mounts Zurg WebDAV endpoints locally as virtual file drives. 💻
- ⭐ **[Debrid Media Manager (DMM)](https://debridmediamanager.com)** - Powerful web app to search, manage, and batch-add community-cached Real-Debrid hashes. 🔑
- **[DMB (Debrid Media Bridge)](https://github.com/)** / [GitHub](https://github.com/) - Automated orchestrator tying Zurg, Plex, and the Arr suite into a single synchronized containerized setup. 🔑 💻

<!-- TODO: Add niche mounting scripts, rdiff-backup setups, and TorBox WebDAV guides here -->
