# Vali Rahmani portfolio

A React and Vite portfolio with light and dark themes, recruiter notes, expandable project summaries, and downloadable job and academic CVs. The design adapts the reference portfolio's spacious structure to Vali's software and applied AI background.

## Run locally

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The production website is generated in `dist/`. Keep the existing GitHub Pages deployment workflow in your actual repository. This archive contains source and CV assets, not Git history or dependencies. It assumes a root Pages site at `valiahmad.github.io`.

## Features

- Light/dark button in the header. Uses the system preference on first visit and stores the selected theme in the browser.
- Recruiter notes in an accessible modal drawer. Supports Escape, backdrop dismissal, native focus containment, and return to the opening button.
- CV chooser with PDF and Word versions for jobs and academic applications.
- Project filters and expandable descriptions.
- Responsive menu and keyboard focus styles.
- Decorative AI graphic and background, with pause control and reduced-motion support.
- Copy-email button with a visible fallback when clipboard access is unavailable.
- No third-party fonts, analytics, or external runtime libraries loaded by the built page.

## Edit content

- `src/App.jsx`: profile, recruiter notes, skills, education, contact, and UI.
- `src/data/projects.js`: project descriptions and development status.
- `src/data/experience.js`: employment and teaching experience.
- `src/index.css`: design tokens, both themes, and mobile layouts.
- `src/components/NetworkBackground.jsx`: decorative animation.
- `public/cv`: PDF and DOCX downloads. Keep the filenames or update their links in `src/App.jsx`.

The current CVs are the previously prepared drafts. Their employment dates and other flagged application records still require confirmation. No start date, notice period, relocation commitment, or work authorization has been invented in recruiter notes. Update these fields when confirmed.

No live deployment or repository push was performed. Copy the source into your existing project, preserving `.git` and your deployment workflow, then build and deploy through your normal process.
