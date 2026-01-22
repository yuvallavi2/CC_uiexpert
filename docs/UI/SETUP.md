# SETUP (Angular + Tailwind)

1. **Install Tailwind** in your Angular project (v16+):
   ```bash
   ng add @ngneat/tailwind
   # or manual install per Tailwind docs
   ```

2. **Copy files** from this package into your repo:
   - `UI/config/tailwind.config.js` → replace/merge with your project's Tailwind config
   - `UI/design-tokens.css` → import in `styles.scss` (or `styles.css`):
     ```scss
     @import 'UI/design-tokens.css';
     ```
   - Optionally copy `/examples` and `/images` for references.

3. **Enable RTL**:
   - Add `dir="rtl"` and `.rtl` on `<body>` or app root container.
   - In components, prefer flex/grid utilities that are RTL-safe.

4. **Use semantic classes**:
   - Buttons: `<button class="btn-primary">שמירה</button>`
   - Badges: `<span class="badge-success">פעיל</span>`
   - Panels: `<div class="card">...</div>`

5. **Build**:
   Tailwind scans `./src/**/*.{html,ts}`; ensure the `content` globs in `tailwind.config.js` include your Angular paths alongside `/UI/examples/**/*.html` for local previews.

