import * as stylex from "@stylexjs/stylex";
import React, { ReactNode } from "react";
import { colors, spacing } from "../../theme.stylex";

type VariantProps = "primary" | "secondary" | "outlined" | "default";
type SizeProps = "sm" | "md" | "lg" | "xl" | "xxl";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children: ReactNode;
  variant?: VariantProps;
  size?: SizeProps;
}

const s = stylex.create({
  base: {},
  primary: {
    background: colors.blue,
  },
  secondary: {},
  outlined: {},
  size: (s: string) => ({ size: s }),
});

export const AppButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size = "md", children }, ref) => {
    return <button {...stylex.props(s.size(size))}>{children}</button>;
  }
);
