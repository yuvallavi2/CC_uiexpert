# Stitch Menarva UI Design System

## Overview
Stitch Menarva is a modern Hebrew community management platform with a clean, professional interface. This design system defines the visual language, components, and patterns used throughout the application.

## Design Principles
- **Clean & Modern**: Minimalist design with purposeful whitespace
- **RTL Support**: Hebrew-first interface with proper RTL layout
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Consistency**: Unified component library across all screens

---

## Color Palette

### Primary Colors
```css
--primary-blue: #1976D2;
--primary-blue-hover: #1565C0;
--primary-blue-light: #E3F2FD;
```

### Status Colors
```css
--status-active: #4CAF50;
--status-inactive: #F44336;
--status-pending: #FF9800;
--status-premium: #1976D2;
```

### Neutral Colors
```css
--gray-50: #FAFAFA;
--gray-100: #F5F5F5;
--gray-200: #EEEEEE;
--gray-300: #E0E0E0;
--gray-400: #BDBDBD;
--gray-500: #9E9E9E;
--gray-600: #757575;
--gray-700: #616161;
--gray-800: #424242;
--gray-900: #212121;
```

### Background & Surface
```css
--background-primary: #FFFFFF;
--background-secondary: #F8F9FA;
--surface-elevated: #FFFFFF;
--border-light: #E0E0E0;
--shadow-subtle: 0 2px 8px rgba(0,0,0,0.08);
```

---

## Typography

### Font Family
```css
--font-family: 'Segoe UI', 'Arial Hebrew', Arial, sans-serif;
```

### Font Scales
```css
--text-xs: 12px;
--text-sm: 14px;
--text-base: 16px;
--text-lg: 18px;
--text-xl: 20px;
--text-2xl: 24px;
--text-3xl: 30px;
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

---

## Spacing System

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
```

---

## Component Library

### 1. Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: var(--font-medium);
  font-size: var(--text-base);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: var(--primary-blue);
  border: 1px solid var(--primary-blue);
  border-radius: 6px;
  padding: 12px 24px;
}
```

### 2. Cards

#### Standard Card
```css
.card {
  background: var(--background-primary);
  border-radius: 8px;
  box-shadow: var(--shadow-subtle);
  padding: var(--space-6);
  border: 1px solid var(--border-light);
}
```

#### Dashboard Stats Card
```css
.stats-card {
  background: var(--background-primary);
  border-radius: 12px;
  padding: var(--space-8);
  text-align: center;
  box-shadow: var(--shadow-subtle);
}
```

### 3. Status Badges

```css
.badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: var(--text-sm);
  font-weight: var(--font-medium);
}

.badge-active {
  background: #E8F5E8;
  color: var(--status-active);
}

.badge-inactive {
  background: #FFEBEE;
  color: var(--status-inactive);
}

.badge-premium {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
}
```

### 4. Data Tables

```css
.table {
  width: 100%;
  border-collapse: collapse;
  background: var(--background-primary);
}

.table th {
  background: var(--gray-50);
  padding: var(--space-4);
  font-weight: var(--font-semibold);
  text-align: right;
  border-bottom: 2px solid var(--gray-200);
}

.table td {
  padding: var(--space-4);
  border-bottom: 1px solid var(--gray-200);
}
```

### 5. Navigation

#### Top Navigation
```css
.top-nav {
  background: var(--background-primary);
  padding: var(--space-4) var(--space-6);
  border-bottom: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

#### Sidebar Navigation
```css
.sidebar {
  width: 280px;
  background: var(--background-primary);
  border-left: 1px solid var(--border-light);
  padding: var(--space-6);
}

.nav-item {
  display: flex;
  align-items: center;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-2);
  border-radius: 6px;
  text-decoration: none;
  color: var(--gray-700);
}

.nav-item.active {
  background: var(--primary-blue-light);
  color: var(--primary-blue);
}
```

### 6. Forms

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  font-size: var(--text-base);
  direction: rtl;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-blue);
  box-shadow: 0 0 0 2px rgba(25, 118, 210, 0.1);
}
```

#### Select Dropdowns
```css
.form-select {
  width: 100%;
  padding: var(--space-3) var(--space-4);
  border: 1px solid var(--gray-300);
  border-radius: 6px;
  background: var(--background-primary);
  direction: rtl;
}
```

### 7. Avatar & Profile

```css
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.avatar-large {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}
```

---

## Layout Patterns

### 1. Dashboard Grid
```css
.dashboard-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--space-6);
  margin-bottom: var(--space-8);
}
```

### 2. Two-Column Layout
```css
.two-column {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--space-8);
}
```

### 3. Card Grid
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-6);
}
```

---

## RTL (Right-to-Left) Support

### Essential RTL Styles
```css
[dir="rtl"] {
  text-align: right;
  direction: rtl;
}

[dir="rtl"] .flex-row {
  flex-direction: row-reverse;
}

[dir="rtl"] .ml-auto {
  margin-right: auto;
  margin-left: 0;
}
```

---

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Mobile Adaptations
```css
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    transform: translateX(-100%);
  }

  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}
```

---

## Animation & Transitions

```css
--transition-fast: 0.15s ease;
--transition-normal: 0.25s ease;
--transition-slow: 0.35s ease;

.btn, .nav-item, .form-input {
  transition: all var(--transition-fast);
}
```

---

## Accessibility Guidelines

1. **Color Contrast**: Minimum 4.5:1 ratio for normal text
2. **Focus States**: All interactive elements must have visible focus indicators
3. **Semantic HTML**: Use proper heading hierarchy and semantic elements
4. **RTL Support**: Ensure proper text direction and layout mirroring
5. **Keyboard Navigation**: All functionality accessible via keyboard

---

## Usage Notes

- Always test components with Hebrew text to ensure proper RTL behavior
- Use CSS logical properties (`margin-inline-start` instead of `margin-left`)
- Maintain consistent spacing using the defined spacing scale
- Test color combinations for accessibility compliance
- Consider touch targets of minimum 44px for mobile interfaces