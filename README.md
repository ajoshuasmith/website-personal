# Joshua Smith Portfolio

A minimalist, Windows 95-inspired landing page for Joshua Smith. The site highlights current focus areas, recent projects, and direct links to the blog and GitHub profile.

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:5173` to preview the mock-up.

## Production Build

```bash
npm run build
npm run preview
```

Built assets live in `dist/`.

## Deploying to Cloudflare Pages

1. Create a new Pages project and connect this repository.
2. Configure the build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION=20` (or any supported 18+ runtime)
3. Save and trigger a deployment. Cloudflare will install dependencies, run the build, and serve the static assets.
