# Portfolio

A personal portfolio built with React, TypeScript, Vite, Tailwind CSS, and shadcn/ui components.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui + Radix UI
- Vitest + Testing Library
- Playwright

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Start local dev server
- `npm run build` - Create production build
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests once with Vitest
- `npm run test:watch` - Run Vitest in watch mode

## Project Structure

```text
src/        Application source code
public/     Static assets
dist/       Production build output
```

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the generated `dist/` folder to your hosting provider (Netlify, Vercel, GitHub Pages, etc.).
