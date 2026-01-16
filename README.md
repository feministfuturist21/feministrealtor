# GTA Women First-Home Clarity (Starter)

A Next.js (App Router) starter that implements the Phase 1.3/1.4 assets:
- Calm, trust-first homepage
- Curated listings lead form
- Concierge viewing request form
- Tools pages
- Legal pages (starter templates)

## Run locally

1) Install dependencies

```bash
npm install
```

2) Start dev server

```bash
npm run dev
```

Open http://localhost:3000

## Google Analytics (GA4)

### Create your GA4 Measurement ID

1) Go to Google Analytics and sign in.
2) Click **Start measuring**.
3) Create an **Account** (name it anything).
4) Create a **Property** (set Time zone: Canada/Toronto, Currency: CAD).
5) Choose **Web** and create a **Web data stream**.
6) Copy your **Measurement ID** (looks like `G-XXXXXXXXXX`).

### Add it to this project

1) Create your local env file:

```bash
cp .env.example .env.local
```

2) Edit `.env.local` and set:

```
NEXT_PUBLIC_GA_ID=G-2682RY52HH
```

3) On Vercel: Project → Settings → Environment Variables

- `NEXT_PUBLIC_GA_ID` = your Measurement ID

Then redeploy.

The GA tag loads automatically in `app/layout.tsx` when the env var exists.

## What’s New carousel (content folder)

The homepage “What’s New” cards are auto-loaded from:

```
content/whats-new/*.md
```

Each file uses frontmatter:

```yaml
id: unique-id
type: property | article | policy | podcast | book | community
title: "..."
subtitle: "..."
date: "YYYY-MM-DD"
href: "/path"
image: "/media/whats-new/your-image.png"
badge: "Optional"
tags: ["Tag1", "Tag2"]
featured: true|false
```

Place images here:

```
public/media/whats-new/
```

## Lead capture behavior

- `/shortlist` posts to `POST /api/lead/shortlist`
- `/viewing` posts to `POST /api/lead/viewing`
- `/pink-score/calculator` posts to `POST /api/lead/pinkscore`

For MVP, leads are appended to a JSON file in `/tmp/gta-women-homebuyer-leads.json`.
On Vercel, `/tmp` is ephemeral — replace this with your CRM integration.

## Add the Decision Scorecard PDF

Place a file here:

```
public/decision-scorecard.pdf
```

Then the tool page will serve it at `/decision-scorecard.pdf`.

## Customize

Search and replace these placeholders:
- `[Your Name]`
- `[Brokerage Name]`
- `[RECO #]`
- `[Brokerage Address]`
- `[Email]`
- `[Phone]`

## Next steps (recommended)

- Add structured SEO (JSON-LD)
- Replace lead store with ConvertKit/Mailchimp/HubSpot
- Build an “Insights” CMS (MDX or headless CMS)
