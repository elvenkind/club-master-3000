# club-master-3000

## Tech stack
- React + TypeScript
- Vite
- JSON Server
- Material UI
- Tailwind CSS
- ESLint
- Prettier

## Getting started
```bash
npm install
npm run dev
```

## Run frontend + mock API together
```bash
npm run dev:all
```

- Frontend: `http://localhost:5173`
- JSON Server: `http://localhost:3001`

## Useful scripts
```bash
npm run dev       # Start Vite dev server
npm run server    # Start JSON Server (db/db.json)
npm run dev:all   # Start both frontend and JSON Server
npm run lint      # Run ESLint
npm run build     # Type-check and build production bundle
npm run preview   # Preview production build
npm run format    # Format code with Prettier
```

## App structure
```text
src/
  app/                # Providers, theme, router
  components/
    common/           # Shared UI wrappers
    events/           # Event-related UI components
  hooks/              # Reusable hooks (useEvents)
  lib/                # API client and constants
  pages/              # Ro  pages/              # es/           # JSON S  pages/    ce  pages/                 # S  pages/   s (  pages/ 
  ty  ty  ty  t       # Type  ty  ty mai  ty  ty  ty  t  .json       ty  t # JS  ty  ter mock da  ty  ty  ty  t       # Type  uggest  tyice   ty  ty  ty  Up  te   ty  ty  ty  t       # Type  ty  s   ty  ty  ty  t 
