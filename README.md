# ML Research Portfolio

Personal ML research portfolio — built with Next.js 14, Tailwind CSS, and TypeScript. Designed for static deployment on GitHub Pages.

**Design:** Distill.pub-inspired minimalism. Crimson Text serif, forest green accents, cream background, generous whitespace.

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm (or yarn/pnpm)

### Install & run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Customization

Replace all `[Placeholder]` text throughout the source files:

| Placeholder | Location | Replace with |
|---|---|---|
| `[Your Name]` | `layout.tsx`, `Nav.tsx`, `Hero.tsx`, `Footer.tsx` | Your full name |
| `[University Name]` | `Hero.tsx`, `Education.tsx` | Your university |
| `[Advisor Name]` | `Hero.tsx`, `Education.tsx` | Your advisor |
| `[Degree]`, `[Field of Study]` | `Education.tsx` | Your degree info |
| `[Company / Lab Name]`, `[Role Title]`, `[Dates]` | `Experience.tsx` | Your experience |
| Publications data | `Publications.tsx` (the `publications` array) | Your papers |
| Projects data | `Projects.tsx` (the `projects` array) | Your projects |
| Social links | `Hero.tsx` | Your actual URLs |
| Email | `Hero.tsx` | Your email |

### Adding real images

Replace placeholder `<div className="placeholder-img">` elements with `<Image>` from `next/image`:

```tsx
import Image from 'next/image'

// Profile photo (Hero.tsx)
<Image src="/photo.jpg" alt="Your Name" width={176} height={176} className="rounded-full object-cover" />

// University/company logos (Education.tsx, Experience.tsx)
<Image src="/logos/university.png" alt="University Name" width={80} height={80} className="object-contain" />

// Paper figures (Publications.tsx)
<Image src="/papers/paper1-fig.png" alt="Figure from paper title" width={108} height={90} className="object-cover rounded-sm" />

// Project diagrams (Projects.tsx)
<Image src="/projects/project1-arch.png" alt="Architecture diagram" fill className="object-cover" />
```

Place images in the `public/` directory.

---

## Deployment to GitHub Pages

### Option 1 — Root deployment (`username.github.io`)

1. Create a repo named `username.github.io`
2. Build the static export:
   ```bash
   npm run build
   ```
3. Push the contents of `out/` to the `main` branch of that repo.

### Option 2 — Subdirectory deployment (`username.github.io/portfolio`)

1. Uncomment the `basePath` and `assetPrefix` lines in `next.config.js`:
   ```js
   basePath: '/portfolio',
   assetPrefix: '/portfolio/',
   ```
2. Build:
   ```bash
   npm run build
   ```
3. Push `out/` to the `gh-pages` branch of your repo.

### Option 3 — GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - run: npm ci

      - run: npm run build

      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

      - id: deployment
        uses: actions/deploy-pages@v4
```

Then in your GitHub repo: **Settings → Pages → Source → GitHub Actions**.

---

## Project Structure

```
src/
  app/
    layout.tsx          # Font loading, metadata, root layout
    page.tsx            # Page assembly
    globals.css         # Design tokens, animations, utility classes
  components/
    Nav.tsx             # Sticky navigation (client component)
    Hero.tsx            # Headshot + bio + social links
    Education.tsx       # Education entry card
    Experience.tsx      # Research experience card
    Publications.tsx    # CV-style publication list
    Projects.tsx        # 2×2 project card grid
    Footer.tsx          # Minimal footer
    ScrollRevealInit.tsx # Intersection Observer for fade-in animations
public/
  .nojekyll             # Prevents Jekyll processing on GitHub Pages
next.config.js          # Static export configuration
tailwind.config.js      # Design tokens (colors, fonts, spacing)
```

---

## Tech Stack

- [Next.js 14](https://nextjs.org/) — React framework with static export
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Lucide React](https://lucide.dev/) — Icon library
- [Google Fonts](https://fonts.google.com/) — Crimson Text + Source Sans 3 (loaded via `next/font`)
