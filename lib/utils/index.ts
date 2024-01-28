import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${"https://localhost:3000"}${path}`;
}
// "env.NEXT_PUBLIC_SITE_URL" ||
