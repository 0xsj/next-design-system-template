import "raf/polyfill";
import "@tamagui/core/reset.css";
import "@tamagui/font-silkscreen/css/400.css";
import "@tamagui/font-inter/css/400.css";
import "@tamagui/font-inter/css/700.css";
import "@tamagui/font-inter/css/800.css";
import "@tamagui/font-inter/css/900.css";

import { NextThemeProvider, useRootTheme } from "@tamagui/next-theme";
import { Provider } from "app/provider";
import Head from "next/head";
import React, { useMemo } from "react";
import type { SolitoAppProps } from "solito";
import "raf/polyfill";
import { trpc } from "app/utils/trpc.web";
import { useThemeToggle } from "app/state";

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Universal Example</title>
        <meta name="description" content="Tamagui, Solito, Expo & Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeToggle();
  return (
    <NextThemeProvider onChangeTheme={toggleTheme}>
      <Provider disableRootThemeClass defaultTheme={theme}>
        {children}
      </Provider>
    </NextThemeProvider>
  );
}

export default trpc.withTRPC(MyApp);
