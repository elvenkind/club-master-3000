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
  pages/              # Route-level pages
  services/           # JSON Server API access
  styles/             # Shared styles (reserved)
  types/              # TypeScript domain models
db/
  db.json             # JSON Server mock data
```

## Prototype scope
- Suggest office club events
- Upvote suggestions
- Show confirmed events in calendar view
