# GitHub Copilot Instructions for club-master-3000

## Purpose
Generate clean, production-ready React CRUD code with consistent architecture, error handling, and naming.

## Tech Stack (from README)
- React
- Vite
- JSON Server
- Material UI
- Tailwind CSS
- ESLint
- Prettier

## Architecture Guidelines (React CRUD)
- Use functional components and React Hooks only.
- Keep UI in `src/components`, API calls in `src/services`, reusable logic in `src/hooks`, and utilities in `src/utils`.
- Prefer small, focused components with a single responsibility.
- Use PascalCase for components and camelCase for hooks/utilities.

## CRUD Implementation Rules
- Create: validate input before submit, show submit/loading state.
- Read: always handle loading, empty, success, and error states.
- Update: prefill form, validate, and show user feedback on success/failure.
- Delete: require user confirmation before destructive action.

## Data and API Rules
- Keep network calls in service modules, not directly in UI components.
- Use `async/await` and throw explicit errors for non-OK responses.
- Surface user-friendly error messages in the UI.
- Do not swallow errors silently.
- Use JSON Server as the default mock/backend API during development.
- Keep API base URL configurable (for example via Vite environment variables).

## State Management
- Use `useState` for local state.
- Use `useReducer` for complex form or workflow state.
- Use Context only for shared cross-feature concerns (for example auth/theme).

## Form and UX Rules
- Use controlled inputs.
- Validate required fields and common formats (such as email) before submit.
- Disable submit while a request is in flight.
- Show inline validation errors and clear action feedback.

## Code Quality
- Keep functions short and readable.
- Reuse existing helpers instead of duplicating logic.
- Prefer explicit names over abbreviations.
- Add tests for key CRUD flows when test tooling exists.
- Keep ESLint and Prettier clean; do not bypass lint rules without reason.

## UI Rules (Material UI + Tailwind)
- Use Material UI components for accessibility and consistent UI primitives.
- Use Tailwind utility classes for layout/spacing and small visual adjustments.
- Do not duplicate the same styling intent in both systems excessively; keep styles maintainable.

## Build/Test Commands
Use only scripts that exist in `package.json`.
Typical Vite + React workflow (when scripts exist):
- `npm install`
- `npm run dev`
- `npm test`
- `npm run build`
- `npm run lint`

If a script is missing, do not invent it—follow the repository's actual toolchain.
