# Zaheer Seed Corporation

Local setup
1. `npm install`
2. `cp .env.example .env` and fill DATABASE_URL, DIRECT_URL (Neon), AUTH_SECRET.
3. `npx prisma migrate dev --name init`
4. Set ADMIN_EMAIL and ADMIN_PASSWORD (12+ chars) in `.env`, run `npm run db:seed`, then remove ADMIN_PASSWORD.
5. `npm run dev`

Vercel: add the same env vars, set build command `npm run build`, and run `npx prisma migrate deploy` once against Neon.



Images: put `hero.jpg` and `about.jpg` in `public/images/`. Product uploads use Vercel Blob: create a Blob store in the Vercel project and set BLOB_READ_WRITE_TOKEN (also in `.env` locally).
