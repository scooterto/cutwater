---
description: Generate a landing page by extracting branding from a website and using project documentation
---

# Create Landing Page Workflow

This is an agentic workflow that creates professional landing pages by:
1. Extracting branding from a reference website
2. Analyzing project documentation
3. Generating a polished landing page

## Phase 1: Gather Inputs

First, use the AskUserQuestion tool to collect:

1. **Reference Website URL** - The website to extract branding/design elements from
2. **Project Documentation** - One of:
   - URL to documentation page
   - Path to local PDF file
   - Path to local document file (md, txt, doc)

Example question structure:
```
Question 1: "What is the reference website URL to extract branding from?"
Question 2: "Where is the project documentation? (provide URL or file path)"
```

After getting the inputs, read and parse the project documentation using the Read tool (for local files) or WebFetch tool (for URLs).

## Phase 2: Extract Branding

Invoke the brand-extraction skill to extract design elements from the reference website:

```
Use the Skill tool with skill: "brand-extraction"
```

Follow the brand-extraction skill workflow to:
1. Fetch and analyze the reference website CSS/HTML
2. Extract design tokens:
   - Colors (primary, secondary, accent, neutrals, semantic)
   - Typography (font families, sizes, weights, line heights)
   - Spacing scale
   - Border radius values
   - Shadow definitions
   - Component patterns (buttons, cards, etc.)
3. Optimize colors using ColorHunt palettes
4. Optimize typography using Typewolf recommendations
5. Generate brand guidelines document to `branding/` directory

**Important:** Keep track of all CSS custom properties extracted - you'll need them for Phase 4.

## Phase 3: Analyze Project Documentation

Parse the project documentation to extract content for the landing page:

### Core Information
- Project/Company name
- Tagline or mission statement
- Industry/vertical
- Logo path (if available)

### Value Proposition
- Main headline (big promise)
- Subheadline (how it's delivered)
- 3-5 key benefits/features
- Unique differentiators
- Problem being solved

### Features Section
- Feature list with titles and descriptions
- Icons or images for each feature (suggest appropriate ones)
- How it works (process steps)

### Social Proof
- Statistics and metrics (users, revenue, uptime, etc.)
- Client/partner company names for logo bar
- Testimonials or quotes
- Awards or certifications

### Conversion Elements
- Primary CTA text and action (e.g., "Get Started", "Request Demo")
- Secondary CTA if applicable
- Contact information
- FAQ questions and answers (at least 4-5)

### Compliance/Legal (if applicable)
- Disclaimers
- Regulatory notices
- Privacy policy link

Create a structured summary of all extracted content before proceeding to Phase 4.

## Phase 4: Generate Landing Page

Create an HTML landing page combining the brand guidelines (Phase 2) with the content (Phase 3).

### File Location
Save to: `website/[project-name]-landing.html`

### Required Sections

1. **Navigation**
   - Logo (left)
   - Nav links (Features, How It Works, FAQ)
   - CTA button (right)
   - Sticky on scroll with backdrop blur

2. **Hero Section**
   - Main headline
   - Subheadline
   - Primary CTA button
   - Secondary CTA or link
   - Stats bar or trust indicators

3. **Features Section**
   - Section label and headline
   - 3-6 feature cards with icons
   - Grid layout (responsive)

4. **How It Works Section**
   - Numbered steps (3-4)
   - Icons for each step
   - Brief descriptions

5. **Social Proof Section**
   - Logo bar of clients/partners OR
   - Testimonial cards OR
   - Stats bar

6. **FAQ Section**
   - Accordion-style Q&A
   - At least 4-5 questions
   - Handle common objections

7. **Final CTA Section**
   - Contrasting background
   - Compelling headline
   - Primary CTA button

8. **Footer**
   - Logo and tagline
   - Navigation links
   - Legal links
   - Copyright notice

### Styling Requirements

Apply the CSS custom properties from Phase 2:

```css
:root {
    /* Colors from brand extraction */
    --primary: [extracted];
    --primary-hover: [extracted];
    --secondary: [extracted];
    --background: [extracted];
    --surface: [extracted];
    --text-primary: [extracted];
    --text-secondary: [extracted];
    --border: [extracted];

    /* Typography from brand extraction */
    --font-heading: [extracted];
    --font-body: [extracted];

    /* Spacing scale */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-4: 1rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-24: 6rem;
}
```

### Interactive Elements

Include these JavaScript features:

1. **Scroll animations** - Fade in elements as they enter viewport
2. **Navigation scroll effect** - Add shadow/background on scroll
3. **Smooth scrolling** - For anchor links
4. **Number counters** - Animate statistics on scroll
5. **FAQ accordion** - Expand/collapse functionality
6. **Mobile menu** - Hamburger menu for mobile

### Responsive Breakpoints

```css
/* Mobile first, then: */
@media (min-width: 640px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
@media (min-width: 1280px) { /* Large desktop */ }
```

## Phase 5: Output Summary

After generating the landing page, provide:

1. **File paths created:**
   - Landing page HTML path
   - Brand guidelines path (from Phase 2)

2. **Brand summary:**
   - Primary color
   - Font families
   - Key design tokens

3. **Content summary:**
   - Number of sections created
   - Features included
   - FAQs included

4. **Next steps:**
   - How to preview the page
   - Suggested customizations
   - How to deploy

## Quick Reference

### Tools to Use
- `AskUserQuestion` - Gather inputs
- `Skill` with "brand-extraction" - Extract branding
- `WebFetch` - Fetch URL documentation
- `Read` - Read local files
- `Write` - Create landing page HTML

### Output Locations
- Landing page: `website/[project-name]-landing.html`
- Brand guidelines: `branding/[project-name]-brand-guidelines.html`
