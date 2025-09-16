/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
    './src/**/*.{js,jsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      // Stitch Menarva Color Palette
      colors: {
        // Primary Brand Colors
        primary: {
          50: '#E3F2FD',
          100: '#BBDEFB',
          200: '#90CAF9',
          300: '#64B5F6',
          400: '#42A5F5',
          500: '#1976D2', // Main brand color
          600: '#1565C0',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0A3A87',
        },

        // Status Colors
        status: {
          active: '#4CAF50',
          inactive: '#F44336',
          pending: '#FF9800',
          premium: '#1976D2',
        },

        // Extended Gray Palette
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },

        // Background & Surface
        background: {
          primary: '#FFFFFF',
          secondary: '#F8F9FA',
        },

        // Surface colors for cards and elevated elements
        surface: {
          elevated: '#FFFFFF',
          muted: '#F8F9FA',
        },

        // Border colors
        border: {
          light: '#E0E0E0',
          medium: '#BDBDBD',
          dark: '#757575',
        }
      },

      // Typography
      fontFamily: {
        sans: ['Segoe UI', 'Arial Hebrew', 'Arial', 'sans-serif'],
        hebrew: ['Arial Hebrew', 'Segoe UI', 'Arial', 'sans-serif'],
      },

      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '26px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
      },

      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // Spacing (extending default scale)
      spacing: {
        '18': '72px',
        '88': '352px',
      },

      // Border radius
      borderRadius: {
        'sm': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
      },

      // Box shadows
      boxShadow: {
        'subtle': '0 2px 8px rgba(0,0,0,0.08)',
        'card': '0 4px 12px rgba(0,0,0,0.1)',
        'elevated': '0 8px 24px rgba(0,0,0,0.15)',
      },

      // Transitions
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },

      // Grid template columns for dashboard layouts
      gridTemplateColumns: {
        'dashboard': 'repeat(auto-fit, minmax(250px, 1fr))',
        'card-grid': 'repeat(auto-fill, minmax(300px, 1fr))',
        'two-column': '1fr 300px',
        'sidebar': '280px 1fr',
      },

      // Animation keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        }
      },

      animation: {
        'fade-in': 'fadeIn 0.25s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
      }
    },
  },

  plugins: [
    // Custom component classes
    function({ addComponents, theme }) {
      addComponents({
        // Button Components
        '.btn': {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.base[0]'),
          fontWeight: theme('fontWeight.medium'),
          borderRadius: theme('borderRadius.md'),
          transition: `all ${theme('transitionDuration.fast')} ease`,
          cursor: 'pointer',
          border: 'none',
          textDecoration: 'none',
          '&:focus': {
            outline: 'none',
            boxShadow: `0 0 0 2px ${theme('colors.primary.500')}40`,
          }
        },

        '.btn-primary': {
          backgroundColor: theme('colors.primary.500'),
          color: theme('colors.white'),
          '&:hover': {
            backgroundColor: theme('colors.primary.600'),
          },
          '&:active': {
            backgroundColor: theme('colors.primary.700'),
          }
        },

        '.btn-secondary': {
          backgroundColor: 'transparent',
          color: theme('colors.primary.500'),
          border: `1px solid ${theme('colors.primary.500')}`,
          '&:hover': {
            backgroundColor: theme('colors.primary.50'),
          }
        },

        '.btn-ghost': {
          backgroundColor: 'transparent',
          color: theme('colors.gray.700'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
          }
        },

        // Card Components
        '.card': {
          backgroundColor: theme('colors.background.primary'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.subtle'),
          padding: theme('spacing.6'),
          border: `1px solid ${theme('colors.border.light')}`,
        },

        '.card-elevated': {
          boxShadow: theme('boxShadow.card'),
        },

        '.stats-card': {
          backgroundColor: theme('colors.background.primary'),
          borderRadius: theme('borderRadius.xl'),
          padding: theme('spacing.8'),
          textAlign: 'center',
          boxShadow: theme('boxShadow.subtle'),
        },

        // Badge Components
        '.badge': {
          display: 'inline-block',
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
          borderRadius: theme('borderRadius.2xl'),
          fontSize: theme('fontSize.sm[0]'),
          fontWeight: theme('fontWeight.medium'),
        },

        '.badge-active': {
          backgroundColor: '#E8F5E8',
          color: theme('colors.status.active'),
        },

        '.badge-inactive': {
          backgroundColor: '#FFEBEE',
          color: theme('colors.status.inactive'),
        },

        '.badge-premium': {
          backgroundColor: theme('colors.primary.50'),
          color: theme('colors.primary.500'),
        },

        '.badge-pending': {
          backgroundColor: '#FFF3E0',
          color: theme('colors.status.pending'),
        },

        // Navigation Components
        '.nav-item': {
          display: 'flex',
          alignItems: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          marginBottom: theme('spacing.2'),
          borderRadius: theme('borderRadius.md'),
          textDecoration: 'none',
          color: theme('colors.gray.700'),
          transition: `all ${theme('transitionDuration.fast')} ease`,
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
          },
          '&.active': {
            backgroundColor: theme('colors.primary.50'),
            color: theme('colors.primary.500'),
          }
        },

        // Form Components
        '.form-input': {
          width: '100%',
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          border: `1px solid ${theme('colors.gray.300')}`,
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.base[0]'),
          direction: 'rtl',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.500'),
            boxShadow: `0 0 0 2px ${theme('colors.primary.500')}20`,
          }
        },

        '.form-select': {
          width: '100%',
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          border: `1px solid ${theme('colors.gray.300')}`,
          borderRadius: theme('borderRadius.md'),
          backgroundColor: theme('colors.background.primary'),
          direction: 'rtl',
        },

        // Avatar Components
        '.avatar': {
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          objectFit: 'cover',
        },

        '.avatar-large': {
          width: '80px',
          height: '80px',
          borderRadius: '50%',
          objectFit: 'cover',
        },

        // Table Components
        '.table': {
          width: '100%',
          borderCollapse: 'collapse',
          backgroundColor: theme('colors.background.primary'),
        },

        '.table th': {
          backgroundColor: theme('colors.gray.50'),
          padding: theme('spacing.4'),
          fontWeight: theme('fontWeight.semibold'),
          textAlign: 'right',
          borderBottom: `2px solid ${theme('colors.gray.200')}`,
        },

        '.table td': {
          padding: theme('spacing.4'),
          borderBottom: `1px solid ${theme('colors.gray.200')}`,
        },
      })
    },

    // RTL Support Plugin
    function({ addUtilities }) {
      addUtilities({
        '.rtl': {
          direction: 'rtl',
          textAlign: 'right',
        },
        '.ltr': {
          direction: 'ltr',
          textAlign: 'left',
        },
        '.text-start': {
          textAlign: 'start',
        },
        '.text-end': {
          textAlign: 'end',
        },
      })
    }
  ],

  // RTL support
  corePlugins: {
    // Enable logical properties
    preflight: true,
  },

  // Safelist important classes that might be dynamically generated
  safelist: [
    'badge-active',
    'badge-inactive',
    'badge-premium',
    'badge-pending',
    'btn-primary',
    'btn-secondary',
    'btn-ghost',
    'nav-item',
    'active',
    'rtl',
    'ltr',
  ]
}