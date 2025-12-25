#!/usr/bin/env python3
"""
Script to create developer packages from V4 HTML files.
Extracts CSS and JS into separate files.
"""

import os
import re
import shutil
from pathlib import Path

# Configuration
BASE_DIR = Path("/Users/chadliu638/Desktop/Claude code project/cutwater")
DEV_DIR = BASE_DIR / "website" / "dev-files"

PAGES = {
    "my-assets": BASE_DIR / "website" / "my-assets-v4.html",
    "transactions": BASE_DIR / "website" / "transactions-v4.html",
    "analytics": BASE_DIR / "website" / "analytics-v4.html",
}

def extract_style_and_script(html_content):
    """Extract CSS from <style> and JS from <script> tags."""
    # Extract CSS
    css_match = re.search(r'<style>(.*?)</style>', html_content, re.DOTALL)
    css_content = css_match.group(1).strip() if css_match else ""

    # Extract JS (inline scripts without src attribute)
    # Match <script> tags that don't have src attribute
    js_matches = re.findall(r'<script>[\s\n]*(.*?)[\s\n]*</script>', html_content, re.DOTALL)
    # Filter out empty matches and join
    js_content = "\n\n".join([m.strip() for m in js_matches if m.strip()]) if js_matches else ""

    return css_content, js_content

def create_index_html(html_content, page_name):
    """Modify HTML to reference external CSS and JS files."""
    # Remove <style>...</style> block
    html = re.sub(r'\s*<style>.*?</style>', '', html_content, flags=re.DOTALL)

    # Remove inline <script>...</script> blocks (not the CDN ones)
    html = re.sub(r'\s*<script>([^<]+)</script>', '', html)

    # Add link to external CSS after Google Fonts
    css_link = '    <link rel="stylesheet" href="css/styles.css">'
    html = re.sub(r'(</head>)', f'{css_link}\n\\1', html)

    # Add script tag before </body>
    js_script = '    <script src="js/main.js"></script>'
    html = re.sub(r'(</body>)', f'{js_script}\n\\1', html)

    return html

def create_readme(page_name, has_chartjs):
    """Generate README.md content."""
    page_title = page_name.replace('-', ' ').title()

    chartjs_section = """
### JavaScript Libraries
- **Chart.js** - `https://cdn.jsdelivr.net/npm/chart.js`
- **Chart.js DataLabels Plugin** - `https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@2`
""" if has_chartjs else ""

    return f"""# Cutwater {page_title} V4

{page_title} page for the Cutwater application.

## File Structure

```
cutwater-{page_name}-v4/
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
{chartjs_section}
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
"""

def process_page(page_name, html_path):
    """Process a single page and create its package."""
    print(f"Processing {page_name}...")

    # Read HTML
    with open(html_path, 'r', encoding='utf-8') as f:
        html_content = f.read()

    # Extract CSS and JS
    css_content, js_content = extract_style_and_script(html_content)

    # Create modified HTML
    index_html = create_index_html(html_content, page_name)

    # Determine if page uses Chart.js
    has_chartjs = 'chart.js' in html_content.lower()

    # Create package directory
    pkg_dir = DEV_DIR / f"cutwater-{page_name}-v4"
    css_dir = pkg_dir / "css"
    js_dir = pkg_dir / "js"

    css_dir.mkdir(parents=True, exist_ok=True)
    js_dir.mkdir(parents=True, exist_ok=True)

    # Write files
    with open(pkg_dir / "index.html", 'w', encoding='utf-8') as f:
        f.write(index_html)

    with open(css_dir / "styles.css", 'w', encoding='utf-8') as f:
        f.write(css_content)

    with open(js_dir / "main.js", 'w', encoding='utf-8') as f:
        f.write(js_content if js_content else "// No JavaScript for this page")

    with open(pkg_dir / "README.md", 'w', encoding='utf-8') as f:
        f.write(create_readme(page_name, has_chartjs))

    print(f"  Created package at {pkg_dir}")
    return pkg_dir

def main():
    print("Creating V4 developer packages...\n")

    for page_name, html_path in PAGES.items():
        if html_path.exists():
            process_page(page_name, html_path)
        else:
            print(f"  Warning: {html_path} not found, skipping")

    print("\nDone!")

if __name__ == "__main__":
    main()
