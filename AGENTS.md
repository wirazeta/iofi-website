# AGENTS.md

## Scope
These instructions apply to the entire repository.

## Project Snapshot
- Stack: React 19 + TypeScript + Vite.
- Styling: Tailwind CSS v4 and shadcn-style UI components in `src/components/ui`.
- Routing: `react-router-dom` with route wiring in `src/App.tsx`.
- Data and feature code is organized under `src/pages`, `src/components`, `src/hooks`, `src/api`, and `src/lib`.

## Local Setup
1. Install dependencies with `bun install`.
2. Copy env values from `.env.example` to `.env`.
3. Set `VITE_HOLODEX_API_KEY` in `.env` for API-backed features.

## Common Commands
- `bun run dev` starts local development.
- `bun run build` runs TypeScript build checks and creates a production build.
- `bun run lint` runs ESLint.
- `bun run preview` previews the production build.

## Coding Guidance
- Use TypeScript (`.ts`/`.tsx`) for new source files.
- Prefer the `@/` path alias for imports from `src`.
- Keep components focused and reusable; place page-level composition in `src/pages`.
- Reuse existing UI primitives in `src/components/ui` before introducing new base components.
- Follow the local style of each file when editing (quotes, semicolons, and formatting may differ between files).

## Validation Before Finishing
1. Run `bun run lint` after code changes.
2. Run `bun run build` for changes that may affect types, bundling, routes, or API integration.
3. If command execution is not possible, clearly note what was not verified.
