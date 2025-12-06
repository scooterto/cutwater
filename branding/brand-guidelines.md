# Cutwater Partners Brand Guidelines

## Brand Overview

Cutwater Partners is a delta-neutral yield platform offering the USDi token - an interest-bearing synthetic dollar backed by multi-asset funding rate arbitrage.

---

## Logo

### Logo Concept

The Cutwater logo features a filled water droplet with double parallel slashes cutting through it, symbolizing:
- **Water/Liquidity**: The droplet represents fluid movement and liquidity in DeFi
- **Cutwater**: The double diagonal slashes represent "cutting through water" - navigating efficiently through market conditions
- **Dual Strategy**: The two parallel slashes symbolize the delta-neutral approach (long spot + short perps)
- **Precision**: The clean geometric design conveys technical precision and clarity

### Logo Construction

The logo is constructed with:
- Filled water droplet shape using bezier curves for smooth edges
- Two parallel diagonal slashes from upper-left to lower-right
- Slashes fully contained within the droplet boundary
- Both slashes aligned at top (y=40) and bottom (y=90) levels
- 26px horizontal gap between slashes
- Rounded stroke caps (stroke-width: 6) for a modern feel

### Logo Specifications

```svg
<!-- Water Drop Shape -->
<path d="M50 10 C30 35, 15 55, 15 75 C15 95, 30 110, 50 110 C70 110, 85 95, 85 75 C85 55, 70 35, 50 10"/>

<!-- Left Slash: M29 40 → L49 90 -->
<!-- Right Slash: M55 40 → L75 90 -->
<!-- Gap: 26px, Length: ≈53.9 units each -->
```

### Logo Colors

| Mode | Drop Fill | Slash Stroke | Hex Values |
|------|-----------|--------------|------------|
| Light Background | Ocean | Frost | Drop: `#365486`, Slash: `#DCF2F1` |
| Dark Background | Aqua | Deep Navy | Drop: `#7FC7D9`, Slash: `#0F1035` |

### Logo Files

| File | Description |
|------|-------------|
| `cutwater-logo.svg` | Primary logo (Ocean fill, for light backgrounds) |
| `cutwater-logo-dark.svg` | Dark mode logo (Aqua fill, for dark backgrounds) |
| `logo-preview.html` | Logo preview on light/dark backgrounds |
| `logo-c5-spacing.html` | Full logo showcase with lockups and size variations |

### Logo Usage

**Light Mode SVG:**
```html
<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C30 35, 15 55, 15 75 C15 95, 30 110, 50 110 C70 110, 85 95, 85 75 C85 55, 70 35, 50 10" fill="#365486"/>
    <path d="M29 40 L49 90" stroke="#DCF2F1" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M55 40 L75 90" stroke="#DCF2F1" stroke-width="6" stroke-linecap="round" fill="none"/>
</svg>
```

**Dark Mode SVG:**
```html
<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 C30 35, 15 55, 15 75 C15 95, 30 110, 50 110 C70 110, 85 95, 85 75 C85 55, 70 35, 50 10" fill="#7FC7D9"/>
    <path d="M29 40 L49 90" stroke="#0F1035" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M55 40 L75 90" stroke="#0F1035" stroke-width="6" stroke-linecap="round" fill="none"/>
</svg>
```

### Logo Lockup

When pairing with the brand name "Cutwater":
- Use Space Grotesk font, weight 700
- 16px gap between logo and text
- Logo height: 48-64px recommended for lockup
- Text color matches the primary text color for the mode

### Clear Space

Maintain minimum clear space around the logo equal to 25% of the logo height on all sides.

### Minimum Size

- Digital: 24px height minimum
- Print: 0.375 inch height minimum

---

## Color Palette

### Primary Colors

| Color Name | Hex | RGB | Usage |
|------------|-----|-----|-------|
| **Frost** | `#DCF2F1` | rgb(220, 242, 241) | Light backgrounds, highlights |
| **Aqua** | `#7FC7D9` | rgb(127, 199, 217) | Accents, dark mode logo |
| **Ocean** | `#365486` | rgb(54, 84, 134) | Primary buttons, headings |
| **Deep Navy** | `#0F1035` | rgb(15, 16, 53) | Dark backgrounds, text |
| **Blue** | `#1E88E5` | rgb(30, 136, 229) | Accent highlights |

