# Ray's Ironworks — Website

A real public business website for **Ray's Ironworks** — custom fabrication and metal art by Ray Mroczkowski (Reno / Tahoe / Truckee and Los Angeles). Hosted on GitHub Pages.

**Live site:** https://phoenixlightcomeshome.github.io/rays-ironworks/

## What's on the site

- **Hero, About, Services, Signature Work, Gallery** — real projects and photos from Ray's portfolio (updated Nov 18, 2026): Wingfield Park Amphitheater Gates, The Conflux of Intent, Found Faith, Ghosts of Malibu / Wing / Reach, Monument of Legacy, Michael the Archangel, plus a gallery of railings, storefronts, and field work.
- **Quote & 3D** — a project-type explorer with technical drawings (gate, railing, sculpture, monument sign, patio cover), an interactive 3D gate configurator (Three.js, runs in the visitor's browser), and a quote-request form with photo upload.
- **In-app helper** — a guided assistant on every section (gallery, services, quote, contact) that answers questions from Ray's published work and process, and walks visitors through drafting a quote request.
- **Contact** — phone 424-394-9271, email raysironworks101@gmail.com, plus links to the Ray's Ironworks Facebook page, the full artist portfolio (Google Drive), the Art Shop, and Ray's LinkedIn.

## Honest limits (static site — no server)

- **Photos are never uploaded.** The quote form keeps photos in the visitor's browser only. Sending a request opens the visitor's email app addressed to Ray with everything filled in; the visitor attaches their photos to that email before sending. If email doesn't open, the visitor can download or copy the request instead.
- **The 3D viewer runs entirely in the browser** (Three.js from a CDN). If the library can't load, the page falls back to the technical drawing.
- **The helper is a guided assistant, not a live AI.** It answers from a built-in knowledge base of Ray's published work and process. A live AI assistant would need a connected AI service (API key + backend), which is not set up. No API key is in this code, and no backend is invented.

## Updating the site

- Edit `index.html` (single page, embedded CSS + JS) and the images in `images/` (optimized JPEGs, max 1600px wide).
- Commit and push to `main` — GitHub Pages rebuilds automatically.
- Nothing on this site is linked from video descriptions, posts, or bios until Ray says so. He reviews the live link first.

## Sources

All content comes from Ray's portfolio (Nov 18, 2026), his CV, his artist statement, and his own words. No prices for commissions (contact for a quote), no invented projects, no invented credentials.
