import { ComponentProps, ReactNode } from "react";
import * as stylex from "@stylexjs/stylex";
import { s as stest } from "../../utils";

type BoxProps = {
  children: ReactNode;
  styles?: stylex.StyleXStyles;
  p?: number;
  m?: number;
  px?: number;
  py?: number;
  mx?: number;
  my?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
} & ComponentProps<"div">;

const s = stylex.create({
  padding: (p?: number) => ({ padding: p }),
  margin: (m?: number) => ({ margin: m }),
  px: (p?: number) => ({ paddingHorizontal: p }),
  py: (p?: number) => ({ paddingVertical: p }),
  mx: (m?: number) => ({ marginHoriztonal: m }),
  my: (m?: number) => ({ marginVertical: m }),
  pl: (p?: number) => ({ paddingLeft: p }),
  pr: (p?: number) => ({ paddingRight: p }),
  pt: (p?: number) => ({ paddingTop: p }),
  pb: (p?: number) => ({ paddingBottom: p }),
  ml: (m?: number) => ({ marginLeft: m }),
  mr: (m?: number) => ({ marginRight: m }),
  mt: (m?: number) => ({ marginTop: m }),
  mb: (m?: number) => ({ marginBottom: m }),
});

export const Box: React.FC<BoxProps> = ({
  children,
  p = 0,
  m = 0,
  mx = 0,
  my = 0,
  px = 0,
  py = 0,
  ml = 0,
  mr = 0,
  mb = 0,
  mt = 0,
  pr = 0,
  pl = 0,
  pb = 0,
  pt = 0,
}) => {
  return (
    <div
      {...stylex.props(
        s.padding(p),
        s.margin(m),
        s.px(px),
        s.mx(mx),
        s.py(py),
        s.my(my),
        s.ml(ml),
        s.mr(mr),
        s.mb(mb),
        s.mt(mt),
        s.pr(pr),
        s.pl(pl),
        s.pb(pb),
        s.pt(pt)
      )}
    >
      {children}
    </div>
  );
};
