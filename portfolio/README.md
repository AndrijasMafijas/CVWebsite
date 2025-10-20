# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  # CV/Portfolio — React + TypeScript + Vite

  Jednostavna single-page aplikacija za CV/portfolio. Izrađena u React + Vite (TypeScript), spremna za lokalni rad i deploy.

  ## Pokretanje lokalno

  1. Instaliraj zavisnosti (u folderu `portfolio`):

  ```powershell
  npm install
  npm run dev
  ```

  Otvoriti prikazani lokalni URL (obično http://localhost:5173).

  ## Build

  ```powershell
  npm run build
  npm run preview
  ```

  ## Deploy opcije

  - GitHub Pages (preporučeno za statički hosting)
    1. Gurni kod na GitHub repo.
    2. Uključi GitHub Pages (deploy iz `gh-pages` grane ili putem Actions). Pogledaj ispod workflow primjer.
  - Netlify ili Vercel: poveži repo i kao build komandu koristi `npm run build`, a publish direktorijum je `dist`.

  ### GitHub Actions workflow (primjer)

  Sačuvaj kao `.github/workflows/deploy.yml` u rootu repo-a:

  ```yaml
  name: Deploy to GitHub Pages
  on:
    push:
      branches: [ main ]
    workflow_dispatch:

  permissions:
    contents: read
    pages: write
    id-token: write

  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
          working-directory: portfolio
        - run: npm run build
          working-directory: portfolio
        - uses: actions/upload-pages-artifact@v3
          with:
            path: portfolio/dist

    deploy:
      needs: build
      runs-on: ubuntu-latest
      environment:
        name: github-pages
        url: ${{ steps.deployment.outputs.page_url }}
      steps:
        - id: deployment
          uses: actions/deploy-pages@v4
  ```

  Ako koristiš `/<repo>` kao base path na Pages, dodaj `base: '/<repo>'` u `vite.config.ts`.

  ## Zamjena sadržaja

  - `src/components/*` — izmijeni tekstove, linkove i liste vještina/projekata.
  - `public/cv.pdf` — ubaci svoj CV.
  - `src/assets/profile-placeholder.png` — zamijeni svojom fotografijom.

  ## Contact form (Formspree)

  1. Kreiraj formu na https://formspree.io/ (Free plan je dovoljan).
  2. Kopiraj endpoint URL (izgleda kao `https://formspree.io/f/xxxxxx`).
  3. Napravi `.env` u folderu `portfolio` i postavi:

  ```
  VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xxxxxx
  ```

  4. Pokreni dev/build. Ako varijabla nije postavljena, forma će se fallback-ovati na `mailto:` link.

  ## Media assets

  - Projekat Awaken koristi slike iz `public/awaken/*.png` i video `public/awaken/trailer.mp4`.
  - Ako dodaješ novi video, preferiraj MP4 (H.264 + AAC) zbog podrške u browserima.
