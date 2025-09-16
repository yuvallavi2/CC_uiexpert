# Eventit UI Guidelines – Tailwind Config

This file defines the **design tokens and component classes** for the Eventit UI theme.  
Agents should use this file as the single source of truth for generating Angular components.

---

## Tailwind Config File

```js
// tailwind.config.js
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
      colors: {
        eventit: {
          bg: {
            primary: '#0F172A',
            secondary: '#1F2937',
            hover: '#273244',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#9CA3AF',
            placeholder: '#6B7280',
          },
          border: '#374151',
          primary: '#22C55E',
          primaryHover: '#16A34A',
          info: '#2563EB',
          success: '#22C55E',
          danger: '#DC2626',
          warning: '#F59E0B',
        },
      },
      borderRadius: {
        sm: '6px',
        md: '8px',
        lg: '12px',
      },
      spacing: {
        1.25: '5px',
        3.5: '14px',
      },
      boxShadow: {
        'card': '0 1px 0 0 rgba(55,65,81,0.6), 0 0 0 1px rgba(55,65,81,0.6) inset',
      },
      container: {
        center: true,
        padding: '1rem',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const c = theme('colors.eventit');
      addComponents({
        '.card': {
          backgroundColor: c.bg.secondary,
          borderRadius: theme('borderRadius.md'),
          padding: theme('spacing.6'),
          border: `1px solid ${c.border}`,
        },
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme('spacing.2'),
          borderRadius: theme('borderRadius.md'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          fontWeight: theme('fontWeight.medium'),
          transition: 'background-color .15s ease, box-shadow .15s ease',
          lineHeight: '1.25rem',
        },
        '.btn-primary': {
          backgroundColor: c.primary,
          color: c.text.primary,
        },
        '.btn-primary:hover': { backgroundColor: c.primaryHover },
        '.btn-danger': {
          backgroundColor: c.danger,
          color: c.text.primary,
        },
        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: c.text.secondary,
          border: `1px solid ${c.border}`,
        },
        '.input': {
          width: '100%',
          backgroundColor: c.bg.secondary,
          color: c.text.primary,
          borderRadius: theme('borderRadius.md'),
          border: `1px solid ${c.border}`,
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
        },
        '.input::placeholder': { color: c.text.placeholder },
        '.table': {
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: c.bg.secondary,
          borderRadius: theme('borderRadius.lg'),
          overflow: 'hidden',
        },
        '.table thead th': {
          textAlign: 'left',
          fontWeight: theme('fontWeight.medium'),
          color: c.text.secondary,
          padding: theme('spacing.4'),
          borderBottom: `1px solid ${c.border}`,
        },
        '.table tbody td': {
          padding: theme('spacing.4'),
          borderTop: `1px solid ${c.border}`,
        },
        '.table tr:hover': { backgroundColor: c.bg.hover },
        '.badge': {
          display: 'inline-flex',
          alignItems: 'center',
          height: '24px',
          padding: `0 ${theme('spacing.3')}`,
          borderRadius: '9999px',
          fontSize: '12px',
          fontWeight: theme('fontWeight.medium'),
          color: c.text.primary,
        },
        '.badge-success': { backgroundColor: c.success },
        '.badge-info': { backgroundColor: c.info },
        '.badge-danger': { backgroundColor: c.danger },
        '.badge-warning': { backgroundColor: c.warning },
        '.sidebar-item': {
          display: 'flex',
          alignItems: 'center',
          gap: theme('spacing.3'),
          padding: theme('spacing.3'),
          borderRadius: theme('borderRadius.md'),
          color: c.text.secondary,
        },
        '.sidebar-item:hover': { backgroundColor: c.bg.hover },
        '.sidebar-item-active': {
          backgroundColor: c.primary,
          color: c.text.primary,
        },
      });
    }),
  ],
  safelist: [
    'badge', 'badge-success', 'badge-info', 'badge-danger', 'badge-warning',
    'btn', 'btn-primary', 'btn-ghost', 'btn-danger',
    'card', 'input', 'table', 'sidebar-item', 'sidebar-item-active',
  ],
};
```

---

## Usage Notes

- Wrap the app shell in `<html class="dark">` to enable dark mode.
- Use semantic utilities:
  - `btn btn-primary` → green CTA
  - `card` → dashboard/event panels
  - `badge badge-success` → Completed/Active state
  - `sidebar-item sidebar-item-active` → active nav item
- This ensures **consistent UI** across all AI‑generated Angular components.
