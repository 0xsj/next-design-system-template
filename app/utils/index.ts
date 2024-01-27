import * as stylex from "@stylexjs/stylex";

export const createStylex = () => {
  const base = {
    padding: (p: number) => ({ padding: p }),
    margin: (m?: number) => ({ margin: m }),
  };

  return stylex.create({
    ...(base as Record<string, (...args: any[]) => any>),
  });
};

export const s = createStylex();
