# Cutwater Landing Page - Developer Files

## Quick Start

1. Open `index.html` in a browser to view the page
2. No build tools required - pure HTML, CSS, and JavaScript
3. Deploy to any static host (Netlify, Vercel, GitHub Pages, etc.)

## File Structure

```
dev-files/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles (edit colors/fonts here)
├── js/
│   └── main.js             # JavaScript (minimal, for future use)
├── BRANDING-GUIDELINES.md  # Design system documentation
└── README.md               # This file
```

## How to Customize

### Change Colors

Open `css/styles.css` and edit the CSS variables at the top:

```css
:root {
    --dark-navy: #0f1a3d;      /* Dark backgrounds */
    --primary-navy: #1a2b5f;   /* Main headings, buttons */
    --secondary-blue: #2c4a8c; /* Secondary elements */
    --highlight-blue: #1e88e5; /* Accent text */
    --success-green: #2d8a5f;  /* APY badges */
    --body-gray: #5a6577;      /* Body text */
    --border-gray: #e8eaed;    /* Borders */
    --light-bg: #f8f9fa;       /* Light backgrounds */
    --white: #ffffff;          /* White */
}
```

### Change Fonts

Edit the font variables in `css/styles.css`:

```css
:root {
    --font-display: 'Playfair Display', Georgia, serif;  /* Headings */
    --font-body: 'Source Serif 4', Georgia, serif;       /* Body text */
    --font-currency: 'Noto Sans', sans-serif;            /* $ symbol */
}
```

If changing fonts, also update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR+FONTS&display=swap" rel="stylesheet">
```

### Change Text Content

All text content is in `index.html`. Search for the section you want to edit:
- Hero section: Search for `class="hero"`
- Why Cutwater: Search for `class="why-section"`
- Performance: Search for `class="performance-section"`
- How It Works: Search for `class="process-section"`
- Risk Management: Search for `class="risk-section"`
- CTA: Search for `class="cta-section"`
- Footer: Search for `class="footer"`

## Responsive Design

The site is responsive out of the box:
- Desktop: Full layout
- Tablet (≤1024px): Single column for most sections
- Mobile (≤768px): Stacked layout, hidden nav links

## Adding Features

### Dark Mode
Uncomment and customize the dark mode styles in `js/main.js` and add dark mode color overrides in `css/styles.css`.

### Mobile Menu
Add hamburger HTML and uncomment the mobile menu JS in `js/main.js`.

## Deployment

### Netlify
1. Drag and drop the `dev-files` folder to Netlify
2. Done!

### Vercel
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy

### GitHub Pages
1. Push to GitHub repo
2. Go to Settings > Pages
3. Select branch and folder
4. Save

## Support

Refer to `BRANDING-GUIDELINES.md` for the complete design system documentation including:
- Typography specifications
- Color palette with hex values
- Component styles
- Spacing guidelines
