# ServicePlyus - Multi-Page Website PRD

## Original Problem Statement
Transform ServicePlyus single-page website into a comprehensive multi-page website to compete with local competitors. The goal is to create a market-leading boiler repair service website in Tashkent, Uzbekistan.

## User Personas
1. **Homeowners** - Need reliable boiler repair services in Tashkent
2. **Business owners** - Need urgent 24/7 boiler repair for commercial properties
3. **Uzbek and Russian speaking users** - Full bilingual support required

## Core Requirements - COMPLETED ✅

### Phase 1 - Multi-Page Structure (DONE)
- ✅ Navbar with dropdown menus for Services (8) and Boilers (14)
- ✅ 8 service pages with detailed information
- ✅ 14 boiler brand pages
- ✅ Pricing page with service price table
- ✅ Blog page structure
- ✅ Full bilingual support (Uzbek/Russian)
- ✅ Telegram lead form integration
- ✅ Mobile responsive design

### Phase 2 - SEO & Content (DONE - December 2024)
- ✅ **SEO Meta Tags** - All pages have unique title, description, keywords, OG tags
  - Dynamic meta tags that change with language switch
  - HTML lang attribute updates (uz/ru)
  - Keywords include: remont kotlov, katyol ta'mirlash, gaz kotlov remonti
- ✅ **Blog Full Articles** - 3 complete articles with:
  - Full bilingual content (UZ/RU)
  - SEO-friendly headings (H1, H2)
  - Sections with checklists
  - Warning boxes and conclusions
  - Related articles section
  - URL structure: /blog/:slug
- ✅ **Testimonials Expanded** - 10 reviews with:
  - Name, location, service type
  - Carousel navigation (prev/next)
  - Pagination dots
  - Bilingual content

## What's Been Implemented

### December 2024 - P1/P2 Tasks
- **SEO Component** (`/app/frontend/src/components/SEOHead.jsx`)
  - Uses native document API for meta tag updates
  - Supports all page types: home, about, services, pricing, blog, contact
  - Dynamic service/boiler/blog article SEO based on URL slug
  - Language-reactive (updates on UZ/RU switch)

- **Blog Article Pages** (`/app/frontend/src/pages/BlogArticlePage.jsx`)
  - 3 full articles: katyolni-qanday-saqlash, katyol-tanlash, qish-tayyorgarlik
  - Hero section with image, breadcrumbs, category, date, read time
  - Numbered sections with content and tip lists
  - Warning box with icon
  - Conclusion box with icon
  - Related articles grid
  - Lead form CTA

- **Testimonials Upgrade** (`/app/frontend/src/components/TestimonialsSection.jsx`)
  - 10 testimonials with varied services
  - Carousel with 3 cards per view
  - Navigation buttons and pagination dots
  - Stats display (1000+ customers, 4.9 rating)

### Previous Implementation
- Multi-page structure with React Router
- Navbar dropdowns for Services and Boilers
- 8 service pages, 14 boiler brand pages
- Pricing page, Blog overview page
- Enhanced lead form with Telegram integration
- Full i18n system in translations.js

## Tech Stack
- **Frontend**: React 19, React Router, TailwindCSS, Shadcn/UI
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Integrations**: Telegram Bot API

## File Structure
```
/app
├── backend/
│   ├── server.py          # FastAPI with /api/lead endpoint
│   └── .env               # BOT_TOKEN, CHAT_ID
└── frontend/src/
    ├── components/
    │   ├── SEOHead.jsx        # SEO meta tags component
    │   ├── Navbar.jsx         # Dropdown menus
    │   ├── TestimonialsSection.jsx  # 10 reviews carousel
    │   ├── EnhancedLeadForm.jsx
    │   └── ui/                # Shadcn components
    ├── pages/
    │   ├── Home.jsx
    │   ├── ServicePage.jsx    # Dynamic service pages
    │   ├── BoilerBrandPage.jsx
    │   ├── PricingPage.jsx
    │   ├── BlogPage.jsx
    │   ├── BlogArticlePage.jsx  # Full article pages
    │   └── ...
    ├── data/
    │   ├── translations.js    # All UZ/RU text
    │   └── mock.js           # Services, brands data
    └── contexts/
        └── LanguageContext.jsx
```

## Routes
- `/` - Homepage with SEO
- `/about` - About page with SEO
- `/services` - Services overview with SEO
- `/xizmatlar/:slug` - Individual service pages (8) with dynamic SEO
- `/narxlar` - Pricing page with SEO
- `/blog` - Blog overview with SEO
- `/blog/:slug` - Blog articles (3) with dynamic SEO
- `/katyollar/:slug` - Boiler brand pages (14) with dynamic SEO
- `/contact` - Contact page with SEO

## Test Results
- ✅ SEO Title tags: Working on all pages
- ✅ SEO Meta description: Working, updates with language
- ✅ SEO Keywords: Working
- ✅ SEO OG Tags: Working
- ✅ HTML lang attribute: Updates with language switch
- ✅ Blog articles: Full content rendering
- ✅ Testimonials carousel: 10 reviews with navigation
- ✅ Mobile responsive: All pages

## Prioritized Backlog

### P0 - Critical (NONE)
All critical features completed

### P1 - High Priority (COMPLETED)
- ✅ SEO meta tags for all pages
- ✅ Blog full article pages
- ✅ Expand testimonials to 10

### P2 - Medium Priority
- FAQ section on service pages
- Before/after gallery for repairs
- WhatsApp integration option
- Service area map integration

### P3 - Low Priority
- Online booking calendar (user declined)
- Price calculator tool
- Customer login portal
- Reviews from Google/Yandex integration

## Blog Articles Content
1. **katyolni-qanday-saqlash** - How to maintain your boiler
2. **katyol-tanlash** - How to choose a new boiler
3. **qish-tayyorgarlik** - Winter preparation: boiler check

Each article has 4-6 sections with tips, a warning box, and conclusion.

## SEO Keywords Covered
- UZ: katyol ta'mirlash, gaz kotlov remonti, katyol remont Toshkent, katyol diagnostikasi
- RU: ремонт котлов, ремонт газовых котлов, remont kotlov, диагностика котла

## Credentials
- Telegram Bot Token: 8516683569:AAHsDLmE6P-773nBWqcHf2y8f-DUh93SZIg
- Telegram Chat ID: 8516683569
- Telegram Username: @Umidserviceplyus
