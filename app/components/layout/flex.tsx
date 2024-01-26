import { ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";

type Direction = "row" | "column";

export type FlexProps = {
  direction?: Direction;
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
  style?: any;
  p?: number;
};

const styles = stylex.create({
  row: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "red",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "blue",
  },
});

export const Flex: React.FC<FlexProps> = ({
  direction = "row",
  justifyContent = "flex-start",
  alignItems = "stretch",
  children,
  style,
  p = 0,
}) => {
  return (
    <div {...stylex.props(styles[direction], style)} style={{ padding: p }}>
      {children}
    </div>
  );
};
