# 🌌 Conduit

- **apps**

  - next
  - expo - if it contains native code you must install it into /expo

- **packages**

  - ui (your reusable components with tamagui)
  - db (db schema & prisma stuff)
  - app
    - features (⭐️ all of your native frontend code will go here ⭐️)
    - navigation (unifying web + mobile navigation)
    - provider (unifying providers)
    - utils (your utils like auth & tRPC)
  - api (all of your tRPC & backend code)

### 1. To Run

- `yarn install`
- Set up your environment variables properly by duplicating the `.env.example` file, removing `.example`, and entering your environment variables.
  - **CLERK_SECRET_KEY** & **NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY**: sign up on [clerk](https://clerk.dev/) to get your API keys
  - **DATABASE_URL** (**optional**): spin up a Postgres instance with Railway or Supabase (we're using SQLlite by default now, so you don't have to do this unless you're ready for production!)
- `yarn db-push` to push our Prisma schema to our DB.

### 2. Start up your project

- `yarn web` to start a web dev server.
- `yarn native` to run on iOS or Android. **PS**: for this to work, you'll need your web app running on localhost:3000, remember that your NextJS app is also your backend!
- `yarn studio` to start up your Prisma Studio. **PS**: the tRPC example query will show an `example_entry` that you can delete along with the connected `example_user`.
- `yarn dev` to start up all packages and applications simultaneously.

### 3. Adding a new screen

- Create new screens in `packages/app/features/`.
- For new routes add a new `routeName.ts` in `packages/api/src/router/` and make sure to merge it in the `index.ts` app router.
- When you add a new page or screen, you'll need to add the page into both Expo and NextJS:
  - **Expo**
    - Go to `apps/expo/app/` and create a new `routeName.tsx` that's importing your element from `/app/features/screenName/`.
  - **Next**
    - Go to `apps/next/pages/`, create a new folder with the name being your route and an `index.tsx` that's importing your element from `/app/features/screenName/`.

## Deploying to Vercel

After you have created a new project on Vercel and linked it with your Github repo you'll have to enter your environment variables:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL`
