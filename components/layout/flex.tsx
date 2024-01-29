import { generateMarginPaddingStyles } from "@/lib/utils/genMarginPadding";
import { CSSProperties, ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type FlexProps = {
  row?: boolean;
  shrink?: boolean;
  grow?: boolean;
  fill?: boolean;
  centered?: boolean;
  children: ReactNode;
  style?: CSSProperties;
};

export const Flex: React.FC<FlexProps> = ({ children }) => {
  return <div className="">{children}</div>;
};
