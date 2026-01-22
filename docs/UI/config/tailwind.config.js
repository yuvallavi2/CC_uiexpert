// Tailwind config with semantic tokens
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./examples/**/*.html", "./**/*.md"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        info: "var(--color-info)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)",
        foreground: "var(--color-foreground)",
        background: "var(--color-background)",
        muted: "var(--color-muted)",
        border: "var(--color-border)",
        card: "var(--color-card)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        DEFAULT: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      fontFamily: {
        sans: "var(--font-sans)"
      },
    },
  },
  plugins: [
    function({ addComponents, theme, addUtilities }) {
      const components = {
        ".btn": {
          "@apply inline-flex items-center justify-center px-4 py-2 rounded-md font-medium transition-colors shadow-sm": {}
        },
        ".btn-primary": {"@apply btn text-white": {}, backgroundColor: "var(--color-primary)"},
        ".btn-secondary": {"@apply btn text-white": {}, backgroundColor: "var(--color-secondary)"},
        ".btn-ghost": {"@apply btn bg-transparent text-foreground border": {}, borderColor: "var(--color-border)"},
        ".card": {"@apply bg-card rounded-md shadow p-4 border": {}, borderColor: "var(--color-border)"},
        ".badge": {"@apply inline-flex items-center rounded-full px-2 py-0.5 text-sm border": {}, borderColor:"var(--color-border)"},
        ".badge-info": {"@apply badge text-white": {}, backgroundColor: "var(--color-info)"},
        ".badge-success": {"@apply badge text-white": {}, backgroundColor: "var(--color-success)"},
        ".badge-warning": {"@apply badge text-white": {}, backgroundColor: "var(--color-warning)"},
        ".badge-danger": {"@apply badge text-white": {}, backgroundColor: "var(--color-danger)"},
        ".table": {"@apply w-full text-sm": {}, borderCollapse: "separate", borderSpacing: "0 8px"},
        ".sidebar": {"@apply bg-card border rounded-md p-2": {}, borderColor: "var(--color-border)"},
        ".input": {"@apply border rounded-md px-3 py-2 w-full": {}, borderColor: "var(--color-border)"},
        ".heading": {"@apply text-2xl font-semibold": {}, color: "var(--color-foreground)"},
      };
      addComponents(components);

      addUtilities({
        ".rtl": {"direction": "rtl"},
        ".ltr": {"direction": "ltr"},
      });
    }
  ]
};
