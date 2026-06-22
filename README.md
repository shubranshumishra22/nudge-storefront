# Nudge Storefront

Customer-facing e-commerce storefront. Renders live stores created by the Nudge Builder.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Supabase
- **Payments:** Razorpay
- **Cart:** Zustand (localStorage)

## Setup

```bash
npm install
cp .env.example .env.local
# Fill in environment variables
npm run dev
```

## Environment Variables

See `.env.example` for all required vars:
- `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` — Supabase project
- `SUPABASE_SERVICE_ROLE_KEY` — Admin access (for order verification)
- `RAZORPAY_KEY_ID` / `RAZORPAY_KEY_SECRET` — Payments
- `WATI_API_KEY` / `WATI_ENDPOINT` — WhatsApp notifications (optional)

## Deploy on Vercel

1. Connect repo
2. Framework preset: Next.js
3. Add all environment variables from `.env.example`
4. Deploy

## How it works

- Each store has a unique slug (e.g. `my-store`)
- The storefront renders at `/{slug}`
- Stores are fetched from Supabase at request time
- Theme, products, and sections are all database-driven
