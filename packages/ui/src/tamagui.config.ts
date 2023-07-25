import { createTamagui } from "tamagui";
import { shorthands } from "@tamagui/shorthands";
import { themes, tokens } from "@tamagui/themes";
import { animations } from "./theme/animations";
import fonts from "./theme/fonts";
import { media, mediaQueryDefaultActive } from "./theme/mediaQueries";

export const config = createTamagui({
  animations,
  shouldAddPrefersColorThemes: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts,
  themes,
  tokens,
  media,
});

//@ts-ignore
config.mediaQueryDefaultActive = mediaQueryDefaultActive;
