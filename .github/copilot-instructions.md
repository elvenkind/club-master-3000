# GitHub Copilot Instructions for club-master-3000

## Purpose
Generate clean, production-ready React CRUD code with consistent architecture, error handling, and naming.

## Repository Status
This repository is currently minimal (no `package.json` yet). Prefer adding only files and commands that match existing project setup.

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

## Build/Test Commands
Only run commands that exist in `package.json` scripts once the React project is initialized.
Typical React workflow (when scripts exist):
- `npm install`
- `npm start`
- `npm test`
- `npm run build`
- `npm run lint`

If a script is missing, do not invent it—follow the repository's actual toolchain.
