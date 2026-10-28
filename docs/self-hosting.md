---
title: Self-Hosting & Automation
description: Curated directory of self-hosted media infrastructure, debrid mounts, and the Arr stack.
---

# Self-Hosting & Automation

::: tip Local & Cloud Hybrid
Self-hosting allows running local media servers (Plex, Jellyfin) while streaming directly from cloud debrid caches without consuming local storage.
:::

## AIO Debrid Mounts

- ⭐ **[Zurg](https://github.com/debridmediamanager/zurg-testing)** / [Docker Image](https://ghcr.io/debridmediamanager/zurg-testing) - High-performance Real-Debrid WebDAV proxy caching directory structures in memory to avoid rate-limit bans. 🔑 💻
- ⭐ **[Rclone](https://rclone.org)** / [Documentation](https://rclone.org/docs/) - Swiss army knife for cloud mounting; mounts Zurg WebDAV endpoints locally as virtual file drives. 💻
- ⭐ **[Debrid Media Manager (DMM)](https://debridmediamanager.com)** - Powerful web app to search, manage, and batch-add community-cached Real-Debrid hashes. 🔑
- **[DMB (Debrid Media Bridge)](https://github.com/)** / [GitHub](https://github.com/) - Automated orchestrator tying Zurg, Plex, and the Arr suite into a single synchronized containerized setup. 🔑 💻

<!-- TODO: Add niche mounting scripts, rdiff-backup setups, and TorBox WebDAV guides here -->

## The Arr Stack

- ⭐ **[Prowlarr](https://prowlarr.com)** / [GitHub](https://github.com/Prowlarr/Prowlarr) - Centralized indexer manager for torrent and Usenet indexers; automatically synchronizes with Sonarr and Radarr. 💻
- ⭐ **[Radarr](https://radarr.video)** / [GitHub](https://github.com/Radarr/Radarr) - Movie automation manager that monitors release calendars, parses release formats, and triggers downloads. 💻
- ⭐ **[Sonarr](https://sonarr.tv)** / [GitHub](https://github.com/Sonarr/Sonarr) - Television series manager tracking upcoming episodes, season packs, and quality upgrades. 💻
- **[Bazarr](https://www.bazarr.media)** / [GitHub](https://github.com/morpheus65535/bazarr) - Subtitle automation companion to Sonarr and Radarr with multi-language provider support. 💻
- **[Overseerr](https://overseerr.dev)** / [GitHub](https://github.com/sct/overseerr) - Clean request management and discovery interface designed for Plex media servers. 💻
- **[Jellyseerr](https://github.com/Fallenbagel/jellyseerr)** / [GitHub](https://github.com/Fallenbagel/jellyseerr) - Fork of Overseerr offering dedicated support for Jellyfin, Emby, and Plex libraries. 💻
- **[Lidarr](https://lidarr.audio)** / [GitHub](https://github.com/Lidarr/Lidarr) - Music collection tracking and album management automation. 💻
- **[rdt-client](https://github.com/rogerfar/rdt-client)** / [Docker](https://hub.docker.com/r/rogerfar/rdt-client) - qBittorrent emulator that downloads to Real-Debrid, AllDebrid, or Premiumize. 🔑 💻

<!-- TODO: Add niche Arr helper scripts, cleanup utilities, and symlink orchestrators here -->

## Reverse Proxies & Tunnels

- ⭐ **[Nginx Proxy Manager](https://nginxproxymanager.com)** / [GitHub](https://github.com/NginxProxyManager/nginx-proxy-manager) - Intuitive web dashboard for managing Nginx reverse proxies with automated Let's Encrypt SSL. 💻
- ⭐ **[Caddy](https://caddyserver.com)** / [GitHub](https://github.com/caddyserver/caddy) - Fast, memory-safe reverse proxy featuring automatic HTTPS certificate renewal by default. 💻
- ⭐ **[Tailscale](https://tailscale.com)** / [Downloads](https://tailscale.com/download) - Zero-config WireGuard mesh VPN for secure private network streaming across mobile and TV devices.
- **[Traefik](https://traefik.io)** / [GitHub](https://github.com/traefik/traefik) - Dynamic reverse proxy that automatically discovers container routes through Docker container labels. 💻
- **[Cloudflare Tunnels](https://www.cloudflare.com)** / [Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) - Outbound edge tunnel bypassing CGNAT and port-forwarding (non-video traffic only). ℹ️

<!-- TODO: Add niche VPN gateways, Pangolin, and Authentik SSO configurations here -->
