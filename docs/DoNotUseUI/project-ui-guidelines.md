# Eventit UI Guidelines – Tailwind Config

This file defines the **design tokens and component classes** for the Eventit UI theme.  
Agents should use this file as the single source of truth for generating Angular components.

---

## Tailwind Config File

read the "tailwind.config.js"

## Usage Notes

- Wrap the app shell in `<html class="dark">` to enable dark mode.
- Use semantic utilities:
  - `btn btn-primary` → green CTA
  - `card` → dashboard/event panels
  - `badge badge-success` → Completed/Active state
  - `sidebar-item sidebar-item-active` → active nav item
- This ensures **consistent UI** across all AI‑generated Angular components.
