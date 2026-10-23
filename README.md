# Pedro Ramon — Portfolio

A React + Vite portfolio inspired by expressive RPG menus. Red, black and white, photographic cutouts and animated transitions give each section its own scene.

## Development

Requires Node.js 20.19+ and npm.

```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```

## Experience

The home scene introduces Pedro with his name, portrait and section menu. Each menu link opens a dedicated screen with its own photograph and content panel. The original photos supplied by Pedro are the references for the cutouts, poses and tattoos.

- Profile: introduction and professional focus.
- Missions: selected professional case studies.
- Arsenal: tools, architecture and delivery skills.
- Journey: experience and education.
- Contact: email, LinkedIn and GitHub.

Navigation uses hash routes, including direct links and browser Back/Forward. Arrow keys move focus within the menu; Enter opens a section. Escape and Back to menu return home. Motion can be disabled and respects the system reduced-motion preference. All interface text, metadata and accessibility labels are in English.

## Files

- src/main.jsx: React components, routing and interactions.
- src/data.js: professional content, route resolution and portrait mapping.
- src/styles.css: home and section scenes, responsive layout and motion.
- public/portraits/: optimized transparent portrait assets.
- vite.config.js: GitHub Pages base path.

The content is based on the supplied resume and cover letter. Corporate source code and internal screens are not included. Original personal documents and unedited reference photos are not committed. Barlow fonts load from Google Fonts with local fallbacks.

## Deployment

https://pedro-ramonn.github.io/portfolio-persona/

The Pages workflow runs tests and builds the app before deploying changes merged into main. All development changes are proposed through pull requests for Pedro to review.

