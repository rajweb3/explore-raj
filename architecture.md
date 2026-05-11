# Prince Raj — Resume Website Architecture Specification
Version: 1.0
Target: Next.js 14+ (App Router)
Deployment Target: Vercel
Styling: TailwindCSS
Rendering Mode: Static Generation (SSG)

============================================================
OVERVIEW
============================================================

This document defines all technical, structural, and design requirements
for building a single-page resume website in Next.js using resume.md
as content input.

Cloud Code must strictly follow this specification.

The final result must be:

- Aesthetic
- Editorial
- Mechanical
- Minimal
- Precise
- Production-ready
- Deployable to Vercel without modifications


============================================================
1. TECH STACK REQUIREMENTS
============================================================

Framework:
- Next.js 14+ (App Router only)

Language:
- TypeScript

Styling:
- TailwindCSS

Fonts:
- next/font/google

Deployment:
- Optimized for Vercel

Build output:
- Static Site (no server runtime required)

No external UI libraries.
No animation libraries.
No component frameworks.


============================================================
2. PROJECT STRUCTURE
============================================================

Create the following structure:

/app
    layout.tsx
    page.tsx
    globals.css

/components
    Hero.tsx
    Comparison.tsx
    Systems.tsx
    Experience.tsx
    Achievements.tsx
    Footer.tsx
    Navbar.tsx

/lib
    parser.ts

/public
    (empty)

/types
    resume.ts


============================================================
3. DESIGN SYSTEM
============================================================

BACKGROUND COLOR:
#F3F3F1

PRIMARY TEXT:
#111111

SECONDARY TEXT:
#6E6E6E

ACCENT:
#4F6F5B

BORDER:
#D8D8D8

NO gradients.
NO shadows.
NO glass.
NO blur.
NO neon.
NO flashy animations.


============================================================
4. TYPOGRAPHY SYSTEM
============================================================

Hero Headline:
- Font: DM Serif Display
- Large
- Calm spacing

Body:
- Inter

Metadata:
- IBM Plex Mono
- Uppercase
- Tracking wide

Use next/font for performance.


============================================================
5. LAYOUT SPECIFICATION
============================================================

Max Width:
1100px centered

Spacing:
Section spacing: 96px
Block spacing: 40px
Text spacing: 16px

Use consistent vertical rhythm.

Desktop:
2-column layouts where required.

Mobile:
Stacked layouts.


============================================================
6. PAGE SECTIONS (ORDER MANDATORY)
============================================================

1. Navbar
2. Hero
3. Philosophy
4. Old vs New Comparison
5. Systems (Skills)
6. Experience Timeline
7. Achievements
8. Footer


============================================================
7. CONTENT SOURCE RULE
============================================================

Content source file:
resume.md

IMPORTANT:

DO NOT render resume.md directly as Markdown.

Instead:
- Parse structured sections
- Map content into components

Cloud Code must create a parser that extracts:

- About
- Skills
- Experience
- Achievements

from resume.md.

Use simple heading-based parsing.


============================================================
8. HERO SECTION DESIGN
============================================================

Centered layout.

Large serif heading.
Muted grey subtext.

Below:
Monospace metadata:

BANGALORE, INDIA  |  EMAIL  |  LINKEDIN

Balanced spacing.
No button spam.


============================================================
9. OLD vs NEW SECTION
============================================================

Two-column layout.

Left Title:
THE OLD WAY

Right Title:
PROTOCOL SYSTEMS

Each column:
Numbered blocks (1,2,3)

Numbers:
Box with thin border.

Left color:
Grey tone.

Right color:
Accent green.


No card UI.
No shadows.


============================================================
10. SYSTEMS SECTION
============================================================

Replace skill list dump with structured categories.

Each category:
Large title
Short explanation

Hover:
Color change to accent only.

Example system categories:
- Distributed Protocol Engineering
- Applied Cryptography
- AI Agent Infrastructure
- Intent-Driven Execution
- Autonomous Wallet Systems


============================================================
11. EXPERIENCE SECTION
============================================================

Vertical timeline style.

Left thin vertical border line.

Entry format:

[2020 — PRESENT]
Lead Blockchain Developer
Nord Finance

Minimal bullet points.
Monospace dates.


============================================================
12. MOTION RULES
============================================================

Allowed:
- Fade-in on scroll
- 200ms transitions

Not allowed:
- Bounce
- Heavy transforms
- Parallax
- Fancy effects


============================================================
13. NAVBAR
============================================================

Left:
PR (logo as initials)

Right:
ABOUT | SYSTEMS | EXPERIENCE | CONTACT

Uppercase.
Monospace.


============================================================
14. FOOTER
============================================================

Centered.
Monospace.
Muted grey.

Text:
Built with precision.


============================================================
15. TAILWIND CONFIG REQUIREMENTS
============================================================

Extend theme with:

- Custom colors
- Custom font families
- Max width container
- Letter spacing utilities

Use container centered.


============================================================
16. TYPES
============================================================

Define TypeScript types for:

- Resume
- ExperienceEntry
- SkillGroup


============================================================
17. PERFORMANCE RULES
============================================================

- Optimize fonts
- Enable image optimization
- No large dependencies
- Lighthouse score target above 90


============================================================
18. SEO REQUIREMENTS
============================================================

Add metadata in layout.tsx:

- Title: Prince Raj | Blockchain & AI Systems Engineer
- Description: Architecting autonomous systems at the intersection of AI and Blockchain
- OpenGraph tags included


============================================================
19. DEPLOYMENT REQUIREMENTS
============================================================

The final code must:

1. Run with:
   npm install
   npm run build

2. Contain no TypeScript errors.

3. Be deployable to Vercel with:

   - Framework preset: Next.js
   - Root directory: /
   - No additional config needed.


============================================================
20. FINAL QUALITY CHECKLIST
============================================================

Before finalizing:

- All sections implemented
- resume.md successfully parsed
- Design matches spec
- No console errors
- Mobile responsive
- Vercel build passes


============================================================
END OF ARCHITECTURE DOCUMENT
============================================================

This file is authoritative.
Cloud Code must comply fully.