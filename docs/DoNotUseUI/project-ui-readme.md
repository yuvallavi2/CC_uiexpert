# Eventit UI Guidelines – Developer README

This short guide explains **how to use the Tailwind config** provided in `eventit-ui-guidelines.md`.

---

## 🎨 Design Tokens
- **Backgrounds:** `eventit-bg-primary`, `eventit-bg-secondary`, `eventit-bg-hover`
- **Text:** `eventit-text-primary`, `eventit-text-secondary`, `eventit-text-placeholder`
- **Status Colors:** `eventit-success`, `eventit-info`, `eventit-danger`, `eventit-warning`

These are applied through component classes, so you don’t need to call them directly.

---

## 🧩 Components

### Buttons
- **Primary:** `btn btn-primary` → green call‑to‑action
- **Danger:** `btn btn-danger` → red destructive action
- **Ghost:** `btn btn-ghost` → subtle outline action

### Cards
- Use the `card` class for panels and containers.

### Inputs
- Use `input` for form fields (text, date, select).

### Tables
- Apply the `table` class to a `<table>`.
- Headers and rows are styled automatically.

### Badges
- `badge badge-success` → Active/Completed  
- `badge badge-info` → Scheduled/Upcoming  
- `badge badge-danger` → Cancelled/Inactive  
- `badge badge-warning` → Optional alerts

### Sidebar Items
- `sidebar-item` → default
- `sidebar-item-active` → highlighted (green background, white text)

---

## 🚀 Usage Workflow
1. Import the Tailwind config in your Angular project.
2. Reference this README for semantic class usage.
3. Agents should **never hardcode styles**—always rely on these classes.

By following these rules, all AI‑generated UI components will stay visually consistent.
