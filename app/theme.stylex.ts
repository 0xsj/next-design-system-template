import stylex from "@stylexjs/stylex";

const MIN_WIDTH = 320;
const MAX_WIDTH = 1240;

const DARK = "@media (prefers-color-scheme: dark)";

export const text = stylex.defineVars({});

export const p = stylex.defineVars({});

export const tokens = stylex.defineVars({
  $foreground: { default: "black", [DARK]: "white" },
  primaryText: { default: "black", [DARK]: "white" },
  $background: { default: "blue", [DARK]: "green" },
});

const spacingTokens = {
  none: "0px",
  xs: "4px",
  sm: "8px",
  md: "12px",
  lg: "20px",
  xl: "32px",
  xxl: "48px",
  "3xl": "96px",
};

export const spacing = stylex.defineVars(spacingTokens);

const colorTokens = {
  black: "#2E343E",
  white: "#FFFFFF",
  primary: "#1886FE",
  indigo: "#5856D6",
  purple: "#AF52DE",
  cyan: "#32ADE6",
  blue: "#1886FE",
  green: "#34C759",
  mint: "#00C7BE",
  yellow: "#FFCC00",
  orange: "#FF9500",
  red: "#FF3B30",
};

export const colors = stylex.defineVars(colorTokens);