### Light Mode

| Element | Color | Hex |
|---------|-------|-----|
| Background (Primary) | White | `#FFFFFF` |
| Background (Secondary) | Frost | `#DCF2F1` |
| Text (Primary) | Deep Navy | `#0F1035` |
| Text (Secondary) | Ocean | `#365486` |
| Logo Drop | Ocean | `#365486` |
| Logo Slash | Frost | `#DCF2F1` |
| Accent | Aqua | `#7FC7D9` |
| Primary Button BG | Ocean | `#365486` |
| Primary Button Text | Frost | `#DCF2F1` |
| Card Background | White | `#FFFFFF` |
| Card Border | Frost | `#DCF2F1` |

```css
:root {
  --bg-primary: #FFFFFF;
  --bg-secondary: #DCF2F1;
  --text-primary: #0F1035;
  --text-secondary: #365486;
  --logo-drop: #365486;
  --logo-slash: #DCF2F1;
  --accent: #7FC7D9;
  --btn-primary-bg: #365486;
  --btn-primary-text: #DCF2F1;
  --card-bg: #FFFFFF;
  --card-border: #DCF2F1;
}
```

### Dark Mode

| Element | Color | Hex |
|---------|-------|-----|
| Background (Primary) | Deep Navy | `#0F1035` |
| Background (Secondary) | Ocean | `#365486` |
| Text (Primary) | Frost | `#DCF2F1` |
| Text (Secondary) | Aqua | `#7FC7D9` |
| Logo Drop | Aqua | `#7FC7D9` |
| Logo Slash | Deep Navy | `#0F1035` |
| Accent | Aqua | `#7FC7D9` |
| Primary Button BG | Aqua | `#7FC7D9` |
| Primary Button Text | Deep Navy | `#0F1035` |
| Card Background | Dark Card | `#1a1b3d` |
| Card Border | Ocean | `#365486` |

```css
[data-theme="dark"] {
  --bg-primary: #0F1035;
  --bg-secondary: #365486;
  --text-primary: #DCF2F1;
  --text-secondary: #7FC7D9;
  --logo-drop: #7FC7D9;
  --logo-slash: #0F1035;
  --accent: #7FC7D9;
  --btn-primary-bg: #7FC7D9;
  --btn-primary-text: #0F1035;
  --card-bg: #1a1b3d;
  --card-border: #365486;
}
```

---

## Typography

### Font Families

| Usage | Font | Weight |
|-------|------|--------|
| Headings | Space Grotesk | 500-700 |
| Body | Inter | 400-600 |

### Import

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### CSS Variables

```css
:root {
  --font-heading: 'Space Grotesk', sans-serif;
  --font-body: 'Inter', sans-serif;
}
```

### Type Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| H1 | Space Grotesk | 48px / 3rem | 700 | 1.1 |
| H2 | Space Grotesk | 36px / 2.25rem | 700 | 1.2 |
| H3 | Space Grotesk | 24px / 1.5rem | 600 | 1.25 |
| H4 | Space Grotesk | 20px / 1.25rem | 600 | 1.3 |
| Body Large | Inter | 18px / 1.125rem | 400 | 1.6 |
| Body | Inter | 16px / 1rem | 400 | 1.6 |
| Body Small | Inter | 14px / 0.875rem | 400 | 1.5 |
| Caption | Inter | 12px / 0.75rem | 500 | 1.4 |
| Button | Space Grotesk | 16px / 1rem | 600 | 1 |

---

## Assets

| File | Description |
|------|-------------|
| `cutwater-logo.svg` | Primary logo (Ocean fill, for light backgrounds) |
| `cutwater-logo-dark.svg` | Dark mode logo (Aqua fill, for dark backgrounds) |
| `logo-preview.html` | Logo preview on light/dark backgrounds |
| `logo-c5-spacing.html` | Full logo showcase with lockups and sizes |
| `logo-variations.html` | Logo design exploration and iterations |
| `color-palette-preview.html` | Full color palette with both modes |
| `typography-preview.html` | Typography samples |

---

*Last updated: December 2024*
