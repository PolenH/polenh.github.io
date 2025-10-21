# Personal Resume Website

This project is a static React + TypeScript site that presents Hugh Palin's resume. It is built with Vite and styled using Tailwind CSS and shadcn/ui components.

## Getting Started

```bash
npm install
npm run dev
```

The development server runs at http://localhost:8080 by default.

## Building for GitHub Pages

The project is configured to produce relative asset paths and uses a hash-based router, so it can be deployed directly to GitHub Pages without additional server configuration.

```bash
npm run build
```

The compiled site is generated in the `dist/` directory. Copy the contents of that folder into the root of your `username.github.io` repository (or the `gh-pages` branch of another repository) and push the changes. GitHub Pages will serve the static files automatically.

## Project Structure

- `src/App.tsx` – Application shell and router configuration
- `src/pages/` – Top-level pages
- `src/components/` – Reusable UI components
- `public/` – Static assets copied as-is during the build

## License

This project is provided as-is for personal portfolio use.
