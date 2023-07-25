# 🌌 conduit


- [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo): expo, next, trpc, prisma, nextauth - no UI code share & no mobile auth.
- [t3-turbo-and-clerk](https://github.com/clerkinc/t3-turbo-and-clerk): t3 turbo with auth for mobile + web - still no  UI code share.
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



