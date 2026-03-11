# Varun Ramshetti Portfolio (React)

[![Deploy Portfolio to GitHub Pages](https://github.com/vcr27/vcr27.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vcr27/vcr27.github.io/actions/workflows/deploy.yml)

This portfolio is now built with React + Vite and organized using reusable components and centralized content data.

## Tech Stack

- React 18
- Vite 6
- ESLint 9

## Project Structure

```text
.
├── public/
│   └── images/
│       └── profile.jpg
├── src/
│   ├── components/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
npm run preview
```

## Why this structure helps recruiters

- Component-driven architecture (`src/components`) shows maintainable UI engineering.
- Centralized data (`src/data/portfolioData.js`) shows separation of content and presentation.
- Custom hook (`src/hooks/useRevealOnScroll.js`) shows reusable behavior extraction.
- Linting + modern tooling demonstrates production-ready workflow habits.
