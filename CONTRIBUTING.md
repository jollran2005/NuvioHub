# Contributing to StreamStack

Thank you for contributing to **StreamStack**! We aim to build the cleanest, most scannable index for modern debrid-powered media stacks using the FMHY (FreeMediaHeckYeah) inline listing pattern.

---

## 1. Safety & Legal Guardrails

- **Zero Tolerance for Direct Piracy Links:** Never link directly to copyright-infringing media files, torrent files, magnet links, or illegal streaming cyberlockers.
- **Accepted Submissions:**
  - Official client download pages and GitHub/GitLab repositories.
  - Open-source addons, scrapers, and CloudStream plugins.
  - Debrid service homepages and documentation.
  - Configuration wizards, self-hosting guides, and docker compose templates.

---

## 2. Listing Schema (FMHY Style — No Tables!)

To maximize scannability and mobile readability, **do not use Markdown tables** for resource listings. All resources across the site follow this exact inline format:

```markdown
- ⭐ **[Tool Name](Main Link)** / [Mirror / Alt Link](URL) / [Guide](URL) - Short single-sentence description. ℹ️
```

### Layout Elements:
1. **⭐ Star Icon (Optional):** Placed before essential, community-favorite, or top-recommended tools.
2. **Main Title:** Bold text containing the primary link (`**[Tool Name](URL)**`).
3. **Alternative / Secondary Links:** Slash-separated links immediately following the main title (` / [Configurator](URL) / [GitHub](URL)`).
4. **Dash Separator:** ` - ` separating the link group from the description.
5. **Short Description:** Concise, objective one-sentence summary.
6. **Badge Icons:** Inline emojis at the end for special attributes:
   - 🔑 = API Key or Token required (e.g. Debrid token, TMDB key, indexer API).
   - ℹ️ = Informational note or specific requirement.
   - 💻 = Self-hosted / Docker only.

---

## 3. How to Submit New Resources (GitHub Issues)

1. Head to our [GitHub Issues](https://github.com/jollran2005/StreamStack/issues/new/choose).
2. Select **"Submit a Resource"**.
3. Fill in the resource name, category, direct URLs, description, and key requirements.
4. Submit the issue! Maintainers will verify and batch-process submissions into their designated pages.
