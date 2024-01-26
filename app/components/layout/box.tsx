import { ComponentProps, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

type BoxProps = {
  children: ReactNode;
  styles?: stylex.StyleXStyles;
  p: number;
  m?: number;
} & ComponentProps<"button">;

const s = stylex.create({
  padding: (p?: number) => ({ padding: p }),
  margin: (m?: number) => ({ margin: m }),
  color: {
    backgroundColor: "blue",
  },
});

export const Box: React.FC<BoxProps> = ({ children, p = 0, m = 0 }) => {
  return <div {...stylex.props(s.color, s.padding(p), s.margin(m))}>{children}</div>;
};
