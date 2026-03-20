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

## GitHub MCP Server setup (VS Code + Copilot CLI)

This repository includes VS Code MCP configuration at `.vscode/mcp.json` for GitHub MCP Server.

### 1) VS Code (repository-level)

1. Open this repository in VS Code (1.101+ recommended for remote MCP + OAuth flow).
2. Open `.vscode/mcp.json`.
3. Start server **github** (OAuth, recommended).
4. If OAuth is unavailable, start **github-pat** and provide a PAT when prompted.
5. Open Copilot Chat in **Agent** mode and verify tools are visible.

### 2) Copilot CLI

1. Start `copilot`.
2. Run `/mcp` and add/configure GitHub MCP Server:
   - URL: `https://api.githubcopilot.com/mcp/`
   - Auth: OAuth preferred, PAT fallback.
3. Verify server/tools are available in the MCP list.

### 3) Security recommendations

- Never commit tokens or secrets into repository files.
- Prefer OAuth over PAT whenever possible.
- If PAT is required, use least privilege and rotate it regularly.

### 4) Tehtävänanto sovelluksen toteutusta varten

# 🧩 Tehtäväkortti: Toimiston klubitoiminta -sovellus

## 📝 Taustakuvaus
Klubitoiminta pitää mielen virkeänä ja parantaa toimiston henkilökunnan yhteenkuuluvuutta. 
Olisipa meillä sovellus jossa pystyisi organisoimaan toimiston klubitoimintaa ja tapahtumia.

## 📌 Tehtävänanto
Rakenna prototyyppi toimiston klubitoimintaa varten.

Järjestelmästä voisi löytyä esimerkiksi seuraavia ominaisuuksia:
- Sovelluksessa pystyy ehdottamaan tapahtumia
- Sovelluksessa pystyy yläpeukuttamaan ehdotettuja tapahtumia
- Sovelluksesta näkee varmistuneet tapahtumat ns. tapahtumakalenteri

## ⚙️ Rajaukset ja reunaehdot
- Pitäkää scope realistisena. Ts. mitä kerkeätte iltapäivän aikana tekemään. 
- Ehdottomia vaatimuksia ei ole. Toteutatte vaatimuksen itse kuten parhaaksi näette.
- Jätetään optio jatkokehitykselle esim. penkkiajalle.

## 📦 Tuotokset
- Sovellus pitää olla saatavilla julkisessa repossa. Esim. Github.
- Tiimi valmistautuu esittelemään tuotoksen Joensuu Monthlyssä.
