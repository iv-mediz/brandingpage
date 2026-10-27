# IV Mediz branding site

Next.js + TypeScript branding site with **Privacy Policy** and **Terms & Conditions** for the IV Mediz Android app (`com.ivmedizapp.user`).

## Local

```bash
npm install
npm run dev
```

Open http://localhost:3000/brandingpage (base path matches GitHub Pages).

## Pages

- Home: `/`
- Privacy Policy: `/privacy`
- Terms & Conditions: `/terms`

## GitHub Pages

The site is statically exported (`output: "export"`) and deployed from `.github/workflows/pages.yml`.

Expected URLs:

- https://iv-mediz.github.io/brandingpage/
- https://iv-mediz.github.io/brandingpage/privacy/
- https://iv-mediz.github.io/brandingpage/terms/
