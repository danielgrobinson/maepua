# Make America E Pluribus Unum Again

A static project site built with Astro. The home page explains the history and purpose of
**E Pluribus Unum**, presents ways to participate, and links to a separate Updates section for
project progress and next steps. The deployed site contains no client-side JavaScript.

## Develop

```sh
npm install
npm run dev
```

Create updates in `src/content/updates`. Each Markdown file receives its own page under
`/updates/`. Place unprocessed images in `public/images`, then reference them from frontmatter
without a leading slash:

```yaml
cover: images/example.jpg
```

## Build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys pushes to `main`.
`astro.config.mjs` configures the custom domain `https://www.america-epluribusunum.com`, and `public/CNAME`
ensures GitHub Pages serves that domain. In the repository settings, set
**Pages → Build and deployment → Source** to **GitHub Actions**.

Set **Pages → Custom domain** to `www.america-epluribusunum.com` and configure that
hostname's DNS records for GitHub Pages. If the apex domain `america-epluribusunum.com`
should redirect to `www`, configure its DNS records for GitHub Pages as well. Once
DNS is verified and the certificate is available, enable **Enforce HTTPS**.
