# Cutwater My Assets V5

My Assets page for the Cutwater application with tables-based layout.

## What's New in V5

- **Removed** growth chart
- **Added** Current APY card (30-Day Average)
- **Added** Deposit/Withdraw History table
- **Added** Interest Earned table
- **Kept** Balance stats (NAV, Cumulative Interest, Accrued Interest)
- **Kept** Mint/Redeem widget

## File Structure

```
cutwater-my-assets-v5/
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

## Key Components

### Balance Card
- Token balance display (USDi)
- USD equivalent value
- Stats: NAV per USDi, Cumulative Interest, Accrued Interest
- Current APY card with 30-Day Average badge

### Deposit/Withdraw History Table
| Column | Description |
|--------|-------------|
| Type | Deposit (green) or Withdraw (red) |
| Amount | Transaction amount with +/- indicator |
| Date | Transaction date |
| Tx | Shortened transaction hash with link |

### Interest Earned Table
| Column | Description |
|--------|-------------|
| Period | Month/Year |
| Interest | Interest earned (green) |
| APY | APY rate for that period |
| Balance After | Balance after interest accrued |

### Mint/Redeem Widget
- Tab toggle between Mint and Redeem
- Amount input with Max button
- Pay with section (USDC wallet)
- Action button

## Navigation Links to Update

### Sidebar Navigation
- Dashboard → Update href
- My Assets → Update href (current page)
- Transactions → Update href
- Analytics → Update href
- Docs → Update href

### Social Links
- Twitter → Update href
- Discord → Update href

### Table Links
- "View All" links → Update href for full transaction history

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Dark Navy | `#0f1a3d` | Darkest elements |
| Primary Navy | `#1a2b5f` | Primary brand color |
| Secondary Blue | `#2c4a8c` | Secondary elements |
| Accent Blue | `#5BA4E6` | Highlights, links |
| Success Green | `#2d8a5f` | Positive values, deposits |
| Danger Red | `#E53935` | Negative values, withdrawals |
| Body Gray | `#5a6577` | Body text |
| Border Gray | `#e8eaed` | Borders |

## Typography

- **Headings**: Playfair Display (400-700)
- **Body**: Source Serif 4 (400-600)
- **Currency ($)**: Noto Sans (500)

## Responsive Breakpoints

- **Desktop**: Full two-column layout
- **Tablet (≤1200px)**: Single column, stacked layout
- **Mobile (≤768px)**: Hidden sidebar, mobile header
