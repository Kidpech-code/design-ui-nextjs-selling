# UI Design Blueprint Library — Marketplace Patterns

คลัง UI layout pattern สำหรับ Marketplace — 7 หน้าครอบคลุมทุก pattern หลัก ตั้งแต่ Homepage, Search, Detail ไปจนถึง Service Hero และ News Feed
fully responsive พร้อม Dark Mode support

## Tech Stack

|           |                                      |
| --------- | ------------------------------------ |
| Framework | Next.js 16.2 (App Router, Turbopack) |
| Language  | TypeScript 5                         |
| Styling   | Tailwind CSS v4 (CSS-first config)   |
| Icons     | Lucide React 1.16                    |
| Font      | Sarabun (Google Fonts, Thai + Latin) |
| State     | Zustand 5                            |
| Utilities | clsx · tailwind-merge                |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Pages & Routes

| Route               | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `/`                 | Blueprint Index — รายการ layout pattern ทั้งหมด                                   |
| `/blueprint-grid`   | Marketplace Homepage · Sidebar category icon grid · Accordion filters · Card grid |
| `/blueprint-search` | Search Results · Sidebar accordion filters · Active filter chips · Sort dropdown  |
| `/blueprint-detail` | Item Detail · Image gallery (counter / prev-next) · Info panel · price · CTA      |
| `/blueprint-hero`   | Service Hero · trust badges · Full-width hero image · Lookup form card · Steps    |
| `/blueprint-feed`   | News & Campaigns · Full-width hero banner · Campaign card grid · Guides grid      |
| `/search`           | Search page                                                                       |

## Screenshots

> Desktop 1440px · Full-page · Teal/Ocean theme

| Page             | Screenshot                                                                   |
| ---------------- | ---------------------------------------------------------------------------- |
| Home             | ![Home](screenshots/desktop/localhost_3001.png)                              |
| Blueprint Grid   | ![Blueprint Grid](screenshots/desktop/localhost_3001_blueprint-grid.png)     |
| Blueprint Search | ![Blueprint Search](screenshots/desktop/localhost_3001_blueprint-search.png) |
| Blueprint Detail | ![Blueprint Detail](screenshots/desktop/localhost_3001_blueprint-detail.png) |
| Blueprint Hero   | ![Blueprint Hero](screenshots/desktop/localhost_3001_blueprint-hero.png)     |
| Blueprint Feed   | ![Blueprint Feed](screenshots/desktop/localhost_3001_blueprint-feed.png)     |
| Search           | ![Search](screenshots/desktop/localhost_3001_search.png)                     |

## Project Structure

```
src/
├── app/                        # App Router pages
│   ├── page.tsx                # Blueprint Index
│   ├── blueprint-grid/         # Marketplace Homepage pattern
│   ├── blueprint-search/       # Search Results pattern
│   ├── blueprint-detail/       # Item Detail pattern
│   ├── blueprint-hero/         # Service Hero pattern
│   ├── blueprint-feed/         # News & Feed pattern
│   └── search/                 # Search page
├── components/
│   ├── blueprint-feed/         # FeedCard, CategoryTabs
│   ├── blueprint-grid/         # HeroBanner, FilterTabs, ItemCard, Sidebar
│   ├── blueprint-hero/         # HeroSection, FeatureGrid, StatsBar
│   ├── layout/                 # Navbar, Footer, Sidebar
│   ├── listing/                # ProductCard, DarkProductCard, FilterTabs
│   ├── service/                # ServiceHero, LoanCalculator, FeatureIconGrid
│   └── ui/                     # Button, Badge, Accordion, Breadcrumb, FilterChip
└── lib/
    └── utils.ts                # cn() helper (clsx + tailwind-merge)
```

## Design Tokens

Design tokens อยู่ใน `src/app/globals.css`:

```css
--color-primary-500: #008fa6 /* Teal accent */ --color-primary-600: #007a8f
  --color-navy-800: #0a1820 /* Ocean deep text */ --color-navy-600: #163540
  --color-gray-100: #f5f5f5 /* Page background */ /* Dark Mode */
  --bg-page: #0f1117 --bg-card: #1a1f2e --text-primary: #f0f0f0;
```
