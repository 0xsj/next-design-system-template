import { CSSProperties, ReactNode } from "react";

export type MP = {
  mt?: number;
  mb?: number;
  my?: number;
  mr?: number;
  ml?: number;
  mx?: number;
  m?: number;
  pt?: number;
  pb?: number;
  py?: number;
  pr?: number;
  pl?: number;
  px?: number;
  p?: number;
};

export const generateMarginPaddingStyles = ({
  mt,
  mb,
  my,
  mr,
  ml,
  mx,
  m,
  pt,
  pb,
  py,
  pr,
  pl,
  px,
  p,
}: MP): CSSProperties => {
  return {
    marginTop: mt || my || m,
    marginBottom: mb || my || m,
    marginRight: mr || mx || m,
    marginLeft: ml || mx || m,
    paddingTop: pt || py || p,
    paddingBottom: pb || py || p,
    paddingRight: pr || px || p,
    paddingLeft: pl || px || p,
  };
};
