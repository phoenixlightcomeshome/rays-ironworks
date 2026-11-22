# Base44 dev environment notes

## What the preview serves

`docker-compose.base44.yml` runs **only** the Vite app in
`ai-studio-app/2026-11-22-0150/` — the current Ray's Ironworks app — with the
Vite dev server (`bun run dev` → `vite --port=3000 --host=0.0.0.0`) on host
port 3000. It runs from the cloned source, so edits hot-reload.

- `ai-studio-app/2026-11-21-0106/` and `ai-studio-app/2026-11-20-2133/` are
  archived exports. Do not serve them.
- The root-level `index.html`, `blueprint.js`, `configurator-v2.js` and
  `forge-guide.js` are the older static GitHub Pages site, not part of the
  previewed app.

## Non-obvious setup facts

- Package manager is **bun** (`bun.lock` in the app folder). Dependencies are
  installed on container start with `bun install --frozen-lockfile` into the
  named volume `app_web_node_modules` (mounted at the app folder's
  `node_modules`), so the source bind mount stays clean. If dependencies
  change, `docker compose ... up -d --force-recreate web` re-syncs them.
- No secrets are required at boot: the app is client-only and never reads
  `GEMINI_API_KEY` or any other env var, even though `metadata.json` lists a
  server-side Gemini capability and `.env.example` mentions one.
- `vite.config.ts` turns HMR off when `DISABLE_HMR=true`; do not set it.
  `CHOKIDAR_USEPOLLING=1` is set in compose so file watching fires across the
  bind mount.
- Host allowlist: Vite accepts the preview host through the platform-provided
  `__VITE_ADDITIONAL_SERVER_ALLOWED_HOSTS`, which compose passes through.

## Commands

```sh
docker compose --project-name app --project-directory "$BASE44_PROJECT_ROOT" -f docker-compose.base44.yml up -d
docker compose --project-name app --project-directory "$BASE44_PROJECT_ROOT" -f docker-compose.base44.yml logs -f web
curl -s -o /dev/null -w '%{http_code}\n' http://localhost:3000/
```

## Verifying it works

`http://localhost:3000/` must return the app HTML whose title is
"Ray's Ironworks — Custom Fabrication & Metal Art" and whose only module
script is `/src/main.tsx` (unhashed = dev server, not a prebuilt bundle).
`/src/main.tsx` must return 200 `text/javascript`.
