"use client";
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { useIsMounted } from "@/lib/hooks/use-is-mounted";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

interface RootProviderProps {
  children: ReactNode;
}

export function RootProvider({ children }: RootProviderProps) {
  const isMounted = useIsMounted();
  return isMounted ? (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  ) : null;
}
