# Cutwater Branding Guidelines

## Typography

### Primary Fonts

| Usage | Font Family | Weight | Size | Notes |
|-------|-------------|--------|------|-------|
| **Main Headings (H1)** | Playfair Display | SemiBold (600) | 56px | Letter-spacing: -0.56px, Line-height: 115% |
| **Subheadings** | Playfair Display | Medium (500) | 21.6px | Line-height: 170% |
| **Large Numbers/Stats** | Playfair Display | SemiBold (600) | 40px | Use OpenType features: LNUM, PNUM |
| **Body Text** | Source Serif 4 | Regular (400) | 17.6px | Line-height: 180% |
| **Small Body/Labels** | Source Serif 4 | Regular (400) | 13.6px | Line-height: 170% |
| **Buttons** | Source Serif 4 | Medium (500) | 15.2px | Line-height: 170% |
| **Accent Text (APY badges)** | Source Serif 4 | SemiBold (600) | 13.6px | Line-height: 170% |
| **Disclaimer/Fine Print** | Source Serif 4 | Regular (400) | 12.8px | 60% opacity, Line-height: 170% |
| **Currency Symbol ($)** | Noto Sans | Medium (500) | 40px | Only for $ symbol next to numbers |

### Font Loading (Google Fonts)
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Noto+Sans:wght@500&display=swap" rel="stylesheet">
```

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Dark Navy** | `#0F1A3D` | rgb(15, 26, 61) | Top banner background, dark sections |
| **Primary Navy** | `#1A2B5F` | rgb(26, 43, 95) | Main headings, buttons, key text |
| **Secondary Blue** | `#2C4A8C` | rgb(44, 74, 140) | Subheadings, secondary elements |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Highlight Blue** | `#1E88E5` | rgb(30, 136, 229) | Accent words ("multi-asset arbitrage"), links |
| **Success Green** | `#2D8A5F` | rgb(45, 138, 95) | APY percentages, positive indicators |

### Neutral Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Body Gray** | `#5A6577` | rgb(90, 101, 119) | Body text, descriptions |
| **Border Gray** | `#E8EAED` | rgb(232, 234, 237) | Borders, dividers, grid lines |
| **Light Text** | `#F8F9FA` | rgb(248, 249, 250) | Text on dark backgrounds (60% opacity for disclaimers) |
| **White** | `#FFFFFF` | rgb(255, 255, 255) | Backgrounds, button text |

### Gradients

| Name | Definition | Usage |
|------|------------|-------|
| **Radial Glow** | `radial-gradient(circle, rgba(44,74,140,0.08) 0%, rgba(44,74,140,0) 70%)` | Subtle background accent |
| **Chart Fade** | `linear-gradient(to bottom, #1A2B5F 0%, transparent 100%)` | Chart area fills (20% opacity) |

---

## CSS Variables

```css
:root {
  /* Primary Colors */
  --color-dark-navy: #0F1A3D;
  --color-primary-navy: #1A2B5F;
  --color-secondary-blue: #2C4A8C;

  /* Accent Colors */
  --color-highlight-blue: #1E88E5;
  --color-success-green: #2D8A5F;

  /* Neutral Colors */
  --color-body-gray: #5A6577;
  --color-border-gray: #E8EAED;
  --color-light-text: #F8F9FA;
  --color-white: #FFFFFF;

  /* Typography */
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Source Serif 4', serif;
  --font-currency: 'Noto Sans', sans-serif;
}
```

---

## Component Styles

### Primary Button
- Background: `#1A2B5F`
- Text: `#FFFFFF`
- Font: Source Serif 4 Medium, 15.2px
- Border-radius: 4px
- Padding: ~20px 36px

### Secondary Button (Outline)
- Background: transparent
- Border: 1px solid `#1A2B5F`
- Text: `#1A2B5F`
- Font: Source Serif 4 Medium, 15.2px
- Border-radius: 4px

### APY Badge
- Background: `rgba(45, 138, 95, 0.1)` (Success Green at 10%)
- Text: `#2D8A5F`
- Font: Source Serif 4 SemiBold, 13.6px
- Border-radius: 4px

### Cards/Panels
- Background: `#FFFFFF`
- Border: 1px solid `#E8EAED`
- Border-radius: 4px
- Box-shadow: subtle shadow for elevation

---

## Number Formatting

- Use **Playfair Display SemiBold** for all numbers in stats/metrics
- Use **Noto Sans Medium** for currency symbols ($)
- Enable OpenType features: `font-feature-settings: 'lnum' 1, 'pnum' 1;` for lining numerals
- Example: `$1.00`, `15-25%`, `1:1`

---

## Visual Examples

### Heading Hierarchy
```
H1: "Higher yields through multi-asset arbitrage" (56px, Playfair SemiBold)
H2: "Delta-Neutral Funding Rate Strategy" (21.6px, Playfair Medium)
Body: "Cutwater expands beyond ETH and BTC..." (17.6px, Source Serif Regular)
Label: "Target APY" (13.6px, Source Serif Regular)
```

### Color Usage on Text
- Main headings: `#1A2B5F`
- Highlighted words: `#1E88E5`
- Body paragraphs: `#5A6577`
- Positive metrics: `#2D8A5F`
- Text on dark bg: `#F8F9FA`
