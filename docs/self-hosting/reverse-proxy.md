---
title: Reverse Proxies & SSL
description: Securing self-hosted media services and remote streaming instances.
---

# Reverse Proxies & SSL

::: tip Remote Streaming Safety
Rather than exposing media servers directly to the public web, consider using **Tailscale** for private, encrypted remote access without opening ports on your home router.
:::

### Reverse Proxies & Tunnels

- ⭐ **[Nginx Proxy Manager](https://nginxproxymanager.com)** / [GitHub](https://github.com/NginxProxyManager/nginx-proxy-manager) - Intuitive web dashboard for managing Nginx reverse proxies with automated Let's Encrypt SSL. 💻
- ⭐ **[Caddy](https://caddyserver.com)** / [GitHub](https://github.com/caddyserver/caddy) - Fast, memory-safe reverse proxy featuring automatic HTTPS certificate renewal by default. 💻
- ⭐ **[Tailscale](https://tailscale.com)** / [Downloads](https://tailscale.com/download) - Zero-config WireGuard mesh VPN for secure private network streaming across mobile and TV devices.
- **[Traefik](https://traefik.io)** / [GitHub](https://github.com/traefik/traefik) - Dynamic reverse proxy that automatically discovers container routes through Docker container labels. 💻
- **[Cloudflare Tunnels](https://www.cloudflare.com)** / [Docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) - Outbound edge tunnel bypassing CGNAT and port-forwarding (non-video traffic only). ℹ️

<!-- TODO: Add niche VPN gateways, Pangolin, and Authentik SSO configurations here -->

::: warning Cloudflare Terms of Service (TOS)
Streaming large video files through free **Cloudflare Tunnels (Zero Trust)** violates Cloudflare's Section 2.8 Terms of Service and frequently leads to automated domain and account termination. Video streaming should route directly via dynamic DNS or private mesh VPNs like **Tailscale**.
:::
