# club-master-3000

# Tech stack:
- React
- Json Server
- Vite
- Prettier
- Eslint
- Material UI
- Tailwind

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
