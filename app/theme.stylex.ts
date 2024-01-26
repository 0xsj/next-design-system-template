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
