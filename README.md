# Vali Rahmani portfolio

React and Vite personal portfolio with professional and academic sections.

## Local development

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
```

Output: `dist/`. The site uses the root path for `valiahmad.github.io`.

## Content

- `src/App.jsx`: page sections, academic record, and contact details.
- `src/data/projects.js`: project descriptions and implementation status.
- `src/data/experience.js`: employment and teaching experience.
- `src/components/NetworkBackground.jsx`: canvas animation with reduced-motion support.
- `src/index.css`: layout and styling.
- `public/cv`: downloadable Word drafts.

Employment dates in the original CV conflict. The site uses “Current role” and downloadable CVs are explicitly drafts. Finalize employment dates and the other flagged records before using the documents in applications; replace the files in `public/cv` afterward.

Copy these files into your existing repository while retaining its Git history and existing deployment workflow. This archive does not contain a new GitHub Actions workflow. No live publication was performed.
