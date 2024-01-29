import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
};

export const Box: React.FC<BoxProps> = ({ children }) => {
  return <div>{children}</div>;
};
