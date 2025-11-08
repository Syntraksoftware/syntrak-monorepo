# Syntrak Website

The marketing website for Syntrak - Personalized Ski Coaching via Smart Thermals.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - Latest React features

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
website/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx           # Navigation bar
│   ├── Hero.tsx                 # Hero section
│   ├── ProblemSolution.tsx      # Problem & Solution section
│   ├── ProductOverview.tsx      # Product overview section
│   ├── TechnologyStack.tsx      # Technology stack section
│   ├── CoreFeatures.tsx         # Core features section
│   ├── BusinessModel.tsx        # Business model section
│   ├── ValuePropositions.tsx    # Value propositions section
│   └── Footer.tsx              # Footer component
└── public/                      # Static assets
```

## Features

- Responsive design (mobile-first)
- Dark mode support
- Smooth scrolling navigation
- Modern, clean UI
- SEO optimized
- Fast performance

## Sections

1. **Hero** - Introduction to Syntrak
2. **Problem & Solution** - Market challenges and solutions
3. **Product Overview** - Smart Clothing and Mobile App details
4. **Technology Stack** - Hardware and software technologies
5. **Core Features** - Key features of the platform
6. **Business Model** - Pricing tiers and monetization
7. **Value Propositions** - Benefits and advantages
8. **Footer** - Contact and links

## Customization

All content is based on the business plan in `../business_plan.md`. To update content, edit the respective component files in the `components/` directory.

## Deployment

The website is ready to deploy to Vercel, Netlify, or any other Next.js-compatible hosting platform.
