# Cutwater My Assets V4

My Assets page for the Cutwater application.

## File Structure

```
cutwater-my-assets-v4/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # JavaScript functionality
└── README.md           # This file
```

## External Dependencies (CDN)

### Fonts (Google Fonts)
- **Playfair Display** - Headings and display text
- **Source Serif 4** - Body text
- **Noto Sans** - Currency symbols ($)

### JavaScript Libraries
- **Chart.js** - `https://cdn.jsdelivr.net/npm/chart.js`
- **Chart.js DataLabels Plugin** - `https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2`

## How to Run Locally

1. Simply open `index.html` in a web browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (npx)
   npx serve .
   ```
3. Navigate to `http://localhost:8000`

## Navigation Links to Update

The following navigation links are currently placeholder (`#`):

### Sidebar Navigation
- Dashboard → Update href
- My Assets → Update href
- Transactions → Update href
- Analytics → Update href
- Docs → Update href

### Social Links
- Twitter
- Discord

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Navy | `#0f1a3d` | Darkest elements |
| Primary Navy | `#1a2b5f` | Primary brand color |
| Secondary Blue | `#2c4a8c` | Secondary elements |
| Accent Blue | `#5BA4E6` | Highlights, charts |
| Success Green | `#2d8a5f` | Positive values |
| Danger Red | `#E53935` | Negative values |
| Body Gray | `#5a6577` | Body text |
| Border Gray | `#e8eaed` | Borders |

## Typography

- **Headings**: Playfair Display (400-700)
- **Body**: Source Serif 4 (400-600)
- **Currency ($)**: Noto Sans (500)
