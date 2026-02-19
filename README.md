# SHODHAN Portfolio

A React + Vite + TailwindCSS personal portfolio focused on a bold neo-brutalist visual style, animated UI interactions, and live coding profile highlights.

## Overview

This project is a single-page developer portfolio with section-based navigation:

- Hero and status marquee
- About and skills
- Experience timeline
- Coding stats (GitHub + LeetCode cards)
- Project showcase
- Certifications/achievements feed
- Contact and social links

## Tech Stack

- React 18
- Vite 5
- TailwindCSS 3
- PostCSS + Autoprefixer

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Starts Vite dev server with hot reload
- `npm run build`: Creates optimized production build in `dist/`
- `npm run preview`: Serves production build locally for verification

## Project Structure

```text
shoportfolio/
|- Assets/
|  |- images/
|- src/
|  |- components/
|  |  |- About.jsx
|  |  |- CodingStats.jsx
|  |  |- Contact.jsx
|  |  |- Experience.jsx
|  |  |- Footer.jsx
|  |  |- Hero.jsx
|  |  |- Navbar.jsx
|  |  |- Projects.jsx
|  |  |- Reports.jsx
|  |  |- Skills.jsx
|  |  |- StatusMarquee.jsx
|  |- App.jsx
|  |- index.css
|  |- main.jsx
|- index.html
|- tailwind.config.js
|- postcss.config.js
|- package.json
```

## Configuration Notes

- Theme colors, fonts, and shadow tokens are defined in `tailwind.config.js`.
- Global animation and cursor styles are in `src/index.css`.
- Main section composition and runtime effects are controlled in `src/App.jsx`.

## Data and Integrations

- GitHub profile stats are fetched from `https://api.github.com/users/shodhan07`.
- Contribution graph is loaded via `https://ghchart.rshah.org`.
- LeetCode card is loaded via `https://leetcard.jacoblin.cool`.

## Known Asset Gaps

The following assets are referenced in components but are not currently present in this repository:

- `Assets/images/img.jpg`
- `Assets/images/aiva.png`
- `Assets/Resume/Arham Resume.pdf`

Add these files (or update paths in components) to avoid broken images/links.

## Deployment

This is a static frontend and can be deployed on platforms like Netlify, Vercel, or GitHub Pages after `npm run build`.

## License

No license file is currently defined in this repository.
