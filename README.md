# Jagada Group Website

This repository contains the source for the Jagada Industries website, served at [www.jagadagroup.com](https://www.jagadagroup.com).

## Architecture

| Component | Technology |
|-----------|-----------|
| **Production site** | Next.js 16 — [Static Site Generation (SSG)](./nextjs/) |
| **Legacy site** | Express / Pug (kept for reference) |
| **Deployment** | GitHub Actions → GitHub Pages |
| **i18n** | React-based locale switcher + static translated pages (en, es-ES) |
| **SEO** | Per-page titles, Open Graph, Twitter Cards, JSON-LD, hreflang, sitemap |

## Project Structure

```
├── nextjs/                   # Production site source (Next.js)
│   ├── src/
│   │   ├── app/              # Page routes (App Router)
│   │   ├── components/       # Shared React components
│   │   ├── data/             # JSON data (products, menu)
│   │   ├── i18n/             # Locale translation files
│   │   └── lib/              # Utilities, types, config
│   ├── public/               # Static assets (images, CSS, fonts)
│   ├── scripts/              # Build helpers (sitemap generation)
│   ├── tests/                # Playwright E2E tests for migrated site
│   └── out/                  # Static export output (gitignored)
├── views/                    # Legacy Pug templates (reference only)
├── data/                     # Legacy JSON data (reference only)
├── tests/                    # Legacy site tests + migration spec
└── .github/workflows/        # CI/CD deployment pipeline
```

## Setup & Running Locally

### Prerequisites
- Node.js 20+
- npm

### 1. Install Dependencies
```bash
cd nextjs && npm install
```

### 2. Development Server
```bash
npm run dev
```
Opens `http://localhost:3000` with hot reload.

### 3. Production Build
```bash
npm run build
```
Generates static HTML into `nextjs/out/` (not committed — built by CI).

### 4. Preview Static Build
```bash
npx serve -p 3000 -s out
```

## Deployment

On every push to `master`, GitHub Actions runs:

1. `npm ci` (install dependencies)
2. `npm run build` (Next.js static export + sitemap generation)
3. Uploads `nextjs/out/` to GitHub Pages

No manual build step needed. No generated files committed to the repo.

## Testing

### Legacy site tests (Pug/Express)
```bash
npm test                    # Jest data integrity (15 tests)
npm run test:e2e            # Playwright E2E (85 tests)
```

### Migrated site tests (Next.js)
```bash
cd nextjs && npx playwright test --project=desktop
```

See `tests/spec.md` for the full migration parity specification.