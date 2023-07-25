# 🌌 Conduit

<https://user-images.githubusercontent.com/36214945/211167187-347b87ce-1c03-4678-9904-542aa78ab131.mp4>

- [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo): expo, next, trpc, prisma, nextauth - no UI code share & no mobile auth.
- [t3-turbo-and-clerk](https://github.com/clerkinc/t3-turbo-and-clerk): t3 turbo with auth for mobile + web - still no UI code share.
- [tamagui + solito starter](https://github.com/tamagui/tamagui/tree/master/starters/next-expo-solito): expo + next code share - no tRPC & no built-in auth.

### Folder Structure

- **apps**
  - next
  - expo
- **packages**
  - ui (your reusable components with tamagui)
  - db (db schema & prisma stuff)
  - app
    - features (⭐️ all of your native frontend code will go here ⭐️)
    - navigation (unifying web + mobile navigation)
    - provider (unifying providers)
    - utils (your utils like auth & tRPC)
  - api (all of your tRPC & backend code)

### 1. Set up project

- `yarn install` to install packages and build the project.
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

To automate the process explained below you can use the VSCode extension [t3-cua-tools](https://github.com/albbus-stack/t3-cua-tools), also available on the [marketplace](https://marketplace.visualstudio.com/items?itemName=albbus-stack.t3-cua-tools). It will create the files and add the necessary imports and navigation code for you.

- Create new screens in `packages/app/features/`.
- For smaller components feel free to put them in `packages/ui/`.
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

<img width="704" alt="Screenshot 2023-01-14 at 12 06 17 AM" src="https://user-images.githubusercontent.com/36214945/212462681-f6cc448b-d24b-4541-a350-290a6985ad85.png">
(ignore the install command one now)

## FAQ

1. **Where should I install the packages?**
   If it contains native code you must install it into the `/expo` folder.

2. **How do I know if it contains native code?**
   In general if it involves some interactions with the phone OS like the APIs to interact with storage, camera, gyro, notification, etc. it involves native code!
