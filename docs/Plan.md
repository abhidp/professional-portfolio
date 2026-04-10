# Portfolio Project Plan

> Living document — updated as the project progresses.
> Last updated: 2026-04-10

---

## Vision

Build a professional online portfolio for a Software Lead QA Engineer with 18+ years of experience. The portfolio will be linked from resume and LinkedIn to make a strong, lasting impression on recruiters, community engineers, and potential employers.

---

## Key Decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| Tech stack | Next.js + Tailwind CSS + TypeScript | Same stack as reference site (brittanychiang.com), strong ecosystem, easy deployment |
| Design style | Clean & Professional | Strong typography, card-based layouts, subtle animations, professional palette |
| Color scheme | Dark theme — navy (#0f172a) bg, teal (#5eead4) accent | Inspired by brittanychiang.com but distinct |
| Font | Inter (Google Fonts) | Modern, highly readable sans-serif |
| Layout | Split panel — sticky left nav + scrollable right content | Matches reference site pattern, excellent for single-page portfolios |
| Icons | Lucide React + custom SVGs for LinkedIn/GitHub | Lucide dropped brand icons, so social icons are inline SVGs |
| Content approach | Placeholder text first, replace later | Get visual draft up fast, iterate on content separately |
| Contact method | Links only (LinkedIn, GitHub, Email) | No contact form — keep it simple |
| Hosting | TBD | Will decide after visual draft is finalized |

### Reference Portfolios Studied

- **brittanychiang.com** — Primary inspiration. Clean, professional, excellent section structure. (Next.js + Tailwind)
- **brd.mn** (Philip Boardman) — Starting reference point. Too minimal for our needs but good baseline.
- **mattfarley.ca** — Strong card-based layout
- **leerob.io** — Minimalist with strong blog/content integration
- **sarahdrasnerdesign.com** — Leadership + technical depth presentation

---

## Architecture

```
personal-portfolio/
├── app/
│   ├── layout.tsx            # Root layout, Inter font, metadata
│   ├── page.tsx              # Main single-page portfolio
│   └── globals.css           # CSS variables, dark theme, scrollbar
├── components/
│   ├── Header.tsx            # Sticky left panel: name, nav, social links
│   ├── Stats.tsx             # 4 metric cards (2x2 grid)
│   ├── About.tsx             # Professional narrative (3 paragraphs)
│   ├── Skills.tsx            # Skills matrix (6 categories, chip tags)
│   ├── CaseStudies.tsx       # 3 case study cards with impact metrics
│   ├── Experience.tsx        # Career timeline (4 roles)
│   ├── Articles.tsx          # 4 article entries with tags
│   └── Footer.tsx            # Attribution line
├── data/
│   └── portfolio-data.ts     # ALL content in one file (easy to edit)
├── docs/
│   ├── Plan.md               # This file
│   └── resume.txt            # Resume reference
└── public/                   # Static assets
```

**Data flow**: All content lives in `data/portfolio-data.ts`. Components import from this single file. To update any text, edit that one file.

---

## Completed Work

### Phase 1: First Draft (Done)

- [x] Scaffolded Next.js 16 project with TypeScript + Tailwind CSS
- [x] Created placeholder content data file (`data/portfolio-data.ts`)
- [x] Built split-panel layout (sticky left + scrollable right)
- [x] Built Header component with scroll-based active section highlighting (Intersection Observer)
- [x] Built mobile responsive menu (hamburger toggle)
- [x] Built Stats section — 4 metric cards with hover glow
- [x] Built About section — 3 paragraphs placeholder narrative
- [x] Built Skills & Tools Matrix — 6 categories with skill chips
- [x] Built Case Studies section — 3 cards with context/challenge/impact
- [x] Built Experience timeline — 4 career entries with tech tags
- [x] Built Articles section — 4 entries with date, summary, topic tags
- [x] Built Footer with attribution
- [x] Dark theme with navy/teal color scheme
- [x] Smooth scroll navigation
- [x] Hover animations on all interactive elements
- [x] Created this Plan.md document

---

## Roadmap

### Phase 2: Visual Polish & Feedback

- [ ] Review first draft visually at all breakpoints (mobile, tablet, desktop)
- [ ] Refine spacing, typography sizes, and visual hierarchy
- [ ] Add cursor-following gradient spotlight effect (like brittanychiang.com)
- [ ] Add scroll-triggered fade-in animations for sections
- [ ] Improve mobile layout and touch interactions
- [ ] Add dark/light mode toggle
- [ ] Accessibility audit (WCAG AA — important for a QA professional's portfolio)

### Phase 3: Content Replacement

- [ ] Replace placeholder name, title, tagline with real info
- [ ] Replace About section with real professional narrative
- [ ] Update Stats with real metrics
- [ ] Update Skills & Tools to reflect actual expertise
- [ ] Write real Case Studies (challenge/approach/impact format)
- [ ] Update Experience with real career history
- [ ] Add professional headshot/avatar
- [ ] Add real resume PDF for download
- [ ] Update social links (LinkedIn, GitHub, Email)

### Phase 4: Blog System

- [ ] Add MDX support for blog posts
- [ ] Create `app/blog/page.tsx` (listing page)
- [ ] Create `app/blog/[slug]/page.tsx` (individual post page)
- [ ] Create `content/blog/` directory for `.mdx` files
- [ ] Wire Articles section links to actual blog post pages
- [ ] Add blog post metadata (date, tags, read time, description)
- [ ] Add blog listing with filtering/sorting

### Phase 5: Case Study Detail Pages

- [ ] Create `app/case-studies/[slug]/page.tsx`
- [ ] Design full case study layout (hero, challenge, approach, impact, takeaways)
- [ ] Wire case study cards to detail pages
- [ ] Add before/after metrics visualizations

### Phase 6: SEO & Performance

- [ ] Add Open Graph meta tags for social sharing
- [ ] Add structured data (JSON-LD) for search engines
- [ ] Optimize images (next/image, WebP)
- [ ] Add sitemap.xml
- [ ] Add robots.txt
- [ ] Lighthouse audit — target 95+ on all metrics

### Phase 7: Deployment

- [ ] Choose hosting provider (Vercel / Netlify / GitHub Pages)
- [ ] Set up custom domain
- [ ] Configure CI/CD (auto-deploy on push)
- [ ] Set up analytics (privacy-friendly option)
- [ ] Go live

### Phase 8: Ongoing

- [ ] Write and publish blog posts regularly
- [ ] Update experience section as career progresses
- [ ] Add new case studies
- [ ] Keep dependencies updated

---

## Content Replacement Checklist

All placeholder content lives in `data/portfolio-data.ts`. Edit this single file to replace:

| Field | Current Value | Status |
|-------|--------------|--------|
| Name | John Das | Placeholder |
| Title | Software Lead QA Engineer | Review |
| Tagline | "18+ years building quality..." | Placeholder |
| Email | john.doe@example.com | Placeholder |
| LinkedIn URL | linkedin.com/in/johndoe | Placeholder |
| GitHub URL | github.com/johndoe | Placeholder |
| Resume URL | # | Not set |
| Stats (4 metrics) | 18+, 12, 60%, 50M+ | Placeholder |
| About paragraphs | 3 paragraphs | Placeholder |
| Skills (6 categories) | Various tools listed | Review |
| Case Studies (3) | Fictional scenarios | Placeholder |
| Experience (4 roles) | Fictional companies | Placeholder |
| Articles (4) | Fictional articles | Placeholder |
