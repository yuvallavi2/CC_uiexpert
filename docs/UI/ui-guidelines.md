# UI Guidelines

These guidelines were generated from your uploaded screens. Colors are mapped to semantic roles and exposed as **CSS variables** + **Tailwind tokens**.

## Design Tokens

### Colors
- primary: `#fefeff`
- secondary: `#fcfdfe`
- info: `#fcfdfd`
- success: `#f8f9fa`
- warning: `#d8d9db`
- danger: `#97a294`
- foreground: `#0f172a`
- background: `#f8fafc`
- muted: `#94a3b8`
- border: `#e2e8f0`
- card: `#ffffff`

### Radius
- sm: `var(--radius-sm)`
- md (default): `var(--radius-md)`
- lg: `var(--radius-lg)`

### Shadows
- sm: `var(--shadow-sm)`
- md: `var(--shadow-md)`
- lg: `var(--shadow-lg)`

### Typography
- Base stack: `var(--font-sans)` → Heebo/Assistant/Segoe UI/Inter/system-ui
- Sizes: use Tailwind scale (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`, etc.)
- RTL: add `.rtl` on `<body>` or container.

### Spacing
Use Tailwind spacing scale with our helpers in `design-tokens.css` as needed.

## Components

### Buttons
- `.btn-primary`, `.btn-secondary`, `.btn-ghost`

### Cards
- `.card` for panels, metric tiles and content blocks

### Badges
- `.badge-info`, `.badge-success`, `.badge-warning`, `.badge-danger`

### Forms
- `.input` for text inputs; compose with grid utilities for layout

### Tables
- `.table` with separated rows

### Sidebar
- `.sidebar` for secondary info panes

See `/examples/style-guide.html` and specific component examples for usage patterns resembling your screens (Dashboard, Events List, Members Table, Member Profile).
