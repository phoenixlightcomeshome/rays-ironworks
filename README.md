# Ray's Ironworks — Website

A real public business website for **Ray's Ironworks** — custom fabrication and metal art by Ray Mroczkowski (Reno / Tahoe / Truckee and Los Angeles). Hosted on GitHub Pages.

**Live site:** https://phoenixlightcomeshome.github.io/rays-ironworks/

## What's on the site

- **Hero, About, Services, Signature Work, Gallery** — real projects and photos from Ray's portfolio (updated Nov 18, 2026): Wingfield Park Amphitheater Gates, The Conflux of Intent, Found Faith, Ghosts of Malibu / Wing / Reach, Monument of Legacy, Michael the Archangel, plus a gallery of railings, storefronts, and field work.
- **Quote & 3D** — a project-type explorer with technical drawings (gate, railing, sculpture, monument sign, patio cover), an interactive 3D design studio (Three.js, runs in the visitor's browser), and a quote-request form with photo upload.
- **In-app helper (Forge Guide)** — a guided, context-aware assistant on every section. It watches which section the visitor is reading and changes its greeting and suggestions to match, answers questions from Ray's published work and process, walks visitors through a 5-step quote checklist, and drafts a quote request for them.
- **Contact** — phone 424-394-9271, email raysironworks101@gmail.com, plus links to the Ray's Ironworks Facebook page, the full artist portfolio (Google Drive), the Art Shop, and Ray's LinkedIn.

## v2 — Realistic rendering + ironworks options (Nov 20, 2026)

- **Realistic-looking rendering, video quality.** The 3D viewer now uses real metal materials (metalness/roughness with brushed and hammered textures), an environment map for reflections, warm key + cool fill lighting, soft shadows, a paver patio with grass and a garden wall for a believable setting, and a smooth turntable. The page says plainly that it is a visualization, not a photograph of the finished piece.
- **Export.** Visitors can save a high-resolution still image (PNG) or record a turntable video (one full rotation, about 8 seconds, WebM or MP4 depending on the browser, via canvas capture + MediaRecorder). If a browser cannot record video, the page says so plainly and points to the still image instead.
- **Ironworks options to modify railings and custom pieces.** The configurator now covers five piece types — gate, railing, sculpture base, sign frame, patio cover frame — with dimensions, styles, top-rail profiles, post styles and spacing, finials (ball / spear / scroll), decorative scrolls, rings, leaf branches, and medallions, and materials (wrought iron, steel, aluminum) with finishes (matte black, bronze, copper, galvanized, powder-coat colors). Every choice flows into the quote form through "Use this in my quote".
- **2D Blueprint mode (from Gemini's design).** A front-elevation technical drawing drawn on canvas — frame, infill, center split for a double gate, dimension lines with ft/in labels, and a 5'10" human silhouette for scale — with a "Download Blueprint PNG" button. Labeled a concept drawing, NOT for fabrication.
- **Forge Guide refinements (from Gemini's design).** Context-aware greetings and quick replies per section (via IntersectionObserver), plus the guided 5-step quote checklist (choose a type, set dimensions, upload photos, add notes, send the email) with live status read from the quote form.
- **Simple mode.** A toggle for older phones / slow connections: lower resolution, no shadows, no garden wall.

## Honest limits (static site — no server)

- **Photos are never uploaded.** The quote form keeps photos in the visitor's browser only. Sending a request opens the visitor's email app addressed to Ray with everything filled in; the visitor attaches their photos to that email before sending. If email doesn't open, the visitor can download or copy the request instead.
- **The 3D viewer runs entirely in the browser** (Three.js from a CDN). If the library can't load, the page falls back to the technical drawing.
- **The helper is a guided assistant, not a live AI.** It answers from a built-in knowledge base of Ray's published work and process. A live AI assistant would need a connected AI service (API key + backend), which is not set up. No API key is in this code, and no backend is invented.
- **The rendering is a visualization.** It shows the configured piece with realistic materials and light, but it is not a photograph of the finished piece. The real piece is built by Ray to exact measurements; the final design and price come from him.
- **Video export depends on the browser.** Recording uses MediaRecorder + canvas capture. Browsers that don't support it get a plain message and the still-image option instead.

## Future upgrades (documented, NOT built)

- **Formspree for real photo uploads (v2 path).** When Ray wants visitors' photos to actually arrive with the quote (instead of the visitor attaching them to an email), the change is small: point the quote form at a Formspree endpoint (one form-action change). No API key goes in the repo. This needs a Formspree account + endpoint first — do not build it until Ray asks for it.
- **Live AI guide (serverless proxy).** For a genuinely live AI assistant in the Forge Guide, the API key must never live in the repo. The architecture is a serverless function (e.g. a Cloudflare Worker) that holds the Gemini API key as a secret; the site calls `fetch('/api/guide')` and the worker calls Gemini. This needs a worker + a key + hosting setup first — do not build it until Ray asks for it.

## Updating the site

- Edit `index.html` (single page, embedded CSS + JS) and the images in `images/` (optimized JPEGs, max 1600px wide). The v2 configurator, blueprint, and Forge Guide live in `configurator-v2.js`, `blueprint.js`, and `forge-guide.js` (loaded by `index.html`); their styles are in the page's `<style>` block.
- Commit and push to `main` — GitHub Pages rebuilds automatically.
- Nothing on this site is linked from video descriptions, posts, or bios until Ray says so. He reviews the live link first.

## Sources

All content comes from Ray's portfolio (Nov 18, 2026), his CV, his artist statement, and his own words. No prices for commissions (contact for a quote), no invented projects, no invented credentials. No photo of Michael the Archangel exists in the workspace — it is listed with its specs and no photo, and no photo was generated or invented.
