# Maepua

A static editorial portfolio built with Astro. Projects and journal entries are Markdown files; the deployed site contains no client-side JavaScript.

## Develop

```sh
npm install
npm run dev
```

Create projects in `src/content/projects` and articles in `src/content/articles`. Place unprocessed images in `public/images`, then reference them from frontmatter without a leading slash:

```yaml
cover: images/example.jpg
```

## Build

```sh
npm run build
npm run preview
```

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys pushes to `main`. `astro.config.mjs` derives the correct project-page base path from `GITHUB_REPOSITORY` in CI, so the same source works at both:

- `https://owner.github.io/repository/`
- `https://owner.github.io/` for an `owner.github.io` repository

Set `PUBLIC_SITE_URL` or `PUBLIC_BASE_PATH` only when deploying to a different URL shape. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**.

Before publishing, replace the example contact address in `src/lib/site.ts` and the starter content in `src/content`.
